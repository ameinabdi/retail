import React from 'react';
import { i18n } from 'src/i18n';
import PaymentVoucherListFilter from 'src/view/paymentVoucher/list/PaymentVoucherListFilter';
import PaymentVoucherListTable from 'src/view/paymentVoucher/list/PaymentVoucherListTable';
import PaymentVoucherListToolbar from 'src/view/paymentVoucher/list/PaymentVoucherListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';

const PaymentVoucherListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.paymentVoucher.menu')],
        ]}
      />

      <ContentWrapper>
      <TopbarWrapper>
        <PageTitle>
          {i18n('entities.paymentVoucher.list.title')}
        </PageTitle>

        <PaymentVoucherListToolbar />
        </TopbarWrapper>
        <PaymentVoucherListFilter />
        <PaymentVoucherListTable />
      </ContentWrapper>
    </>
  );
};

export default PaymentVoucherListPage;
