const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const GetterSetterModule = buildModule("GetterSetterModule", (m) => {
  const getterSetter = m.contract("GetterSetter");

  return { getterSetter };
});

module.exports = GetterSetterModule;
