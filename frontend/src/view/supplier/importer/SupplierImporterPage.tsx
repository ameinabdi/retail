import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/supplier/importer/supplierImporterActions';
import fields from 'src/modules/supplier/importer/supplierImporterFields';
import selectors from 'src/modules/supplier/importer/supplierImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SupplierImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.supplier.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.supplier.menu'), '/supplier'],
          [i18n('entities.supplier.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.supplier.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default SupplierImportPage;
