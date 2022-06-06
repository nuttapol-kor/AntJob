import React from 'react';
import makeStyles from "@mui/styles/makeStyles";
import withStyles from "@mui/styles/withStyles";
import Pagination from '@mui/material/Pagination';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function PaginationItem({ postsPerPage, totalPosts, paginate }) {
  const classes = useStyles();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleChange = (event, value) => {
    paginate(value);
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={pageNumbers.length}
        shape='rounded'
        color='primary'
        onChange={handleChange}
      />
    </div>
  );
}
