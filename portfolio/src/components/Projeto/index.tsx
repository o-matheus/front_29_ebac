import Paragrafo from '../Paragrafo'
import Title from '../Title'
import { ProjetoInfo, BotaoLink } from './style'

const projetos = [
  {
    titulo: 'To-do list Frontend Mentor',
    descricao:
      'Desafio do Frontend Mentor para  desenvolver aplicação web para gerenciamento de tarefas, desenvolvida com VueJS, TypeScript e HTML',
    link: 'https://todo-vue-frontend-mentor.vercel.app/'
  },
  {
    titulo: 'Calculadora IMC',
    descricao:
      'Aplicação web para cálculo do Índice de Massa Corporal (IMC), desenvolvida com React, JavaScript, HTML e CSS.',
    link: 'https://front-28-ebac-54sv.vercel.app/'
  },
  {
    titulo: 'ORV - Landing Page',
    descricao:
      "Aplicação web informativa sobre o manhwa Omniscient Reader's Viewpoint, desenvolvida com HTML, SCSS e JavaScript.",
    link: 'https://front-21-exercicio-ebac.vercel.app/'
  },
  {
    titulo: 'EducaAi',
    descricao:
      'Construção de landing page fictícia para uma plataforma educacional, utilizando HTML5, CSS3 e Bootstrap',
    link: 'https://front-tarefa-mod-14.vercel.app/'
  }
]

const Projeto = () => (
  <>
    {projetos.map((projeto) => (
      <ProjetoInfo key={projeto.titulo}>
        <Title>{projeto.titulo}</Title>
        <Paragrafo tipo="secundario">{projeto.descricao}</Paragrafo>
        <BotaoLink href={projeto.link}>Visualizar</BotaoLink>
      </ProjetoInfo>
    ))}
  </>
)

export default Projeto
