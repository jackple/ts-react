import http from './http'

export function getUserInfo(data): Promise<any> {
  return http.get('user#!method=get', data || {})
}
