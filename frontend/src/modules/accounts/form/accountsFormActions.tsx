import AccountsService from 'src/modules/accounts/accountsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ACCOUNTS_FORM';

const accountsFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: accountsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await AccountsService.find(id);
      }

      dispatch({
        type: accountsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: accountsFormActions.INIT_ERROR,
      });

      getHistory().push('/accounts');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: accountsFormActions.CREATE_STARTED,
      });

      await AccountsService.create(values);

      dispatch({
        type: accountsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.accounts.create.success'),
      );

      getHistory().push('/accounts');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: accountsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: accountsFormActions.UPDATE_STARTED,
      });

      await AccountsService.update(id, values);

      dispatch({
        type: accountsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.accounts.update.success'),
      );

      getHistory().push('/accounts');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: accountsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default accountsFormActions;
