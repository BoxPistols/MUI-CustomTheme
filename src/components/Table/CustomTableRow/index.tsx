import { styled, TableRow } from '@mui/material'
import type { ReactNode, TableHTMLAttributes } from 'react'

type ElementProps = Omit<TableHTMLAttributes<HTMLTableElement>, keyof Props>

type Props = {
  children?: ReactNode
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.grey[100],
    '&:hover': {
      background: theme.palette.primary.lighter,
      cursor: 'pointer',
    },
  },
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.grey[50],
    '&:hover': {
      background: theme.palette.primary.lighter,
      cursor: 'pointer',
    },
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const CustomTableRow = ({ children }: Props & ElementProps) => {
  return <StyledTableRow>{children}</StyledTableRow>
}

export default CustomTableRow
