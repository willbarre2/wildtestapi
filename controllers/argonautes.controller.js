const ArgoModel = require('../models/argonautes.model');


module.exports.getAllNames = async (req, res) =>{
    const users = await ArgoModel.find();
    res.status(200).json(users);
};

module.exports.newName = async (req, res) =>{

    function escapeHtml(text) {
        var map = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#039;'
        };
        
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }
    
    const name = escapeHtml(req.body.name);
    const nameFiltered = {};
    nameFiltered["name"] = name;

    try {
        const user = await ArgoModel.create(nameFiltered);
        res.status(201).json({ user: user.id});
    }
    catch(err) {
        res.status(400).send( { err })
    }

};