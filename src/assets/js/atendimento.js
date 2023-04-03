const botaoAtender = `
<button class="mdc-button mdc-button--raised primary" onclick="atenderPaciente()">
  <span class="mdc-button__label">Atender</span>
</button>
`

function addPaciente() {
  const table = document.getElementById('table')
  const paciente = document.getElementById('textPaciente')
  const urgencia = document.getElementById('urgencia').checked

  let row
  if (urgencia) {
    row = table.insertRow(0);
    if (table.rows.length > 1) {
      table.rows[1].cells[2].innerHTML = ''
    }
  } else row = table.insertRow(-1)

  const [
    tdInicial,
    tdNome,
    tdBotao
  ] = [
      row.insertCell(0),
      row.insertCell(1),
      row.insertCell(2)
    ]

  tdInicial.innerHTML = `<div class="profile-icon"><span>${String(paciente.value[0]).toUpperCase()}</span></div>`
  tdInicial.width = '56'

  tdNome.innerText = paciente.value
  if (table.rows.length === 1 || urgencia) {
    tdBotao.id = new Date().toISOString();
    tdBotao.innerHTML = botaoAtender
    tdBotao.align = 'right'
  }

  paciente.value = ''
}

function atenderPaciente(index) {
  const table = document.getElementById('table')
  table.deleteRow(0)
  if (table.rows.length >= 1) {
    const tdBotaoNext = table
      .rows[0]
      .cells[2]

    tdBotaoNext.innerHTML = botaoAtender
    tdBotaoNext.align = 'right'
  }
}