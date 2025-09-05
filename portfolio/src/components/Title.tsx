// Fazendo a criação do props
type Props = {
  children: string
}

// Aplicando a tipificação do props
const Title = (props: Props) => (
  <>
    {/* Aqui estamos dizendo que a tag vai receber a props children */}
    <span>{props.children}</span>
  </>
)

export default Title
