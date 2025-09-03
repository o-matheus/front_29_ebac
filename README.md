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

* Entender como o CSS-in-JS é usado para estilizar componentes em uma aplicação React;
* Aplicar CSS-in-JS com Styled-components;
* Dominar a configuração de estilos dinâmicos com base nos estados dos componentes React.

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
* Conhecer o create react app;
* Configurar as ferramentas ESLint e Prettier para garantir a padronização do código;
* Configurar regras personalizadas e a automação de tarefas de formatação para melhorar a produtividade no desenvolvimento com React;
* Usar o inspetor de elementos para inspecionar a estrutura de componentes em um projeto React.
### Pontos importantes

## Aula 3 - Conheça o Styled Components 
### Objetivos

### Pontos importantes

## Aula 4 - Conheça o Atomic Design 

## Aula 5 - Construa a estrutura 

## Aula 6 - Crie os componentes para textos 

## Aula 7 - Finalizando a sessão "Sobre mim"

## Aula 8 - Criando o componente de projetos

## Aula 9 - Estilizando a sidebar

## Aula 10 - Explore o recurso temas

## Tarefa



