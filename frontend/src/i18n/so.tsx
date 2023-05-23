const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    filters: 'Filters',
  },

  app: {
    title: 'Application',
  },

  api: {
    menu: 'API',
  },

  entities: {
    report: {
      sellReport:{
        menu:'Sells Report'
      }  
     },
    shop: {
        name: 'shop',
        label: 'Shops',
        menu: 'Shops',
        exporterFileName: 'shop_export',
        list: {
          menu: 'Shops',
          title: 'Shops',
        },
        create: {
          success: 'Shop successfully saved',
        },
        update: {
          success: 'Shop successfully saved',
        },
        destroy: {
          success: 'Shop successfully deleted',
        },
        destroyAll: {
          success: 'Shop(s) successfully deleted',
        },
        edit: {
          title: 'Edit Shop',
        },
        fields: {
          id: 'Id',
          'shopName': 'ShopName',
          'shopTelephone': 'ShopTelephone',
          'shopCurrency': 'ShopCurrency',
          'shopAddress': 'ShopAddress',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'shopCurrency': {
            'USD': 'USD',
            'SLSH': 'SLSH',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Shop',
        },
        view: {
          title: 'View Shop',
        },
        importer: {
          title: 'Import Shops',
          fileName: 'shop_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    product: {
        name: 'product',
        label: 'Products',
        menu: 'Products',
        exporterFileName: 'product_export',
        list: {
          menu: 'Products',
          title: 'Products',
        },
        create: {
          success: 'Product successfully saved',
        },
        update: {
          success: 'Product successfully saved',
        },
        destroy: {
          success: 'Product successfully deleted',
        },
        destroyAll: {
          success: 'Product(s) successfully deleted',
        },
        edit: {
          title: 'Edit Product',
        },
        fields: {
          id: 'Id',
          'productName': 'Name',
          'productSerialNumber': 'Code',
          'productQuantityRange': 'Quantity',
          'productQuantity': 'Quantity',
          'productPriceRange': 'Price',
          'productPrice': 'Price',
          'purchaseDateRange': 'Date',
          'purchaseDate': 'Date',
          'productPhoto': 'Photo',
          'shop': 'Shop',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Product',
        },
        view: {
          title: 'View Product',
        },
        importer: {
          title: 'Import Products',
          fileName: 'product_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },


       stock: {
        name: 'stock',
        label: 'Stock',
        menu: 'Stock',
        exporterFileName: 'stock_export',
        list: {
          menu: 'stocks',
          title: 'stocks',
        },
        create: {
          success: 'stock successfully saved',
        },
        update: {
          success: 'stock successfully saved',
        },
        destroy: {
          success: 'stock successfully deleted',
        },
        destroyAll: {
          success: 'stock(s) successfully deleted',
        },
        edit: {
          title: 'Edit stock',
        },
        fields: {
          id: 'Id',
          'productName': 'Name',
          'productSerialNumber': 'Code',
          'totalPurchased': 'Total Purchased',
          'totalSold': 'Total Sold',
          'totalAvailable': 'Total Available',
          'totalAmountPurchased': 'Total Amount Purchased',
          'totalAmountSold': 'Total Amount Sold',
          'purchaseDate': 'Date',
          'productPhoto': 'Photo',
          'shop': 'Shop',
          'status':'Status',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        status:{
          'outofstock':'Out Of Stock',
          'stock':'Stock',
          'unavailable':'Unavailable'
        },
        enumerators: {
          'status': {
            'stock': 'Stock',
            'outofstock': 'Out of Stock',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New stock',
        },
        view: {
          title: 'View stock',
        },
        importer: {
          title: 'Import stocks',
          fileName: 'stock_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    supplier: {
        name: 'supplier',
        label: 'Suppliers',
        menu: 'Suppliers',
        exporterFileName: 'supplier_export',
        list: {
          menu: 'Suppliers',
          title: 'Suppliers',
        },
        create: {
          success: 'Supplier successfully saved',
        },
        update: {
          success: 'Supplier successfully saved',
        },
        destroy: {
          success: 'Supplier successfully deleted',
        },
        destroyAll: {
          success: 'Supplier(s) successfully deleted',
        },
        edit: {
          title: 'Edit Supplier',
        },
        fields: {
          id: 'Id',
          'supplierName': 'Name',
          'supplierType': 'Type',
          'supplierTelephone': 'Telephone',
          'supplierAddress': 'Address',
          'initialBalanceRange': 'Open Balance',
          'initialBalance': 'Open Balance',
          'shop': 'Shop',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'supplierType': {
            'Purchase': 'Purchase',
            'Expense': 'Expense',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Supplier',
        },
        view: {
          title: 'View Supplier',
        },
        importer: {
          title: 'Import Suppliers',
          fileName: 'supplier_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    purchase: {
        name: 'purchase',
        label: 'Purchases',
        menu: 'Purchases',
        exporterFileName: 'purchase_export',
        list: {
          menu: 'Purchases',
          title: 'Purchases',
        },
        create: {
          success: 'Purchase successfully saved',
        },
        update: {
          success: 'Purchase successfully saved',
        },
        destroy: {
          success: 'Purchase successfully deleted',
        },
        destroyAll: {
          success: 'Purchase(s) successfully deleted',
        },
        edit: {
          title: 'Edit Purchase',
        },
        fields: {
          id: 'Id',
          'supplier': 'Supplier',
          'totalAmountRange': 'Total',
          'totalAmount': 'Total',
          'paidAmountRange': 'Paid',
          'paidAmount': 'Paid',
          'balanceAmountRange': 'Balance ',
          'balanceAmount': 'Balance ',
          'purchaseDateRange': 'Purchase Date',
          'purchaseDate': 'Purchase Date',
          'purchaseDatails': 'Datails',
          'shop': 'Shop',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Purchase',
        },
        view: {
          title: 'View Purchase',
        },
        importer: {
          title: 'Import Purchases',
          fileName: 'purchase_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    purchaseItem: {
        name: 'purchaseItem',
        label: 'PurchaseItems',
        menu: 'PurchaseItems',
        exporterFileName: 'purchaseItem_export',
        list: {
          menu: 'PurchaseItems',
          title: 'PurchaseItems',
        },
        create: {
          success: 'PurchaseItem successfully saved',
        },
        update: {
          success: 'PurchaseItem successfully saved',
        },
        destroy: {
          success: 'PurchaseItem successfully deleted',
        },
        destroyAll: {
          success: 'PurchaseItem(s) successfully deleted',
        },
        edit: {
          title: 'Edit PurchaseItem',
        },
        fields: {
          id: 'Id',
          'product': 'Product',
          'itemName': 'ItemName',
          'costPriceRange': 'Cost Price',
          'costPrice': 'Cost Price',
          'quantityRange': 'Quantity',
          'quantity': 'Quantity',
          'sellingPriceRange': 'Sell Price',
          'sellingPrice': 'Sell Price',
          'totalPriceRange': 'Total ',
          'totalPrice': 'Total',
          'shop': 'Shop',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New PurchaseItem',
        },
        view: {
          title: 'View PurchaseItem',
        },
        importer: {
          title: 'Import PurchaseItems',
          fileName: 'purchaseItem_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    customer: {
        name: 'customer',
        label: 'Customers',
        menu: 'Customers',
        exporterFileName: 'customer_export',
        list: {
          menu: 'Customers',
          title: 'Customers',
        },
        create: {
          success: 'Customer successfully saved',
        },
        update: {
          success: 'Customer successfully saved',
        },
        destroy: {
          success: 'Customer successfully deleted',
        },
        destroyAll: {
          success: 'Customer(s) successfully deleted',
        },
        edit: {
          title: 'Edit Customer',
        },
        fields: {
          id: 'Id',
          'fullName': 'FullName',
          'telephone': 'Telephone',
          'initialBalanceRange': 'Open Balance',
          'initialBalance': 'Open Balance',
          'shop': 'Shop',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Customer',
        },
        view: {
          title: 'View Customer',
        },
        importer: {
          title: 'Import Customers',
          fileName: 'customer_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    sell: {
        name: 'sell',
        label: 'Sells',
        menu: 'Sells',
        exporterFileName: 'sell_export',
        list: {
          menu: 'Sells',
          title: 'Sells',
        },
        create: {
          success: 'Sell successfully saved',
        },
        update: {
          success: 'Sell successfully saved',
        },
        destroy: {
          success: 'Sell successfully deleted',
        },
        destroyAll: {
          success: 'Sell(s) successfully deleted',
        },
        edit: {
          title: 'Edit Sell',
        },
        fields: {
          id: 'Id',
          'customer': 'Customer',
          'sellDateRange': 'Sell Date',
          'sellDate': 'Sell Date',
          'sellDetails': 'Details',
          'totalAmountRange': 'Total',
          'totalAmount': 'Total',
          'paidAmountRange': 'Paid',
          'paidAmount': 'Paid',
          'balanceAmountRange': 'Balance',
          'balanceAmount': 'Balance',
          'shop': 'Shop',
          'items':'Items',
          'sellBy':'sell By',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Sell',
        },
        view: {
          title: 'View Sell',
        },
        importer: {
          title: 'Import Sells',
          fileName: 'sell_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    sellItem: {
        name: 'sellItem',
        label: 'SellItems',
        menu: 'SellItems',
        exporterFileName: 'sellItem_export',
        list: {
          menu: 'SellItems',
          title: 'SellItems',
        },
        create: {
          success: 'SellItem successfully saved',
        },
        update: {
          success: 'SellItem successfully saved',
        },
        destroy: {
          success: 'SellItem successfully deleted',
        },
        destroyAll: {
          success: 'SellItem(s) successfully deleted',
        },
        edit: {
          title: 'Edit SellItem',
        },
        fields: {
          id: 'Id',
          'itemName': 'ItemName',
          'product': 'Product',
          'priceRange': 'Price',
          'price': 'Price',
          'quantityRange': 'Quantity',
          'quantity': 'Quantity',
          'totalRange': 'Total',
          'total': 'Total',
          'shop': 'Shop',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New SellItem',
        },
        view: {
          title: 'View SellItem',
        },
        importer: {
          title: 'Import SellItems',
          fileName: 'sellItem_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    accounts: {
        name: 'accounts',
        label: 'Accounts',
        menu: 'Accounts',
        exporterFileName: 'accounts_export',
        list: {
          menu: 'Accounts',
          title: 'Accounts',
        },
        create: {
          success: 'Accounts successfully saved',
        },
        update: {
          success: 'Accounts successfully saved',
        },
        destroy: {
          success: 'Accounts successfully deleted',
        },
        destroyAll: {
          success: 'Accounts(s) successfully deleted',
        },
        edit: {
          title: 'Edit Accounts',
        },
        fields: {
          id: 'Id',
          'account': 'Account',
          'type': 'Type',
          'openBalanceRange': 'OpenBalance',
          'openBalance': 'OpenBalance',
          'shop': 'Shop',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'type': {
            'Income': 'Income',
            'Expense': 'Expense',
            'Asset': 'Asset',
            'Liability': 'Liability',
            'Equity': 'Equity',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Accounts',
        },
        view: {
          title: 'View Accounts',
        },
        importer: {
          title: 'Import Accounts',
          fileName: 'accounts_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

      expense: {
        name: 'expense',
        label: 'Expenses',
        menu: 'Expenses',
        exporterFileName: 'expense_export',
        list: {
          menu: 'Expenses',
          title: 'Expenses',
        },
        create: {
          success: 'Expense successfully saved',
        },
        update: {
          success: 'Expense successfully saved',
        },
        destroy: {
          success: 'Expense successfully deleted',
        },
        destroyAll: {
          success: 'Expense(s) successfully deleted',
        },
        edit: {
          title: 'Edit Expense',
        },
        fields: {
          id: 'Id',
          'supplier': 'Supplier',
          'description': 'Description',
          'amountRange': 'Amount',
          'amount': 'Amount',
          'expenseDateRange': 'Expense Date',
          'expenseDate': 'Expense Date',
          'shop': 'Shop',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Expense',
        },
        view: {
          title: 'View Expense',
        },
        importer: {
          title: 'Import Expenses',
          fileName: 'expense_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    paymentVoucher: {
        name: 'paymentVoucher',
        label: 'Payment Vouchers',
        menu: 'Payment Vouchers',
        exporterFileName: 'paymentVoucher_export',
        list: {
          menu: 'PaymentVouchers',
          title: 'PaymentVouchers',
        },
        create: {
          success: 'PaymentVoucher successfully saved',
        },
        update: {
          success: 'PaymentVoucher successfully saved',
        },
        destroy: {
          success: 'PaymentVoucher successfully deleted',
        },
        destroyAll: {
          success: 'PaymentVoucher(s) successfully deleted',
        },
        edit: {
          title: 'Edit PaymentVoucher',
        },
        fields: {
          id: 'Id',
          'supplier': 'Supplier',
          'unPaidAmountRange': 'UnPaid ',
          'unPaidAmount': 'UnPaid ',
          'paidAmountRange': 'Paid ',
          'paidAmount': 'Paid ',
          'balanceAmountRange': 'Balance',
          'balanceAmount': 'Balance',
          'paymentNote': 'Note',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Payment Voucher',
        },
        view: {
          title: 'View Payment Voucher',
        },
        importer: {
          title: 'Import Payment Vouchers',
          fileName: 'paymentVoucher_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    receiptVoucher: {
        name: 'receiptVoucher',
        label: 'Receipt Vouchers',
        menu: 'Receipt Vouchers',
        exporterFileName: 'Receipt_Voucher_export',
        list: {
          menu: 'ReceiptVouchers',
          title: 'ReceiptVouchers',
        },
        create: {
          success: 'ReceiptVoucher successfully saved',
        },
        update: {
          success: 'ReceiptVoucher successfully saved',
        },
        destroy: {
          success: 'ReceiptVoucher successfully deleted',
        },
        destroyAll: {
          success: 'ReceiptVoucher(s) successfully deleted',
        },
        edit: {
          title: 'Edit ReceiptVoucher',
        },
        fields: {
          id: 'Id',
          'customer': 'Customer',
          'unpaidAmountRange': 'Unpaid',
          'unpaidAmount': 'Unpaid',
          'paidAmountRange': 'Paid',
          'paidAmount': 'Paid',
          'balanceAmountRange': 'Balance',
          'balanceAmount': 'Balance',
          'receiptNote': 'Note',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New ReceiptVoucher',
        },
        view: {
          title: 'View ReceiptVoucher',
        },
        importer: {
          title: 'Import ReceiptVouchers',
          fileName: 'receiptVoucher_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom access to resources',
    },
  },

  user: {
    invite: 'Invite',
    title: 'Users',
    menu: 'Users',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
    },
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    disable: 'Disable',
    enable: 'Enable',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'User(s) successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      titleModal: 'New User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default en;
