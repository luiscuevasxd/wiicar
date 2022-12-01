import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import SearchIcon from '@mui/icons-material/Search'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { TabPanel } from '@mui/lab'
import {
  Box,
  Grid,
  MenuItem,
  Paper,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { MouseEvent, useState } from 'react'
import { numberFormat } from 'utils'
import { headCells } from './constants'
import {
  ButtonContained,
  ButtonIcon,
  CheckboxTable,
  Input,
  NotFoundContainer,
  TableRowHead,
  TypographyOption,
} from './Home.style'
import { PreparationProps, TabValueEnum } from './types'

export default function Preparation({
  sortOrder,
  sortField,
  vehicles,
  filter,
  rowsPerPage,
  page,
  totalPage,
  loading,
  handleChangePage,
  handleFilter,
  handleSorter,
  handleChangeRowsPerPage,
  handleGetValues,
}: PreparationProps) {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const [anchorElFilter, setAnchorElFilter] =
    useState<HTMLButtonElement | null>(null)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorElFilter(event.currentTarget)

  const handleClose = () => setAnchorElFilter(null)

  return (
    <TabPanel value={TabValueEnum.PREPARATION}>
      <Paper style={{ border: '1px solid #C5CBDA' }}>
        <Box p={2}>
          {!vehicles?.length && (
            <NotFoundContainer>No existen datos para mostrar</NotFoundContainer>
          )}
          {!!vehicles?.length && (
            <TableContainer>
              <Table
                sx={{ minWidth: 650, borderCollapse: 'separate' }}
                size='small'
              >
                <TableHead>
                  <TableRowHead>
                    <TableCell width={50}>
                      <CheckboxTable size='small' />
                    </TableCell>
                    {headCells.map(headCell => (
                      <TableCell
                        key={headCell.id}
                        style={{ color: '#000', fontWeight: 600 }}
                      >
                        <TableSortLabel
                          active={sortField === headCell.id}
                          direction={
                            sortField === headCell.id ? sortOrder : 'asc'
                          }
                          onClick={() =>
                            handleSorter(
                              sortField === headCell.id
                                ? sortOrder === 'asc'
                                  ? 'desc'
                                  : 'asc'
                                : 'asc',
                              headCell.id
                            )
                          }
                        >
                          {headCell.label}
                        </TableSortLabel>
                      </TableCell>
                    ))}
                  </TableRowHead>
                </TableHead>
                <TableBody>
                  {vehicles.map(vehicle => (
                    <TableRow
                      key={vehicle.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell width={50}>
                        <CheckboxTable size='small' />
                      </TableCell>
                      <TableCell>{vehicle.id}</TableCell>
                      <TableCell>{vehicle.licensePlate}</TableCell>
                      <TableCell>{vehicle.brand}</TableCell>
                      <TableCell align='center'>{vehicle.module}</TableCell>
                      <TableCell align='right'>
                        {numberFormat(vehicle.kilometer)}
                      </TableCell>
                      <TableCell>
                        {vehicle.transmission === 'automatic'
                          ? 'Automática'
                          : 'Mecánica'}
                      </TableCell>
                      <TableCell>{vehicle.type}</TableCell>
                      <TableCell align='center'>
                        $ {numberFormat(vehicle.purchasePrice)}
                      </TableCell>
                      <TableCell>
                        <ButtonContained
                          size='small'
                          variant='contained'
                          endIcon={<VisibilityIcon />}
                        >
                          {vehicle.provenance === 'new' ? 'Nuevo' : 'Usado'}
                        </ButtonContained>
                      </TableCell>
                      <TableCell>
                        <ButtonContained
                          size='small'
                          variant='contained'
                          style={{
                            backgroundColor: '#E63020',
                          }}
                          endIcon={<ArrowDropDownIcon />}
                        >
                          Acciones
                        </ButtonContained>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Paper>
      <Box mt={isSmall ? 3 : 7} />
      <Box
        position={isSmall ? 'static' : 'fixed'}
        bottom='0'
        left='0'
        right='0'
        style={{ backgroundColor: '#FFFFFF' }}
        boxShadow='0px 0px 1px 1px #0000001a'
        px={3}
        py={2}
      >
        <Grid container columnSpacing={3} rowSpacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <Input
              size='small'
              fullWidth
              value={filter}
              onChange={handleFilter}
              placeholder='Búsqueda Por Coincidencia'
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: <SearchIcon />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Input
              size='small'
              select
              fullWidth
              style={{ maxWidth: isSmall ? '100%' : 220 }}
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              SelectProps={{
                IconComponent: props => <KeyboardArrowDownIcon {...props} />,
              }}
              InputProps={{
                startAdornment: (
                  <Box
                    color='#E63020'
                    fontWeight={600}
                    borderRadius={100}
                    height={30}
                    style={{
                      backgroundColor: '#FDEAE8',
                    }}
                    mr={3}
                    px={2}
                    py={0.5}
                  >
                    Resultados
                  </Box>
                ),
              }}
            >
              {[10, 25, 50, 100].map(option => (
                <MenuItem key={option} value={option}>
                  <Typography fontSize={14}>{option}</Typography>
                </MenuItem>
              ))}
            </Input>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Box display='flex' width='100%' alignItems='center'>
              <ButtonIcon
                onClick={() => handleChangePage(page - 1)}
                disabled={page === 1}
                startIcon={
                  <KeyboardArrowLeftIcon
                    style={{ color: page === 1 ? '#C5CBDA' : '#000' }}
                  />
                }
              />
              <Input
                style={{ width: isSmall ? '100%' : 80 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
                size='small'
                value={page}
                onChange={e =>
                  handleChangePage(
                    +e.target.value > totalPage
                      ? totalPage
                      : +e.target.value < 1
                      ? 1
                      : +e.target.value
                  )
                }
              />
              <Box width={120} pl={3}>
                <Typography fontSize={14}>De {totalPage}</Typography>
              </Box>
              <ButtonIcon
                onClick={() => handleChangePage(page + 1)}
                disabled={page === totalPage}
                startIcon={
                  <KeyboardArrowRightIcon
                    style={{ color: page === totalPage ? '#C5CBDA' : '#000' }}
                  />
                }
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ButtonContained
              variant='outlined'
              fullWidth
              style={{
                backgroundColor: '#fff',
                color: '#E63020',
                padding: 8,
              }}
              endIcon={<ArrowDropDownIcon />}
              onClick={handleClick}
              disabled={loading}
            >
              {loading ? 'Cargando información...' : 'Acciones'}
            </ButtonContained>
            <Popover
              id='popover-filter-actions'
              anchorEl={anchorElFilter}
              keepMounted
              open={!!anchorElFilter}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              PaperProps={{
                style: {
                  width: 300,
                  border: '1px solid #C5CBDA',
                },
              }}
            >
              <Box px={1} width='100%'>
                <TypographyOption
                  onClick={() => {
                    handleGetValues()
                    handleClose()
                  }}
                >
                  <Typography fontSize={12}>Cargue masivo</Typography>
                </TypographyOption>
                <TypographyOption onClick={handleClose}>
                  <Typography fontSize={12}>Nuevo Registro</Typography>
                </TypographyOption>
              </Box>
            </Popover>
          </Grid>
        </Grid>
      </Box>
    </TabPanel>
  )
}
