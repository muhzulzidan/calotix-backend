const { Regions } = require('../models');

const getAllRegion = async (req, res) => {
  try {
    const response = await Regions.findAll();

    res.status(200).send({
      message: 'Fetch all data Region success',
      data: response,
      totalRegion: countRegion,
    });
  } catch (error) {
    res.send({
      message: 'Occured Error',
    });
  }
};

const regionById = async (req, res) => {
  const params = req.params.id;
  const intParams = parseInt(params);
  const response = await Regions.findAll();

  if (intParams < 0) {
    return res.send({
      message: 'Data Region Tidak Ditemukan',
      status: 'ERROR',
      data: 'KOSONG',
    });
  } else {
    return res.send({
      message: 'Data Product Ditampilkan',
      status: 'Done',
      data: response[intParams],
    });
  }
};
const newRegion = async (req, res) => {
  try {
    const { region_city } = req.body;
    if (!region_city || region_city.trim() == '') {
      return res.status(400).send({
        message: 'field must be filled, cannot empty',
      });
    }

    const input = await Regions.create({
      region_city: region_city.trim(),
    });

    return res.status(201).send({
      message: 'Region Successfully Added',
    });
  } catch (error) {
    return res.send({
      message: 'error occured',
      data: error,
    });
  }
};

const updRegion = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama_region } = req.body;
    const findRegionId = await Regions.findOne({
      where: {
        id,
      },
    });

    console.log(findRegionId);

    if (!findRegionId) {
      return res.send({
        message: 'Data Region Tidak Ditemukan',
      });
    }

    if (nama_region) findRegionId.region_city = nama_region;
    const updateRegion = await findRegionId.save();

    if (!updateRegion) {
      res.status(400).send({
        status: 'error',
        message: 'failed updated region',
      });
    }
    res.status(200).send({
      status: 'success update region',
      data: updateRegion,
    });
  } catch (error) {
    return res.send({
      message: 'error occurededd',
      data: error,
    });
  }
};

const deleteRegion = async (req, res) => {
  try {
    const { id } = req.params;
    const findRegionById = await Regions.findByPk(id);
    if (!findRegionById) {
      return res.status(400).send({
        status: 'error',
        message: 'Region Not Found',
      });
    }
    const regionDelete = findRegionById.destroy();
    if (!regionDelete) {
      return res.status(503).send({
        status: 'error',
        message: 'Delete Region Failed',
      });
    }
    return res.status(200).send({
      status: 'success',
      message: 'Region Deleted',
    });
  } catch (error) {
    return res.send({
      message: 'error occurededd',
      data: error,
    });
  }
};

module.exports = {
  getAllRegion,
  regionById,
  newRegion,
  updRegion,
  deleteRegion,
};
