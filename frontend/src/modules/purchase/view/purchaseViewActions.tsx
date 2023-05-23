import PurchaseService from 'src/modules/purchase/purchaseService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PURCHASE_VIEW';

const purchaseViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: purchaseViewActions.FIND_STARTED,
      });

      const record = await PurchaseService.find(id);

      dispatch({
        type: purchaseViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: purchaseViewActions.FIND_ERROR,
      });

      getHistory().push('/purchase');
    }
  },
};

export default purchaseViewActions;
