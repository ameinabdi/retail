import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const accounts = sequelize.define(
    'accounts',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      account: {
        type: DataTypes.TEXT,
      },
      type: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "Income",
            "Expense",
            "Asset",
            "Liability",
            "Equity"
          ]],
        }
      },
      openBalance: {
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

  accounts.associate = (models) => {
    models.accounts.belongsTo(models.shop, {
      as: 'shop',
      constraints: false,
    });


    
    models.accounts.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.accounts.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.accounts.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return accounts;
}
