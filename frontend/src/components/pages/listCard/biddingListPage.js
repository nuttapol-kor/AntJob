import React from 'react'
import BiddingList from './bidding'
import request from '../assets/data/request'

export const BiddingListPage = () => {
  return (
    <BiddingList request={request}/>
  )
}
