//1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')
document.body.appendChild(ul)
for (const element of countries) {
  const li = document.createElement('li')
  ul.appendChild(li)
  li.innerHTML = element
}

//1.2
const p = document.querySelector('.fn-remove-me')
p.remove()

//1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const div = document.querySelector('[data-function="printHere"]')
const ulCars = document.createElement('ul')
div.appendChild(ulCars)
for (const element of cars) {
  const li = document.createElement('li')
  ulCars.appendChild(li)
  li.innerHTML = element
}

//1.4
const imagenes = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
imagenes.forEach((element) => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const h4 = document.createElement('h4')
  div.appendChild(h4)
  h4.innerHTML = element.title
  const img = document.createElement('img')
  div.appendChild(img)
  img.src = element.imgUrl
})
