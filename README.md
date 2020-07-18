# docler-holding-framework


git clone https://github.com/lucaszcfx/docler-holding-framework.git

To install the framework: npm install


Dentro da pasta cypress o framework é dividido:

Fixtures:
Normalmente se colocam dados para testes dentro dessa pasta

Integration:
Utilizei essa pasta para colocar as features, dividi em 4 pastas, cada uma para cada path do site.

Page-objects:
Pasta desdicada ao mapeamento de objetos de cada pagina, todos os page-objects extendem a BasePage
  Components
    NavBar
  pages
    FormPage
    ErrorPage
    FormPage
    HelloPage
  Basepage
  
Plugins:
Contem index.js aonde eu configurei o cypress-cucumber-preprocessor que é utilizado de support for using feature files when testing with Cypress.

Reports:
Pasta direcionada para quando for gerado o relatorio da execução de testes

Screenshots:
Nao tenho utilizado essa pasta nesse framework

Step_definitions:
Passo a passo para executar os testes

Support:
  commands.js -> não utilizei
  index.js -> utilizei para importar o "cypress-xpath"

videos:
é uma pasta padrao do projeto, ela armazena videos.


Na pasta raiz do projeto:

node_modules:
A set of functions you want to include in your application.

Dockerfile e .dockerignore:
Pastas para execucao via docker

.prettierc:
Is An opinionated code formatter

cypress.json:
This file i used to configure some behaviours about the framework

package.json:
Pasta contem as depedencias que utilizei para framwework, parametrizacoes da pasta step_definitions e as configurações para executar o projeto.

package-lock.json
Description. package-lock. json is automatically generated for any operations where npm modifies either the node_modules tree, or package. json .
