const { faker } = require("@faker-js/faker");

function gerarTasks(requestParams, ctx, ee, next) {
  ctx.vars["nome"] = faker.name;
  ctx.vars["email"] = faker.internet.email;

  ctx.vars["senha"] = faker.internet.password;
  return next();
}

module.exports = {
  gerarTasks,
};