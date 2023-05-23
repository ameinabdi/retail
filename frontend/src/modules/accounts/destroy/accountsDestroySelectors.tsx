import { createSelector } from 'reselect';

const selectRaw = (state) => state.accounts.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const accountsDestroySelectors = {
  selectLoading,
};

export default accountsDestroySelectors;
