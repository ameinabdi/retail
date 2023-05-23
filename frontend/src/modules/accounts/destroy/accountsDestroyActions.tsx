import listActions from 'src/modules/accounts/list/accountsListActions';
import AccountsService from 'src/modules/accounts/accountsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ACCOUNTS_DESTROY';

const accountsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: accountsDestroyActions.DESTROY_STARTED,
      });

      await AccountsService.destroyAll([id]);

      dispatch({
        type: accountsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.accounts.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/accounts');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: accountsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: accountsDestroyActions.DESTROY_ALL_STARTED,
      });

      await AccountsService.destroyAll(ids);

      dispatch({
        type: accountsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.accounts.destroyAll.success'),
      );

      getHistory().push('/accounts');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: accountsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default accountsDestroyActions;
