import jwt from 'jsonwebtoken';
import User from '../Models/userModel.js';

export const AuthenticateToken = (req, res, next) => {
  // Extract the JWT token from the Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  // Verify the token
  jwt.verify(token, 'jwtSecret', async (err, decodedToken) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }

    try {
      // Find the user associated with the token
      const user = await User.findById(decodedToken.userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Populate req.user with the user object
      req.user = user;
      next();
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
};
