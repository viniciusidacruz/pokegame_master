# Pokegame

## _Desafio front-end_

Aplicação Web simulando um jogo onde possamos capturar pokemons aleatórios e consegui manipular esses dados ou até mesmo criar um novo pokemon.

## Features

- [x] Landing page com um botão para iniciar a aplicação (qualquer url inexistente deve redirecionar o usuário para essa landing page).
- [x] Personagem no centro da página.
- [x] Barra na esquerda indicando quantos Pokémons ele já capturou (limite de 6) + botão de criação.
- [x] Ao passar o mouse no personagem é exibido o tooltip correspondente.
- [x] Ao clicar no personagem é feita uma busca por um Pokémon aleatório (id de 1 a 807).
- [x] Com o resultado da busca é aberto um modal mostrando os detalhes do Pokémon.
- [x] Usuário tem a opção de capturá-lo, clicando na pokébola, ou fechar o modal.
- [x] Se ele capturar o Pokémon, esse Pokémon é exibido na SideBar e o modal de captura desaparece.
- [x] Usuário pode capturar até 6 Pokémons.
- [x] Selecionando qualquer Pokémon na SideBar o usuário pode ver os detalhes do Pokémon.
- [x] O(s) tipo(s) do Pokémon deve ser traduzido (ex: water => Água).
- [x] Usuário pode editar SOMENTE o nome de um Pokémon que foi capturado.
- [x] Na SideBar o usuário tem a possibilidade de criar um Pokémon (um Pokémon pode ter no máximo 2 "tipos").
- [x] O formulário de criação de Pokémon deve conter validações em todos os campos.
- [x] Caso algum campo não esteja preenchido, o botão de criação deve ficar bloqueado.
- [x] Para um Pokémon criado o usuário pode editar qualquer informação ou liberá-lo.
- [x] Sempre que liberar um Pokémon é possível capturar outro através da busca ou criar um customizado.
- [x] Caso as 6 posições estejam ocupadas o usuário não pode mais buscar nem criar novos Pokémons.
- [x] Responsividade para resoluções desktop e mobile. (Ex: 1280 x 720, 360 x 740)

## Técnologias

Cada técnologia escolhida para essa aplicação foi decidida cuidadosamente em que o desenvolvedor se sentisse confortável e também com o tempo para o desenvolvimento:

- Typescript
- Styled-components
- Eslint
- Prettier
- Husky
- Axios
- Next JS
- Redux Toolkit
- Jest
- Testing Library
- Lint-staged

## Instalação

Certifique que tenha o [Node.js](https://nodejs.org/) instalado e também o NVM para usar a versão exata do node que foi usada no desenvolvimento da aplicação.

Para instalar as dependências basta rodar o script:

```sh
yarn first-install
```

e logo em seguida para rodar a aplicação

```sh
yarn dev
```

Observação: Para certeza que tudo ocorrerá bem, a aplicação foi configurada para rodar apenas com Yarn ou pnpm.
