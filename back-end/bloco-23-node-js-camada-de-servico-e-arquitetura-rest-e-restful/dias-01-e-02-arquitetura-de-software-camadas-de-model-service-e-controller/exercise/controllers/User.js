const User = require('../services/User');

const create = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await User.create(firstName, lastName, email, password);

  if (user.error) return next(user.error);

  return res.status(201).json(user);
};

const getAll = async (_req, res) => {
  const users = await User.getAll();

  return res.status(200).json(users);
}

const findById = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (user.error) return next(user.error);

  return res.status(200).json(user);
}

const update = async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const user = await User.update(firstName, lastName, email, password, id);

  if (user.error) return next(user.error);

  return res.status(200).json(user);
}

module.exports = { create, getAll, findById, update };
