const express = require('express');
const router = express.Router();

function validateUsername(req, res, next) {
  const { username } = req.body;

  if (username.length <= 3) return res.status(400).json({ message: 'invalid data' });
}