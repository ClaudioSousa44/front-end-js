'use strict'

const buttonAdicionar = document.getElementById('adicionar')

const adicionarCard = (nome, nota) => {

    //    const container = document.getElementById('container')
    //    container.innerHTML = container.innerHTML + '<div class="item"> </div>'


    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    const nota1 = nota
    const nomeA = nome

    if (nota1 == '' || nomeA == '') {
        alert('Preencha todos os campos')
    } else if (isNaN(nota1)) {
        alert('Digite apenas números na nota')
    } else if (nota1 > 10 || nota1 < 0) {
        alert('Preencha com notas entre 0 e 10')
    } else {
        if (parseFloat(nota1) < 5) {
            novaDiv.classList.add('aluno__vermelho')



        } else {

            novaDiv.classList.add('aluno__azul')

        }


        novaDiv.innerHTML = ` <h2 class="aluno__nome"> ${nomeA} </h2>
                        <span class="aluno__nota"> ${nota1} </span>`
    }


    container.appendChild(novaDiv)

}

const handClick = () => {
    const nome = prompt('Digite o nome do aluno')
    const nota = prompt('Coloque sua nota')
    adicionarCard(nome, nota)
}

buttonAdicionar.addEventListener('click', handClick)