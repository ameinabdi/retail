import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const purchase = sequelize.define(
    'purchase',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      totalAmount: {
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
      purchaseDate: {
        type: DataTypes.DATE,
      },
      purchaseDatails: {
        type: DataTypes.TEXT,
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

  purchase.associate = (models) => {
    models.purchase.belongsTo(models.supplier, {
      as: 'supplier',
      constraints: false,
    });

    models.purchase.belongsTo(models.shop, {
      as: 'shop',
      constraints: false,
    });
    models.purchase.hasMany(models.purchaseItem, {
      as: 'Items',
      foreignKey: 'purchaseId',
      constraints: false,
    });

    
    models.purchase.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.purchase.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.purchase.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return purchase;
}
