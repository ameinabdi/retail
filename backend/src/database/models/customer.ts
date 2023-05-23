import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const customer = sequelize.define(
    'customer',
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

  customer.associate = (models) => {
    models.customer.belongsTo(models.shop, {
      as: 'shop',
      constraints: false,
    });


    
    models.customer.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.customer.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.customer.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return customer;
}
