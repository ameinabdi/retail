export default (app) => {
  app.post(
    `/tenant/:tenantId/receipt-voucher`,
    require('./receiptVoucherCreate').default,
  );
  app.put(
    `/tenant/:tenantId/receipt-voucher/:id`,
    require('./receiptVoucherUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/receipt-voucher/import`,
    require('./receiptVoucherImport').default,
  );
  app.delete(
    `/tenant/:tenantId/receipt-voucher`,
    require('./receiptVoucherDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/receipt-voucher/autocomplete`,
    require('./receiptVoucherAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/receipt-voucher`,
    require('./receiptVoucherList').default,
  );
  app.get(
    `/tenant/:tenantId/receipt-voucher/:id`,
    require('./receiptVoucherFind').default,
  );
};
