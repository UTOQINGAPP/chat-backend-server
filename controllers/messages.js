
const Message = require('../models/message');

const getchat = async(req, res) => {

    const myUid = req.uid;
    const messageTo = req.params.to;

    const last30 = await Message.find({
        $or: [{ from: myUid, to: messageTo }, { from: messageTo, to: myUid } ]
    })
    .sort({ createdAt: 'desc' })
    .limit(30); 

    res.json({
        ok: true,
        messages: last30
    })

}



module.exports = {
    getchat
}