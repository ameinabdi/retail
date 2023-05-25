import listActions from 'src/modules/salary/list/salaryListActions';
import SalaryService from 'src/modules/salary/salaryService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SALARY_DESTROY';

const salaryDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: salaryDestroyActions.DESTROY_STARTED,
      });

      await SalaryService.destroyAll([id]);

      dispatch({
        type: salaryDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.salary.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/salary');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: salaryDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: salaryDestroyActions.DESTROY_ALL_STARTED,
      });

      await SalaryService.destroyAll(ids);

      dispatch({
        type: salaryDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.salary.destroyAll.success'),
      );

      getHistory().push('/salary');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: salaryDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default salaryDestroyActions;
