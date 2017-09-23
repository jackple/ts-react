import http from './http'

export function getUserInfo(data): Promise<any> {
  return http.get('user#!method=get', data || {})
}

export function getError(data): Promise<any> {
  return http.get('error#!method=get', data || {})
}
