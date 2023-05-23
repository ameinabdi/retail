import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/accounts/list/accountsListActions';
import destroyActions from 'src/modules/accounts/destroy/accountsDestroyActions';
import selectors from 'src/modules/accounts/list/accountsListSelectors';
import destroySelectors from 'src/modules/accounts/destroy/accountsDestroySelectors';
import accountsSelectors from 'src/modules/accounts/accountsSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import ShopListItem from 'src/view/shop/list/ShopListItem';

const AccountsListTable = (props) => {
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
    accountsSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    accountsSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.accounts.fields.account'),
        sorter: true,
        dataIndex: 'account',
      },
      {
        title: i18n('entities.accounts.fields.type'),
        sorter: true,
        dataIndex: 'type',
        render: (value) =>
          value
            ? i18n(
                `entities.accounts.enumerators.type.${value}`,
              )
            : null,
      },
      {
          title: i18n('entities.accounts.fields.openBalance'),
          sorter: true,
          dataIndex: 'openBalance',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
        title: i18n('entities.accounts.fields.shop'),
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
          <Link to={`/accounts/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/accounts/${record.id}/edit`}>
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

export default AccountsListTable;
