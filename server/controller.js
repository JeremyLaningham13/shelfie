const getInventory = (req, res) => {
    const db = req.app.get('db')
        db.get_Inventory().then(result=>{
            res.status(200).send(result)
        })
}


module.exports = {
    getInventory
}