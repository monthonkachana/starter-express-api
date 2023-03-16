//ไฟล์ที่ทำงานคู่กับ Table ใน DB
import { Sequelize } from "sequelize";
import dbconnect from "./../config/dbconect.js";

const { DataTypes } = Sequelize;

const Supplier = dbconnect.define("supplier_tb", {
  supplierName: {
    type: DataTypes.STRING,
  },
  supplierContact: {
    type: DataTypes.STRING,
  },
  supplierAddress: {
    type: DataTypes.STRING,
  },
  supplierPhone: {
    type: DataTypes.STRING,
  },
},{
  freezeTableName: true
});

export default Supplier;

(async () => {
  await dbconnect.sync();
})();
