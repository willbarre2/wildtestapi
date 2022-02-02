const router = require('express').Router();
const argoController = require('../controllers/argonautes.controller');

router.get('/', argoController.getAllNames);
router.post('/newname', argoController.newName);



module.exports = router;
