import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const receiptVoucher = sequelize.define(
    'receiptVoucher',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      unpaidAmount: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      paidAmount: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      balanceAmount: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      receiptNote: {
        type: DataTypes.TEXT,
      },
      receiptDate: {
        type: DataTypes.DATE,
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

  receiptVoucher.associate = (models) => {
    models.receiptVoucher.belongsTo(models.customer_balance, {
      as: 'customer',
      constraints: false,
    });
    models.receiptVoucher.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.receiptVoucher.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.receiptVoucher.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return receiptVoucher;
}
