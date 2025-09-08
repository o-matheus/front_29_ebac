import { ThemeProvider } from 'styled-components'

import ListaProjetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useEffect, useState } from 'react'

function App() {
  const [temTemaDark, setTemTemaDark] = useState(true)

  function trocaTema() {
    setTemTemaDark(!temTemaDark)
  }

  return (
    <ThemeProvider theme={temTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <ListaProjetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
