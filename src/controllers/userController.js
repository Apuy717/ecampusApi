"use-strict";
const UserModels = require("../models").User;
const RolesModels = require("../models").Roles;

const getAllUser = async (req, res) => {
  const User = await UserModels.findAll({
    include: [{ model: RolesModels }],
  });
  res.status(200).send({
    status: 200,
    message: "Berhasil get data user",
    User,
  });
};

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const User = await UserModels.create({
      firstName,
      lastName,
      email,
    });

    res.status(200).send({ status: 200, message: "User berhasil ditambahkan", data: User });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

module.exports = { getAllUser, createUser };
