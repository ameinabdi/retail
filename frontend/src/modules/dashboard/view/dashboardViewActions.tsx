import DashboardService from 'src/modules/dashboard/dashboardService';
import selectors from 'src/modules/dashboard/view/dashboardViewSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/dashboard/view/dashboardViewExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'DASHBOARD_LIST';

const dashboardActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,
  SELECTEDS_CHANGED: `${prefix}_SELECTEDS_CHANGED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

  doChangeSelected(payload) {
    return {
      type: dashboardActions.SELECTEDS_CHANGED,
      payload,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: dashboardActions.RESETED,
    });

    dispatch(dashboardActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: dashboardActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await DashboardService.view(
        filter,
      );

      new Exporter(
        exporterFields,
        i18n('entities.examcenter.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: dashboardActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dashboardActions.EXPORT_ERROR,
      });
    }
  },

  doChangePaginationAndSort: (pagination, sorter) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: dashboardActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch({
      type: dashboardActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(dashboardActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(dashboardActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: dashboardActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await DashboardService.view(
        filter,
      );

      dispatch({
        type: dashboardActions.FETCH_SUCCESS,
        payload: {
          rows: response,
          count: response.count,
          dashboardCounts:response.dashboardCounts
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dashboardActions.FETCH_ERROR,
      });
    }
  },
};

export default dashboardActions;
