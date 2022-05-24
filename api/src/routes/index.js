const { Router } = require('express');
const axios = require('axios');
const {Dog,Temperament} = require('../db');
const { API_KEY } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Creacion de las razas-------------------------------------------------------

router.post('/dog', async (req, res, next) => {

    const {name,height,weight,lifeSpan,image,tempName} = req.body;
    let nameUpper = name[0].toUpperCase() + name.substring(1)

    try {
        
        const newDog = await Dog.create({
           
            name:nameUpper,
            height,
            weight,
            lifeSpan,
            image
        });

        for(i=0; i < tempName.length; i++){

            let temp =await  Temperament.findAll({
                where:{
                    tempName:tempName[i]
                }
            });
    
            if(temp.length === 0 ){
    
                temp = await Temperament.create({
                
                    tempName:tempName[i]
                })
            }
    
           await newDog.addTemperament(temp);
        }
    
        res.status(200).json("La nueva raza fue creada existosamente");

    } catch (error) {
        next(error)
    }
});

//Filtrado por nombre------------------------------------------------------------

//Me traigo todas las razas de perros-----------------------------------------

router.get('/home', async(req, res, next) => {

    try {

        let dogApi = (await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
        
        let razas = [];

        for(i=0; i<dogApi.length;i++){
            let raza = {
                id:dogApi[i].id,
                name:dogApi[i].name,
                weight:dogApi[i].weight,
                temperament:dogApi[i].temperament,
                image:dogApi[i].image
            } 
            razas.push(raza)
     }

     let dogiBD = await Dog.findAll();
    
    let DogsBd = dogiBD.map(e => e.toJSON());

    for(i=0; i < DogsBd.length; i++){

        razas.push(DogsBd[i])
    }

    const {name} = req.query;
    
    if(name){
        const nameDog= name[0].toUpperCase() + name.substring(1);

        let filtrado = razas.filter(e => {

            return e.name.includes(nameDog)
        });
                       
        if(filtrado.length === 0){
            return  res.status(400).send('Dog not found')
        }
        
      return  res.status(200).send(filtrado);
    }

    return res.status(200).send(razas);

    } catch (error) {

        next(error)
    }
});


module.exports = router;