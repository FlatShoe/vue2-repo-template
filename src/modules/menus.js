class RouteMenus {
  filterRoutes(routes) {
    const result = []
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i]
      if (route.meta && route.meta.title && route.meta.icon) {
        result.push(route)
      }
    }
    return result
  }
}

export default new RouteMenus()
