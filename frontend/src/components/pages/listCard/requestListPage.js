import React from 'react'
import RequestList from './request'
import request from '../assets/data/request'

export const RequestListPage = () => {
  return (
    <RequestList request={request}/>
  )
}
