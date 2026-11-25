# AlimentaConsciente

Projeto acadêmico desenvolvido no curso de Ciência da Computação da Universidade Federal da Fronteira Sul (UFFS), Campus Chapecó, na disciplina de Introdução ao Desenvolvimento Web.

## Sobre o projeto

O AlimentaConsciente é uma plataforma web que busca incentivar o consumo consciente e a prevenção do desperdício doméstico de alimentos, disponibilizando receitas de aproveitamento, orientações de conservação e informações educativas.

O projeto está alinhado ao Objetivo de Desenvolvimento Sustentável 12 (ODS 12) — Consumo e Produção Responsáveis, especificamente à meta 12.3 da Agenda 2030 da ONU.

## Objetivos

- Incentivar o aproveitamento dos alimentos disponíveis em casa;
- Disponibilizar receitas de aproveitamento de alimentos;
- Facilitar a busca de receitas por ingredientes;
- Apresentar orientações de conservação e armazenamento;
- Promover a conscientização sobre o desperdício de alimentos.

## Tecnologias utilizadas

- HTML5 — estrutura semântica das páginas;
- Tailwind CSS v4 — estilização, layout e responsividade;
- JavaScript — funcionalidades e interações;
- JSON — armazenamento dos dados das receitas;
- Node.js  — gerenciamento de dependências;
- Git e GitHub — controle de versão e colaboração;
- Figma — elaboração dos wireframes.

## Funcionalidades previstas

- Página inicial com apresentação do projeto;
- Listagem de receitas de aproveitamento;
- Busca de receitas por ingredientes disponíveis;
- Orientações de conservação e armazenamento;
- Conteúdo educativo sobre a ODS 12;
- Página de apresentação do projeto;
- Interface responsiva.

## Estrutura de pastas

```text
alimentaconsciente/
├── docs/
│   └── wireframes/
├── src/
│   ├── css/
│   │   ├── input.css
│   │   └── output.css
│   ├── data/
│   │   └── recipes.json
│   ├── images/
│   ├── js/
│   │   ├── main.js
│   │   ├── preservation.js
│   │   ├── recipes.js
│   │   └── search.js
│   ├── pages/
│   │   ├── about.html
│   │   ├── food-preservation.html
│   │   ├── recipes.html
│   │   ├── sdg12.html
│   │   └── search-ingredients.html
│   └── index.html
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### Responsabilidade dos diretórios

| Diretório | Responsabilidade |
|---|---|
| `docs/` | Documentação complementar do projeto. |
| `docs/wireframes/` | Wireframes elaborados na Sprint 1. |
| `src/` | Arquivos utilizados no desenvolvimento da aplicação. |
| `src/css/` | Configuração e estilização com Tailwind CSS. |
| `src/data/` | Dados estruturados em JSON. |
| `src/images/` | Imagens e recursos visuais. |
| `src/js/` | Scripts e funcionalidades JavaScript. |
| `src/pages/` | Páginas HTML secundárias. |

A estrutura foi definida com base na separação de responsabilidades, buscando facilitar a organização, a compreensão e a manutenção do código, além de favorecer o desenvolvimento colaborativo.

## Paleta de cores

| Cor | Hexadecimal | Aplicação |
|---|---|---|
| Verde principal | `#166534` | Identidade visual, títulos e botões. |
| Verde escuro | `#14532D` | Destaques e estados de interação. |
| Verde claro | `#DCFCE7` | Seções informativas. |
| Creme | `#FFFBEB` | Blocos de conteúdo educativo. |
| Cinza-escuro | `#1F2937` | Textos principais. |
| Branco | `#FFFFFF` | Cartões e áreas de conteúdo. |
| Cinza claro | `#F8FAFC` | Fundo geral da aplicação. |

A escolha dos tons de verde está relacionada à natureza, à alimentação e à sustentabilidade. Os tons claros foram adotados para proporcionar uma interface limpa e organizada, enquanto o cinza-escuro favorece o contraste e a legibilidade dos textos.

## Como executar o projeto

### Pré-requisitos

- Node.js;
- npm;
- Git;
- Navegador web;
- Extensão Live Server do VS Code ou Python 3.

### 1. Instalar as dependências

Na raiz do projeto, execute:

```bash
npm install
```

### 2. Compilar o Tailwind CSS

Na raiz do projeto, execute:

