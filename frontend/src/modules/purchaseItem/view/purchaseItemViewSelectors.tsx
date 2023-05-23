import { createSelector } from 'reselect';

const selectRaw = (state) => state.purchaseItem.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const purchaseItemViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default purchaseItemViewSelectors;
