import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import shop from 'src/modules/shop/shopReducers';
import product from 'src/modules/product/productReducers';
import supplier from 'src/modules/supplier/supplierReducers';
import purchase from 'src/modules/purchase/purchaseReducers';
import purchaseItem from 'src/modules/purchaseItem/purchaseItemReducers';
import customer from 'src/modules/customer/customerReducers';
import sell from 'src/modules/sell/sellReducers';
import sellItem from 'src/modules/sellItem/sellItemReducers';
import accounts from 'src/modules/accounts/accountsReducers';
import expense from 'src/modules/expense/expenseReducers';
import paymentVoucher from 'src/modules/paymentVoucher/paymentVoucherReducers';
import receiptVoucher from 'src/modules/receiptVoucher/receiptVoucherReducers';
import dashboard from 'src/modules/dashboard/dashboardReducers';
import advance from 'src/modules/advance/advanceReducers';
import salary from 'src/modules/salary/salaryReducers';
import { combineReducers } from 'redux';
import plan from 'src/modules/plan/planReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    shop,
    product,
    supplier,
    purchase,
    purchaseItem,
    customer,
    sell,
    sellItem,
    accounts,
    expense,
    paymentVoucher,
    receiptVoucher,
    dashboard, 
    advance,
    salary,
  });
