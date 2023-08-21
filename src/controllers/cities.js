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

    getCitieById: async (req,res,next)=>{
        const { id }=req.params
        try {
            const citie= await Citie.findById(id)
            res.status(200).json({
                status:200,
                data:citie
            });
        
        } catch (error) {
            res.status(400).json({
                status:400,
                mensaje: error
            })
        }
    },
    
        
         updateCitie: async (req,res,next)=>{
            try {
                
                const citie = await Citie.findByIdAndUpdate(req.params.id,req.body)
                if (!citie) {
                    return res.status(400).json({status : 400})
                }
                res.status(200).json({
                    status:200,
                    data:citie
                });

            } catch (error) {
                res.status(400).json({
                    status:400,
                    mensaje: error
                })
            }
    
        },
    
        deleteCitie: async (req,res,next)=>{
            try {
                
                const citie = await Citie.findByIdAndDelete( req.params.id )

                if (!citie) {
                    return res.status(400).json({status : 400})
                }
                res.status(200).json({
                    status:200
                });

            } catch (error) {
                res.status(400).json({
                    status:400,
                    mensaje: error
                })
            }
    
        }
    
    
    
}




export default citiesController