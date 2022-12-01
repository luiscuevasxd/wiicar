import {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useReducer,
  useState,
} from 'react'
import Preparation from './Preparation'
import { tableInitialState, tableReducer } from './tablet.reducer'
import Tabs from './Tabs'
import { Vehicle } from './types'
import useGetData from './useGetData.hook'
import Warehouse from './Warehouse'

export default function Home() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [totalPage, setTotalPage] = useState(1)
  const [stateTable, dispatchTable] = useReducer(
    tableReducer,
    tableInitialState
  )
  const { data, getData, loading } = useGetData()

  const handleChangePage = (value: number) => {
    dispatchTable({
      type: 'change_page',
      payload: value,
    })
  }

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!event) return

    if (data.length) setTotalPage(data.length / +event.target.value)

    dispatchTable({
      type: 'change_rows_per_page',
      payload: +event.target.value,
    })

    dispatchTable({
      type: 'change_page',
      payload: 1,
    })
  }

  const handleFilter: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = event => {
    dispatchTable({
      type: 'filter',
      payload: event.target.value,
    })
  }

  const handleSorter = (
    sortOrder: 'asc' | 'desc',
    sortField?: keyof Vehicle
  ): void => {
    dispatchTable({
      type: 'sortable',
      payload: {
        sortOrder,
        sortField,
      },
    })
  }

  const handleSorterValue = (
    listVehicles: Vehicle[],
    sortOrder: 'asc' | 'desc',
    sortField: keyof Vehicle
  ) => {
    return listVehicles.sort((prevValue, currentValue) => {
      if (sortOrder === 'asc') {
        if ((prevValue?.[sortField] || 0) < (currentValue?.[sortField] || 0))
          return -1
        else if (
          (prevValue?.[sortField] || 0) > (currentValue?.[sortField] || 0)
        )
          return 1
      } else {
        if ((prevValue?.[sortField] || 0) > (currentValue?.[sortField] || 0))
          return -1
        else if (
          (prevValue?.[sortField] || 0) < (currentValue?.[sortField] || 0)
        )
          return 1
      }

      return 0
    })
  }

  const handlePageValue = (
    listVehicles: Vehicle[],
    page: number,
    rowsPerPage: number
  ) => {
    const valueStart = page * rowsPerPage - rowsPerPage
    const valueEnd = page * rowsPerPage

    return listVehicles.slice(
      valueStart <= listVehicles?.length ? valueStart : listVehicles.length,
      valueEnd >= listVehicles?.length ? listVehicles.length : valueEnd
    )
  }

  const handleFilterValue = (listVehicles: Vehicle[], filter?: string) => {
    return filter
      ? listVehicles.filter(vehicle => {
          for (const key in vehicle) {
            if (
              String(vehicle[key as keyof Vehicle])
                .toLowerCase()
                .includes(filter.toLowerCase())
            )
              return true
          }

          return false
        })
      : listVehicles
  }

  useEffect(() => {
    if (!data?.length) return

    const time = setTimeout(() => {
      const sortValues = handleSorterValue(
        data,
        stateTable.sortOrder,
        stateTable.sortField
      )

      const pageValues = handlePageValue(
        sortValues,
        stateTable.page,
        stateTable.rowsPerPage
      )

      const filterValues = handleFilterValue(pageValues, stateTable.filter)

      setVehicles(filterValues)
    }, 800)

    return () => clearTimeout(time)
  }, [stateTable, data])

  useEffect(() => {
    if (!data.length) return
    setTotalPage(data.length / stateTable.rowsPerPage)
  }, [data])

  return (
    <Tabs>
      <>
        <Preparation
          {...stateTable}
          vehicles={vehicles}
          loading={loading}
          totalPage={totalPage}
          handleSorter={handleSorter}
          handleFilter={handleFilter}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleGetValues={getData}
        />
        <Warehouse />
      </>
    </Tabs>
  )
}
