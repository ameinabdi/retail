import React from 'react';
import { i18n } from 'src/i18n';
import SellItemListFilter from 'src/view/sellItem/list/SellItemListFilter';
import SellItemListTable from 'src/view/sellItem/list/SellItemListTable';
import SellItemListToolbar from 'src/view/sellItem/list/SellItemListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';

const SellItemListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.sellItem.menu')],
        ]}
      />

      <ContentWrapper>
      <TopbarWrapper>
        <PageTitle>
          {i18n('entities.sellItem.list.title')}
        </PageTitle>

        <SellItemListToolbar />
        </TopbarWrapper>
        <SellItemListFilter />
        <SellItemListTable />
      </ContentWrapper>
    </>
  );
};

export default SellItemListPage;
