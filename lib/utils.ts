import { DbService } from 'm3o/db'

interface Query<T> {
  where?: {
    [K in keyof T]+?: T[K]
  }
  select?: Array<keyof T>
  data?: T
}

function returnQueryString<T>(query: Query<T>) {
  return Object.keys(query.where || {}).reduce((str, key, i) => {
    const value = query.where[key]
    const formatted = typeof value === 'string' ? `"${value}"` : value
    const item = `${key} == ${formatted}`

    return str + item
  }, '')
}

export class DbClient<T> {
  tableName = ''

  db = new DbService(process.env.M3O_KEY)

  constructor({ tableName }) {
    if (!tableName) {
      throw new Error('Please provide the name of the table')
    }

    this.tableName = tableName
  }

  create(query: Query<Omit<T, 'id'>>) {
    if (!query.data) {
      throw new Error('Please provide data when creating')
    }

    return this.db.create({
      table: this.tableName,
      record: query.data,
    })
  }

  async list(query: Query<T> = { where: {} }) {
    const queryString = returnQueryString<T>(query)

    const response = await this.db.read({
      table: this.tableName,
      query: queryString,
    })

    let results = (response.records || []) as T[]

    if (query.select) {
      results = results.map((item) => {
        const items = query.select.map((key) => ({ [key]: item[key] }))
        return Object.assign({}, ...items)
      })
    }

    return results
  }

  async findUnique(query: Query<T>) {
    const results = await this.list(query)
    return results[0]
  }

  async count() {
    return this.db.count({
      table: this.tableName,
    })
  }

  async update(query: Query<T>) {
    if (!query.where) {
      throw new Error('Please provide a query with update')
    }

    console.log(query.data)

    if (!query.data) {
      throw new Error('Please provide data with your update query')
    }

    return this.db.update({
      table: this.tableName,
      // TODO: Solve this
      id: (query.where as any).id,
      record: query.data as T,
    })
  }
}
