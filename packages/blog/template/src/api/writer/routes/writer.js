module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/writers',
      handler: 'writer.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/writers/:id',
      handler: 'writer.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/writers',
      handler: 'writer.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/writers/:id',
      handler: 'writer.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/writers/:id',
      handler: 'writer.delete',
      config: { policies: [] }
    }
  ]
}