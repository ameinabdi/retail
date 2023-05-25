import SalaryService from 'src/modules/salary/salaryService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SALARY_VIEW';

const salaryViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: salaryViewActions.FIND_STARTED,
      });

      const record = await SalaryService.find(id);

      dispatch({
        type: salaryViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: salaryViewActions.FIND_ERROR,
      });

      getHistory().push('/salary');
    }
  },
};

export default salaryViewActions;
