import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const shop = sequelize.define(
    'shop',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      shopName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      shopTelephone: {
        type: DataTypes.TEXT,
      },
      shopCurrency: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "USD",
            "SLSH"
          ]],
        }
      },
      shopAddress: {
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

  shop.associate = (models) => {



    
    models.shop.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.shop.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.shop.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return shop;
}
