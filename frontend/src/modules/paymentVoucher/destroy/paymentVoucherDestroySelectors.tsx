import { createSelector } from 'reselect';

const selectRaw = (state) => state.paymentVoucher.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const paymentVoucherDestroySelectors = {
  selectLoading,
};

export default paymentVoucherDestroySelectors;
