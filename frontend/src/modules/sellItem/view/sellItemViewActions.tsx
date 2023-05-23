import SellItemService from 'src/modules/sellItem/sellItemService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SELLITEM_VIEW';

const sellItemViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: sellItemViewActions.FIND_STARTED,
      });

      const record = await SellItemService.find(id);

      dispatch({
        type: sellItemViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sellItemViewActions.FIND_ERROR,
      });

      getHistory().push('/sell-item');
    }
  },
};

export default sellItemViewActions;
