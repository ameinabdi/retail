import React from 'react';
import { i18n } from 'src/i18n';
import PurchaseItemListFilter from 'src/view/purchaseItem/list/PurchaseItemListFilter';
import PurchaseItemListTable from 'src/view/purchaseItem/list/PurchaseItemListTable';
import PurchaseItemListToolbar from 'src/view/purchaseItem/list/PurchaseItemListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';

const PurchaseItemListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.purchaseItem.menu')],
        ]}
      />

      <ContentWrapper>
      <TopbarWrapper>
        <PageTitle>
          {i18n('entities.purchaseItem.list.title')}
        </PageTitle>

        <PurchaseItemListToolbar />
        </TopbarWrapper>
        <PurchaseItemListFilter />
        <PurchaseItemListTable />
      </ContentWrapper>
    </>
  );
};

export default PurchaseItemListPage;
