import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/sellItem/list/sellItemListActions';
import destroyActions from 'src/modules/sellItem/destroy/sellItemDestroyActions';
import selectors from 'src/modules/sellItem/list/sellItemListSelectors';
import destroySelectors from 'src/modules/sellItem/destroy/sellItemDestroySelectors';
import sellItemSelectors from 'src/modules/sellItem/sellItemSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import ProductListItem from 'src/view/product/list/ProductListItem';
import ShopListItem from 'src/view/shop/list/ShopListItem';

const SellItemListTableitem = (props) => {
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
    sellItemSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    sellItemSelectors.selectPermissionToDestroy,
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

  React.useEffect(() => {
    dispatch(actions.doFetch({sell:props.sell?.id},{sell:props.sell?.id}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doDestroy = (id) => {
    dispatch(destroyActions.doDestroy(id));
  };

  const columns = [
      {
        title: i18n('entities.sellItem.fields.itemName'),
        sorter: true,
        dataIndex: 'itemName',
      },
      {
        title: i18n('entities.sellItem.fields.product'),
        sorter: false,
        dataIndex: 'product',
        render: (value) => <ProductListItem value={value} />,
      },
      {
          title: i18n('entities.sellItem.fields.price'),
          sorter: true,
          dataIndex: 'price',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
          title: i18n('entities.sellItem.fields.quantity'),
          sorter: true,
          dataIndex: 'quantity',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
          title: i18n('entities.sellItem.fields.total'),
          sorter: true,
          dataIndex: 'total',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
        title: i18n('entities.sellItem.fields.shop'),
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
          <Link to={`/sell-item/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/sell-item/${record.id}/edit`}>
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

export default SellItemListTableitem;
