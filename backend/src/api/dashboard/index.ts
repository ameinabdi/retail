

export default (app) => {
  app.get(
    `/tenant/:tenantId/web-dashboard`,
    require('./dashboardView-web').default,
  );

  app.get(
    `/tenant/:tenantId/app-dashboard`,
    require('./dashboardView-app').default,
  );
  
}