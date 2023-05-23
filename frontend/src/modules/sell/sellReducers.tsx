import list from 'src/modules/sell/list/sellListReducers';
import form from 'src/modules/sell/form/sellFormReducers';
import view from 'src/modules/sell/view/sellViewReducers';
import destroy from 'src/modules/sell/destroy/sellDestroyReducers';
import importerReducer from 'src/modules/sell/importer/sellImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
