import listActions from 'src/modules/purchaseItem/list/purchaseItemListActions';
import PurchaseItemService from 'src/modules/purchaseItem/purchaseItemService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PURCHASEITEM_DESTROY';

const purchaseItemDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseItemDestroyActions.DESTROY_STARTED,
      });

      await PurchaseItemService.destroyAll([id]);

      dispatch({
        type: purchaseItemDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.purchaseItem.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/purchase-item');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: purchaseItemDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseItemDestroyActions.DESTROY_ALL_STARTED,
      });

      await PurchaseItemService.destroyAll(ids);

      dispatch({
        type: purchaseItemDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.purchaseItem.destroyAll.success'),
      );

      getHistory().push('/purchase-item');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: purchaseItemDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default purchaseItemDestroyActions;
