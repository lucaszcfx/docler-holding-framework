# docler-holding-framework

**Linguagem JavaScript**


**Framework Cypress.**

git clone https://github.com/lucaszcfx/docler-holding-framework.git


To install the framework: npm install


## Dentro da pasta cypress o framework é dividido:

1. Fixtures:
     * Normalmente se colocam dados para testes dentro dessa pasta

2. Integration:
     * Utilizei essa pasta para colocar as features, dividi em 4 pastas, cada uma para cada path do site.

3. Page-objects:
Pasta desdicada ao mapeamento de objetos de cada pagina, todos os page-objects extendem a BasePage:
  * Components
    * NavBar
  * pages
    * FormPage
    * ErrorPage
    * FormPage
    * HelloPage
  * Basepage
  
4. Plugins:
     * Contem index.js aonde eu configurei o cypress-cucumber-preprocessor que é utilizado de support for using feature files when testing with Cypress.

5. Reports:
     * Pasta direcionada para quando for gerado o relatorio da execução de testes

6. Screenshots:
     * Nao tenho utilizado essa pasta nesse framework

7. Step_definitions:
Passo a passo para executar os testes

8. Support:
     * commands.js -> não utilizei
     * index.js -> utilizei para importar o "cypress-xpath"

9. videos:
     * é uma pasta padrao do projeto, ela armazena videos.


## Na pasta raiz do projeto:

1. node_modules:
     * A set of functions you want to include in your application.

2. Dockerfile e .dockerignore:
     * Pastas para execucao via docker

3. Prettierc:
     * Is An opinionated code formatter

4. Cypress.json:
     * This file i used to configure some behaviours about the framework

5. Package.json:
     * Pasta contem as depedencias que utilizei para framwework, parametrizacoes da pasta step_definitions e as configurações para executar o projeto.

6. package-lock.json
     * Description. package-lock. json is automatically generated for any operations where npm modifies either the node_modules tree, or package. json .
