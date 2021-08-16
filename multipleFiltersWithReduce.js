const products = [
  {
    formato: '90x90',
    cor: 'azul',
    material: 'concreto',
    unit: 'M2'
  },
  {
    formato: '90x90',
    cor: 'azul',
    material: 'concreto',
    unit: 'M2'
  },
  {
    formato: '90x90',
    cor: 'branco',
    material: 'concreto',
    unit: 'M2'
  },
  {
    formato: '90x90',
    cor: 'azul',
    material: 'mármore',
    unit: 'M2'
  },
  {
    formato: '90x90',
    cor: 'azul',
    material: 'madeira',
    unit: 'M2'
  }
]

const filterByFormat = (product, format) => product.formato === format
const filterByColor = (product, color) => product.cor === color
const filterByMaterial = (product, material) => product.material === material

const filters = [
  (product) => filterByColor(product, 'azul'),
  (product) => filterByFormat(product, '90x90'),
  (product) => filterByMaterial(product, 'concreto')
]

console.log(filters)

const prodReduce = filters.reduce(
  (productsFiltered, currentFilter) => productsFiltered.filter(currentFilter),
  products
)
console.log(prodReduce)
