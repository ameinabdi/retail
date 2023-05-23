import list from 'src/modules/purchaseItem/list/purchaseItemListReducers';
import form from 'src/modules/purchaseItem/form/purchaseItemFormReducers';
import view from 'src/modules/purchaseItem/view/purchaseItemViewReducers';
import destroy from 'src/modules/purchaseItem/destroy/purchaseItemDestroyReducers';
import importerReducer from 'src/modules/purchaseItem/importer/purchaseItemImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
