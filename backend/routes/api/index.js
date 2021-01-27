const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const scheduleRouter = require('./schedule.js')
const childrenRouter = require('./children')


router.use("/session", sessionRouter);

router.use("/users", usersRouter);
router.use("/schedule",scheduleRouter)
router.use("/children",childrenRouter)
module.exports = router;

