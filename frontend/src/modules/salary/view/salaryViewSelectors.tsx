import { createSelector } from 'reselect';

const selectRaw = (state) => state.salary.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const salaryViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default salaryViewSelectors;
