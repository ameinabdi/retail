import list from 'src/modules/paymentVoucher/list/paymentVoucherListReducers';
import form from 'src/modules/paymentVoucher/form/paymentVoucherFormReducers';
import view from 'src/modules/paymentVoucher/view/paymentVoucherViewReducers';
import destroy from 'src/modules/paymentVoucher/destroy/paymentVoucherDestroyReducers';
import importerReducer from 'src/modules/paymentVoucher/importer/paymentVoucherImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
