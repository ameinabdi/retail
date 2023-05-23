import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/receiptVoucher/importer/receiptVoucherImporterActions';
import fields from 'src/modules/receiptVoucher/importer/receiptVoucherImporterFields';
import selectors from 'src/modules/receiptVoucher/importer/receiptVoucherImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ReceiptVoucherImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.receiptVoucher.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.receiptVoucher.menu'), '/receipt-voucher'],
          [i18n('entities.receiptVoucher.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.receiptVoucher.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default ReceiptVoucherImportPage;
