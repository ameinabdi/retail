import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const salary = sequelize.define(
    'salary',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      basicSalary: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      allowanceSalary: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      totalSalary: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      advance: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      netSalary: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      paidSalary: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      balance: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      salaryDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('salaryDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('salaryDate'))
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

  salary.associate = (models) => {
    models.salary.belongsTo(models.user, {
      as: 'employee',
      constraints: false,
    });

    models.salary.belongsTo(models.accounts, {
      as: 'account',
      constraints: false,
    });

    models.salary.belongsTo(models.shop, {
      as: 'shop',
      constraints: false,
    });


    
    models.salary.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.salary.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.salary.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return salary;
}
