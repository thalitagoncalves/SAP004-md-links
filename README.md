# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Uso da Biblioteca](#2-uso-da-biblioteca)

## 1. Prefácio

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

Esta biblioteca tem a intenção de ler e analisar arquivos no formato
`Markdown`, para verificar os arquivos que contenham links.


## 2. Uso da Biblioteca

Para instalar, use o seguinte comando no terminal: 

```$ npm i md-links-thalitagoncalves```

Para buscar os links do seu arquivo md, execute o seguinte comando: 

```$ todo ./caminho-do-seu-diretrio/```

Os resultados serão exibidos no terminal da seguinte forma:

``` text: texto "clicável"
    link: URL
    file: caminho do arquivo```
