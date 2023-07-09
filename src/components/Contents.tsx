import { Typography } from '@mui/material'
import { DesignTable } from '../design/table'
import DataGridBasic from './DataGridBasic'
// import { Display1 } from './CustomTypography'
// import { TablePerson } from '@/design/table/DesignTablePerson'
// import { MockText } from './util'

const Contents = () => {
  return (
    <>
      {/* <MockText /> */}
      <Typography variant="display1" mb={3}>
        Design Mock
      </Typography>
      {/* <Typography variant="h1">Design Mock</Typography> */}
      {/* <Display1>CustomTypography Display1</Display1> */}
      <Typography variant="h2">Basic Table</Typography>
      <DesignTable />
      {/* <TablePerson /> */}
      <Typography variant="h2">Data Grid</Typography>
      <DataGridBasic />
    </>
  )
}

export default Contents
