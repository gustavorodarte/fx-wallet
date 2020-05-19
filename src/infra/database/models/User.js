module.exports = (sequelize, DataTypes) => {
  const CoverageRate = sequelize.define('user', {
    cpf: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  return CoverageRate;
};
