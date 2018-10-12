import Mock from 'mockjs'

// 配置拦截AJAX请求行为，设置响应时间
Mock.setup({
  timeout: '1000-3000'
})
const data = () =>
  Mock.mock({
    'list|2-5': [
      {
        'id|+1': 2
      }
    ]
  })

const repeat = type => {
  const data = Mock.mock({
    'name|1-5': type
  })
  return data
}

const booleanTest = type => {
  const data = Mock.mock({
    'isFetching|4-1': type
  })
  return data
}

const objProp = (obj, min, max) => {
  const rule = max ? `${min}-${max}` : `${min}`
  console.log(rule)
  return Mock.mock({
    [`obj|${rule}`]: obj
  })
}

const randomImage = () => {
  const Random = Mock.Random
  const base64Image = Random.dataImage()
  return base64Image
}

export { data, repeat, booleanTest, objProp, randomImage }
