import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const customer_balance = sequelize.define(
    'customer_balance',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      fullName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      telephone: {
        type: DataTypes.TEXT,
      },
      initialBalance: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      sellsBalance: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      totalpaid: {
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

  customer_balance.associate = (models) => {
    models.customer_balance.belongsTo(models.shop, {
      as: 'shop',
      constraints: false,
    });


    
    models.customer_balance.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.customer_balance.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.customer_balance.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return customer_balance;
}
