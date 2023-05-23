import list from 'src/modules/purchase/list/purchaseListReducers';
import form from 'src/modules/purchase/form/purchaseFormReducers';
import view from 'src/modules/purchase/view/purchaseViewReducers';
import destroy from 'src/modules/purchase/destroy/purchaseDestroyReducers';
import importerReducer from 'src/modules/purchase/importer/purchaseImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
