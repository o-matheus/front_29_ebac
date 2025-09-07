import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'

import { GithubSecao } from './style'

const Sobre = () => (
  <section>
    <Title fontSize="16px">Sobre</Title>
    <Paragrafo>
      Graduado em História pela UFC e estudante de Desenvolvimento Full Stack
      Java pela EBAC, venho consolidando minha atuação na área de tecnologia com
      foco em desenvolvimento web e front-end. Possuo habilidades práticas em
      HTML5, CSS3 e JavaScript, com experiência em design responsivo,
      versionamento com Git e deploy de páginas. Em meus projetos de estudo,
      apliquei conceitos de Bootstrap, React e Vue.js para construir soluções
      dinâmicas, o que me proporcionou um entendimento sólido sobre a
      estruturação de páginas e a lógica por trás das aplicações.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=o-matheus&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=false" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=o-matheus&layout=compact&langs_count=6&theme=tokyonight" />
    </GithubSecao>
  </section>
)

export default Sobre
