import React from 'react'
import Main from './Main'
import App from './App'
import Dashboard from './Dashboard'
import Page from './Page'
import Loading from './Loading'
import { Icon as AntIcon } from 'antd'

const Icon = ({ name, ...props }) => <AntIcon type={name} {...props} />

export { Main, App, Page, Loading, Icon }
export default {
  '@' : {
    path: '/',
    component: Main,
    breadcrumbName: '',
    indexRoute: {
      onEnter: (_, replace) => replace({ pathname: '/app/' })
    }
  },
  '/' : {
    path: 'app/',
    component: App,
    breadcrumbName: 'Home',
    indexRoute: {
      onEnter: (_, replace) => replace({ pathname: '/app/dashboard' })
    }
  },
  '/app/': {
    path: 'dashboard',
    component: Dashboard
  }
}