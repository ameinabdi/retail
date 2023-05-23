import ReceiptVoucherService from 'src/modules/receiptVoucher/receiptVoucherService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'RECEIPTVOUCHER_FORM';

const receiptVoucherFormActions = {
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
        type: receiptVoucherFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ReceiptVoucherService.find(id);
      }

      dispatch({
        type: receiptVoucherFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: receiptVoucherFormActions.INIT_ERROR,
      });

      getHistory().push('/receipt-voucher');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: receiptVoucherFormActions.CREATE_STARTED,
      });

      await ReceiptVoucherService.create(values);

      dispatch({
        type: receiptVoucherFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.receiptVoucher.create.success'),
      );

      getHistory().push('/receipt-voucher');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: receiptVoucherFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: receiptVoucherFormActions.UPDATE_STARTED,
      });

      await ReceiptVoucherService.update(id, values);

      dispatch({
        type: receiptVoucherFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.receiptVoucher.update.success'),
      );

      getHistory().push('/receipt-voucher');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: receiptVoucherFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default receiptVoucherFormActions;
