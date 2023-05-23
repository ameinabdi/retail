import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/product/list/productListActions';
import destroyActions from 'src/modules/product/destroy/productDestroyActions';
import selectors from 'src/modules/product/list/productListSelectors';
import destroySelectors from 'src/modules/product/destroy/productDestroySelectors';
import productSelectors from 'src/modules/product/productSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import moment from 'moment';
import ImagesListView from 'src/view/shared/list/ImagesListView';
import ShopListItem from 'src/view/shop/list/ShopListItem';

const ProductListTable = (props) => {
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
    productSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    productSelectors.selectPermissionToDestroy,
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
      title: i18n('entities.product.fields.productPhoto'),
      sorter: false,
      dataIndex: 'productPhoto',
      render: (value) => <ImagesListView value={value} />,
    },
      {
        title: i18n('entities.product.fields.productName'),
        sorter: true,
        dataIndex: 'productName',
      },
      {
        title: i18n('entities.product.fields.productSerialNumber'),
        sorter: true,
        dataIndex: 'productSerialNumber',
      },
      {
          title: i18n('entities.product.fields.productPrice'),
          sorter: true,
          dataIndex: 'productPrice',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
        title: i18n('entities.product.fields.purchaseDate'),
        sorter: true,
        dataIndex: 'purchaseDate',
        render: (value) =>
          value
            ? moment(value).format('YYYY-MM-DD HH:mm')
            : null,
      },
      
      {
        title: i18n('entities.product.fields.shop'),
        sorter: false,
        dataIndex: 'shop',
        render: (value) => <ShopListItem value={value} />,
      },
      {
        title: '',
        dataIndex: '',
        width: '160px',
        fixed:'right',
        render: (_, record) => (
          <div className="table-actions">
            <Link to={`/product/${record.id}`}>
              {i18n('common.view')}
            </Link>
            {hasPermissionToEdit && (
              <Link to={`/product/${record.id}/edit`}>
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

export default ProductListTable;
