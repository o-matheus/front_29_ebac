import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { BotaoTema, Cargo, SidebarContainer } from './style'

type Props = {
  trocaTema: () => void
}
const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      {/* Aqui no caso nos fizemos a estruturação para que o componente que criamos recebesse uma valor, com a configuração do props.children */}
      <Title fontSize="20px">Matheus Aguiar</Title>
      <Paragrafo fontSize="16px" tipo="secundario">
        o-matheus
      </Paragrafo>
      <Cargo fontSize="12px" tipo="principal">
        Front-end
      </Cargo>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
