import Citie from "../models/Citie.js"


const citiesController = {
    createCitie: async (req,res,next)=>{
        try {
    
            const citieData= await Citie.create(req.body);
            
            res.status(200).json({
                status:200,
                data:citieData
            });
        } catch (error) {
            res.status(400).json({
                status:400,
                mensaje: error
            })
            
        }
    
    },
    
    
    getAllCities: async (req,res,next)=>{
        try {
            const allcities= await Citie.find()
            res.status(200).json({
                status:200,
                data:allcities
            });
        
        } catch (error) {
            res.status(400).json({
                status:400,
                mensaje: error
            })
        }
    
    },

        // getCitieById: (req,res,next)=>{
        //     try {
                
        //     } catch (error) {
                
        //     }
    
        // },
    
        
        // updateCitie: (req,res,next)=>{
        //     try {
                
        //     } catch (error) {
                
        //     }
    
        // },
    
        // deleteCitie: (req,res,next)=>{
        //     try {
                
        //     } catch (error) {
                
        //     }
    
        // }
    
    
    
}




export default citiesController