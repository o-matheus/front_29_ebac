import styled from 'styled-components'

import { Props } from './index'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  line-height: 22px;
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
`
