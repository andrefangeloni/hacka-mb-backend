import express from "express"
import user from"./src/controllers/user"

const routes = express.Router()

routes.get("/user", user.index)
routes.get("/user/create", user.create)
routes.get("/user/:id", user.show)
routes.post("/user", user.post)
routes.get("/user/:id/edit", user.edit)
routes.put("/user", user.put)
routes.delete("/user", user.delete)

module.exports = routes
