import SellService from 'src/modules/sell/sellService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SELL_VIEW';

const sellViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: sellViewActions.FIND_STARTED,
      });

      const record = await SellService.find(id);

      dispatch({
        type: sellViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sellViewActions.FIND_ERROR,
      });

      getHistory().push('/sell');
    }
  },
};

export default sellViewActions;
