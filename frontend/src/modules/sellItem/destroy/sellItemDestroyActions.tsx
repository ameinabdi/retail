import listActions from 'src/modules/sellItem/list/sellItemListActions';
import SellItemService from 'src/modules/sellItem/sellItemService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SELLITEM_DESTROY';

const sellItemDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: sellItemDestroyActions.DESTROY_STARTED,
      });

      await SellItemService.destroyAll([id]);

      dispatch({
        type: sellItemDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.sellItem.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/sell-item');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: sellItemDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: sellItemDestroyActions.DESTROY_ALL_STARTED,
      });

      await SellItemService.destroyAll(ids);

      dispatch({
        type: sellItemDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.sellItem.destroyAll.success'),
      );

      getHistory().push('/sell-item');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: sellItemDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default sellItemDestroyActions;
