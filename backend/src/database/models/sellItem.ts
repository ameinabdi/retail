import { DataTypes } from 'sequelize';
import moment from 'moment';

export default function (sequelize) {
  const sellItem = sequelize.define(
    'sellItem',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      itemName: {
        type: DataTypes.TEXT,
      },
      sellDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('sellDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('sellDate'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      price: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      quantity: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      total: {
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

  sellItem.associate = (models) => {
    models.sellItem.belongsTo(models.product, {
      as: 'product',
      constraints: false,
    });

    models.sellItem.belongsTo(models.shop, {
      as: 'shop',
      constraints: false,
    });

    models.sellItem.belongsTo(models.sell, {
      as: 'sell',
      constraints: false,
    });
    
    models.sellItem.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.sellItem.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.sellItem.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return sellItem;
}
