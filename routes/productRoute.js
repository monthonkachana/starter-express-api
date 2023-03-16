import  express  from "express";

import {
    getAllProduct,
    getProductByProductId,
    createProduct,
    updateProduct,
    deleteProduct
} from './../controllers/productController.js';

const router = express.Router();

router.get('/', getAllProduct);
router.get('/:id', getProductByProductId);
router.post('/', createProduct); //create product
router.put('/:id', updateProduct); //update product
router.delete('/:id', deleteProduct); //delete product


export default router;



