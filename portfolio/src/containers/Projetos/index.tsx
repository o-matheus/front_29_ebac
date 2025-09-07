import Projeto from '../../components/Projeto'
import Title from '../../components/Title'
import { Projetos } from './style'

const ListaProjetos = () => (
  <section>
    <Title fontSize="16px">Projetos</Title>
    <Projetos>
      <Projeto></Projeto>
    </Projetos>
  </section>
)

export default ListaProjetos
