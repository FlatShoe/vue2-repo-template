import _ from 'lodash'
class RouteMenus {
  generateMenus(routes) {
    const result = []
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i]
      if (_.isEmpty(route.meta) && _.isEmpty(route.children)) continue
      if (_.isEmpty(route.meta) && !_.isEmpty(route.children)) {
        result.push(...this.generateMenus(route.children))
        continue
      }
      const tempRoute = {
        ...route,
        children: []
      }
      if ((route.meta.icon && route.meta.title) || route.meta.primary) {
        result.push(tempRoute)
      }
      if (!_.isEmpty(route.children)) {
        tempRoute.children.push(...this.generateMenus(route.children))
      }
    }
    return result
  }
}

export default new RouteMenus()
