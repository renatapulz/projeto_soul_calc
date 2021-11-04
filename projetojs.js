// acessibilidade - texto
let tamanho = 26
function diminuir() {
  tamanho--
  document.body.style.fontSize = tamanho + 'px'
}
function aumentar() {
  tamanho++
  document.body.style.fontSize = tamanho + 'px'
}

// slider
let intervalo = 3000
function slide1() {
  document.getElementById('banner').src = 'img/banner1.jpg'
  setTimeout('slide2()', intervalo)
}

function slide2() {
  document.getElementById('banner').src = 'img/banner2.jpg'
  setTimeout('slide3()', intervalo)
}

function slide3() {
  document.getElementById('banner').src = 'img/banner3.jpg'
  setTimeout('slide1()', intervalo)
}

// botao dark mode - ativar e desativar:

const escurecer = () => {
  if (document.getElementById('tudo').classList.contains('dark')) {
    document.getElementById('tudo').className = ''
  } else {
    document.getElementById('tudo').className = 'dark'
  }
}

// PAGINA CONVERSAO:

const resetar = () => {
  document.getElementById('valoremreal').value = ''
  document.getElementById('resultvalor').innerHTML = ''
}

const resetar2 = () => {
  document.getElementById('valoremcelsius').value = ''
  document.getElementById('resultemp').innerHTML = ''
}

// conversor de real:
const converterreal = () => {
  let resultadovalor = 0
  const real = parseFloat(document.getElementById('valoremreal').value)
  const opcmoeda = document.getElementById('opcaomoeda').value
  if (isNaN(real)) {
    alert('Digite um valor em real')
  } else {
    if (opcmoeda == 'd') {
      resultadovalor = real / 5.06
    } else {
      resultadovalor = real / 6
    }
  }

  document.getElementById('resultvalor').innerHTML = ` ${resultadovalor.toFixed(
    2
  )}`
}

// conversor de temperatura:
const convertertemp = () => {
  let resultadotemp = 0
  const temp = parseFloat(document.getElementById('valoremcelsius').value)
  const opctemp = document.getElementById('opcaotemp').value
  if (isNaN(temp)) {
    alert('Digite um valor para temperatura')
  } else {
    if (opctemp == 'f') {
      resultadotemp = (temp * 9) / 5 + 32
    } else {
      resultadotemp = temp + 273
    }
  }

  document.getElementById('resultemp').innerHTML = ` ${resultadotemp.toFixed(
    2
  )}`
}

// calculadora:
const limpar = () => {
  document.getElementById('a').value = ''
  document.getElementById('b').value = ''
  document.getElementById('result').innerHTML = 'Resultado'
}

const calcular = operacao => {
  const valorA = parseFloat(document.getElementById('a').value)
  const valorB = parseFloat(document.getElementById('b').value)
  let resultado = ''

  switch (operacao) {
    case 'somar':
      resultado = somar(valorA, valorB)
      break
    case 'subtrair':
      resultado = subtrair(valorA, valorB)
      break
    case 'multiplicar':
      resultado = multiplicar(valorA, valorB)
      break
    case 'dividir':
      resultado = dividir(valorA, valorB)
      break
    case 'porcentagem':
      resultado = porcentagem(valorA, valorB)
      break
    case 'aelevado2':
      resultado = aelevado2(valorA)
      break
    case 'belevado2':
      resultado = belevado2(valorB)
      break
    case 'aelevadob':
      resultado = aelevadob(valorA, valorB)
      break
  }

  document.getElementById('result').innerHTML = resultado
}

const somar = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    alert('Verifique os valores nos campos A e B')
    return 'Resultado'
  }
  return a + b
}

const subtrair = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    alert('Verifique os valores nos campos A e B')
    return 'Resultado'
  }
  return a - b
}

const multiplicar = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    alert('Verifique os valores nos campos A e B')
    return 'Resultado'
  }
  return a * b
}

const dividir = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    alert('Verifique os valores nos campos A e B')
    return 'Resultado'
  }
  return a / b
}

const porcentagem = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    alert('Verifique os valores nos campos A e B')
    return 'Resultado'
  }
  return (a * b) / 100
}

const aelevado2 = a => {
  if (isNaN(a)) {
    alert('Verifique os valores no campo A')
    return 'Resultado'
  }
  return a * a
}

const belevado2 = b => {
  if (isNaN(b)) {
    alert('Verifique os valores no campo B')
    return 'Resultado'
  }
  return b * b
}

const aelevadob = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    alert('Verifique os valores nos campos A e B')
    return 'Resultado'
  }

  return Math.pow(a, b)
}
