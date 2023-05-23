import { createSelector } from 'reselect';

const selectRaw = (state) => state.supplier.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const supplierViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default supplierViewSelectors;
