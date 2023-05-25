import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/salary/list/salaryListActions';
import destroyActions from 'src/modules/salary/destroy/salaryDestroyActions';
import selectors from 'src/modules/salary/list/salaryListSelectors';
import destroySelectors from 'src/modules/salary/destroy/salaryDestroySelectors';
import salarySelectors from 'src/modules/salary/salarySelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import UserListItem from 'src/view/user/list/UserListItem';
import AccountsListItem from 'src/view/accounts/list/AccountsListItem';
import ShopListItem from 'src/view/shop/list/ShopListItem';

const SalaryListTable = (props) => {
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
    salarySelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    salarySelectors.selectPermissionToDestroy,
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
        title: i18n('entities.salary.fields.employee'),
        sorter: false,
        dataIndex: 'employee',
        render: (value) => <UserListItem value={value} />,
      },
      {
          title: i18n('entities.salary.fields.basicSalary'),
          sorter: true,
          dataIndex: 'basicSalary',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
          title: i18n('entities.salary.fields.allowanceSalary'),
          sorter: true,
          dataIndex: 'allowanceSalary',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
          title: i18n('entities.salary.fields.totalSalary'),
          sorter: true,
          dataIndex: 'totalSalary',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
          title: i18n('entities.salary.fields.advance'),
          sorter: true,
          dataIndex: 'advance',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
          title: i18n('entities.salary.fields.netSalary'),
          sorter: true,
          dataIndex: 'netSalary',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
          title: i18n('entities.salary.fields.paidSalary'),
          sorter: true,
          dataIndex: 'paidSalary',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
          title: i18n('entities.salary.fields.balance'),
          sorter: true,
          dataIndex: 'balance',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
        title: i18n('entities.salary.fields.account'),
        sorter: false,
        dataIndex: 'account',
        render: (value) => <AccountsListItem value={value} />,
      },
      {
        title: i18n('entities.salary.fields.salaryDate'),
        sorter: true,
        dataIndex: 'salaryDate',
      },
      {
        title: i18n('entities.salary.fields.shop'),
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
          <Link to={`/salary/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/salary/${record.id}/edit`}>
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

export default SalaryListTable;
