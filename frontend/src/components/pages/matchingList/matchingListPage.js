import React from 'react'
import Matching from './matching'
import request from '../assets/data/request'
import krabung from '../assets/data/me'

export const MatchingListPage = () => {
  return (
    <Matching request={request} me={krabung}/>
  )
}
