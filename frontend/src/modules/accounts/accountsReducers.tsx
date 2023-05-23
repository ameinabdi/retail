import list from 'src/modules/accounts/list/accountsListReducers';
import form from 'src/modules/accounts/form/accountsFormReducers';
import view from 'src/modules/accounts/view/accountsViewReducers';
import destroy from 'src/modules/accounts/destroy/accountsDestroyReducers';
import importerReducer from 'src/modules/accounts/importer/accountsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
