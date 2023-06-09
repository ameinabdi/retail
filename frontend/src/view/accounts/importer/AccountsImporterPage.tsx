import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/accounts/importer/accountsImporterActions';
import fields from 'src/modules/accounts/importer/accountsImporterFields';
import selectors from 'src/modules/accounts/importer/accountsImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AccountsImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.accounts.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.accounts.menu'), '/accounts'],
          [i18n('entities.accounts.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.accounts.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default AccountsImportPage;
