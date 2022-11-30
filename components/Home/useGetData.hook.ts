import axios from 'axios'
import { useState } from 'react'
import { Vehicle } from './types'

export default function useGetData() {
  const [data, setData] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getData = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${process.env.API_URL}api/getData`)

      setData(res.data)
    } catch (error) {
      alert('No fue posible conseguir la información')
    }
    setLoading(false)
  }

  return {
    getData,
    data,
    loading,
  }
}
