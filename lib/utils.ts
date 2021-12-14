import { DbService, ReadRequest } from 'm3o/db'

interface QueryOperators {
  gt?: number
  gte?: number
  lt?: number
  lte?: number
  not?: string | number
}

interface Query<T> {
  where?: {
    [K in keyof T]+?: T[K] | QueryOperators
  }
  select?: Array<keyof T>
}

interface ListQuery<T> extends Query<T> {
  limit?: number
  offset?: number
  order?: 'asc' | 'desc'
  orderBy?: keyof T
}

interface RecordQuery<T> extends Query<T> {
  data: T
}

function detectTypeAndReturnFormatted(value: string | number) {
  return typeof value === 'string' ? `"${value}"` : value
}

function returnQueryString<T>(query: Query<T>) {
  return Object.keys(query.where || {}).reduce((str, key) => {
    const value = query.where[key]
    let item = ''

    switch (typeof value) {
      case 'object':
        const casted = value as QueryOperators

        if (casted.not) {
          item = `${key} != ${detectTypeAndReturnFormatted(casted.not)}`
        }

        break
      case 'string':
        item = `${key} == "${value}"`
        break
      default:
        item = value
        break
    }

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

  create(query: RecordQuery<Omit<T, 'id'>>) {
    if (!query.data) {
      throw new Error('Please provide data when creating')
    }

    return this.db.create({
      table: this.tableName,
      record: query.data,
    })
  }

  async list(query: ListQuery<T> = { where: {} }) {
    const queryString = returnQueryString<T>(query)

    console.log({ queryString })

    const response = await this.db.read({
      table: this.tableName,
      query: queryString,
      order: query.order,
      orderBy: query.orderBy as string,
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

  async update(query: RecordQuery<T>) {
    if (!query.where) {
      throw new Error('Please provide a query with update')
    }

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
