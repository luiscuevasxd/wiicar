import { TableReducerProps, TableStateReducer } from './types'

export const tableInitialState: TableStateReducer = {
  sortOrder: 'desc',
  sortField: 'id',
  page: 1,
  rowsPerPage: 25,
  selected: [],
  selected_all: false,
}

export const tableReducer: TableReducerProps = (state, action) => {
  switch (action.type) {
    case 'change_page':
      return { ...state, page: action.payload }
    case 'change_rows_per_page':
      return { ...state, rowsPerPage: action.payload }
    case 'sortable':
      return {
        ...state,
        sortOrder: action.payload.sortOrder,
        sortField: action.payload.sortField,
      }
    case 'filter':
      return { ...state, filter: action.payload }
    case 'selected':
      return { ...state, selected: [...state.selected, ...action.payload] }
    case 'selected_all':
      return {
        ...state,
        selected: action.payload.selected_all ? action.payload.selected : [],
        selected_all: action.payload.selected_all,
      }
    default:
      return state
  }
}
