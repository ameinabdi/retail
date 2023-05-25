import React from 'react';
import { i18n } from 'src/i18n';
import StockListFilter from 'src/view/product/stock/StockListFilter';
import StockListTable from 'src/view/product/stock/StockListTable';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const StockListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.stock.menu')],
        ]}
      />

      <ContentWrapper>
        
        <PageTitle>
          {i18n('entities.stock.list.title')}
        </PageTitle>
        <StockListFilter />
        <StockListTable />
      </ContentWrapper>
    </>
  );
};

export default StockListPage;
