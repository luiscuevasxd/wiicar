import { Vehicle } from 'components'
import type { NextApiRequest, NextApiResponse } from 'next'

function createData(
  id: number,
  licensePlate: string,
  brand: string,
  module: string,
  kilometer: number,
  transmission: 'mechanics' | 'automatic',
  type: string,
  purchasePrice: number,
  provenance: 'new' | 'old'
): Vehicle {
  return {
    id,
    licensePlate,
    brand,
    module,
    kilometer,
    transmission,
    type,
    purchasePrice,
    provenance,
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Vehicle[]>
) {
  res
    .status(200)
    .json([
      createData(
        1,
        'IQR784',
        'Mazda',
        '2',
        68073,
        'mechanics',
        'Automovil',
        40900000,
        'old'
      ),
      createData(
        2,
        'WDQ948',
        'Mazda',
        '2',
        68073,
        'automatic',
        'Automovil',
        40900000,
        'new'
      ),
      createData(
        3,
        'CAS615',
        'Mazda',
        '2',
        68073,
        'mechanics',
        'Automovil',
        409000000,
        'old'
      ),
      createData(
        4,
        'VRW489',
        'Mazda',
        '2',
        68073,
        'automatic',
        'Automovil',
        40900000,
        'new'
      ),
      createData(
        5,
        'WQW645',
        'Mazda',
        '2',
        68073,
        'mechanics',
        'Automovil',
        409000000,
        'new'
      ),
    ])
}
