import listActions from 'src/modules/sell/list/sellListActions';
import SellService from 'src/modules/sell/sellService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SELL_DESTROY';

const sellDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: sellDestroyActions.DESTROY_STARTED,
      });

      await SellService.destroyAll([id]);

      dispatch({
        type: sellDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.sell.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/sell');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: sellDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: sellDestroyActions.DESTROY_ALL_STARTED,
      });

      await SellService.destroyAll(ids);

      dispatch({
        type: sellDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.sell.destroyAll.success'),
      );

      getHistory().push('/sell');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: sellDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default sellDestroyActions;
