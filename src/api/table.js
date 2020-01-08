import request from '@/utils/request'
export function addImportList(params) {
  return request({
    url: '/contentimports',
    method: 'post',
    data: params
  })
}
export function getImportList(params) {
  return request({
    url: '/contentimports',
    method: 'get',
    params
  })
}
export function getContentparseList(params) {
  return request({
    url: '/contentparses',
    method: 'get',
    params
  })
}
export function getContentList(params) {
  return request({
    url: '/contents',
    method: 'get',
    params
  })
}
export function contentExport(params) {
  return request({
    url: '/contents/' + params.id + '/export',
    method: 'get'
  })
}
export function getProofList(params) {
  return request({
    url: '/proofs',
    method: 'get',
    params
  })
}
