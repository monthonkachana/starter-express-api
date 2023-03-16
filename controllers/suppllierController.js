
//ไฟล์ที่จัดการ (เพิ่ม/ลบ/แก้ไข/ค้นหา,ดู,ตรวจสอบ) กับข้อมูลใน Table ใน DB
//ใช้คู่กับไฟล์ประเภท models
import Supplier from "./../models/supplierModel.js";

export const getAllSuppliler = async(req, res)=>{
    try{
        //คำสั่งไปเอาข้อมูลทั้งหมดจากตาราง
        const suppliler = await Supplier.findAll();
        res.json(suppliler);
    }catch(error){
        res.json({message: error.message});
    }
}

export const getSupplilerBySupplierId = async(req, res)=>{
    try{
        //คำสั่งไปเอาข้อมูลจากตารางด้วยเงื่อนไขที่กำหนด
        const suppliler = await Supplier.findAll({
            where:{
                id: req.params.id
            }
        });
        res.json(suppliler[0]);
    }catch(error){
        res.json({message: error.message});
    }
}

export const createSuppliler = async(req, res)=>{
    try {
        //insert data to supplier table
        await Supplier.create(req.body);
        res.status(201).json({msg:"Supplier created successfully"});
    } catch (error) {
        res.json({message: error.message});
    }
}

export const updateSuppliler = async(req, res)=>{
    try {
        //update data to supplier table
        await Supplier.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(201).json({msg:"Supplier updated successfully"});
    } catch (error) {
        res.json({message: error.message});       
    }    
}

export const deleteSuppliler = async(req, res)=>{
    try {
        //delete data to supplier table
        await Supplier.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(201).json({msg:"Supplier deleted successfully"});
    } catch (error) {
        res.json({message: error.message});       
    }    
}

