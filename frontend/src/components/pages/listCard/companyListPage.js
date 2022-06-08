import React from 'react'
import Company from './company'
import company from '../assets/data/company'

export const CompanyListPage = () => {
  return (
    <Company company={company}/>
  )
}