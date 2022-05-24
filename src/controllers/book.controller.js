import { Book } from "../models/Book.js";

export async function createBook(req, res) {
  try {
    const { name, borrowed, userId } = req.body;
    const newBook = await Book.create({
      userId,
      name,
      borrowed
    });
    res.json(newBook);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getBooks(req, res) {
  try {
    const books = await Book.findAll({
      attributes: ["id", "userId", "name", "borrowed"],
      order: [["id", "DESC"]],
    });
    res.json(books);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateBook(req, res) {
  const { id } = req.params;
  const { name, borrowed, userId } = req.body;
  try {
    const updatedBook = await Book.update(
      { name, borrowed, userId },
      { where: { id } }
    );

    const book = await Book.findOne({
      attributes: ["name", "userId", "borrowed", "id"],
      where: { id },
    });

    book.set(req.body);

    await book.save();

    res.json(book);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteBook(req, res) {
  const { id } = req.params;
  try {
    await Book.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getBook(req, res) {
  const { id } = req.params;
  try {
    const book = await Book.findOne({
      where: { id },
      attributes: ["id", "userId", "name", "borrowed"],
    });
    res.json(book);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
