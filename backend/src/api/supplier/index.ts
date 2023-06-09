export default (app) => {
  app.post(
    `/tenant/:tenantId/supplier`,
    require('./supplierCreate').default,
  );
  app.put(
    `/tenant/:tenantId/supplier/:id`,
    require('./supplierUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/supplier/import`,
    require('./supplierImport').default,
  );
  app.delete(
    `/tenant/:tenantId/supplier`,
    require('./supplierDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/supplier/autocomplete`,
    require('./supplierAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/supplier`,
    require('./supplierList').default,
  );
  app.get(
    `/tenant/:tenantId/supplier/:id`,
    require('./supplierFind').default,
  );
  app.get(
    `/tenant/:tenantId/supplier-balance/autocomplete`,
    require('./supplierBalanceAutocomplete').default,
  );
};
