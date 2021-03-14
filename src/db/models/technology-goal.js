import db from "../database"
import goals from "../../basic-goals/technology-goals"

module.exports = {
  create(id) {

    goals.forEach(async (goal) => {
      const query = `
        INSERT INTO tb_user_technological_goals (
          id_user,
          str_description,
          int_time
        )VALUES ($1, $2, $3)
      `
      const values = [
        id,
        goal.title,
        goal.time
      ]

     db.query(query, values)

    });

    return
  },

  getAll(id) {
    return db.query(`SELECT * FROM tb_user_technological_goals WHERE id_user = $1`, [id])
  },

  updateById(id, goal) {
    const query = `
      UPDATE tb_user_technological_goals SET
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
