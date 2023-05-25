import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React from 'react';
import {
  DashboardOutlined,
  UserAddOutlined,
  CreditCardOutlined,
  BankOutlined,
  AppstoreOutlined,
  PartitionOutlined,
  ContainerOutlined,
  TeamOutlined,
  NumberOutlined,
  ImportOutlined,
  ExportOutlined,
  SolutionOutlined,
  BookOutlined
} from '@ant-design/icons';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: <DashboardOutlined />,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
    type: 'Main',
  },
  {
    path: '/purchase',
    permissionRequired: permissions.purchaseRead,
    icon: <ContainerOutlined />,
    label: i18n('entities.purchase.menu'),
    type: 'Purchase',
  },
  {
    path: '/sell',
    permissionRequired: permissions.sellRead,
    icon: <NumberOutlined />,
    label: i18n('entities.sell.menu'),
    type: 'Sell',
  },
  {
    path: '/shop',
    permissionRequired: permissions.shopRead,
    icon: <BankOutlined />,
    label: i18n('entities.shop.menu'),
    type: 'Main',
  },
  {
    path: '/stock',
    permissionRequired: permissions.productRead,
    icon: <AppstoreOutlined />,
    label: i18n('entities.stock.menu'),
    type: 'Invertory',
  },
  {
    path: '/product',
    permissionRequired: permissions.productRead,
    icon: <AppstoreOutlined />,
    label: i18n('entities.product.menu'),
    type: 'Invertory',
  },
  // {
  //   path: '/accounts',
  //   permissionRequired: permissions.accountsRead,
  //   icon: <TagsOutlined />,
  //   label: i18n('entities.accounts.menu'),
  // },
  {
    path: '/expense',
    permissionRequired: permissions.expenseRead,
    icon: <CreditCardOutlined />,
    label: i18n('entities.expense.menu'),
    type: 'Accountant',
  },

  {
    path: '/payment-voucher',
    permissionRequired: permissions.paymentVoucherRead,
    icon: <ExportOutlined />,
    label: i18n('entities.paymentVoucher.menu'),
    type: 'Accountant',
  },

  {
    path: '/receipt-voucher',
    permissionRequired: permissions.receiptVoucherRead,
    icon: <ImportOutlined />,
    label: i18n('entities.receiptVoucher.menu'),
    type: 'Accountant',
  },
  {
    path: '/advance',
    permissionRequired: permissions.advanceRead,
    icon: <BookOutlined />,
    label: i18n('entities.advance.menu'),
    type: 'Accountant',

  },

  {
    path: '/salary',
    permissionRequired: permissions.salaryRead,
    icon: <SolutionOutlined />,
    label: i18n('entities.salary.menu'),
    type: 'Accountant',

  },
  {
    path: '/supplier',
    permissionRequired: permissions.supplierRead,
    icon: <PartitionOutlined />,
    label: i18n('entities.supplier.menu'),
    type: 'Contact',
  },
  {
    path: '/customer',
    permissionRequired: permissions.customerRead,
    icon: <TeamOutlined />,
    label: i18n('entities.customer.menu'),
    type: 'Contact',
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: <UserAddOutlined />,
    type: 'Contact',
  },
  {
    path: '/report/sell',
    permissionRequired: permissions.userCreate,
    icon: <NumberOutlined />,
    label: i18n('entities.report.sellReport.menu'),
    type: 'Report',
  },
  
].filter(Boolean);
