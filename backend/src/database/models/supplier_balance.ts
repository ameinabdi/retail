import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const supplier_balance = sequelize.define(
    'supplier_balance',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      supplierName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      supplierType: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "Purchase",
            "Expense"
          ]],
        }
      },
      supplierTelephone: {
        type: DataTypes.TEXT,
      },
      supplierAddress: {
        type: DataTypes.TEXT,
      },
      initialBalance: {
        type: DataTypes.DECIMAL(24, 2),
      },
      totalBalancePurchase: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      totalBalanceExpense: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      totalPaid: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      totalBalance: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {
        }
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,    
        validate: {
          len: [0, 255],
        },    
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['importHash', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  supplier_balance.associate = (models) => {
    models.supplier_balance.belongsTo(models.shop, {
      as: 'shop',
      constraints: false,
    });


    
    models.supplier_balance.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.supplier_balance.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.supplier_balance.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return supplier_balance;
}
