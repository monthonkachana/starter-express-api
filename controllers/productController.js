import Product from '../models/productModel.js';

export const getAllProduct = async(req, res)=>{
    try{
        const product = await Product.findAll();
        res.json(product);
    }catch(error){
        res.json({message: error.message});
    }
}

export const getProductByProductId = async(req, res)=>{
    try{
        const product = await Product.findAll({
            where:{
                id: req.params.id
            }
        });
        res.json(product[0]);
    }catch(error){
        res.json({message: error.message});
    }
}

export const createProduct = async(req, res)=>{
    try {
        await Product.create(req.body);
        res.status(201).json({msg:"Product created successfully"});
    } catch (error) {
        res.json({message: error.message});
    }
}

export const updateProduct = async(req, res)=>{
    try {
        await Product.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(201).json({msg:"Product updated successfully"});
        
    } catch (error) {
        res.status(201).json({message: error.message});        
    }
}

export const deleteProduct = async(req, res)=>{
    try {
        await Product.destroy({
            where:{
                id: req.params.id
            }
        });
        res.json({msg:"Product deleted successfully"});
    } catch (error) {
        res.json({message: error.message});        
    }
}
