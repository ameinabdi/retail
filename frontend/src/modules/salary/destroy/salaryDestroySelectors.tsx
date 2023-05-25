import { createSelector } from 'reselect';

const selectRaw = (state) => state.salary.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const salaryDestroySelectors = {
  selectLoading,
};

export default salaryDestroySelectors;
