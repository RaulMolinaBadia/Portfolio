import React from 'react'
import {
  Navbar,
  Button,
  Link,
  Text,
  useTheme
} from '@nextui-org/react'
import { Layout } from './Layout.jsx'
import { AcmeLogo } from './AcmeLogo.jsx'

export function NavBar () {
  const [variant, setVariant] = React.useState('highlight')
  const [activeColor, setActiveColor] = React.useState('primary')

  const { isDark } = useTheme()

  const variants = [
    'default',
    'highlight',
    'highlight-solid',
    'underline',
    'highlight-rounded',
    'highlight-solid-rounded',
    'underline-rounded'
  ]

  const colors = ['primary', 'secondary', 'success', 'warning', 'error']

  return (
    <Layout>
      <Navbar isBordered={isDark} MaxWidth='xl' variant='sticky'>
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color='inherit' hideIn='xs'>
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor={activeColor} hideIn='xs' variant={variant}>
          <Navbar.Link href='#'>Features</Navbar.Link>
          <Navbar.Link isActive href='#'>
            Customers
          </Navbar.Link>
          <Navbar.Link href='#'>Pricing</Navbar.Link>
          <Navbar.Link href='#'>Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color='inherit' href='#'>
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} color={activeColor} href='#'>
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  )
}
