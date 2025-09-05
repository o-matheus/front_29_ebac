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

## Aula 5 - Construa a estrutura

## Aula 6 - Crie os componentes para textos

## Aula 7 - Finalizando a sessão "Sobre mim"

## Aula 8 - Criando o componente de projetos

## Aula 9 - Estilizando a sidebar

## Aula 10 - Explore o recurso temas

## Tarefa
