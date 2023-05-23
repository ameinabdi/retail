import { createSelector } from 'reselect';

const selectRaw = (state) => state.accounts.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const accountsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default accountsViewSelectors;
