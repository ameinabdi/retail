export default function (sequelize, DataTypes) {
    const employee = sequelize.define(
      'employee',
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        fullName: {
          type: DataTypes.STRING(255),
          allowNull: true,
          validate: {
            len: [0, 255],
          },
        },
        firstName: {
          type: DataTypes.STRING(80),
          allowNull: true,
          validate: {
            len: [0, 80],
          },
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
        totalAdvance: {
            type: DataTypes.DECIMAL(24, 2),
            validate: {
    
            }
        },
        totalBalance: {
            type: DataTypes.DECIMAL(24, 2),
            validate: {
    
            }
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: true,
          validate: {
            len: [0, 255],
          },
          get() {
            return undefined;
          },
        },
        emailVerified: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        emailVerificationToken: {
          type: DataTypes.STRING(255),
          allowNull: true,
          get() {
            return undefined;
          },
        },
        emailVerificationTokenExpiresAt: {
          type: DataTypes.DATE,
        },
        provider: {
          type: DataTypes.STRING(255),
          validate: {
            len: [0, 255],
          },
        },
        providerId: {
          type: DataTypes.STRING(2024),
          validate: {
            len: [0, 2024],
          },
        },
        passwordResetToken: {
          type: DataTypes.STRING(255),
          allowNull: true,
          validate: {
            len: [0, 255],
          },
          get() {
            return undefined;
          },
        },
        passwordResetTokenExpiresAt: { type: DataTypes.DATE },
        lastName: {
          type: DataTypes.STRING(175),
          allowNull: true,
          validate: {
            len: [0, 175],
          },
        },
        phoneNumber: {
          type: DataTypes.STRING(24),
          allowNull: true,
          validate: {
            len: [0, 24],
          },
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
          validate: {
            isEmail: true,
            notEmpty: true,
            len: [0, 255],
          },
        },
        jwtTokenInvalidBefore: {
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
            fields: ['email'],
            where: {
              deletedAt: null,
            },
          },
          {
            unique: true,
            fields: ['importHash'],
            where: {
              deletedAt: null,
            },
          },
        ],
        timestamps: true,
        paranoid: true,
      },
    );
  
    employee.associate = (models) => {
      models.employee.hasMany(models.tenantUser, {
        as: 'tenants',
        foreignKey: 'userId',

      });
      models.employee.belongsTo(models.shop, {
        as: 'shop',
        constraints: false,
      });
      models.employee.hasMany(models.file, {
        as: { singular: 'avatar', plural: 'avatars' },
        foreignKey: 'belongsToId',
        constraints: false,
        scope: {
          belongsTo: models.user.getTableName(),
          belongsToColumn: 'avatars',
        },
      });
  
      models.employee.belongsTo(models.user, {
        as: 'createdBy',
      });
  
      models.employee.belongsTo(models.user, {
        as: 'updatedBy',
      });
    };
   
    return employee;
  }
   