import AdvanceService from 'src/modules/advance/advanceService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ADVANCE_VIEW';

const advanceViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: advanceViewActions.FIND_STARTED,
      });

      const record = await AdvanceService.find(id);

      dispatch({
        type: advanceViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: advanceViewActions.FIND_ERROR,
      });

      getHistory().push('/advance');
    }
  },
};

export default advanceViewActions;
