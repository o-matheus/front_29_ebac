import Title from '../../components/Title'

const Sidebar = () => (
  <aside>
    <img
      src="https://github.com/o-matheus.png"
      alt="Imagem de perfil no GitHub"
    />
    {/* Aqui no caso nos fizemos a estruturação para que o componente que criamos recebesse uma valor, com a configuração do props.children */}
    <Title>Matheus Aguiar</Title>
  </aside>
)

export default Sidebar
