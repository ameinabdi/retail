import { createSelector } from 'reselect';

const selectRaw = (state) => state.purchase.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const purchaseDestroySelectors = {
  selectLoading,
};

export default purchaseDestroySelectors;
