import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();
let initWebRoutes =(app) => {
    router.get('/', homeController.getHomePage);
    
    router.get('/hoangtrung', (req, res)=> {
        return res.send('Hello tat ca moi nguoi')
    });

    //res api 

    return app.use("/", router);
}

module.exports = initWebRoutes;