# Módulo 29 - CSS no JS com React

## Menu

[Aula 1 - Escreva CSS com JavaScript](#aula-1---escreva-css-com-javascript)  
[Aula 2 - Produza com React](#aula-2---produza-com-react)  
[Aula 3 - Conheça o Styled Components ](#aula-3---conheça-o-styled-components)  
[Aula 4 - Conheça o Atomic Design](#aula-4---conheça-o-atomic-design)  
[Aula 5 - Construa a estrutura ](#aula-5---construa-a-estrutura)  
[Aula 6 - Crie os componentes para textos ](#aula-6---crie-os-componentes-para-textos)  
[Aula 7 - Finalizando a sessão "Sobre mim"](#aula-7---finalizando-a-sessão-sobre-mim)  
[Aula 8 - Criando o componente de projetos](#aula-8---criando-o-componente-de-projetos)  
[Aula 9 - Estilizando a sidebar](#aula-9---estilizando-a-sidebar)  
[Aula 10 - Explore o recurso temas](#aula-10---explore-o-recurso-temas)  
[Tarefa](#tarefa)

## Aula 1 - Escreva CSS com JavaScript

### Objetivos

- Entender como o CSS-in-JS é usado para estilizar componentes em uma aplicação React;
- Aplicar CSS-in-JS com Styled-components;
- Dominar a configuração de estilos dinâmicos com base nos estados dos componentes React.

### Pontos importantes

**CSSStyleSheet**: Permite criar regras de CSS diretamente no JavaScript. Exemplo básico:

```js
const css = new CSSStyleSheet();
css.insertRule(`
    h2 {
        color: blue;
    }
`);
document.adoptedStyleSheets = [css];
```

Essa é uma forma nativa de usar CSS com JS, mas normalmente utilizamos uma ferramenta chamada [Styled Components](https://styled-components.com/), que facilita a integração entre CSS e JavaScript em projetos React.

Com Styled Components, é possível:

- Escrever CSS dentro do JavaScript, inclusive usando variáveis e lógica JS;
- Utilizar interpolação de variáveis para criar estilos dinâmicos;
- Organizar estilos de forma semelhante ao SASS, por exemplo:

```less
.header {
  .logo {
    // estilos
  }
}
```

**Vantagens do CSS-in-JS:**

- Permite reaproveitar variáveis e lógica do JS nos estilos;
- Facilita a manutenção e organização dos estilos por componente;
- Garante maior compatibilidade entre navegadores.

## Aula 2 - Produza com React

### Objetivos

- Conhecer o Create React App;
- Configurar ESLint e Prettier para padronizar o código;
- Criar regras personalizadas e automatizar tarefas de formatação para aumentar a produtividade;
- Utilizar o inspetor de elementos para analisar a estrutura dos componentes React.

### Pontos importantes

O projeto deste módulo é criar uma página inspirada no perfil do GitHub, dividida em duas áreas principais:

**Lateral:**
- Foto
- Nome
- Usuário do GitHub
- Função

**Central:**
- Sobre mim
- Informações do GitHub (linguagens, quantidade de repositórios, etc.)
- Projetos em destaque, exibidos em cards

Também será implementada a troca de tema (claro/escuro).

**Ferramentas utilizadas:**
- React
- TypeScript
- Create React App
- EditorConfig
- ESLint
- Prettier

> Observação: O Create React App não é mais atualizado. Os criadores recomendam migrar para frameworks como Vite, Parcel ou RSBuild (informação de fevereiro/25).

Comandos principais:
```bash
npx create-react-app portfolio --template typescript
npx eslint --init
```

### Comentários

O conteúdo da aula está desatualizado, pois o Create React App não é mais recomendado. Outros alunos sugeriram alternativas nos comentários, o que ajudou a corrigir problemas. Isso pode gerar confusão e erros durante o desenvolvimento.

## Aula 3 - Conheça o Styled Components

### Objetivos

- Instalar o Styled Components;
- Criar e estilizar componentes com Styled Components;
- Aplicar herança e reutilização de estilos em componentes React.

### Pontos importantes

Para instalar:
```bash
npm install --save styled-components
npm i --save-dev @types/styled-components
```
Importação:
```js
import styled from 'styled-components'
```

O Styled Components permite criar componentes já estilizados, sem precisar adicionar classes manualmente. É possível passar propriedades para alterar estilos dinamicamente, e criar componentes baseados em outros componentes.

Exemplo de herança e aninhamento de estilos (similar ao SASS/LESS):
```js
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`
```

Para reset global de estilos, crie um arquivo `styled.ts`:
```js
import { createGlobalStyle } from "styled-components";
```
Depois, importe e use o componente global no `App.tsx`.

**Vantagens:**
- CSS com herança
- Acesso a propriedades do componente
- Estilização de elementos filhos

### Comentários

O styled components parece ser uma ferramenta poderosa porque, por meio das propriedades e pela possibilidade de utilizar a lógica de JavaScript na escrita do CSS, dá mais flexibilidade ao código, mas em alguns pontos parece um CSS inline, como no caso utilizado do fontSize.

## Aula 4 - Conheça o Atomic Design
### Objetivos
* Conceituar Atomic Design e entender como ele se aplica ao desenvolvimento de componentes em um projeto React;
* Aplicar o Atomic Design na criação de componentes em um projeto React;
* Identificar os elementos atômicos (componentes pequenos e reutilizáveis), criar moléculas combinando átomos e construir organismos maiores a partir dessas moléculas;
* Compreender a importância da flexibilidade na estrutura de um projeto React.

### Pontos importantes
O React, de forma geral, não tem uma estrutura padrão para construção dos projetos. Na aula, o professor mostrou que algumas pessoas preferem agrupar todos os arquivos relacionados ao componente (por exemplo, o componente Avatar teria dentro dele o JS, o CSS e tudo que faz parte daquele componente). Outra abordagem é separar por tipo de arquivo, criando pastas específicas para API, componentes, etc.

Foi apresentado o conceito de Atomic Design, uma forma de organizar e estruturar projetos:
- **Átomo:** Menor parte do projeto, pode ser um título, botão ou input.
- **Molécula:** Conjunto de átomos formando uma estrutura maior, como um formulário ou grupo de botões.
- **Organismo:** Uma seção do site, como menu de navegação, barra lateral ou área de comentários.
- **Template:** Estrutura da página, definindo que tipo de informação vai ocupar cada área (imagem, texto, vídeo, propaganda), criando um esqueleto para o site.
- **Page:** Template preenchido com conteúdo real, para validar o design e fazer ajustes se necessário.

Lendo mais sobre Atomic Design, fica claro a importância de construir páginas reutilizáveis ou que sirvam de base para outras estilizações específicas.

O professor comentou que não vai seguir o Atomic Design à risca, pois acha que a metodologia pode tornar a criação de componentes muito específica e poluir o projeto com muitos arquivos. Ele recomenda usar metodologias como referência, não como regra, e adaptar conforme o que for mais importante para o projeto.

Mostrou o Figma do projeto do módulo e estruturou como quer dividir os componentes de estilização:
- Títulos
- Texto
- Card
- Conjunto de Cards
- Avatar


## Aula 5 - Construa a estrutura
### Objetivos
* Criar a estrutura inicial de um projeto React;
* Organizar as pastas e criar componentes como barra lateral, seção principal e seção de projetos;
* Criar componentes reutilizáveis, como o título que pode aceitar propriedades para personalização;
* Aplicar estilos e layout usando CSS-in-JS em um projeto React.

### Pontos importantes
Na estruturação das pastas do projeto, o professor sugeriu colocar como container uma seção maior, como a `sidebar`, e dentro dessa pasta ir criando as seções que serão utilizadas no projeto. Em outra pasta separada, são criados os components.

O caminho seguido para construção dos arquivos foi:
components -> containers -> app.tsx

Criamos componentes que podem receber valores por meio do children (exemplo: components/title.tsx).

Fizemos a estilização básica do site utilizando o styled components, mostrando como podemos organizar a estrutura e seguir um padrão de organização.

### Comentários
Uma coisa que acho meio ruim de usar o styled components é o fato de não ter autocomplete do CSS e de não acusar alguns erros, já que está sendo escrito via JS.


## Aula 6 - Crie os componentes para textos
### Objetivos
* Criar componentes reutilizáveis para texto, como títulos e parágrafos;
* Utilizar propriedades opcionais em componentes React para fornecer valores padrão quando não são especificados;
* Aplicar estilos de texto usando CSS-in-JS em um projeto React.

### Pontos importantes
Nesta aula, criamos e estilizamos componentes de texto utilizando styled-components e props.

`tipo?: 'principal' | 'secundario'` → Definição dos valores que podem ser recebidos pela propriedade tipo, tornando-a opcional.

Aprendemos a usar props para alterar dinamicamente a cor e o estilo dos textos, facilitando a reutilização dos componentes em diferentes partes do projeto.


## Aula 7 - Finalizando a sessão "Sobre mim"
### Objetivos
* Integrar imagens em componentes React;
* Aplicar estilos responsivos a elementos HTML em uma aplicação React;
* Ajustar o layout da página, como o tamanho do contêiner, margens e espaçamentos entre elementos;
* Exibir informações dinâmicas do GitHub, como estatísticas e linguagens mais usadas.

### Pontos importantes
Nessa aula, finalizamos a estilização da seção "Sobre mim", integrando imagens e informações dos nossos repositórios do GitHub. Fizemos ajustes no layout para garantir uma boa apresentação tanto na visão desktop quanto na mobile, utilizando styled-components para aplicar estilos responsivos.

Também organizamos os componentes para exibir dados dinâmicos, como estatísticas do GitHub (commits, PRs, issues) e as linguagens mais utilizadas, deixando a seção mais completa e informativa.


## Aula 8 - Criando o componente de projetos
### Objetivos


### Pontos importantes


### Comentários


## Aula 9 - Estilizando a sidebar
### Objetivos


### Pontos importantes


### Comentários


## Aula 10 - Explore o recurso temas
### Objetivos


### Pontos importantes


### Comentários


## Tarefa
### Objetivos


### Pontos importantes


### Comentários

