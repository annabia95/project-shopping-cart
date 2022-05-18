Este projeto contém os requisitos realizados por _[Anna Beatriz Garcia Trajano de Sá](www.linkedin.com/in/anna-beatriz-trajano-de-sá)_ enquanto estudava na [Trybe](https://www.betrybe.com/) :rocket:

# Project Shopping Cart

Nesse projeto desenvolvi um carrinho de compras totalmente dinâmico! E o melhor: consumindo dados diretamente de uma API! Aqui utilizei a API do Mercado Livre para buscar os produtos à venda.

Veja o exemplo a seguir do layout do projeto!

## Demo

![Demo](img/video.gif)

## Instalação do projeto localmente:
 
Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _annagarcia@id.uff.br_ 

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir projetos
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd projetos
  git clone git@github.com:annabia95/project-shopping-cart.git
```

3. Acesse o diretório do projeto e depois utilize o comando **npm i** para instalar todas as dependências necessárias:
```javascript
  cd project-shopping-cart
  npm i
```

4. Por último, rode o comando **npm start** e acesse o projeto via browser, no caminho `http://localhost:3000/project-shopping-cart`.

```javascript
  npm start
```

## Habilidades Desenvolvidas

Neste projeto, desenvolvi as seguintes habilidades:

 - Fazer requisições a uma API (Application Programming Interface) do Mercado Livre;
 - Utilizar os seus conhecimentos sobre JavaScript, CSS e HTML;
 - Trabalhar com funções assíncronas;
 - Implementar testes unitários.

## Escopo do Projeto

- [Requisitos do projeto](#requisitos-do-projeto)
  - [API Shopping Cart](#api-shopping-cart)
    - [1. Crie uma listagem de produtos](#1-crie-uma-listagem-de-produtos)
    - [2. Adicione o produto ao carrinho de compras](#2-adicione-o-produto-ao-carrinho-de-compras)
    - [3. Remova o item do carrinho de compras ao clicar nele](#3-remova-o-item-do-carrinho-de-compras-ao-clicar-nele)
    - [4. Carregue o carrinho de compras através do **LocalStorage** ao iniciar a página](#4-carregue-o-carrinho-de-compras-através-do-localstorage-ao-iniciar-a-página)
    - [5. Some o valor total dos itens do carrinho de compras](#5-some-o-valor-total-dos-itens-do-carrinho-de-compras)
    - [6. Crie um botão para limpar o carrinho de compras](#6-crie-um-botão-para-limpar-o-carrinho-de-compras)
    - [7. Adicione um texto de "carregando" durante uma requisição à API](#7-adicione-um-texto-de-carregando-durante-uma-requisição-à-api)
    - [8. Desenvolva testes de no mínimo 25% de cobertura total e 100% da função `fetchProducts`](#8-desenvolva-testes-de-no-mínimo-25-de-cobertura-total-e-100-da-função-fetchproducts)
    - [9. Desenvolva testes de no mínimo 50% de cobertura total e 100% da função `fetchItem`](#9-desenvolva-testes-de-no-mínimo-50-de-cobertura-total-e-100-da-função-fetchitem)
    - [10. Desenvolva testes de no mínimo 75% de cobertura total e 100% da função `saveCartItems`](#10-desenvolva-testes-de-no-mínimo-75-de-cobertura-total-e-100-da-função-savecartitems)
    - [11. Desenvolva testes para atingir 100% de cobertura total e 100% da função `getSavedCartItems`](#11-desenvolva-testes-para-atingir-100-de-cobertura-total-e-100-da-função-getsavedcartitems)
