import styled from 'styled-components'

type BotaoProps = {
  principal?: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`
function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Enviar
      </Botao>
      <Botao>Cancelar</Botao>
      <BotaoPerigo as="a">
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
