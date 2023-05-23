import React from 'react';
import { i18n } from 'src/i18n';
import SellListFilter from 'src/view/sell/list/SellListFilter';
import SellListTable from 'src/view/sell/list/SellListTable';
import SellListToolbar from 'src/view/sell/list/SellListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SellListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.sell.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.sell.list.title')}
        </PageTitle>

        <SellListToolbar />
        <SellListFilter />
        <SellListTable />
      </ContentWrapper>
    </>
  );
};

export default SellListPage;
