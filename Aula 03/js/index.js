'use strict'

import {produtos} from "./produtos.js"
import '../../WebComponent/js/script.js'

const criaCard = ( produto ) => {
    const card = document.createElement('card-claudio')
    // card.classList.add('card')

    const foto = document.createElement('img')
    foto.classList.add('card__image')
    card.foto = `./img/${produto.image}`

    const titulo = document.createElement('h5')
    titulo.classList.add('card__title')
    card.nome = produto.name

    const descricao = document.createElement('p')
    descricao.classList.add('card__description')
    card.turma = produto.description

    const preco = document.createElement('span')
    preco.classList.add('card__price')
    preco.textContent = `R$ ${produto.price} `

    // card.append(foto, titulo, descricao, preco)

    return card
    
}

const carregarProdutos = () => {
    const container = document.getElementById('container')

    const cards = produtos.map (criaCard)

    container.replaceChildren(...cards)
}

carregarProdutos()