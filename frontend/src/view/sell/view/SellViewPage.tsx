import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/sell/view/sellViewActions';
import selectors from 'src/modules/sell/view/sellViewSelectors';
import SellView from 'src/view/sell/view/SellView';
import SellViewToolbar from 'src/view/sell/view/SellViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SellPage = (props) => {
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
          [i18n('entities.sell.menu'), '/sell'],
          [i18n('entities.sell.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.sell.view.title')}
        </PageTitle>

        <SellViewToolbar match={match} />

        <SellView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default SellPage;
