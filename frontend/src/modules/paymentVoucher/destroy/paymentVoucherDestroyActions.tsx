import listActions from 'src/modules/paymentVoucher/list/paymentVoucherListActions';
import PaymentVoucherService from 'src/modules/paymentVoucher/paymentVoucherService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PAYMENTVOUCHER_DESTROY';

const paymentVoucherDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: paymentVoucherDestroyActions.DESTROY_STARTED,
      });

      await PaymentVoucherService.destroyAll([id]);

      dispatch({
        type: paymentVoucherDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.paymentVoucher.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/payment-voucher');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: paymentVoucherDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: paymentVoucherDestroyActions.DESTROY_ALL_STARTED,
      });

      await PaymentVoucherService.destroyAll(ids);

      dispatch({
        type: paymentVoucherDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.paymentVoucher.destroyAll.success'),
      );

      getHistory().push('/payment-voucher');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: paymentVoucherDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default paymentVoucherDestroyActions;
