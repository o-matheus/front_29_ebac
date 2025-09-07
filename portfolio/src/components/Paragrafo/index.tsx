import { P } from './style'

// Fazendo a criação do props
export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: string
}

// Fazendo a desestruturação da props e passando as propriedades, definindo qual é o valor padrão de tipo.
const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <>
    {/* Aqui estamos dizendo que a tag vai receber children e tipo */}
    <P fontSize={fontSize} tipo={tipo}>
      {children}
    </P>
  </>
)

export default Paragrafo
