const router = require("express").Router();
const auth = require("../middlewares/auth");
const userRoutes = require("./users");
const articleRoutes = require("./articles");

router.use("/users", auth, userRoutes);
router.use("/articles", auth, articleRoutes);

module.exports = router;
