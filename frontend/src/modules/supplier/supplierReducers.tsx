import list from 'src/modules/supplier/list/supplierListReducers';
import form from 'src/modules/supplier/form/supplierFormReducers';
import view from 'src/modules/supplier/view/supplierViewReducers';
import destroy from 'src/modules/supplier/destroy/supplierDestroyReducers';
import importerReducer from 'src/modules/supplier/importer/supplierImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
