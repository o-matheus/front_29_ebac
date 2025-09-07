import { Title as TituloEstilo } from '../Title/style'

// Fazendo a criação do props
export type Props = {
  children: string
  fontSize?: string
}

// Aplicando a tipificação do props
const Title = (props: Props) => (
  <>
    {/* Aqui estamos dizendo que a tag vai receber a props children */}
    <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
  </>
)

export default Title
