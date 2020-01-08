import Mock from 'mockjs'

const import_ = {
  'id|+1': 1,
  'class': 'app\\blockchain\\admin\\ContentImport',
  'class_name': '内容导入',
  'model_name': '内容导入',
  'create_time': '2019-11-21 22:43:42',
  'update_time': '2019-11-21 22:43:42',
  'status': 0,
  'statusstr': '空闲',
  'path': '/data/video/',
  'total_count': 2,
  'completed': 0
}
const parse = {
  'id|+1': 1,
  'class': 'app\\blockchain\\admin\\ContentParse',
  'class_name': '内容解析',
  'model_name': '内容解析',
  'create_time': '2019-11-22 21:44:00',
  'update_time': '2019-11-22 21:44:12',
  'status': 3,
  'statusstr': '已失败',
  'path': '/api/admin/blockchain/v1/contentparses/29',
  'name': 'c003',
  'content': null,
  'owner': import_,
  'pid': 0,
  'filename': 'c003.json',
  'filepath': '/data/video/',
  'log': '视频文件test-4k.ts不存在',
  'logfile': null
}
const content = {
  'id|+1': 1,
  'class': 'app\\blockchain\\admin\\Content',
  'class_name': '内容',
  'model_name': '内容',
  'create_time': '2019-11-22 21:55:23',
  'update_time': '2019-11-22 21:55:23',
  'status': 0,
  'statusstr': '初始的',
  'path': '/api/admin/blockchain/v1/contents/6',
  'gcid': 'C002',
  'guid': 'bbbc788736c8e424f1a3cc72b86d19a9069ecf6f5dcdf57cbc9d2b91d77c8b78012b7a485bd19b9df7f120839103a46ff75868e43b28c9e378332c6a9e5edf56fc',
  'content_id': '2b7a485bd19b9df7f120839103a46ff75868e43b28c9e378332c6a9e5edf56fc',
  'inherit_id': '',
  'inherit_method': '',
  'inherit_platform': '',
  'action': '',
  'platform_id': '01',
  'title': '潜水-4k',
  'type': 0,
  'director': '',
  'actors': '明星',
  'keywords': '潜水-4k',
  'license_no': '',
  'genre': 0,
  'area': '',
  'duration': 0,
  'year': 0,
  'definition': '/data/video//潜水-4k.ts',
  'program_file': '',
  'post_file': '/data/video//潜水-4k.jpg',
  'post_url': '/data/video/潜水-4k.jpg',
  'log': '',
  'logfile': null
}
const proof = {
  'id|+1': 1,
  'class': 'app\\blockchain\\admin\\ContentProof',
  'class_name': '内容凭证',
  'model_name': '内容区块链',
  'create_time': '2019-11-23 22:28:05',
  'update_time': '2019-11-23 22:28:06',
  'status': 1,
  'statusstr': '成功',
  'path': '/api/admin/blockchain/v1/proofs/1',
  'content': content,
  'main_data': 'c99550832444100fb50838d8cd4447540eae8f90aa3122f10c6d219ad8b0e502',
  'extra_data': 'c99550832444100fb50838d8cd4447540eae8f90aa3122f10c6d219ad8b0e502|Original|||01|DOXTV宣传片|0|王一|明星|DOXTV, 宣传片||0|',
  'reference': 'bbbc788736c8e424f1a3cc72b86d19a9069ecf6f5dcdf57cbc9d2b91d77c8b7801c99550832444100fb50838d8cd4447540eae8f90aa3122f10c6d219ad8b0e502',
  'sendtime': '2019-11-23 22:28:06',
  'tx_id': '0xfb890bc96fa640cf72dc5d35d8cf2f2f12aa8d49479eccd6c080ffa3b024dec7',
  'log': ''
}
const imports = Mock.mock({
  'items|30': [import_]
})
const parses = Mock.mock({
  'items|30': [parse]
})
const contents = Mock.mock({
  'items|30': [content]
})
const proofs = Mock.mock({
  'items|30': [proof]
})

export default [
  {
    url: '/contentimports',
    type: 'post',
    response: config => {
      return import_
    }
  },
  {
    url: '/contentimports',
    type: 'get',
    response: config => {
      const { page = 0, per_page = 20 } = config.query
      const items = imports.items

      var mockList = items
      const pageList = mockList.filter((item, index) => index < per_page * (page + 1) && index >= per_page * page)

      return {
        'total': mockList.length,
        'page': page,
        'per_page': per_page,
        'count': pageList.length,
        'where': {
        },
        'path': '/api/admin/ffmpeg/v1/inputs',
        'items': pageList
      }
    }
  },
  {
    url: '/contentparses',
    type: 'get',
    response: config => {
      const { page = 0, per_page = 20 } = config.query
      const items = parses.items

      var mockList = items
      const pageList = mockList.filter((item, index) => index < per_page * (page + 1) && index >= per_page * page)

      return {
        'total': mockList.length,
        'page': page,
        'per_page': per_page,
        'count': pageList.length,
        'where': {
        },
        'path': '/api/admin/ffmpeg/v1/inputs',
        'items': pageList
      }
    }
  },
  {
    url: '/contents',
    type: 'get',
    response: config => {
      const { page = 0, per_page = 20 } = config.query
      const items = contents.items

      var mockList = items
      const pageList = mockList.filter((item, index) => index < per_page * (page + 1) && index >= per_page * page)

      return {
        'total': mockList.length,
        'page': page,
        'per_page': per_page,
        'count': pageList.length,
        'where': {
        },
        'path': '/api/admin/ffmpeg/v1/inputs',
        'items': pageList
      }
    }
  },
  {
    url: '/contents/[0-9]/export',
    type: 'get',
    response: config => {
      const item = content
      return item
    }
  },
  {
    url: '/proofs',
    type: 'get',
    response: config => {
      const { page = 0, per_page = 20 } = config.query
      const items = proofs.items

      var mockList = items
      const pageList = mockList.filter((item, index) => index < per_page * (page + 1) && index >= per_page * page)

      return {
        'total': mockList.length,
        'page': page,
        'per_page': per_page,
        'count': pageList.length,
        'where': {
        },
        'path': '/api/admin/ffmpeg/v1/inputs',
        'items': pageList
      }
    }
  }
]
