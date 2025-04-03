//2.1
const div = document.createElement('div')
document.body.appendChild(div)
div.innerHTML = 'hola'

//2.2
const p = document.createElement('p')
div.appendChild(p)
p.innerHTML = 'soyP'

//2.3
const div2 = document.createElement('div')
document.body.appendChild(div2)
for (let i = 0; i < 6; i++) {
  const p2 = document.createElement('p')
  div2.appendChild(p2)
  p2.innerHTML = 'soy p' + i
}

//2.4
const pDinamica = document.createElement('p')
document.body.appendChild(pDinamica)
pDinamica.innerHTML = 'Soy dinámico!'

//2.5
const h2 = document.querySelector('.fn-insert-here')
h2.innerHTML = 'Wubba Lubba dub dub'

//2.6
const ul = document.createElement('ul')
document.body.appendChild(ul)
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
for (let i = 0; i < apps.length; i++) {
  const li = document.createElement('li')
  ul.appendChild(li)
  li.innerHTML = apps[i]
}

//2.7
const eliminar = document.querySelectorAll('.fn-remove-me')
for (let i = 0; i < eliminar.length; i++) {
  eliminar[i].remove()
}

//2.8
const primerDiv = document.querySelector('body > div')
const pDiv = document.createElement('p')
pDiv.innerHTML = 'Voy en medio!'
primerDiv.after(pDiv)

//2.9
const ultimoDiv = document.querySelectorAll('div.fn-insert-here')
const pDentro = document.createElement('p')
pDentro.innerHTML = 'Voy dentro!'
for (const element of ultimoDiv) {
  element.appendChild(pDentro.cloneNode(true))
}
