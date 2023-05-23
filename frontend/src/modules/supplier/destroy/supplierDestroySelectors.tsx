import { createSelector } from 'reselect';

const selectRaw = (state) => state.supplier.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const supplierDestroySelectors = {
  selectLoading,
};

export default supplierDestroySelectors;
