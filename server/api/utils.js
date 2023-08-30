const requireUser = (req, res, next) => {
  if (req.userId) {
    next();
  } else {
    res.status(401).send({ message: "User unauthorized" });
  };
};

//make something only accesible if the user is the logged in user

const requireUserOrAdmin = (req, res, next) => {
  //Are you logged in as the user we are accessing?
  //OR are you an admin
  if (req.userId === Number(req.params.id) || req.admin) {
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
  requireUser, requireAdmin, requireUserOrAdmin
}