import StyledMobileFooterLink from '@components/styled/MobileFooterLink'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

function mapDispatchToProps (dispatch, { to }) {
  return {
    onClick: e => {
      e.preventDefault()

      dispatch(push(to))
    }
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(StyledMobileFooterLink)
