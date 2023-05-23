import Roles from './roles';
import Plans from './plans';
import Storage from './storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class Permissions {
  static get values() {
    return {
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      shopImport: {
        id: 'shopImport',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      shopCreate: {
        id: 'shopCreate',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      shopEdit: {
        id: 'shopEdit',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      shopDestroy: {
        id: 'shopDestroy',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      shopRead: {
        id: 'shopRead',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      shopAutocomplete: {
        id: 'shopAutocomplete',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      productImport: {
        id: 'productImport',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      productCreate: {
        id: 'productCreate',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.productProductPhoto,
        ],
      },
      productEdit: {
        id: 'productEdit',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.productProductPhoto,
        ],
      },
      productDestroy: {
        id: 'productDestroy',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.productProductPhoto,
        ],
      },
      productRead: {
        id: 'productRead',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      productAutocomplete: {
        id: 'productAutocomplete',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      supplierImport: {
        id: 'supplierImport',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      supplierCreate: {
        id: 'supplierCreate',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      supplierEdit: {
        id: 'supplierEdit',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      supplierDestroy: {
        id: 'supplierDestroy',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      supplierRead: {
        id: 'supplierRead',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      supplierAutocomplete: {
        id: 'supplierAutocomplete',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      purchaseImport: {
        id: 'purchaseImport',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      purchaseCreate: {
        id: 'purchaseCreate',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      purchaseEdit: {
        id: 'purchaseEdit',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      purchaseDestroy: {
        id: 'purchaseDestroy',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      purchaseRead: {
        id: 'purchaseRead',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      purchaseAutocomplete: {
        id: 'purchaseAutocomplete',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      purchaseItemImport: {
        id: 'purchaseItemImport',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      purchaseItemCreate: {
        id: 'purchaseItemCreate',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      purchaseItemEdit: {
        id: 'purchaseItemEdit',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      purchaseItemDestroy: {
        id: 'purchaseItemDestroy',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      purchaseItemRead: {
        id: 'purchaseItemRead',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      purchaseItemAutocomplete: {
        id: 'purchaseItemAutocomplete',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      customerImport: {
        id: 'customerImport',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      customerCreate: {
        id: 'customerCreate',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      customerEdit: {
        id: 'customerEdit',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      customerDestroy: {
        id: 'customerDestroy',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      customerRead: {
        id: 'customerRead',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      customerAutocomplete: {
        id: 'customerAutocomplete',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      sellImport: {
        id: 'sellImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      sellCreate: {
        id: 'sellCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      sellEdit: {
        id: 'sellEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      sellDestroy: {
        id: 'sellDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      sellRead: {
        id: 'sellRead',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      sellAutocomplete: {
        id: 'sellAutocomplete',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      sellItemImport: {
        id: 'sellItemImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      sellItemCreate: {
        id: 'sellItemCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      sellItemEdit: {
        id: 'sellItemEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      sellItemDestroy: {
        id: 'sellItemDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      sellItemRead: {
        id: 'sellItemRead',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      sellItemAutocomplete: {
        id: 'sellItemAutocomplete',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      accountsImport: {
        id: 'accountsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      accountsCreate: {
        id: 'accountsCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      accountsEdit: {
        id: 'accountsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      accountsDestroy: {
        id: 'accountsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      accountsRead: {
        id: 'accountsRead',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      accountsAutocomplete: {
        id: 'accountsAutocomplete',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      expenseImport: {
        id: 'expenseImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      expenseCreate: {
        id: 'expenseCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      expenseEdit: {
        id: 'expenseEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      expenseDestroy: {
        id: 'expenseDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      expenseRead: {
        id: 'expenseRead',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      expenseAutocomplete: {
        id: 'expenseAutocomplete',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      paymentVoucherImport: {
        id: 'paymentVoucherImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      paymentVoucherCreate: {
        id: 'paymentVoucherCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      paymentVoucherEdit: {
        id: 'paymentVoucherEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      paymentVoucherDestroy: {
        id: 'paymentVoucherDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      paymentVoucherRead: {
        id: 'paymentVoucherRead',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      paymentVoucherAutocomplete: {
        id: 'paymentVoucherAutocomplete',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      receiptVoucherImport: {
        id: 'receiptVoucherImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      receiptVoucherCreate: {
        id: 'receiptVoucherCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      receiptVoucherEdit: {
        id: 'receiptVoucherEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      receiptVoucherDestroy: {
        id: 'receiptVoucherDestroy',
        allowedRoles: [roles.admin,roles.owner],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      receiptVoucherRead: {
        id: 'receiptVoucherRead',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      receiptVoucherAutocomplete: {
        id: 'receiptVoucherAutocomplete',
        allowedRoles: [roles.admin,roles.owner,roles.manager,roles.casheir],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },   
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
