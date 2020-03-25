const express = require('express');
const OngController = require('./controllers/OngController');

const IncidentsController = require('./controllers/IncidentsController');
const SessionController = require('./controllers/SessionController');

const ProfileController = require('./controllers/ProfileControllers');


const routes = express.Router();
//  routes.get('/ongs', async(request, response) => {
//      const ongs = await connection('ongs').select('*');

//      return response.json(ongs);
//  })

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);    

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);


module.exports = routes;