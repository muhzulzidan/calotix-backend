const express = require("express")
const { newRegion, getAllRegion, regionById, updRegion, deleteRegion} = require("../controllers/regions.controller")


const router = express.Router()

router.get('/fetch', getAllRegion)
router.get('/:id', regionById)

router.post('/create', newRegion)

router.put('/update/:id', updRegion)
router.delete('/delete/:id', deleteRegion)



module.exports = router