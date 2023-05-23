import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const purchaseItem = sequelize.define(
    'purchaseItem',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      itemName: {
        type: DataTypes.TEXT,
      },
      costPrice: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      sellingPrice: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      totalPrice: {
        type: DataTypes.DECIMAL,
      },
      purchaseDate: {
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

  purchaseItem.associate = (models) => {
    models.purchaseItem.belongsTo(models.product, {
      as: 'product',
      constraints: false,
    });

    models.purchaseItem.belongsTo(models.shop, {
      as: 'shop',
      constraints: false,
    });

    models.purchaseItem.belongsTo(models.purchase, {
      as: 'purchase',
      constraints: false,
    });
    
    models.purchaseItem.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.purchaseItem.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.purchaseItem.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return purchaseItem;
}