```bash
npx @tailwindcss/cli -i ./src/css/input.css -o ./src/css/output.css --watch
```

O comando gera o arquivo `src/css/output.css`, utilizado pelas páginas HTML, e recompila automaticamente os estilos sempre que houver alterações no código.

Mantenha esse comando em execução durante o desenvolvimento.

### 3. Iniciar um servidor local

O projeto utiliza JavaScript e a função `fetch()` para carregar os dados armazenados em arquivos JSON.

Por questões de segurança, os navegadores podem bloquear essas requisições quando os arquivos HTML são abertos diretamente pelo sistema de arquivos (`file://`).

Por esse motivo, é necessário executar o projeto por meio de um servidor HTTP local para garantir o funcionamento de todas as funcionalidades.

Existem duas alternativas para executar o servidor.

#### Opção 1 — Live Server (recomendada)

1. Abra o projeto no Visual Studio Code.
2. Acesse a aba de extensões (`Ctrl + Shift + X`).
3. Pesquise pela extensão Live Server.
4. Instale a extensão desenvolvida por Ritwick Dey.
5. Abra o arquivo `src/index.html`.
6. Clique com o botão direito sobre o arquivo.
7. Selecione a opção `Open with Live Server`.

O site será aberto automaticamente no navegador, e as alterações realizadas nos arquivos serão refletidas na página durante o desenvolvimento.

#### Opção 2 — Servidor HTTP do Python

Caso não esteja utilizando o Visual Studio Code ou prefira executar o servidor pelo terminal, é possível utilizar o servidor HTTP nativo do Python.

Primeiramente, verifique se o Python está instalado:

```bash
python3 --version
```

Em outro terminal, na raiz do projeto, execute:

```bash
python3 -m http.server 5500 --directory src
```

Após iniciar o servidor, acesse:

http://localhost:5500/

Para encerrar o servidor, pressione `Ctrl + C` no terminal.

### Observações

- Utilize apenas uma das alternativas de servidor local.
- O Tailwind CSS deve permanecer em execução durante o desenvolvimento para atualizar os estilos automaticamente.
- O servidor local é utilizado apenas para disponibilizar os arquivos estáticos e permitir as requisições realizadas pelo JavaScript.
- O projeto não possui backend nem banco de dados.
- O Python é opcional e não constitui uma dependência da aplicação.


## Fluxo de contribuição

O desenvolvimento do projeto será realizado utilizando branches independentes e Pull Requests, com o objetivo de organizar as contribuições e evitar conflitos entre os integrantes da equipe.

A branch `main` representa a versão principal do projeto. As alterações devem ser desenvolvidas em branches separadas e integradas somente após revisão e aprovação do responsável pelo repositório.

### 1. Atualizar a branch principal

Antes de iniciar uma nova atividade, certifique-se de que não possui alterações locais pendentes e execute:

```bash
git switch main
git pull origin main
```

### 2. Criar uma branch

Crie uma branch específica para a atividade que será desenvolvida:

```bash
git switch -c feat/informational-pages
```

Exemplos de nomes de branches:

| Branch | Finalidade |
|---|---|
| `feat/home-page` | Desenvolvimento da página inicial. |
| `feat/recipes-page` | Desenvolvimento da página de receitas. |
| `feat/ingredient-search` | Busca por ingredientes. |
| `feat/informational-pages` | Páginas informativas. |
| `feat/food-preservation` | Página de conservação. |
| `fix/navigation` | Correções na navegação. |
| `docs/update-readme` | Atualização da documentação. |

### 3. Desenvolver e testar

Implemente as alterações relacionadas à atividade atribuída, respeitando a estrutura de pastas e os padrões definidos no projeto.

Antes de realizar um commit, verifique os arquivos modificados:

```bash
git status
git diff
```

Teste as alterações no navegador e confira se a navegação e a estilização permanecem funcionando corretamente.

### 4. Realizar os commits

Adicione somente os arquivos relacionados à sua atividade.

Exemplo:

```bash
git add src/pages/about.html src/pages/sdg12.html
git commit -m "feat: add informational pages"
```

Os commits devem ser realizados regularmente, representando pequenas etapas do desenvolvimento.

### 5. Enviar a branch ao GitHub

```bash
git push -u origin feat/informational-pages
```

### 6. Abrir um Pull Request

Após enviar a branch:

