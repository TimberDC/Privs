export const categoryList = [
  {
    name: 'Foot',
    id: 5048
  },
  {
    name: 'Leg',
    id: 4008
  },
  {
    name: 'Waiter',
    id: 6942
  },
  {
    name: 'Teacher',
    id: 1016
  },
  {
    name: 'Socks',
    id: 3006
  },
  {
    name: 'OL',
    id: 1001
  },
  {
    name: 'Nurse',
    id: 1013
  },
  {
    name: 'Face',
    id: 5023
  },
  {
    name: 'Mouth',
    id: 5009
  },
  {
    name: 'Swim',
    id: 3008
  },
  {
    name: 'Chihan',
    id: 4004
  },
  {
    name: 'Mishu',
    id: 1023
  },
  {
    name: 'Flight',
    id: 1007
  }
]

// 根据 id 找 name
export function getCateName(id) {
  var cateItem = categoryList.filter(function(item) {
    return item.id === id
  })
  return cateItem
}
