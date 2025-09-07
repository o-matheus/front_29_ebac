import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'

import { GithubSecao } from './style'

const Sobre = () => (
  <section>
    <Title fontSize="16px">Sobre</Title>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
      voluptatibus saepe impedit blanditiis ipsa veniam excepturi ullam
      consequuntur iste obcaecati, quod deserunt dolorum qui, quae recusandae
      ducimus libero, suscipit ad?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=o-matheus&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=false" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=o-matheus&layout=compact&langs_count=6&theme=tokyonight" />
    </GithubSecao>
  </section>
)

export default Sobre
