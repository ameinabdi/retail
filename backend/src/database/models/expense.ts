import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const expense = sequelize.define(
    'expense',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      description: {
        type: DataTypes.TEXT,
      },
      amount: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      expenseDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('expenseDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('expenseDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
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

  expense.associate = (models) => {
    models.expense.belongsTo(models.supplier, {
      as: 'supplier',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.expense.belongsTo(models.shop, {
      as: 'shop',
      constraints: false,
    });


    
    models.expense.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.expense.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.expense.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return expense;
}
