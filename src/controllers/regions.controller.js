const { Region } = require('../models')

const getAllRegion = async (req, res) => {
  try {
    const countRegion = await Region.count();
    const response = await Region.findAll({
      order: [['id', 'DESC']]
      
    });

    res.status(200).send({
      message: 'Fetch all data Region success',
      data: response,
      totalRegion: countRegion
    });
  } catch (error) {
    res.send({
      message: 'Occured Error',
    });
  }
}

const regionById = async (req, res) => {
  const params = req.params.id
  const intParams = parseInt(params)
  const countRegion = await Region.count();
  const response = await Region.findAll({
    order: [['id', 'ASC']],
    totalRegion : countRegion
  });

  if(intParams < 0) {
    return res.send ({
      message: "Data Region Tidak Ditemukan",
      status: "ERROR",
      data: "KOSONG"
    })
  } else {
    return res.send({
      message: "Data Product Ditampilkan",
      status: "Done",
      data: response[intParams]
    })
  }
}
const newRegion = async (req, res) => {
    try {
        
        const {nama_region} = req.body
        if (!nama_region || nama_region.trim() == "") {
          return res.status(400).send({
            message: 'field must be filled, cannot empty',
          });
        }
        
        
        const input = await Region.create({
            region_city : nama_region.trim()
        })

        return res.status(201).send({
            message : "Region Successfully Added"
        })

    } catch (error) {
        return res.send({
          message: "error occured",
          data: error,
        });
    }
}

const updRegion = async (req, res) => {
  try {
    const {id} = req.params
    const {nama_region} = req.body
    const findRegionId = await Region.findOne({
      where : {
        id
      }
    });

    console.log(findRegionId);
  
    if (!findRegionId) {
      return res.send ({
      message: "Data Region Tidak Ditemukan"
      })
    }
    
    if (nama_region) findRegionId.region_city = nama_region 
    const updateRegion = await findRegionId.save()
    
    if (!updateRegion) {
      res.status(400).send({
        status: "error",
        message: "failed updated region"

      })
    }
    res.status(200).send({
      status: "success update region",
      data: updateRegion
    })
  


  } catch (error) {
    return res.send({
          message: "error occurededd",
          data: error,
        });
  }
}

const deleteRegion =  async (req, res) => {
  try {
    const {id} = req.params
    const findRegionById = await Region.findByPk(id)
    if (!findRegionById) {
      return res.status(400).send({
        status: "error",
        message: "Region Not Found"
      })
    }
    const regionDelete = findRegionById.destroy()
    if(!regionDelete) {
      return res.status(503).send({
        status: "error",
        message: "Delete Region Failed"
      })
    }
    return res.status(200).send({
      status: "success",
      message: "Region Deleted"
    })

  } catch (error) {
    return res.send({
      message: 'error occurededd',
      data: error
    });
  }
}



module.exports =  {getAllRegion, regionById, newRegion, updRegion, deleteRegion} 