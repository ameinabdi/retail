import PaymentVoucherService from 'src/modules/paymentVoucher/paymentVoucherService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PAYMENTVOUCHER_VIEW';

const paymentVoucherViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: paymentVoucherViewActions.FIND_STARTED,
      });

      const record = await PaymentVoucherService.find(id);

      dispatch({
        type: paymentVoucherViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: paymentVoucherViewActions.FIND_ERROR,
      });

      getHistory().push('/payment-voucher');
    }
  },
};

export default paymentVoucherViewActions;
