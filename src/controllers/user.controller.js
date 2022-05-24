import { User } from "../models/User.js";
import { Book } from "../models/Book.js";

export async function getUsers(req, res) {
  try {
    const users = await User.findAll({
      atributes: ["id", "name", "description"],
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createUser(req, res) {
  const { name, description } = req.body;
  try {
    let newUser = await User.create(
      {
        name,
        description,
      },
      {
        fields: ["name", "description"],
      }
    );
    return res.json(newUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getUser(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const user = await user.findByPk(id);
    user.name = name;
    user.description = description;
    await user.save();

    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    await Book.destroy({
      where: {
        userId: id,
      },
    });
    await User.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getUserBooks(req, res) {
  const { id } = req.params;
  try {
    const books = await Book.findAll({
      attributes: ["id", "userId", "name", "borrowed"],
      where: { userId: id },
    });
    res.json(books);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
