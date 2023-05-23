import PurchaseService from 'src/modules/purchase/purchaseService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PURCHASE_FORM';

const purchaseFormActions = {
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
        type: purchaseFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PurchaseService.find(id);
      }

      dispatch({
        type: purchaseFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: purchaseFormActions.INIT_ERROR,
      });

      getHistory().push('/purchase');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseFormActions.CREATE_STARTED,
      });

      await PurchaseService.create(values);

      dispatch({
        type: purchaseFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.purchase.create.success'),
      );

      getHistory().push('/purchase');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: purchaseFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: purchaseFormActions.UPDATE_STARTED,
      });

      await PurchaseService.update(id, values);

      dispatch({
        type: purchaseFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.purchase.update.success'),
      );

      getHistory().push('/purchase');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: purchaseFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default purchaseFormActions;
