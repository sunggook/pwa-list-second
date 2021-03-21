import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '500px',
    width: '100%',
    backgroundColor: 'black',
    color: 'white'
  },
  footer: {
    color: 'white'
  }
}));

const PwaList = ( { pwas, onPwaSelect } ) => {
  const classes = useStyles();

  if (pwas.length === 0)
    return <h4>No Entries</h4>

  const rows = pwas.map((pwa, order) => {
    console.log(pwa);
    return {
      id: order + 1,
      title: pwa.Title['_'],
      url: pwa.Url['_']
    }
  });

  const columns = [
    { field: 'id', headerName: 'Id', width: 50 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'url', headerName: 'Url', width: 300 },
  ];

  const handleSelectionChange = (select) => {
    const index = parseInt(select.rowIds[0]) - 1;
    onPwaSelect(pwas[index]);
  }

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={8}
      autoHeight='true'
      onSelectionChange= { handleSelectionChange }
      className={classes.root} />
  )
}

export default PwaList;
