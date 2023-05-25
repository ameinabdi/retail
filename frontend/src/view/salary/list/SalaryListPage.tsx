import React from 'react';
import { i18n } from 'src/i18n';
import SalaryListFilter from 'src/view/salary/list/SalaryListFilter';
import SalaryListTable from 'src/view/salary/list/SalaryListTable';
import SalaryListToolbar from 'src/view/salary/list/SalaryListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';

const SalaryListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.salary.menu')],
        ]}
      />

      <ContentWrapper>
      <TopbarWrapper>
        <PageTitle>
          {i18n('entities.salary.list.title')}
        </PageTitle>

        <SalaryListToolbar />
        </TopbarWrapper>
        <SalaryListFilter />
        <SalaryListTable />
      </ContentWrapper>
    </>
  );
};

export default SalaryListPage;
