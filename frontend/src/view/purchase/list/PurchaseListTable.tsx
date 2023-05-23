import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/purchase/list/purchaseListActions';
import destroyActions from 'src/modules/purchase/destroy/purchaseDestroyActions';
import selectors from 'src/modules/purchase/list/purchaseListSelectors';
import destroySelectors from 'src/modules/purchase/destroy/purchaseDestroySelectors';
import purchaseSelectors from 'src/modules/purchase/purchaseSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import moment from 'moment';
import SupplierListItem from 'src/view/supplier/list/SupplierListItem';
import ShopListItem from 'src/view/shop/list/ShopListItem';

const PurchaseListTable = (props) => {
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasPermissionToEdit = useSelector(
    purchaseSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    purchaseSelectors.selectPermissionToDestroy,
  );

  const handleTableChange = (
    pagination,
    filters,
    sorter,
  ) => {
    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  const doDestroy = (id) => {
    dispatch(destroyActions.doDestroy(id));
  };

  const columns = [
      {
        title: i18n('entities.purchase.fields.supplier'),
        sorter: false,
        dataIndex: 'supplier',
        render: (value) => <SupplierListItem value={value} />,
      },
      {
          title: i18n('entities.purchase.fields.totalAmount'),
          sorter: true,
          dataIndex: 'totalAmount',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
          title: i18n('entities.purchase.fields.paidAmount'),
          sorter: true,
          dataIndex: 'paidAmount',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
          title: i18n('entities.purchase.fields.balanceAmount'),
          sorter: true,
          dataIndex: 'balanceAmount',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
        title: i18n('entities.purchase.fields.purchaseDate'),
        sorter: true,
        dataIndex: 'purchaseDate',
        render: (value) =>
          value
            ? moment(value).format('YYYY-MM-DD HH:mm')
            : null,
      },
      {
        title: i18n('entities.purchase.fields.purchaseDatails'),
        sorter: true,
        dataIndex: 'purchaseDatails',
      },
      {
        title: i18n('entities.purchase.fields.shop'),
        sorter: false,
        dataIndex: 'shop',
        render: (value) => <ShopListItem value={value} />,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/purchase/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/purchase/${record.id}/edit`}>
              {i18n('common.edit')}
            </Link>
          )}
          {hasPermissionToDestroy && (
            <Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
              <ButtonLink>
                {i18n('common.destroy')}
              </ButtonLink>
            </Popconfirm>
          )}
        </div>
      ),
    },
  ];

  const rowSelection = () => {
    return {
      selectedRowKeys: selectedKeys,
      onChange: (selectedRowKeys) => {
        dispatch(actions.doChangeSelected(selectedRowKeys));
      },
    };
  };

  return (
    <TableWrapper>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns as any}
        dataSource={rows}
        pagination={pagination}
        onChange={handleTableChange}
        rowSelection={rowSelection()}
        scroll={{
          x: true,
        }}
      />
    </TableWrapper>
  );
};

export default PurchaseListTable;
