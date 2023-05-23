import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const stock = sequelize.define(
    'stock',
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
      totalPurchased: {
        type: DataTypes.TEXT,
      },
      totalSold: {
        type: DataTypes.TEXT,
      },
      totalAvailable: {
        type: DataTypes.TEXT,
      },
      totalAmountPurchased: {
        type: DataTypes.TEXT,
      },
      totalAmountSold: {
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

  stock.associate = (models) => {
    models.stock.belongsTo(models.shop, {
      as: 'shop',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.stock.hasMany(models.file, {
      as: 'productPhoto',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.stock.getTableName(),
        belongsToColumn: 'productPhoto',
      },
    });
    
    models.stock.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return stock;
}
