import list from 'src/modules/salary/list/salaryListReducers';
import form from 'src/modules/salary/form/salaryFormReducers';
import view from 'src/modules/salary/view/salaryViewReducers';
import destroy from 'src/modules/salary/destroy/salaryDestroyReducers';
import importerReducer from 'src/modules/salary/importer/salaryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
