import React from 'react';
import { i18n } from 'src/i18n';
import PurchaseListFilter from 'src/view/purchase/list/PurchaseListFilter';
import PurchaseListTable from 'src/view/purchase/list/PurchaseListTable';
import PurchaseListToolbar from 'src/view/purchase/list/PurchaseListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';

const PurchaseListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.purchase.menu')],
        ]}
      />

      <ContentWrapper>
      <TopbarWrapper>
        <PageTitle>
          {i18n('entities.purchase.list.title')}
        </PageTitle>

        <PurchaseListToolbar />
        </TopbarWrapper>
        <PurchaseListFilter />
        <PurchaseListTable />
      </ContentWrapper>
    </>
  );
};

export default PurchaseListPage;
