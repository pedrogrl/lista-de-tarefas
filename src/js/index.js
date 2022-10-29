const btnAdd = document.querySelector('#btn-add')
const btnDelete = document.querySelector('.btn-delete')
const input = document.querySelector('#add-tarefa')
let nTarefas = 0

// Add Tarefa
const addTarefa = () => {
  const areaTarefas = document.querySelector('.area-tarefas')
  // Caso o input não esteja vazio
  if ((input.value !== '')) {
    nTarefas++
    novaTarefa = `<div id="${nTarefas}" class="tarefa center">
    <!-- Icone Tarefa -->
    <div class="tarefa-icone" onclick="marcarTarefa(${nTarefas})">
      <i id="icone-${nTarefas}" class="mdi mdi-circle-outline"></i>
    </div>
    <!-- Texto Tarefa -->
    <div class="tarefa-texto prevent-select" onclick="marcarTarefa(${nTarefas})">
      <p>${input.value}</p>
    </div>
    <!-- Botão Remover Tarefa -->
    <div class="tarefa-remover">
      <button class="btn-delete" onclick="delTarefa(${nTarefas})">
        Delete
      </button>
    </div>
  </div>`
    areaTarefas.innerHTML += novaTarefa
    input.value = '', input.focus() // Limpar input

  // Caso o input esteja vazio 
  } else {
    input.setAttribute('placeholder', 'Inválido! Tente novamente.')
    setTimeout(() => {
      input.setAttribute('placeholder', 'Insira uma nova tarefa')
    }, 1500);
  }
}
// Del Tarefa
const delTarefa = (id) => {
  const tarefa = document.getElementById(id)
  tarefa.remove()
}
// Marcar Tarefa
const marcarTarefa = (id) => {
  const tarefa = document.getElementById(id)
  const tarefaClasses = tarefa.getAttribute('class')
  const icone = document.getElementById(`icone-${id}`)

  if (tarefaClasses == 'tarefa center') {
    tarefa.classList.add('marcado')
    icone.classList.remove('mdi-circle-outline')
    icone.classList.add('mdi-checkbox-marked-circle')
  } else {
    tarefa.classList.remove('marcado')
    icone.classList.remove('mdi-checkbox-marked-circle')
    icone.classList.add('mdi-circle-outline')
  }
}


btnAdd.addEventListener('click', addTarefa)
input.addEventListener('keyup', (event) => {
  if (event.keyCode == 13) {
    addTarefa()
  }
})