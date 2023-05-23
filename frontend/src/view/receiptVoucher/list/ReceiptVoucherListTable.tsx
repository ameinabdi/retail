import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/receiptVoucher/list/receiptVoucherListActions';
import destroyActions from 'src/modules/receiptVoucher/destroy/receiptVoucherDestroyActions';
import selectors from 'src/modules/receiptVoucher/list/receiptVoucherListSelectors';
import destroySelectors from 'src/modules/receiptVoucher/destroy/receiptVoucherDestroySelectors';
import receiptVoucherSelectors from 'src/modules/receiptVoucher/receiptVoucherSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import CustomerListItem from 'src/view/customer/list/CustomerListItem';
import moment from 'moment';

const ReceiptVoucherListTable = (props) => {
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
  // const hasPermissionToEdit = useSelector(
  //   receiptVoucherSelectors.selectPermissionToEdit,
  // );
  const hasPermissionToDestroy = useSelector(
    receiptVoucherSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.receiptVoucher.fields.customer'),
        sorter: false,
        dataIndex: 'customer',
        render: (value) => <CustomerListItem value={value} />,
      },
      {
          title: i18n('entities.receiptVoucher.fields.unpaidAmount'),
          sorter: true,
          dataIndex: 'unpaidAmount',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
          title: i18n('entities.receiptVoucher.fields.paidAmount'),
          sorter: true,
          dataIndex: 'paidAmount',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
      {
          title: i18n('entities.receiptVoucher.fields.balanceAmount'),
          sorter: true,
          dataIndex: 'balanceAmount',
          align: 'right',
          render: (value) =>
            value || value === 0
              ? Number(value).toFixed(2)
              : value,
        },
        {
          title: i18n('entities.receiptVoucher.fields.receiptDate'),
          sorter: true,
          dataIndex: 'receiptDate',
          render: (value) =>
            value
              ? moment(value).format('YYYY-MM-DD HH:mm')
              : null,
        },
      {
        title: i18n('entities.receiptVoucher.fields.receiptNote'),
        sorter: true,
        dataIndex: 'receiptNote',
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/receipt-voucher/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {/* {hasPermissionToEdit && (
            <Link to={`/receipt-voucher/${record.id}/edit`}>
              {i18n('common.edit')}
            </Link>
          )} */}
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

export default ReceiptVoucherListTable;
