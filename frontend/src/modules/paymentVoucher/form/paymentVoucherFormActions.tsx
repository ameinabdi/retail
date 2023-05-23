import PaymentVoucherService from 'src/modules/paymentVoucher/paymentVoucherService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PAYMENTVOUCHER_FORM';

const paymentVoucherFormActions = {
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
        type: paymentVoucherFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PaymentVoucherService.find(id);
      }

      dispatch({
        type: paymentVoucherFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: paymentVoucherFormActions.INIT_ERROR,
      });

      getHistory().push('/payment-voucher');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: paymentVoucherFormActions.CREATE_STARTED,
      });

      await PaymentVoucherService.create(values);

      dispatch({
        type: paymentVoucherFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.paymentVoucher.create.success'),
      );

      getHistory().push('/payment-voucher');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: paymentVoucherFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: paymentVoucherFormActions.UPDATE_STARTED,
      });

      await PaymentVoucherService.update(id, values);

      dispatch({
        type: paymentVoucherFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.paymentVoucher.update.success'),
      );

      getHistory().push('/payment-voucher');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: paymentVoucherFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default paymentVoucherFormActions;
