import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/accounts/importer/accountsImporterSelectors';
import AccountsService from 'src/modules/accounts/accountsService';
import fields from 'src/modules/accounts/importer/accountsImporterFields';
import { i18n } from 'src/i18n';

const accountsImporterActions = importerActions(
  'ACCOUNTS_IMPORTER',
  selectors,
  AccountsService.import,
  fields,
  i18n('entities.accounts.importer.fileName'),
);

export default accountsImporterActions;