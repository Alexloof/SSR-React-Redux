import React from 'react'
import HomePage from './pages/HomePage'
import App from './App'
import UsersListPage, { loadData } from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminPage from './pages/AdminsPage'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...AdminPage,
        path: '/admins'
      },
      {
        ...NotFoundPage
      }
    ]
  }
]
