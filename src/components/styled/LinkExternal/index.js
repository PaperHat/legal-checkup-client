import styled, { css } from 'styled-components'

const LinkExternal = styled.a`
  height: 25px;
  margin-left: 23%;
  opacity: 0.53;
  font-family: Avenir;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      cursor: default;
    `};
`
LinkExternal.displayName = 'StyledLinkExternal'

export default LinkExternal
