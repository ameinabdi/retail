import PurchaseItemService from 'src/modules/purchaseItem/purchaseItemService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PURCHASEITEM_FORM';

const purchaseItemFormActions = {
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
        type: purchaseItemFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PurchaseItemService.find(id);
      }

      dispatch({
        type: purchaseItemFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: purchaseItemFormActions.INIT_ERROR,
      });

      getHistory().push('/purchase-item');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseItemFormActions.CREATE_STARTED,
      });

      await PurchaseItemService.create(values);

      dispatch({
        type: purchaseItemFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.purchaseItem.create.success'),
      );

      getHistory().push('/purchase-item');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: purchaseItemFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: purchaseItemFormActions.UPDATE_STARTED,
      });

      await PurchaseItemService.update(id, values);

      dispatch({
        type: purchaseItemFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.purchaseItem.update.success'),
      );

      getHistory().push('/purchase-item');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: purchaseItemFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default purchaseItemFormActions;
