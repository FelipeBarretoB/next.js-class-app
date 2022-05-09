import db from '../../../util/database';


export default async function handler(req, res) {
    const fs = require('fs')
    
    try {
        let data = await db.query('select * from exam')
        res.send(data.rows)
    } catch (error) {
        console.error(error)
        res.status(500)
    }

}