import axios from 'axios';

const BASE_URL = 'https://localhost:5001/api/';

export const ENDPOINTS = {
  EMPLOYEE: 'Employee',
  COMPANYPROFILE: 'CompanyProfile',
  ORGCHART: 'OrgChart',
  PROJECTASSIGN: 'ProjectAssign',
  PROJECT: 'Project'
};

export const createAPIEndpoint = (endpoint) => {
  let url = BASE_URL + endpoint + '/';
  return {
    fetchAll: () => axios.get(url),
    fetchById: (id) => axios.get(url + id),
    create: (newRecord) => axios.post(url, newRecord),
    update: (id, updateRecord) => axios.put(url + id, updateRecord),
    delete: (id) => axios.delete(url + id),
  };
};
