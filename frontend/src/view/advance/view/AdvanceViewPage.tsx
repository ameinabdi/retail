import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/advance/view/advanceViewActions';
import selectors from 'src/modules/advance/view/advanceViewSelectors';
import AdvanceView from 'src/view/advance/view/AdvanceView';
import AdvanceViewToolbar from 'src/view/advance/view/AdvanceViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AdvancePage = (props) => {
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
          [i18n('entities.advance.menu'), '/advance'],
          [i18n('entities.advance.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.advance.view.title')}
        </PageTitle>

        <AdvanceViewToolbar match={match} />

        <AdvanceView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default AdvancePage;
