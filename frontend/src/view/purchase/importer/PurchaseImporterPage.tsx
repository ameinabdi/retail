import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/purchase/importer/purchaseImporterActions';
import fields from 'src/modules/purchase/importer/purchaseImporterFields';
import selectors from 'src/modules/purchase/importer/purchaseImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const PurchaseImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.purchase.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.purchase.menu'), '/purchase'],
          [i18n('entities.purchase.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.purchase.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default PurchaseImportPage;
