import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/purchaseItem/view/purchaseItemViewActions';
import selectors from 'src/modules/purchaseItem/view/purchaseItemViewSelectors';
import PurchaseItemView from 'src/view/purchaseItem/view/PurchaseItemView';
import PurchaseItemViewToolbar from 'src/view/purchaseItem/view/PurchaseItemViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const PurchaseItemPage = (props) => {
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
          [i18n('entities.purchaseItem.menu'), '/purchase-item'],
          [i18n('entities.purchaseItem.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.purchaseItem.view.title')}
        </PageTitle>

        <PurchaseItemViewToolbar match={match} />

        <PurchaseItemView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default PurchaseItemPage;
