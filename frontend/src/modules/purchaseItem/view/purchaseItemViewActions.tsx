import PurchaseItemService from 'src/modules/purchaseItem/purchaseItemService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PURCHASEITEM_VIEW';

const purchaseItemViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseItemViewActions.FIND_STARTED,
      });

      const record = await PurchaseItemService.find(id);

      dispatch({
        type: purchaseItemViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: purchaseItemViewActions.FIND_ERROR,
      });

      getHistory().push('/purchase-item');
    }
  },
};

export default purchaseItemViewActions;
