import React from 'react';
import { i18n } from 'src/i18n';
import AccountsListFilter from 'src/view/accounts/list/AccountsListFilter';
import AccountsListTable from 'src/view/accounts/list/AccountsListTable';
import AccountsListToolbar from 'src/view/accounts/list/AccountsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AccountsListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.accounts.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.accounts.list.title')}
        </PageTitle>

        <AccountsListToolbar />
        <AccountsListFilter />
        <AccountsListTable />
      </ContentWrapper>
    </>
  );
};

export default AccountsListPage;
