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
    
    }
    
    
        // getAllCities: (req,res,next)=>{
        //     try {
                
        //     } catch (error) {
                
        //     }
    
        // },
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