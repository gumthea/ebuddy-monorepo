import { Request, Response } from "express";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { userCollection } from "../repository/userCollection";

// Authentication
const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userCollection.getUserByEmail(req.body.email);
    if (!user) {
      res.status(401).json({ message: "Invalid email or password" });
    }

    if (!user || !user.password) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      'EbuddyHendra',
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: "Login success",
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        token
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// User Management
const addUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const newUser = req.body;
        const user = await userCollection.addUser(newUser);

        if (!user) {
          res.status(409).json({ message: "Email already exists" });
        }

        res.status(201).json({ message: "User created", data: newUser });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

const getAllUsers = async (_req: Request, res: Response): Promise<void> => {
    try {
      const users = await userCollection.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.params.id ?? '';
        const user = await userCollection.getUserById(userId);
        if (!user) {
          res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.params.id ?? '';
        if (!userId) {
          res.status(400).json({ message: "User ID is required" });
        }
        const updatedUser = await userCollection.updateUser(userId, req.body);
        if (!updatedUser) {
          res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User updated", data: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.params.id ?? '';
        const success = await userCollection.deleteUser(userId);
        if (success) {
          res.status(200).json({ message: "User deleted" });
        } else {
          res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
};

export const apiController = {
  login,
  addUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
