import SupplierService from 'src/modules/supplier/supplierService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SUPPLIER_FORM';

const supplierFormActions = {
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
        type: supplierFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await SupplierService.find(id);
      }

      dispatch({
        type: supplierFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: supplierFormActions.INIT_ERROR,
      });

      getHistory().push('/supplier');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: supplierFormActions.CREATE_STARTED,
      });

      await SupplierService.create(values);

      dispatch({
        type: supplierFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.supplier.create.success'),
      );

      getHistory().push('/supplier');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: supplierFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: supplierFormActions.UPDATE_STARTED,
      });

      await SupplierService.update(id, values);

      dispatch({
        type: supplierFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.supplier.update.success'),
      );

      getHistory().push('/supplier');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: supplierFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default supplierFormActions;
