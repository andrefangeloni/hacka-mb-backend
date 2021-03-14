import express from "express"

import auth from "./controllers/auth"
import user from "./controllers/user"
import technologyGoal from "./controllers/technology-goal"
import softSkillGoal from "./controllers/soft-skill-goal"

const routes = express.Router()

routes.get("/me", auth.me)
routes.post("/login", auth.login) //ok

routes.get("/user", user.getAll)
routes.get("/user/:id", user.getById)
routes.post("/user", user.create) //ok
routes.put("/user", user.updateById)
routes.put("/user-create-goals", user.updateAndCreateGoals)
routes.delete("/user", user.delete)

routes.get("/technology-goal", technologyGoal.getAllById)
// routes.post("/technology-goal", technologyGoal.create)
routes.put("/technology-goal/:id", technologyGoal.updateCompleteById)
// routes.delete("/technology-goal", technologyGoal.delete)

routes.get("/soft-skill-goal", softSkillGoal.getAllById)
// routes.post("/soft-skill-goal", softSkillGoal.create)
routes.put("/soft-skill-goal/:id", softSkillGoal.updateCompleteById)
// routes.delete("/soft-skill-goal", softSkillGoal.delete)

module.exports = routes
