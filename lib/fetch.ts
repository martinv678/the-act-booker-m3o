type RequestMethods = 'GET' | 'PUT' | 'POST' | 'DELETE'

async function request<D extends Record<string, any>, R>(
  method: RequestMethods,
  url: string,
  data?: D,
): Promise<R> {
  const requestInit: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (method === 'POST' || method === 'PUT') {
    requestInit.body = JSON.stringify(data)
  }

  const response = await fetch(url, requestInit)
  const json = await response.json()

  if (response.ok) {
    return json as R
  }

  return Promise.reject(json)
}

export async function put<D, R>(url: string, data: D) {
  return request<D, R>('PUT', url, data)
}

export async function post<D, R>(url: string, data: D) {
  return request<D, R>('POST', url, data)
}

export async function get<D, R>(url: string) {
  return request<D, R>('GET', url)
}
