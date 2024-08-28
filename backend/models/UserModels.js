import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const User = db.define('users', {
    name: DataTypes.STRING,
    brand_id: DataTypes.INTEGER,
    brand_name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
}, {
    freezeTableName: true
});

export default User;

(async ()=>{
    await db.sync();
})();

