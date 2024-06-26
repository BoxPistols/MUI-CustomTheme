import { FormControlLabel, Switch } from '@mui/material'
import type { SxProps } from '@mui/system'
import type { ChangeEvent } from 'react'

type Props = {
  checked: boolean
  onChange: (_event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
  sxStyle?: SxProps
  label: string
}

const TableHeightSwitch = ({
  checked,
  onChange,
  sxStyle,
  label,
  ...props
}: Props) => {
  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={onChange} />}
      label={label}
      labelPlacement='end'
      sx={sxStyle}
      style={{
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'end',
        margin: '0 8px -8px 0',
      }}
      {...props}
    />
  )
}

export default TableHeightSwitch
