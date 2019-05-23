export const categoryList = [
  {
    name: '足交',
    id: 5048
  },
  {
    name: '美腿',
    id: 4008
  },
  {
    name: '接待员',
    id: 6942
  },
  {
    name: '教师',
    id: 1016
  },
  {
    name: 'OL',
    id: 1001
  },
  {
    name: '护士',
    id: 1013
  },
  {
    name: '颜射',
    id: 5023
  },
  {
    name: '喉奥',
    id: 5009
  },
  {
    name: '泳衣',
    id: 3008
  },
  {
    name: '痴汉',
    id: 4004
  },
  {
    name: '秘书',
    id: 1023
  },
  {
    name: '空姐',
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
