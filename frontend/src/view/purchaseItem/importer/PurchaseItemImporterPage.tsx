import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/purchaseItem/importer/purchaseItemImporterActions';
import fields from 'src/modules/purchaseItem/importer/purchaseItemImporterFields';
import selectors from 'src/modules/purchaseItem/importer/purchaseItemImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const PurchaseItemImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.purchaseItem.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.purchaseItem.menu'), '/purchase-item'],
          [i18n('entities.purchaseItem.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.purchaseItem.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default PurchaseItemImportPage;
