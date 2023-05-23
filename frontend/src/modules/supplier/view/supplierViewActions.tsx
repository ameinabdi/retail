import SupplierService from 'src/modules/supplier/supplierService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SUPPLIER_VIEW';

const supplierViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: supplierViewActions.FIND_STARTED,
      });

      const record = await SupplierService.find(id);

      dispatch({
        type: supplierViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: supplierViewActions.FIND_ERROR,
      });

      getHistory().push('/supplier');
    }
  },
};

export default supplierViewActions;
