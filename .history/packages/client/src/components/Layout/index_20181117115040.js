import * as React from 'react'
import { Helmet } from 'react-helmet'

import DesktopFooter from './DesktopFooter'
import MobileHeader from './MobileHeader'
import Section from './Section'

export default function Layout ({ children }) {
  return (
    <>
      <Helmet>
        <title>Legal Checkup</title>
      </Helmet>
      <MobileHeader />
      <Section>{children}</Section>
      <DesktopFooter />
    </>
  )
}
