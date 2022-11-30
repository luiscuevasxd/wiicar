import { ChangeEventHandler } from 'react'

export interface Vehicle {
  id: number
  licensePlate: string
  brand: string
  module: string
  kilometer: number
  transmission: 'mechanics' | 'automatic'
  type: string
  purchasePrice: number
  provenance: 'new' | 'old'
  option?: boolean
}

export interface TabsProps {
  children: JSX.Element
}

export type TabValue = 'preparation' | 'warehouse' | 'onSale' | 'sales'

export enum TabValueEnum {
  PREPARATION = 'preparation',
  WAREHOUSE = 'warehouse',
  ON_SALE = 'onSale',
  SALES = 'sales',
}

export interface HeadCellProps {
  id: keyof Vehicle
  label: string
}

export type TableType =
  | 'change_page'
  | 'change_rows_per_page'
  | 'sortable'
  | 'filter'
  | 'selected'
  | 'selected_all'

export type TableStateReducer = {
  sortOrder: 'asc' | 'desc'
  sortField: keyof Vehicle
  page: number
  rowsPerPage: number
  selected: Vehicle[]
  selected_all: boolean
  filter?: string
}

export interface TableAction {
  type: TableType
  payload: any
}

export type TableReducerProps = (
  state: TableStateReducer,
  action: TableAction
) => TableStateReducer

export interface PreparationProps extends TableStateReducer {
  vehicles: Vehicle[]
  totalPage: number
  loading: boolean
  handleGetValues: () => void
  handleChangePage: (value: number) => void
  handleChangeRowsPerPage: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >
  handleFilter: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  handleSorter: (sortOrder: 'asc' | 'desc', sortField: keyof Vehicle) => void
}
