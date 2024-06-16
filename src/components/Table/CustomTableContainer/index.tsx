import { Paper, TableContainer } from '@mui/material'
import type { SxProps } from '@mui/system'
import type { ReactNode, TableHTMLAttributes } from 'react'

type ElementProps = Omit<TableHTMLAttributes<HTMLTableElement>, keyof Props>
type Props = {
  children: ReactNode
  maxHeightValue?: number | string
  sx?: SxProps
}

const CustomTableContainer = ({
  children,
  maxHeightValue,
  sx,
  ...props
}: Props & ElementProps) => {
  return (
    <TableContainer
      component={Paper}
      style={{ maxHeight: maxHeightValue }}
      sx={sx}
      {...props}>
      {children}
    </TableContainer>
  )
}
export default CustomTableContainer
