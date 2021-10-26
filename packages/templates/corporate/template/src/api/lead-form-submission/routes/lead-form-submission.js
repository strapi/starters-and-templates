module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/lead-form-submissions',
      handler: 'lead-form-submission.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/lead-form-submissions/:id',
      handler: 'lead-form-submission.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/lead-form-submissions',
      handler: 'lead-form-submission.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/lead-form-submissions/:id',
      handler: 'lead-form-submission.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/lead-form-submissions/:id',
      handler: 'lead-form-submission.delete',
      config: { policies: [] }
    }
  ]
}
