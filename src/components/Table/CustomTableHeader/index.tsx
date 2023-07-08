import { styled, TableHead, TableRow } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

// ----- テーブルの見出し折返し防止をグローバルに設置 -----
const StyledTableHead = styled(TableHead)(({ theme }) => ({
  '&.MuiTableHead-root': {
    '> .MuiTableRow-head': {
      '> .MuiTableCell-head': {
        whiteSpace: 'nowrap',
        backgroundColor: theme.palette.grey[800],
        // backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))

const CustomTableHeader = ({ children, ...props }: Props) => {
  return (
    <StyledTableHead {...props}>
      <TableRow>{children}</TableRow>
    </StyledTableHead>
  )
}

export default CustomTableHeader
