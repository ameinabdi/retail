import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const advance = sequelize.define(
    'advance',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      amount: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {

        }
      },
      note: {
        type: DataTypes.TEXT,
      },
      advanceDate: {
        type: DataTypes.DATE,
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

  advance.associate = (models) => {
    models.advance.belongsTo(models.user, {
      as: 'employee',
      constraints: false,
    });

    models.advance.belongsTo(models.accounts, {
      as: 'account',
      constraints: false,
    });

    models.advance.belongsTo(models.shop, {
      as: 'shop',
      constraints: false,
    });


    
    models.advance.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.advance.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.advance.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return advance;
}
