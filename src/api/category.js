export const categoryList = [
  {
    name: 'foot',
    id: 5048
  },
  {
    name: 'leg',
    id: 4008
  },
  {
    name: 'jiedaiyuan',
    id: 6942
  },
  {
    name: 'teacher',
    id: 1016
  },
  {
    name: 'ol',
    id: 1001
  },
  {
    name: 'hushi',
    id: 1013
  },
  {
    name: 'faceshooter',
    id: 5023
  },
  {
    name: 'swim',
    id: 3008
  },
  {
    name: 'chihan',
    id: 4004
  },
  {
    name: 'mishu',
    id: 1023
  }
]

// 根据 id 找 name
export function getCateName(id) {
  var cateItem = categoryList.filter(function(item) {
    return item.id === id
  })
  return cateItem
}
