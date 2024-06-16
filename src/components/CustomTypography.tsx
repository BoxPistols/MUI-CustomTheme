import { styled } from '@mui/material/styles'
import {
  Typography,
  type TypographyProps,
  TypographyTypeMap,
} from '@mui/material'

export const Display1 = styled((props: TypographyProps) => {
  return <Typography {...props} />
})(() => ({
  fontSize: '1.4rem',
  fontWeight: 700,
  lineHeight: 1.5,
  color: 'teal',
}))
