import express from 'express'

const ruta = express.Router();

import citiesController from '../controllers/cities.js'

const { createCitie , getAllCities , getCitieById , updateCitie , deleteCitie } = citiesController

ruta.route('/')
    .post(createCitie)
    .get(getAllCities)


ruta.route('/:id')
     .get(getCitieById)
     .patch(updateCitie)
     .delete(deleteCitie)



export default ruta;