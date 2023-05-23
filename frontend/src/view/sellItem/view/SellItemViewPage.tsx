import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/sellItem/view/sellItemViewActions';
import selectors from 'src/modules/sellItem/view/sellItemViewSelectors';
import SellItemView from 'src/view/sellItem/view/SellItemView';
import SellItemViewToolbar from 'src/view/sellItem/view/SellItemViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SellItemPage = (props) => {
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
          [i18n('entities.sellItem.menu'), '/sell-item'],
          [i18n('entities.sellItem.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.sellItem.view.title')}
        </PageTitle>

        <SellItemViewToolbar match={match} />

        <SellItemView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default SellItemPage;
