import express from "express"
import user from "./controllers/user"
import auth from "./controllers/auth"

const routes = express.Router()

routes.post("/auth", auth.login)

routes.get("/user", user.getAll)
routes.get("/user/:id", user.getById)
routes.post("/user", user.create)
routes.put("/user", user.updateById)
routes.put("/user-create", user.updateByIdCreate)
routes.delete("/user", user.delete)

module.exports = routes
