import db from "../database"
import SoftSkillGoal from "./soft-skill-goal"
import TechnologyGoal from "./technology-goal"

module.exports = {
  getAll() {
    return db.query(`SELECT * FROM tb_user`)
  },

  getById(id) {
    return db.query(`SELECT * FROM tb_user WHERE id = $1`, [id])
  },

  create(user) {
    const query = `
      INSERT INTO tb_user (
        str_name,
        str_email,
        str_password
      )VALUES ($1, $2, $3)
      RETURNING id
    `

    const values = [
      user.name,
      user.email,
      user.password
    ]

    return db.query(query, values)
  },

  updateById(id, user) {
    const query = `
      UPDATE tb_user SET
        str_name=($1),
        str_email=($2),
        str_password=($3),
        int_occupation_area=($4),
        int_senority_level=($5),
        int_goal_senority_level=($6),
        int_technology=($7),
        int_technology_level=($8)
      WHERE id = $8
    `

    const values = [
      user.name,
      user.email,
      user.password,
      user.occupation_area,
      user.senority_level,
      user.senority_goal_level,
      user.technology,
      user.technology_level,
      id
    ]

    return db.query(query, values)
  },

  async updateAndCreateGoals(id, user) {
    const query = `
      UPDATE tb_user SET
        int_occupation_area=($1),
        int_senority_level=($2),
        int_goal_senority_level=($3),
        int_technology=($4),
        int_technology_level=($5)
      WHERE id = $6
    `

    const values = [
      user.occupation_area,
      user.senority_level,
      user.senority_level + 1,
      user.technology,
      user.technology_level,
      id
    ]

    await db.query(query, values)

    await SoftSkillGoal.create(id)

    await TechnologyGoal.create(id)

    return
  },

  emailInUse(email) {
    return db.query(`SELECT str_email FROM tb_user WHERE str_email = $1`, [email])
  },

  delete(id) {
    return db.query("DELETE FROM tb_user WHERE id = $1", [id])
  }
}
