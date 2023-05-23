import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const paymentVoucher = sequelize.define(
    'paymentVoucher',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      unPaidAmount: {
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
      paymentNote: {
        type: DataTypes.TEXT,
      },
      paymentDate: {
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

  paymentVoucher.associate = (models) => {
    models.paymentVoucher.belongsTo(models.supplier, {
      as: 'supplier',
      constraints: false,
    });


    
    models.paymentVoucher.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.paymentVoucher.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.paymentVoucher.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return paymentVoucher;
}
