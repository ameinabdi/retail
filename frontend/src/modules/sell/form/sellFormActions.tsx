import SellService from 'src/modules/sell/sellService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SELL_FORM';

const sellFormActions = {
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
        type: sellFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await SellService.find(id);
      }

      dispatch({
        type: sellFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sellFormActions.INIT_ERROR,
      });

      getHistory().push('/sell');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: sellFormActions.CREATE_STARTED,
      });

      await SellService.create(values);

      dispatch({
        type: sellFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.sell.create.success'),
      );

      getHistory().push('/sell');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sellFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: sellFormActions.UPDATE_STARTED,
      });

      await SellService.update(id, values);

      dispatch({
        type: sellFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.sell.update.success'),
      );

      getHistory().push('/sell');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sellFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default sellFormActions;