1. Acesse o repositório no GitHub;
2. Abra a aba Pull Requests;
3. Clique em New Pull Request;
4. Selecione a branch `main` como base;
5. Selecione a branch desenvolvida como compare;
6. Adicione um título e uma breve descrição das alterações;
7. Clique em Create Pull Request.

### 7. Revisão e aprovação

O responsável pelo repositório realizará a revisão do Pull Request, verificando:

- Organização e legibilidade do código;
- Funcionamento das páginas;
- Compatibilidade com a identidade visual;
- Possíveis conflitos;
- Atendimento aos requisitos da atividade.

Caso sejam solicitadas alterações, o desenvolvedor deverá realizá-las na mesma branch e enviar novos commits.

A integração com a branch `main` será realizada pelo responsável pelo repositório após a aprovação.

### 8. Atualizar o repositório local

Após a integração do Pull Request:

```bash
git switch main
git pull origin main
```

Uma nova branch deverá ser criada para cada nova atividade.

## Padrão de commits

As mensagens de commit devem ser escritas em inglês, utilizando prefixos que identifiquem o tipo de alteração realizada.

| Prefixo | Finalidade |
|---|---|
| `feat` | Implementação de funcionalidades. |
| `fix` | Correção de problemas. |
| `style` | Alterações de estilização. |
| `docs` | Atualização da documentação. |
| `refactor` | Reorganização do código. |
| `chore` | Configurações e dependências. |

Exemplos:

```text
chore: configure tailwind css
feat: add semantic html structure
feat: add home page
feat: add informational pages
feat: add food preservation page
style: apply color palette
fix: improve responsive layout
docs: update readme
```

## Padrões de desenvolvimento

- Nomes de arquivos, variáveis e funções em inglês;
- Comentários do código em português;
- Conteúdo exibido no site em português;
- Utilização de HTML semântico;
- Estilização utilizando Tailwind CSS;
- Organização e indentação consistente do código;
- Utilização de caminhos relativos entre as páginas;
- Manutenção da identidade visual em todas as páginas.

## Regras de colaboração

- Não realizar commits diretamente na branch `main`;
- Criar uma branch para cada atividade;
- Modificar apenas os arquivos relacionados à atividade atribuída;
- Evitar alterações simultâneas nos mesmos arquivos;
- Realizar commits pequenos e descritivos;
- Testar as alterações antes de abrir um Pull Request;
- Não versionar o diretório `node_modules/`;
- Versionar o arquivo `package-lock.json`;
- Não editar manualmente o arquivo `output.css`;
- Centralizar as alterações do `input.css` e do `output.css` no responsável pela estilização;
- Recompilar e versionar o CSS final após a integração das contribuições;
- Não integrar Pull Requests sem a aprovação do responsável pelo repositório.

## Etapas do projeto

### Sprint 1 — Concepção do projeto

- Definição do tema e alinhamento com a ODS 12;
- Pesquisa e fundamentação teórica;
- Definição dos objetivos e funcionalidades;
- Elaboração dos wireframes;
- Criação do repositório e estrutura inicial.

### Sprint 2 — Implementação do projeto

- Configuração do Tailwind CSS;
- Desenvolvimento da estrutura semântica das páginas;
- Implementação da navegação;
- Definição da paleta de cores;
- Estilização das páginas;
- Desenvolvimento colaborativo.

## Referências

### Referências científicas e institucionais

- [UNEP — Food Waste Index Report 2024](https://www.unep.org/resources/publication/food-waste-index-report-2024)
- [ONU Brasil — Objetivos de Desenvolvimento Sustentável](https://brasil.un.org/pt-br/sdgs/12)
- FAO — The State of Food and Agriculture 2019.

### Referências visuais

- [Panelinha](https://panelinha.com.br/)
- [Food Waste Feast](https://foodwastefeast.com/)
- [Love Food Hate Waste](https://lovefoodhatewaste.co.nz/)

## Equipe

Projeto acadêmico desenvolvido por estudantes do curso de Ciência da Computação da Universidade Federal da Fronteira Sul (UFFS), Campus Chapecó.

## Considerações finais

O AlimentaConsciente possui caráter acadêmico e educativo, restringindo sua atuação ao consumo de alimentos no ambiente doméstico.

As orientações disponibilizadas possuem caráter informativo e não substituem recomendações específicas de órgãos sanitários. A eficácia da plataforma na redução do desperdício ainda não foi avaliada.
