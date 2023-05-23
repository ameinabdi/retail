import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/supplier/view/supplierViewActions';
import selectors from 'src/modules/supplier/view/supplierViewSelectors';
import SupplierView from 'src/view/supplier/view/SupplierView';
import SupplierViewToolbar from 'src/view/supplier/view/SupplierViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SupplierPage = (props) => {
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
          [i18n('entities.supplier.menu'), '/supplier'],
          [i18n('entities.supplier.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.supplier.view.title')}
        </PageTitle>

        <SupplierViewToolbar match={match} />

        <SupplierView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default SupplierPage;
