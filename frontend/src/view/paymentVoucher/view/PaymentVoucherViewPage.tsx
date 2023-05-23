import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/paymentVoucher/view/paymentVoucherViewActions';
import selectors from 'src/modules/paymentVoucher/view/paymentVoucherViewSelectors';
import PaymentVoucherView from 'src/view/paymentVoucher/view/PaymentVoucherView';
import PaymentVoucherViewToolbar from 'src/view/paymentVoucher/view/PaymentVoucherViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const PaymentVoucherPage = (props) => {
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
          [i18n('entities.paymentVoucher.menu'), '/payment-voucher'],
          [i18n('entities.paymentVoucher.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.paymentVoucher.view.title')}
        </PageTitle>

        <PaymentVoucherViewToolbar match={match} />

        <PaymentVoucherView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default PaymentVoucherPage;
