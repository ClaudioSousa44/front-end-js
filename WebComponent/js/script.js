'use strict'

class card extends HTMLElement {
    constructor(){
        super()
         this.shadow = this.attachShadow({mode:'open'})
         this.nome = 'Nome do aluno'
         this.foto = null
         this.cor = '#000'
         this.turma = 'Turma do aluno'
    }

    static get observedAttributes(){
        return['nome', 'foto', 'cor', 'turma']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
        
    }

    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
        
    }

    styles(){
        const css = document.createElement('style')
        css.textContent =
        `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .card{
            width: 200px;
            height: 300px;
            display: grid;
            grid-template-rows: 20% 60% 20%;
            place-items: center;
            background-color:${this.cor};
        }
        .card__text{
            color:#f4fF22  ;
            font-size: 0.5rem;
            font-weight: 600;
        }
        .card__image{
            height: 150px;
            width: 150px;
            border-radius: 50%;
            background: #00f;
            background-image: url(${this.foto});
            background-size: cover;
        }
        `
        return css
    }

    component(){
        const card = document.createElement('div')
        card.classList.add('card')
        const nomeAluno = document.createElement('div')
        nomeAluno.classList.add('card__text')
        nomeAluno.textContent = this.nome
        const imagem = document.createElement('div')
        imagem.classList.add('card__image')
        const turma = document.createElement('div')
        turma.classList.add('card__text')
        turma.textContent = this.turma

        card.append(nomeAluno, imagem, turma)

        return card
    }
}

customElements.define('card-claudio', card)