import React from 'react';
import { i18n } from 'src/i18n';
import ReceiptVoucherListFilter from 'src/view/receiptVoucher/list/ReceiptVoucherListFilter';
import ReceiptVoucherListTable from 'src/view/receiptVoucher/list/ReceiptVoucherListTable';
import ReceiptVoucherListToolbar from 'src/view/receiptVoucher/list/ReceiptVoucherListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';

const ReceiptVoucherListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.receiptVoucher.menu')],
        ]}
      />

      <ContentWrapper>
      <TopbarWrapper>
        <PageTitle>
          {i18n('entities.receiptVoucher.list.title')}
        </PageTitle>

        <ReceiptVoucherListToolbar />
        </TopbarWrapper>
        <ReceiptVoucherListFilter />
        <ReceiptVoucherListTable />
      </ContentWrapper>
    </>
  );
};

export default ReceiptVoucherListPage;
