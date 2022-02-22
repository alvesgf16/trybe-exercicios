const Joi = require('joi');

const User = require('../models/User');

const createSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'any.required': 'O campo {{#label}} é obrigatório',
  'string.email': 'Informe um email válido no campo {{#label}}',
  'string.min': 'O campo {{#label}} deve ter, pelo menos {{#limit}} caracteres',
});

const create = async (firstName, lastName, email, password) => {
  const { error } = createSchema.validate({ firstName, lastName, email, password });

  if (error) return { error };

  const [user] = await User.create(firstName, lastName, email, password);

  return { id: user.insertId, firstName, lastName, email };
};

const getAll = async () => {
  return await User.getAll();
}

const findById = async (id) => {
  const user = await User.findById(id);

  if (!user) return { error: {
    code: 'notFound',
    message: `Usuário não encontrado`,
  } };

  return user;
}

const update = async (firstName, lastName, email, password, id) => {
  const { error } = createSchema.validate({ firstName, lastName, email, password });

  if (error) return { error };

  const [user] = await User.update(firstName, lastName, email, password, id)

  if (!user) return { error: {
    code: 'notFound',
    message: 'Usuário não encontrado',
  } }

  return { id, firstName, lastName, email };
}

module.exports = { create, getAll, findById, update };
