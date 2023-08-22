// users
const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/authenticate")

class Users{
    fetchUsers(req,res) {
        const query = 
        `SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
        FROM Users; 
        `
        db.query(query, (err, results)=>{
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results,
            });
        });
    };

    updateUser(req,res) {
        const query = `
        update Users set?
        where userID;
        `
        db.query(query, (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "The user has been updated 👌",
          });
        });
    }
    deleteUser(req, res) {
        const query = `
                delete from Users
                where userID =${req.params.id};
                `;
        db.query(query, (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "The user has been updated",
          });
        });
      }

      async register(req, res) {
        const data = req.body;
        
        data.userPass = await hash(data.userPass, 15);
        
        const user = {
          emailAdd: data.emailAdd,
          userPass: data.userPass,
        };
        //query
        const query = `
            insert into Users
            set ?;
            `;
        db.query(query, [data], (err) => {
          if (err) throw err;
          let token = createToken(user);
          res.cookie("LegitUser", token, {
            maxAge: 3600000,
            httpOnly: true,
          });
          res.json({
            status: res.statusCode,
            msg: "You have been registered",
          });
        });
      }

}
module.exports = Users;