import { Vehicle } from 'components'
import { customAlphabet } from 'nanoid'
import type { NextApiRequest, NextApiResponse } from 'next'
const nanoidCustomLetter = customAlphabet('QWERTYUIOPLKJHGFDSAZXCVBNM', 3)
const nanoidCustomNumber = customAlphabet('0123456789', 3)

const brand = [
  'Mazda',
  'Ford',
  'Chevrolet',
  'Fiat',
  'Renault',
  'Ferrari',
  'Kia',
]
const type = ['automatic', 'mechanics']
const provenance = ['old', 'new']
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Vehicle[]>
) {
  res.status(200).json(
    [...new Array(1000)].map((_, index) => ({
      id: index + 1,
      licensePlate: `${nanoidCustomLetter()}${nanoidCustomNumber()}`,
      brand: brand[getRandomInt(brand.length - 1)],
      module: String(getRandomInt(10)),
      kilometer: getRandomInt(200000),
      transmission: type[getRandomInt(type.length - 1)],
      type: 'Automóvil',
      purchasePrice: getRandomInt(999999999),
      provenance: provenance[getRandomInt(provenance.length - 1)],
    })) as Vehicle[]
  )
}
