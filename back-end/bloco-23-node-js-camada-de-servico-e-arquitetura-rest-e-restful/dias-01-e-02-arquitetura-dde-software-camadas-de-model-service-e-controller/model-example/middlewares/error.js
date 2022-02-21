module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400)
      .json({ error: { message: err.details[0].message } });
  }

  const statusByErrorCode = {
    notFound: 404, 
    alreadyExists: 409, 
  };

  const status = statusByErrorCode[err.code] || 500;

  res.status(status).json({ error: { message: err.message } });
};

// Qualquer erro será recebido sempre por esse middleware, então a primeira coisa que fazemos
// é identificar qual o tipo do erro.
// Se for um erro do Joi, sabemos que trata-se de um erro de validação
  // Logo, respondemos com o status 400 Bad Request
    // E com a mensagem gerada pelo Joi
// Caso não seja um erro do Joi, pode ser um erro de domínio ou um erro inesperado.
// Construímos, então, um mapa que conecta um erro de domínio a um status HTTP.
  // Erros do tipo `notFound` retornam status 404 Not Found
  // Erros do tipo `alreadyExists` retornam status 409 Conflict
  // Podemos adicionar quantos códigos novos desejarmos
// Buscamos o status adequado para o erro que estamos tratando.
// Caso não haja um status para esse código, assumimos que é
// um erro desconhecido e utilizamos o status 500 Internal Server Error
// Por último, retornamos o status e a mensagem de erro para o client