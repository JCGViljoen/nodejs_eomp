// products model
const db = require('../config')

class Products{
    fetchProducts(req,res){
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl;
        `;

        db.query(query, (err, results)=> {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                    results,
            })
        })
    }

    fetchProduct(req, res) {
        const query = `
            select prodID,prodName,quantity,amount, Category, prodUrl
            from books where prodID = ${req.params.id};`;
        db.query(query, [req.params.id], (err, result) => {
          if (err)
            throw errres.json({
              status: res.statusCode,
              result,
            });
        });
      }

      updateProduct(req, res) {
        const query = `
                update products
                set?
                where prodID =?`;
        db.query(query, [req.body, req.params.id], (err) => {
          if (err) throw err;
          res.json({
            staus: res.statusCode,
            msg: "The product has been updated",
          });
        });
      }
      deleteProduct(req, res) {
        const query = `
                delete from products
                where prodID =${req.params.id};
                `;
        db.query(query, (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "The product has been updated",
          });
        });
      }
      registerProduct(req, res) {
        const data = req.body
        // Query
        const query = `
                INSERT INTO products
                SET ?;
                `;
        db.query(query, [data], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "Product has been added.",
          });
        });
      }
}

module.exports = Products;