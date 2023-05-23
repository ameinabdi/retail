import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/accounts/view/accountsViewActions';
import selectors from 'src/modules/accounts/view/accountsViewSelectors';
import AccountsView from 'src/view/accounts/view/AccountsView';
import AccountsViewToolbar from 'src/view/accounts/view/AccountsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AccountsPage = (props) => {
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
          [i18n('entities.accounts.menu'), '/accounts'],
          [i18n('entities.accounts.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.accounts.view.title')}
        </PageTitle>

        <AccountsViewToolbar match={match} />

        <AccountsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default AccountsPage;
