# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Uso da Biblioteca](#2-uso-da-biblioteca)
* [3. Considerações Gerais](#3-consideracoes-gerais)
* [4. Tecnologias Utilizadas](#4-tecnologias-utilizadas)

## 1. Prefácio

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

Esta biblioteca tem a intenção de ler e analisar arquivos no formato
`Markdown`, para verificar os arquivos que contenham links.


## 2. Uso da Biblioteca

Para instalar e executar, rode o seguinte comando no terminal: 

```$ npx https://github.com/thalitagoncalves/SAP004-md-links/ ./ ```


Os resultados serão exibidos no terminal da seguinte forma:

``` 
text: texto "clicável"
link: URL
file: caminho do arquivo
```

## 3. Considerações Gerais
Atualmente, essa biblioteca apenas identifica os links presentes no documento Markdown. Nas versões futuras será implementado validação dos links. 

## 4. Tecnologia Utilizadas

* JavaScript
* Node.js
* Jest
* NPM
