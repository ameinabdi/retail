import AccountsService from 'src/modules/accounts/accountsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ACCOUNTS_VIEW';

const accountsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: accountsViewActions.FIND_STARTED,
      });

      const record = await AccountsService.find(id);

      dispatch({
        type: accountsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: accountsViewActions.FIND_ERROR,
      });

      getHistory().push('/accounts');
    }
  },
};

export default accountsViewActions;
