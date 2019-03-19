import styled from 'styled-components'

import { MOBILE, GREYISH_BROWN } from '../../constants'

const PageHeading = styled.h3`
  font-weight: 900;
  font-size: ${({ format }) => (format === MOBILE ? 22 : 32)}px;
  font-family: 'Museo Sans Cyrl 900', sans-serif;
  text-align: inherit;

  margin: 0;

  color: #b62645;
`
PageHeading.displayName = 'StyledHeading'

const PageText = styled.p`
  font-weight: 500;
  font-size: ${({ format }) => (format === MOBILE ? 15 : 18)}px;
  font-family: 'Museo Sans Cyrl 500', sans-serif;
`
PageText.displayName = 'PageText'

const ResultHeading = styled.p`
  font-family: 'Museo Sans Cyrl 500', sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-style: italic;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${GREYISH_BROWN};
`
ResultHeading.displayName = 'ResultHeading'

const ResultTitle = styled.div`
  font-family: 'Museo Sans Cyrl 900', sans-serif;
  color: #b62645;
  font-size: 32px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: 900;
`
ResultTitle.displayName = 'ResultTitle'

const ResultText = styled.p`
  font-family: 'Museo Sans Cyrl 500', sans-serif;
  font-size: 18px;
`

ResultText.displayName = 'ResultText'

export { PageHeading, PageText, ResultHeading, ResultTitle, ResultText }
