import list from 'src/modules/advance/list/advanceListReducers';
import form from 'src/modules/advance/form/advanceFormReducers';
import view from 'src/modules/advance/view/advanceViewReducers';
import destroy from 'src/modules/advance/destroy/advanceDestroyReducers';
import importerReducer from 'src/modules/advance/importer/advanceImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
