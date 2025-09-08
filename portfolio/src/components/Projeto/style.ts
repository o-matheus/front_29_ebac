import styled from 'styled-components'

export const ProjetoInfo = styled.li`
  list-style: none;
  padding: 16px;
  border: 1px solid ${(props) => props.theme.corBorda};

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`
export const BotaoLink = styled.a`
  display: inline-block;
  background-color: ${(props) => props.theme.corFundoBotaoLink};
  color: ${(props) => props.theme.corLetraBotao};
  margin-top: 24px;
  font-size: 14px;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
  width: contain;
`
