export const numberFormat = (value: string | number): string =>
  value
    ? new Intl.NumberFormat('de-DE').format(
        parseFloat(`${value}`.replace(/\./g, ''))
      )
    : value === 0
    ? '0'
    : ''
