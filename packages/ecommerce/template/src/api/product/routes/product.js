module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/products',
      handler: 'product.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/products/:slug',
      handler: 'product.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/products',
      handler: 'product.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/products/:id',
      handler: 'product.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/products/:id',
      handler: 'product.delete',
      config: { policies: [] }
    }
  ]
}