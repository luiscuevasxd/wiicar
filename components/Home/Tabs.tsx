import { TabContext, TabList } from '@mui/lab'
import { Box, Tab, useMediaQuery, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { listTabs } from './constants'
import { TabsProps, TabValue } from './types'

export default function Tabs({ children }: TabsProps) {
  const { push, pathname } = useRouter()
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const [valueTab, setValueTab] = useState<TabValue>('preparation')

  useEffect(() => {
    push(`${pathname}?step=preparation`)
  }, [])

  const handleChange = (_: unknown, newValue: TabValue) => {
    push(`${pathname}?step=${newValue}`)
    setValueTab(newValue)
  }

  return (
    <TabContext value={valueTab}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          backgroundColor: '#fff',
        }}
      >
        <TabList
          onChange={handleChange}
          variant={isSmall ? 'scrollable' : 'fullWidth'}
          scrollButtons
          allowScrollButtonsMobile
        >
          {listTabs.map(item => (
            <Tab
              key={item.id}
              label={item.label}
              value={item.id}
              icon={item.icon}
              iconPosition='start'
              style={{
                textTransform: 'none',
                minHeight: 50,
                fontWeight: item.id === valueTab ? 600 : 400,
              }}
            />
          ))}
        </TabList>
      </Box>
      <Box p={1}>{children}</Box>
    </TabContext>
  )
}
