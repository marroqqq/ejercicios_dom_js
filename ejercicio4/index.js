//1.1
const boton = document.getElementById('btnToClick')
boton.addEventListener('click', (evento) => {
  console.log('Boton clickeado', evento)
})

//1.2
const focusInput = document.querySelector('.focus')
focusInput.addEventListener('focus', () => {
  console.log(focusInput.value)
})

//1.3
const valueInput = document.querySelector('.value')
valueInput.addEventListener('input', () => {
  console.log(valueInput.value)
})

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]
const ul = document.createElement('ul')
document.body.appendChild(ul)
for (const element of albums) {
  const li = document.createElement('li')
  ul.appendChild(li)
  li.innerHTML = element
}
