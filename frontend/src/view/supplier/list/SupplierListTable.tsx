import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/supplier/list/supplierListActions';
import destroyActions from 'src/modules/supplier/destroy/supplierDestroyActions';
import selectors from 'src/modules/supplier/list/supplierListSelectors';
import destroySelectors from 'src/modules/supplier/destroy/supplierDestroySelectors';
import supplierSelectors from 'src/modules/supplier/supplierSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import ShopListItem from 'src/view/shop/list/ShopListItem';

const SupplierListTable = (props) => {
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
    supplierSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    supplierSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.supplier.fields.supplierName'),
        sorter: true,
        dataIndex: 'supplierName',
      },
      {
        title: i18n('entities.supplier.fields.supplierType'),
        sorter: true,
        dataIndex: 'supplierType',
        render: (value) =>
          value
            ? i18n(
                `entities.supplier.enumerators.supplierType.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.supplier.fields.supplierTelephone'),
        sorter: true,
        dataIndex: 'supplierTelephone',
      },
      {
        title: i18n('entities.supplier.fields.supplierAddress'),
        sorter: true,
        dataIndex: 'supplierAddress',
      },
      {
        title: i18n('entities.supplier.fields.initialBalance'),
        sorter: true,
        dataIndex: 'initialBalance',
        align: 'right',
      },
      {
        title: i18n('entities.supplier.fields.shop'),
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
          <Link to={`/supplier/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/supplier/${record.id}/edit`}>
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

export default SupplierListTable;
