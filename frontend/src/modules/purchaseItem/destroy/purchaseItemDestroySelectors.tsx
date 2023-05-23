import { createSelector } from 'reselect';

const selectRaw = (state) => state.purchaseItem.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const purchaseItemDestroySelectors = {
  selectLoading,
};

export default purchaseItemDestroySelectors;
