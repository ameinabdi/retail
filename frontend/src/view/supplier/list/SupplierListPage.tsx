import React from 'react';
import { i18n } from 'src/i18n';
import SupplierListFilter from 'src/view/supplier/list/SupplierListFilter';
import SupplierListTable from 'src/view/supplier/list/SupplierListTable';
import SupplierListToolbar from 'src/view/supplier/list/SupplierListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SupplierListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.supplier.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.supplier.list.title')}
        </PageTitle>

        <SupplierListToolbar />
        <SupplierListFilter />
        <SupplierListTable />
      </ContentWrapper>
    </>
  );
};

export default SupplierListPage;
