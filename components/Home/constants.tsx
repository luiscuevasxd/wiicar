import CarRentalOutlinedIcon from '@mui/icons-material/CarRentalOutlined'
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined'
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined'
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined'
import { HeadCellProps } from './types'

export const listTabs = [
  {
    id: 'preparation',
    label: 'Preparación',
    icon: <CarRentalOutlinedIcon fontSize='small' />,
  },
  {
    id: 'warehouse',
    label: 'Almacenamiento',
    icon: <WarehouseOutlinedIcon fontSize='small' />,
  },
  {
    id: 'onSale',
    label: 'En venta',
    icon: <LoyaltyOutlinedIcon fontSize='small' />,
  },
  {
    id: 'sales',
    label: 'Vendidos',
    icon: <LocalAtmOutlinedIcon fontSize='small' />,
  },
]

export const headCells: readonly HeadCellProps[] = [
  {
    id: 'id',
    label: 'ID',
  },
  {
    id: 'licensePlate',
    label: 'Placa',
  },
  {
    id: 'brand',
    label: 'Marca',
  },
  {
    id: 'module',
    label: 'Modelo',
  },
  {
    id: 'kilometer',
    label: 'Kilometraje',
  },
  {
    id: 'transmission',
    label: 'Transmisión',
  },
  {
    id: 'type',
    label: 'Tipo',
  },
  {
    id: 'purchasePrice',
    label: 'Precio de Compra',
  },
  {
    id: 'provenance',
    label: 'Proveniencia',
  },
  {
    id: 'option',
    label: '',
  },
]
