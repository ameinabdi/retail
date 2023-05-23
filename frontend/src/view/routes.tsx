import config from 'src/config';
import Permissions from 'src/security/permissions';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/shop',
    loader: () =>
      import('src/view/shop/list/ShopListPage'),
    permissionRequired: permissions.shopRead,
    exact: true,
  },
  {
    path: '/shop/new',
    loader: () =>
      import('src/view/shop/form/ShopFormPage'),
    permissionRequired: permissions.shopCreate,
    exact: true,
  },
  {
    path: '/shop/importer',
    loader: () =>
      import(
        'src/view/shop/importer/ShopImporterPage'
      ),
    permissionRequired: permissions.shopImport,
    exact: true,
  },
  {
    path: '/shop/:id/edit',
    loader: () =>
      import('src/view/shop/form/ShopFormPage'),
    permissionRequired: permissions.shopEdit,
    exact: true,
  },
  {
    path: '/shop/:id',
    loader: () =>
      import('src/view/shop/view/ShopViewPage'),
    permissionRequired: permissions.shopRead,
    exact: true,
  },
  {
    path: '/stock',
    loader: () =>
      import('src/view/product/stock/StockListPage'),
    permissionRequired: permissions.productRead,
    exact: true,
  },
  {
    path: '/product',
    loader: () =>
      import('src/view/product/list/ProductListPage'),
    permissionRequired: permissions.productRead,
    exact: true,
  },
  {
    path: '/product/new',
    loader: () =>
      import('src/view/product/form/ProductFormPage'),
    permissionRequired: permissions.productCreate,
    exact: true,
  },
  {
    path: '/product/importer',
    loader: () =>
      import(
        'src/view/product/importer/ProductImporterPage'
      ),
    permissionRequired: permissions.productImport,
    exact: true,
  },
  {
    path: '/product/:id/edit',
    loader: () =>
      import('src/view/product/form/ProductFormPage'),
    permissionRequired: permissions.productEdit,
    exact: true,
  },
  {
    path: '/product/:id',
    loader: () =>
      import('src/view/product/view/ProductViewPage'),
    permissionRequired: permissions.productRead,
    exact: true,
  },

  {
    path: '/supplier',
    loader: () =>
      import('src/view/supplier/list/SupplierListPage'),
    permissionRequired: permissions.supplierRead,
    exact: true,
  },
  {
    path: '/supplier/new',
    loader: () =>
      import('src/view/supplier/form/SupplierFormPage'),
    permissionRequired: permissions.supplierCreate,
    exact: true,
  },
  {
    path: '/supplier/importer',
    loader: () =>
      import(
        'src/view/supplier/importer/SupplierImporterPage'
      ),
    permissionRequired: permissions.supplierImport,
    exact: true,
  },
  {
    path: '/supplier/:id/edit',
    loader: () =>
      import('src/view/supplier/form/SupplierFormPage'),
    permissionRequired: permissions.supplierEdit,
    exact: true,
  },
  {
    path: '/supplier/:id',
    loader: () =>
      import('src/view/supplier/view/SupplierViewPage'),
    permissionRequired: permissions.supplierRead,
    exact: true,
  },

  {
    path: '/purchase',
    loader: () =>
      import('src/view/purchase/list/PurchaseListPage'),
    permissionRequired: permissions.purchaseRead,
    exact: true,
  },
  {
    path: '/purchase/new',
    loader: () =>
      import('src/view/purchase/form/PurchaseFormPage'),
    permissionRequired: permissions.purchaseCreate,
    exact: true,
  },
  {
    path: '/purchase/importer',
    loader: () =>
      import(
        'src/view/purchase/importer/PurchaseImporterPage'
      ),
    permissionRequired: permissions.purchaseImport,
    exact: true,
  },
  {
    path: '/purchase/:id/edit',
    loader: () =>
      import('src/view/purchase/form/PurchaseFormPage'),
    permissionRequired: permissions.purchaseEdit,
    exact: true,
  },
  {
    path: '/purchase/:id',
    loader: () =>
      import('src/view/purchase/view/PurchaseViewPage'),
    permissionRequired: permissions.purchaseRead,
    exact: true,
  },

  {
    path: '/purchase-item',
    loader: () =>
      import('src/view/purchaseItem/list/PurchaseItemListPage'),
    permissionRequired: permissions.purchaseItemRead,
    exact: true,
  },
  {
    path: '/purchase-item/new',
    loader: () =>
      import('src/view/purchaseItem/form/PurchaseItemFormPage'),
    permissionRequired: permissions.purchaseItemCreate,
    exact: true,
  },
  {
    path: '/purchase-item/importer',
    loader: () =>
      import(
        'src/view/purchaseItem/importer/PurchaseItemImporterPage'
      ),
    permissionRequired: permissions.purchaseItemImport,
    exact: true,
  },
  {
    path: '/purchase-item/:id/edit',
    loader: () =>
      import('src/view/purchaseItem/form/PurchaseItemFormPage'),
    permissionRequired: permissions.purchaseItemEdit,
    exact: true,
  },
  {
    path: '/purchase-item/:id',
    loader: () =>
      import('src/view/purchaseItem/view/PurchaseItemViewPage'),
    permissionRequired: permissions.purchaseItemRead,
    exact: true,
  },

  {
    path: '/customer',
    loader: () =>
      import('src/view/customer/list/CustomerListPage'),
    permissionRequired: permissions.customerRead,
    exact: true,
  },
  {
    path: '/customer/new',
    loader: () =>
      import('src/view/customer/form/CustomerFormPage'),
    permissionRequired: permissions.customerCreate,
    exact: true,
  },
  {
    path: '/customer/importer',
    loader: () =>
      import(
        'src/view/customer/importer/CustomerImporterPage'
      ),
    permissionRequired: permissions.customerImport,
    exact: true,
  },
  {
    path: '/customer/:id/edit',
    loader: () =>
      import('src/view/customer/form/CustomerFormPage'),
    permissionRequired: permissions.customerEdit,
    exact: true,
  },
  {
    path: '/customer/:id',
    loader: () =>
      import('src/view/customer/view/CustomerViewPage'),
    permissionRequired: permissions.customerRead,
    exact: true,
  },
  {
    path: '/report/sell',
    loader: () =>
      import('src/view/report/sells/SellReportListPage'),
    permissionRequired: permissions.sellRead,
    exact: true,
  },
  {
    path: '/sell',
    loader: () =>
      import('src/view/sell/list/SellListPage'),
    permissionRequired: permissions.sellRead,
    exact: true,
  },
  {
    path: '/sell/new',
    loader: () =>
      import('src/view/sell/form/SellFormPage'),
    permissionRequired: permissions.sellCreate,
    exact: true,
  },
  {
    path: '/sell/importer',
    loader: () =>
      import(
        'src/view/sell/importer/SellImporterPage'
      ),
    permissionRequired: permissions.sellImport,
    exact: true,
  },
  {
    path: '/sell/:id/edit',
    loader: () =>
      import('src/view/sell/form/SellFormPage'),
    permissionRequired: permissions.sellEdit,
    exact: true,
  },
  {
    path: '/sell/:id',
    loader: () =>
      import('src/view/sell/view/SellViewPage'),
    permissionRequired: permissions.sellRead,
    exact: true,
  },

  {
    path: '/sell-item',
    loader: () =>
      import('src/view/sellItem/list/SellItemListPage'),
    permissionRequired: permissions.sellItemRead,
    exact: true,
  },
  {
    path: '/sell-item/new',
    loader: () =>
      import('src/view/sellItem/form/SellItemFormPage'),
    permissionRequired: permissions.sellItemCreate,
    exact: true,
  },
  {
    path: '/sell-item/importer',
    loader: () =>
      import(
        'src/view/sellItem/importer/SellItemImporterPage'
      ),
    permissionRequired: permissions.sellItemImport,
    exact: true,
  },
  {
    path: '/sell-item/:id/edit',
    loader: () =>
      import('src/view/sellItem/form/SellItemFormPage'),
    permissionRequired: permissions.sellItemEdit,
    exact: true,
  },
  {
    path: '/sell-item/:id',
    loader: () =>
      import('src/view/sellItem/view/SellItemViewPage'),
    permissionRequired: permissions.sellItemRead,
    exact: true,
  },

  {
    path: '/accounts',
    loader: () =>
      import('src/view/accounts/list/AccountsListPage'),
    permissionRequired: permissions.accountsRead,
    exact: true,
  },
  {
    path: '/accounts/new',
    loader: () =>
      import('src/view/accounts/form/AccountsFormPage'),
    permissionRequired: permissions.accountsCreate,
    exact: true,
  },
  {
    path: '/accounts/importer',
    loader: () =>
      import(
        'src/view/accounts/importer/AccountsImporterPage'
      ),
    permissionRequired: permissions.accountsImport,
    exact: true,
  },
  {
    path: '/accounts/:id/edit',
    loader: () =>
      import('src/view/accounts/form/AccountsFormPage'),
    permissionRequired: permissions.accountsEdit,
    exact: true,
  },
  {
    path: '/accounts/:id',
    loader: () =>
      import('src/view/accounts/view/AccountsViewPage'),
    permissionRequired: permissions.accountsRead,
    exact: true,
  },

  {
    path: '/expense',
    loader: () =>
      import('src/view/expense/list/ExpenseListPage'),
    permissionRequired: permissions.expenseRead,
    exact: true,
  },
  {
    path: '/expense/new',
    loader: () =>
      import('src/view/expense/form/ExpenseFormPage'),
    permissionRequired: permissions.expenseCreate,
    exact: true,
  },
  {
    path: '/expense/importer',
    loader: () =>
      import(
        'src/view/expense/importer/ExpenseImporterPage'
      ),
    permissionRequired: permissions.expenseImport,
    exact: true,
  },
  {
    path: '/expense/:id/edit',
    loader: () =>
      import('src/view/expense/form/ExpenseFormPage'),
    permissionRequired: permissions.expenseEdit,
    exact: true,
  },
  {
    path: '/expense/:id',
    loader: () =>
      import('src/view/expense/view/ExpenseViewPage'),
    permissionRequired: permissions.expenseRead,
    exact: true,
  },

  {
    path: '/payment-voucher',
    loader: () =>
      import('src/view/paymentVoucher/list/PaymentVoucherListPage'),
    permissionRequired: permissions.paymentVoucherRead,
    exact: true,
  },
  {
    path: '/payment-voucher/new',
    loader: () =>
      import('src/view/paymentVoucher/form/PaymentVoucherFormPage'),
    permissionRequired: permissions.paymentVoucherCreate,
    exact: true,
  },
  {
    path: '/payment-voucher/importer',
    loader: () =>
      import(
        'src/view/paymentVoucher/importer/PaymentVoucherImporterPage'
      ),
    permissionRequired: permissions.paymentVoucherImport,
    exact: true,
  },
  {
    path: '/payment-voucher/:id/edit',
    loader: () =>
      import('src/view/paymentVoucher/form/PaymentVoucherFormPage'),
    permissionRequired: permissions.paymentVoucherEdit,
    exact: true,
  },
  {
    path: '/payment-voucher/:id',
    loader: () =>
      import('src/view/paymentVoucher/view/PaymentVoucherViewPage'),
    permissionRequired: permissions.paymentVoucherRead,
    exact: true,
  },

  {
    path: '/receipt-voucher',
    loader: () =>
      import('src/view/receiptVoucher/list/ReceiptVoucherListPage'),
    permissionRequired: permissions.receiptVoucherRead,
    exact: true,
  },
  {
    path: '/receipt-voucher/new',
    loader: () =>
      import('src/view/receiptVoucher/form/ReceiptVoucherFormPage'),
    permissionRequired: permissions.receiptVoucherCreate,
    exact: true,
  },
  {
    path: '/receipt-voucher/importer',
    loader: () =>
      import(
        'src/view/receiptVoucher/importer/ReceiptVoucherImporterPage'
      ),
    permissionRequired: permissions.receiptVoucherImport,
    exact: true,
  },
  {
    path: '/receipt-voucher/:id/edit',
    loader: () =>
      import('src/view/receiptVoucher/edit-form/ReceiptVoucherEditFormPage'),
    permissionRequired: permissions.receiptVoucherEdit,
    exact: true,
  },
  {
    path: '/receipt-voucher/:id',
    loader: () =>
      import('src/view/receiptVoucher/view/ReceiptVoucherViewPage'),
    permissionRequired: permissions.receiptVoucherRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
