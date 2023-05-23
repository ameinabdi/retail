import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/purchaseItem/list/purchaseItemListActions';
import destroyActions from 'src/modules/purchaseItem/destroy/purchaseItemDestroyActions';
import selectors from 'src/modules/purchaseItem/list/purchaseItemListSelectors';
import destroySelectors from 'src/modules/purchaseItem/destroy/purchaseItemDestroySelectors';
import purchaseItemSelectors from 'src/modules/purchaseItem/purchaseItemSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import ProductListItem from 'src/view/product/list/ProductListItem';
import ShopListItem from 'src/view/shop/list/ShopListItem';

const PurchaseItemListTable = (props) => {
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
    purchaseItemSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    purchaseItemSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.purchaseItem.fields.product'),
        sorter: false,
        dataIndex: 'product',
        render: (value) => <ProductListItem value={value} />,
      },
      {
        title: i18n('entities.purchaseItem.fields.itemName'),
        sorter: true,
        dataIndex: 'itemName',
      },
      {
          title: i18n('entities.purchaseItem.fields.costPrice'),
          sorter: true,
          dataIndex: 'costPrice',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
        title: i18n('entities.purchaseItem.fields.quantity'),
        sorter: true,  
        dataIndex: 'quantity',
        align: 'right',
      },
      {
          title: i18n('entities.purchaseItem.fields.sellingPrice'),
          sorter: true,
          dataIndex: 'sellingPrice',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
        title: i18n('entities.purchaseItem.fields.totalPrice'),
        sorter: true,
        dataIndex: 'totalPrice',
        align: 'right',
      },
      {
        title: i18n('entities.purchaseItem.fields.shop'),
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
          <Link to={`/purchase-item/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/purchase-item/${record.id}/edit`}>
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

export default PurchaseItemListTable;
