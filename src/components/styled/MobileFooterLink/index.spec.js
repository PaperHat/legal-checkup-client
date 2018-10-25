import React from 'react'
import { shallow } from 'enzyme'

import MobileFooterLink from '.'

describe('components:styled:MobileFooterLink', function () {
  it('renders the MobileFooterLink and CSS properties properly', () =>
    expect(toJson(shallow(<MobileFooterLink />))).toMatchSnapshot())
})
