import db from "../database"
import goals from "../../basic-goals/soft-skills"

module.exports = {
  create(id) {

    goals.forEach(async (goal) => {
      const query = `
        INSERT INTO tb_user_soft_skills_goals (
          id_user,
          str_title,
          str_description
        )VALUES ($1, $2, $3)
      `
      const values = [
        id,
        goal.title,
        goal.description
      ]

     db.query(query, values)

    });

    return
  },

  getAll(id) {
    return db.query(`SELECT * FROM tb_user_soft_skills_goals WHERE id_user = $1`, [id])
  },

  updateById(id, goal) {
    const query = `
      UPDATE tb_user_soft_skills_goals SET
        bo_complete=($1)
      WHERE id = $2
    `

    const values = [
      goal.complete,
      id
    ]

    return db.query(query, values)
  },
}
