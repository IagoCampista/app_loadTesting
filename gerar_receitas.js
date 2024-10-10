const { faker } = require("@faker-js/faker");

function gerarReceitas(requestParams, ctx, ee, next) {
  ctx.vars["nome"] = faker.lorem.words(3); // Gera um nome de receita
  ctx.vars["ingredientes"] = faker.lorem.sentences(2); // Gera uma lista de ingredientes
  ctx.vars["direcoes"] = faker.lorem.paragraphs(1); // Gera as instruções da receita
  return next();
}

module.exports = {
  gerarReceitas,
};
