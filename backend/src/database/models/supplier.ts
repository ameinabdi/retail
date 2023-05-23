import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const supplier = sequelize.define(
    'supplier',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      supplierName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      supplierType: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "Purchase",
            "Expense"
          ]],
        }
      },
      supplierTelephone: {
        type: DataTypes.TEXT,
      },
      supplierAddress: {
        type: DataTypes.TEXT,
      },
      initialBalance: {
        type: DataTypes.DECIMAL,
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

  supplier.associate = (models) => {
    models.supplier.belongsTo(models.shop, {
      as: 'shop',
      constraints: false,
    });


    
    models.supplier.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.supplier.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.supplier.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return supplier;
}
