import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/paymentVoucher/importer/paymentVoucherImporterActions';
import fields from 'src/modules/paymentVoucher/importer/paymentVoucherImporterFields';
import selectors from 'src/modules/paymentVoucher/importer/paymentVoucherImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const PaymentVoucherImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.paymentVoucher.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.paymentVoucher.menu'), '/payment-voucher'],
          [i18n('entities.paymentVoucher.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.paymentVoucher.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default PaymentVoucherImportPage;
