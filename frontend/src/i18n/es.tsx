const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    filters: 'Filtros',
  },
  app: {
    title: 'Aplicación',
  },

  api: {
    menu: 'API',
  },
  
  entities: {
    shop: {
        name: 'shop',
        label: 'Shops',
        menu: 'Shops',
        exporterFileName: 'exportacion_shop',
        list: {
          menu: 'Shops',
          title: 'Shops',
        },
        create: {
          success: 'Shop guardado con éxito',
        },
        update: {
          success: 'Shop guardado con éxito',
        },
        destroy: {
          success: 'Shop eliminado con éxito',
        },
        destroyAll: {
          success: 'Shop(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Shop',
        },
        fields: {
          id: 'Id',
          'shopName': 'ShopName',
          'shopTelephone': 'ShopTelephone',
          'shopCurrency': 'ShopCurrency',
          'shopAddress': 'ShopAddress',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Shop',
        },
        view: {
          title: 'Ver Shop',
        },
        importer: {
          title: 'Importar Shops',
          fileName: 'shop_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    product: {
        name: 'product',
        label: 'Products',
        menu: 'Products',
        exporterFileName: 'exportacion_product',
        list: {
          menu: 'Products',
          title: 'Products',
        },
        create: {
          success: 'Product guardado con éxito',
        },
        update: {
          success: 'Product guardado con éxito',
        },
        destroy: {
          success: 'Product eliminado con éxito',
        },
        destroyAll: {
          success: 'Product(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Product',
        },
        fields: {
          id: 'Id',
          'productName': 'Name',
          'productSerialNumber': 'Serial No',
          'productQuantityRange': 'Quantity',
          'productQuantity': 'Quantity',
          'productPriceRange': 'Price',
          'productPrice': 'Price',
          'purchaseDateRange': 'purchaseDate',
          'purchaseDate': 'purchaseDate',
          'productPhoto': 'Photo',
          'shop': 'Shop',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Product',
        },
        view: {
          title: 'Ver Product',
        },
        importer: {
          title: 'Importar Products',
          fileName: 'product_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    supplier: {
        name: 'supplier',
        label: 'Suppliers',
        menu: 'Suppliers',
        exporterFileName: 'exportacion_supplier',
        list: {
          menu: 'Suppliers',
          title: 'Suppliers',
        },
        create: {
          success: 'Supplier guardado con éxito',
        },
        update: {
          success: 'Supplier guardado con éxito',
        },
        destroy: {
          success: 'Supplier eliminado con éxito',
        },
        destroyAll: {
          success: 'Supplier(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Supplier',
        },
        fields: {
          id: 'Id',
          'supplierName': 'SupplierName',
          'supplierType': 'SupplierType',
          'supplierTelephone': 'SupplierTelephone',
          'supplierAddress': 'SupplierAddress',
          'initialBalanceRange': 'InitialBalance',
          'initialBalance': 'InitialBalance',
          'shop': 'Shop',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Supplier',
        },
        view: {
          title: 'Ver Supplier',
        },
        importer: {
          title: 'Importar Suppliers',
          fileName: 'supplier_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    purchase: {
        name: 'purchase',
        label: 'Purchases',
        menu: 'Purchases',
        exporterFileName: 'exportacion_purchase',
        list: {
          menu: 'Purchases',
          title: 'Purchases',
        },
        create: {
          success: 'Purchase guardado con éxito',
        },
        update: {
          success: 'Purchase guardado con éxito',
        },
        destroy: {
          success: 'Purchase eliminado con éxito',
        },
        destroyAll: {
          success: 'Purchase(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Purchase',
        },
        fields: {
          id: 'Id',
          'supplier': 'Supplier',
          'totalAmountRange': 'TotalAmount',
          'totalAmount': 'TotalAmount',
          'paidAmountRange': 'PaidAmount',
          'paidAmount': 'PaidAmount',
          'balanceAmountRange': 'Balance Amount',
          'balanceAmount': 'Balance Amount',
          'purchaseDateRange': 'PurchaseDate',
          'purchaseDate': 'PurchaseDate',
          'purchaseDatails': 'PurchaseDatails',
          'shop': 'Shop',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Purchase',
        },
        view: {
          title: 'Ver Purchase',
        },
        importer: {
          title: 'Importar Purchases',
          fileName: 'purchase_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    purchaseItem: {
        name: 'purchaseItem',
        label: 'PurchaseItems',
        menu: 'PurchaseItems',
        exporterFileName: 'exportacion_purchaseItem',
        list: {
          menu: 'PurchaseItems',
          title: 'PurchaseItems',
        },
        create: {
          success: 'PurchaseItem guardado con éxito',
        },
        update: {
          success: 'PurchaseItem guardado con éxito',
        },
        destroy: {
          success: 'PurchaseItem eliminado con éxito',
        },
        destroyAll: {
          success: 'PurchaseItem(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar PurchaseItem',
        },
        fields: {
          id: 'Id',
          'product': 'Product',
          'itemName': 'ItemName',
          'costPriceRange': 'CostPrice',
          'costPrice': 'CostPrice',
          'quantityRange': 'Quantity',
          'quantity': 'Quantity',
          'sellingPriceRange': 'SellingPrice',
          'sellingPrice': 'SellingPrice',
          'totalPriceRange': 'TotalPrice',
          'totalPrice': 'TotalPrice',
          'shop': 'Shop',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo PurchaseItem',
        },
        view: {
          title: 'Ver PurchaseItem',
        },
        importer: {
          title: 'Importar PurchaseItems',
          fileName: 'purchaseItem_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    customer: {
        name: 'customer',
        label: 'Customers',
        menu: 'Customers',
        exporterFileName: 'exportacion_customer',
        list: {
          menu: 'Customers',
          title: 'Customers',
        },
        create: {
          success: 'Customer guardado con éxito',
        },
        update: {
          success: 'Customer guardado con éxito',
        },
        destroy: {
          success: 'Customer eliminado con éxito',
        },
        destroyAll: {
          success: 'Customer(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Customer',
        },
        fields: {
          id: 'Id',
          'fullName': 'FullName',
          'telephone': 'Telephone',
          'initialBalanceRange': 'InitialBalance',
          'initialBalance': 'InitialBalance',
          'shop': 'Shop',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Customer',
        },
        view: {
          title: 'Ver Customer',
        },
        importer: {
          title: 'Importar Customers',
          fileName: 'customer_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    sell: {
        name: 'sell',
        label: 'Sells',
        menu: 'Sells',
        exporterFileName: 'exportacion_sell',
        list: {
          menu: 'Sells',
          title: 'Sells',
        },
        create: {
          success: 'Sell guardado con éxito',
        },
        update: {
          success: 'Sell guardado con éxito',
        },
        destroy: {
          success: 'Sell eliminado con éxito',
        },
        destroyAll: {
          success: 'Sell(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Sell',
        },
        fields: {
          id: 'Id',
          'customer': 'Customer',
          'sellDateRange': 'SellDate',
          'sellDate': 'SellDate',
          'sellDetails': 'SellDetails',
          'totalAmountRange': 'TotalAmount',
          'totalAmount': 'TotalAmount',
          'paidAmountRange': 'PaidAmount',
          'paidAmount': 'PaidAmount',
          'balanceAmountRange': 'BalanceAmount',
          'balanceAmount': 'BalanceAmount',
          'shop': 'Shop',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Sell',
        },
        view: {
          title: 'Ver Sell',
        },
        importer: {
          title: 'Importar Sells',
          fileName: 'sell_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    sellItem: {
        name: 'sellItem',
        label: 'SellItems',
        menu: 'SellItems',
        exporterFileName: 'exportacion_sellItem',
        list: {
          menu: 'SellItems',
          title: 'SellItems',
        },
        create: {
          success: 'SellItem guardado con éxito',
        },
        update: {
          success: 'SellItem guardado con éxito',
        },
        destroy: {
          success: 'SellItem eliminado con éxito',
        },
        destroyAll: {
          success: 'SellItem(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar SellItem',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo SellItem',
        },
        view: {
          title: 'Ver SellItem',
        },
        importer: {
          title: 'Importar SellItems',
          fileName: 'sellItem_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    accounts: {
        name: 'accounts',
        label: 'Accounts',
        menu: 'Accounts',
        exporterFileName: 'exportacion_accounts',
        list: {
          menu: 'Accounts',
          title: 'Accounts',
        },
        create: {
          success: 'Accounts guardado con éxito',
        },
        update: {
          success: 'Accounts guardado con éxito',
        },
        destroy: {
          success: 'Accounts eliminado con éxito',
        },
        destroyAll: {
          success: 'Accounts(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Accounts',
        },
        fields: {
          id: 'Id',
          'account': 'Account',
          'type': 'Type',
          'openBalanceRange': 'OpenBalance',
          'openBalance': 'OpenBalance',
          'shop': 'Shop',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Accounts',
        },
        view: {
          title: 'Ver Accounts',
        },
        importer: {
          title: 'Importar Accounts',
          fileName: 'accounts_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    transaction: {
        name: 'transaction',
        label: 'Transactions',
        menu: 'Transactions',
        exporterFileName: 'exportacion_transaction',
        list: {
          menu: 'Transactions',
          title: 'Transactions',
        },
        create: {
          success: 'Transaction guardado con éxito',
        },
        update: {
          success: 'Transaction guardado con éxito',
        },
        destroy: {
          success: 'Transaction eliminado con éxito',
        },
        destroyAll: {
          success: 'Transaction(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Transaction',
        },
        fields: {
          id: 'Id',
          'account': 'Account',
          'description': 'Description',
          'amountRange': 'Amount',
          'amount': 'Amount',
          'transactionDateRange': 'TransactionDate',
          'transactionDate': 'TransactionDate',
          'shop': 'Shop',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Transaction',
        },
        view: {
          title: 'Ver Transaction',
        },
        importer: {
          title: 'Importar Transactions',
          fileName: 'transaction_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crea una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Acceso personalizado a recursos',
    },
  },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Imagen de fondo',
    },
    colors: {
      default: 'Defecto',
      cyan: 'Cian',
      'geek-blue': 'Geek Blue',
      gold: 'Oro',
      lime: 'Lima',
      magenta: 'Magenta',
      orange: 'Naranja',
      'polar-green': 'Verde polar',
      purple: 'Púrpura',
      red: 'Rojo',
      volcano: 'Volcán',
      yellow: 'Amarillo',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/view/dashboard/DashboardPage.ts.',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },

  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
  },
  
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} es obligatorio`
          : `'El campo ${path} debe tener al menos ${min} elementos`,
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },
  autocomplete: {
    loading: 'Cargando...',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
};

export default es;
