import React, { Component } from 'react'

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return <h1>OOOPS, route not found</h1>
}

export default {
  component: NotFoundPage
}
