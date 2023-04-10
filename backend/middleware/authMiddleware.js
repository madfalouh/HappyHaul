import jwt from "jsonwebtoken";
import AsyncHandler from "express-async-handler";
import User from "../api/models/User.js";

export const protect = AsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      res.status(401);

      const err1 = new Error(`Not authorizs , token failed`);

      next(err1);
    }
  }

  if (!token) {
    const err = new Error(`no token`);
    res.status(401);
    next(err);
  }
});
