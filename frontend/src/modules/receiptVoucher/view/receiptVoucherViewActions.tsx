import ReceiptVoucherService from 'src/modules/receiptVoucher/receiptVoucherService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'RECEIPTVOUCHER_VIEW';

const receiptVoucherViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: receiptVoucherViewActions.FIND_STARTED,
      });

      const record = await ReceiptVoucherService.find(id);

      dispatch({
        type: receiptVoucherViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: receiptVoucherViewActions.FIND_ERROR,
      });

      getHistory().push('/receipt-voucher');
    }
  },
};

export default receiptVoucherViewActions;
