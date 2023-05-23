import list from 'src/modules/receiptVoucher/list/receiptVoucherListReducers';
import form from 'src/modules/receiptVoucher/form/receiptVoucherFormReducers';
import view from 'src/modules/receiptVoucher/view/receiptVoucherViewReducers';
import destroy from 'src/modules/receiptVoucher/destroy/receiptVoucherDestroyReducers';
import importerReducer from 'src/modules/receiptVoucher/importer/receiptVoucherImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
