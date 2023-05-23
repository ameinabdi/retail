import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const fullproduct = sequelize.define(
    'fullproduct',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      productName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      productSerialNumber: {
        type: DataTypes.TEXT,
      },
      productQuantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {

        }
      },
      productPrice: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      purchaseDate: {
        type: DataTypes.DATE,
      },
      availableQuantity: {
        type: DataTypes.TEXT,
      },
      sellingPrice: {
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

  fullproduct.associate = (models) => {
    models.fullproduct.belongsTo(models.shop, {
      as: 'shop',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.fullproduct.hasMany(models.file, {
      as: 'productPhoto',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.product.getTableName(),
        belongsToColumn: 'productPhoto',
      },
    });
    
    models.fullproduct.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.fullproduct.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.fullproduct.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return fullproduct;
}
