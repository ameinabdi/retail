import SellItemService from 'src/modules/sellItem/sellItemService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SELLITEM_FORM';

const sellItemFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: sellItemFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await SellItemService.find(id);
      }

      dispatch({
        type: sellItemFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sellItemFormActions.INIT_ERROR,
      });

      getHistory().push('/sell-item');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: sellItemFormActions.CREATE_STARTED,
      });

      await SellItemService.create(values);

      dispatch({
        type: sellItemFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.sellItem.create.success'),
      );

      getHistory().push('/sell-item');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sellItemFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: sellItemFormActions.UPDATE_STARTED,
      });

      await SellItemService.update(id, values);

      dispatch({
        type: sellItemFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.sellItem.update.success'),
      );

      getHistory().push('/sell-item');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sellItemFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default sellItemFormActions;
