import Mock from 'mockjs'
import { resultSuccess } from '../../util'

const Random = Mock.Random

const token = Random.string('upper', 32, 32)

const adminInfo = {
  menu: [],
  auth: [
    {
      url: '主控台',
      value: 'dashboard_console'
    },
    {
      label: '监控页',
      value: 'dashboard_monitor'
    },
    {
      label: '工作台',
      value: 'dashboard_workplace'
    },
    {
      label: '基础列表',
      value: 'basic_list'
    },
    {
      label: '基础列表删除',
      value: 'basic_list_delete'
    }
  ]
}

export default [
  {
    url: '/fake-api/login',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess({ token })
    }
  },
  {
    url: '/fake-api/admin_info',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(adminInfo)
    }
  }
]
