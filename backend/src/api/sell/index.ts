export default (app) => {
  app.post(
    `/tenant/:tenantId/sell`,
    require('./sellCreate').default,
  );
  app.put(
    `/tenant/:tenantId/sell/:id`,
    require('./sellUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/sell/import`,
    require('./sellImport').default,
  );
  app.delete(
    `/tenant/:tenantId/sell`,
    require('./sellDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/sell/autocomplete`,
    require('./sellAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/sell`,
    require('./sellList').default,
  );
  app.get(
    `/tenant/:tenantId/sell/:id`,
    require('./sellFind').default,
  );
};
