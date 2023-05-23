import list from 'src/modules/sellItem/list/sellItemListReducers';
import form from 'src/modules/sellItem/form/sellItemFormReducers';
import view from 'src/modules/sellItem/view/sellItemViewReducers';
import destroy from 'src/modules/sellItem/destroy/sellItemDestroyReducers';
import importerReducer from 'src/modules/sellItem/importer/sellItemImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
