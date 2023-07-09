import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'

const rows: GridRowsProp = [
  {
    id: 1,
    col1: 'Hello',
    col2: 'World',
    col3: 'Hello',
    col4: 'World',
    col5: 'Hello',
  },
  {
    id: 2,
    col1: 'DataGridPro',
    col2: 'is Awesome',
    col3: 'DataGridPro',
    col4: 'is Awesome',
    col5: 'DataGridPro',
  },
  {
    id: 3,
    col1: 'MUI',
    col2: 'is Amazing',
    col3: 'MUI',
    col4: 'is Amazing',
    col5: 'MUI',
  },
  {
    id: 4,
    col1: 'Material-UI',
    col2: 'is Amazing',
    col3: 'Material-UI',
    col4: 'is Amazing',
    col5: 'Material-UI',
  },
  {
    id: 5,
    col1: 'MUI X',
    col2: 'is Awesome',
    col3: 'MUI X',
    col4: 'is Awesome',
    col5: 'MUI X',
  },
]

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1' },
  { field: 'col2', headerName: 'Column 2' },
  { field: 'col3', headerName: 'Column 3' },
  { field: 'col4', headerName: 'Column 4' },
  { field: 'col5', headerName: 'Column 5' },
]

export default function DataGridBasic() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}
