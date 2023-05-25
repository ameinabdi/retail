import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/salary/view/salaryViewActions';
import selectors from 'src/modules/salary/view/salaryViewSelectors';
import SalaryView from 'src/view/salary/view/SalaryView';
import SalaryViewToolbar from 'src/view/salary/view/SalaryViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SalaryPage = (props) => {
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
          [i18n('entities.salary.menu'), '/salary'],
          [i18n('entities.salary.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.salary.view.title')}
        </PageTitle>

        <SalaryViewToolbar match={match} />

        <SalaryView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default SalaryPage;
