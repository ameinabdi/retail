import React from 'react';
import { i18n } from 'src/i18n';
import AdvanceListFilter from 'src/view/advance/list/AdvanceListFilter';
import AdvanceListTable from 'src/view/advance/list/AdvanceListTable';
import AdvanceListToolbar from 'src/view/advance/list/AdvanceListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AdvanceListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.advance.menu')],
        ]}
      />

      <ContentWrapper>
      <TopbarWrapper>
        <PageTitle>
          {i18n('entities.advance.list.title')}
        </PageTitle>

        <AdvanceListToolbar />
        </TopbarWrapper>
        <AdvanceListFilter />
        <AdvanceListTable />
      </ContentWrapper>
    </>
  );
};

export default AdvanceListPage;
