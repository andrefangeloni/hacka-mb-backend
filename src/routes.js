import express from "express"
import user from "./controllers/user"

const routes = express.Router()

routes.get("/user", user.getAll)
routes.get("/user/:id", user.getById)
routes.post("/user", user.create)
routes.put("/user/:id", user.updateById)
// routes.delete("/user", user.delete)

module.exports = routes
