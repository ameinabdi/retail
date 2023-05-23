import { createSelector } from 'reselect';

const selectRaw = (state) => state.receiptVoucher.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const receiptVoucherDestroySelectors = {
  selectLoading,
};

export default receiptVoucherDestroySelectors;
