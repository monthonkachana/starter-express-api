import express from "express";

import {
    getAllSuppliler,
    getSupplilerBySupplierId,
    createSuppliler,
    updateSuppliler,
    deleteSuppliler
} from './../controllers/suppllierController.js';

const router = express.Router();

router.get('/', getAllSuppliler);
router.get('/:id', getSupplilerBySupplierId);
router.post('/', createSuppliler); //create supplier
router.put('/:id', updateSuppliler); //update supplier
router.delete('/:id', deleteSuppliler); //delete supplier

export default router;