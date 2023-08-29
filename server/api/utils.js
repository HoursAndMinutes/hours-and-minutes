const requireUser = (req, res, next) => {
  if (req.userId) {
    next();
  } else {
    res.status(401).send({ message: "User unauthorized" });
  };
};

const requireAdmin = (req, res, next) => {
  if (req.admin) {
    next();
  } else {
    res.status(401).send({ message: "User does not have permission to access this page" })
  }
}

module.exports = {
  requireUser, requireAdmin
}