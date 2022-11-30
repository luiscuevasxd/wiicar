import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Checkbox,
  CheckboxProps,
  styled,
  TableRow,
  TableRowProps,
  TextField,
  TextFieldProps,
  Typography,
  TypographyProps,
} from '@mui/material'

export const TableRowHead = styled(TableRow)<TableRowProps>(() => ({
  backgroundColor: '#f2f3f7',
  borderRadius: 6,
  height: 60,
  ['& .MuiTableCell-head']: {
    border: 'solid 1px #c5cbda',
    borderStyle: 'solid none',
  },
  ['& > .MuiTableCell-head:first-child']: {
    borderLeftStyle: 'solid',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  ['& > .MuiTableCell-head:last-child']: {
    borderRightStyle: 'solid',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
}))

export const CheckboxTable = styled(Checkbox)<CheckboxProps>(() => ({
  color: '#C5CBDA',
}))

export const NotFoundContainer = styled(Box)<BoxProps>(() => ({
  border: '1px solid #C5CBDA',
  padding: '16px 0',
  borderRadius: '6px',
  color: '#C5CBDA',
  textAlign: 'center',
  backgroundColor: '#F2F3F7',
}))

export const ButtonContained = styled(Button)<ButtonProps>(() => ({
  borderRadius: 100,
  color: '#fff',
  backgroundColor: '#25D366',
  padding: '4px 8px',
  fontSize: 12,
  fontWeight: 400,
}))

export const Input = styled(TextField)<TextFieldProps>(() => ({
  ['& .MuiOutlinedInput-root']: {
    borderRadius: 100,
  },
}))

export const ButtonIcon = styled(Button)<ButtonProps>(() => ({
  ':hover': {
    borderRadius: 100,
    backgroundColor: '#F2F3F7',
  },
}))

export const TypographyOption = styled(Typography)<TypographyProps>(() => ({
  padding: '8px 0',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#F2F3F7',
  },
}))
