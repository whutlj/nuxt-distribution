// 路由中间件,其实就是自定义函数
// const routerMiddleware = ({ route }) => {
//   console.log(`I am at route: ${route.name}`)
// }

function routerMiddleware(context) {
  console.log('router middleware')
  console.log(`I am at route: `)
  console.log(context)
  return '123'
}
export default routerMiddleware
