module.exports = (sequelize, DataTypes) => {
  const CoverageRate = sequelize.define('User', {
    cpf: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  return CoverageRate;
};
