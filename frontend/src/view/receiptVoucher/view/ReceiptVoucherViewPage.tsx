import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/receiptVoucher/view/receiptVoucherViewActions';
import selectors from 'src/modules/receiptVoucher/view/receiptVoucherViewSelectors';
import ReceiptVoucherView from 'src/view/receiptVoucher/view/ReceiptVoucherView';
import ReceiptVoucherViewToolbar from 'src/view/receiptVoucher/view/ReceiptVoucherViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ReceiptVoucherPage = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.receiptVoucher.menu'), '/receipt-voucher'],
          [i18n('entities.receiptVoucher.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.receiptVoucher.view.title')}
        </PageTitle>

        <ReceiptVoucherViewToolbar match={match} />

        <ReceiptVoucherView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default ReceiptVoucherPage;
