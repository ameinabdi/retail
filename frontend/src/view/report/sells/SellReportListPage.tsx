import React from 'react';
import { i18n } from 'src/i18n';
import SellReportListFilter from 'src/view/report/sells/SellReportListFilter';
import SellReportListTable from 'src/view/report/sells/SellReportListTable';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SellReportListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.report.sellReport.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.report.sellReport.menu')}
        </PageTitle>
        <SellReportListFilter />
        <SellReportListTable />
      </ContentWrapper>
    </>
  );
};

export default SellReportListPage;
