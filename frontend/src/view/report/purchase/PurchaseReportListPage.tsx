import React from 'react';
import { i18n } from 'src/i18n';
import PurchaseItemListFilter from 'src/view/report/purchase/PurchaseReportListFilter';
import PurchaseReportListTable from 'src/view/report/purchase/PurchaseReportListTable';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';

const PurchaseItemListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.report.purchaseReport.menu'),],
        ]}
      />

      <ContentWrapper>
        <PurchaseItemListFilter />
        <PurchaseReportListTable />
      </ContentWrapper>
    </>
  );
};

export default PurchaseItemListPage;
