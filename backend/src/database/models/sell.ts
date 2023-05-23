import { DataTypes } from 'sequelize';
import moment from 'moment';

export default function (sequelize) {
  const sell = sequelize.define(
    'sell',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
      sellDetails: {
        type: DataTypes.TEXT,
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

  sell.associate = (models) => {
    models.sell.belongsTo(models.customer, {
      as: 'customer',
      constraints: false,
    });

    models.sell.belongsTo(models.shop, {
      as: 'shop',
      constraints: false,
    });

    models.sell.hasMany(models.sellItem, {
      as: 'Items',
      foreignKey: 'sellId',
      constraints: false,
    });
    models.sell.belongsTo(models.user, {
      as: 'sellBy',
    });
    
    models.sell.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.sell.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.sell.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return sell;
}
