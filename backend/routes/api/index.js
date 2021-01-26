const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const scheduleRouter = require('./schedule')



router.use("/session", sessionRouter);

router.use("/users", usersRouter);
router.use("/schedule",scheduleRouter)
module.exports = router;

