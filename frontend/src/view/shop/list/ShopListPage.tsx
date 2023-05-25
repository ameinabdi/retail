import React from 'react';
import { i18n } from 'src/i18n';
import ShopListFilter from 'src/view/shop/list/ShopListFilter';
import ShopListTable from 'src/view/shop/list/ShopListTable';
import ShopListToolbar from 'src/view/shop/list/ShopListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';

const ShopListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.shop.menu')],
        ]}
      />

      <ContentWrapper>
      <TopbarWrapper>
        <PageTitle>
          {i18n('entities.shop.list.title')}
        </PageTitle>

        <ShopListToolbar />
        </TopbarWrapper>
        <ShopListFilter />
        <ShopListTable />
      </ContentWrapper>
    </>
  );
};

export default ShopListPage;
