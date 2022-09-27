const express = require("express");
const autoSchema = require("../model/autoModel");
const router= express.Router();

router.post("/create", (req, res)=>{
    //console.log("post");
   const auto = autoSchema(req.body);
   console.log(auto);
   auto.save().then((data)=> res.json(data))
   .catch((Error)=> res.json({message: Error}));
});

router.get("/obtener", (req, res)=>{
    autoSchema.find().then((data)=> res.json(data))
    .catch((Error)=> res.json({message: Error}));
});

router.put("/actualizar/:id", (req, res)=>{
    const {id} = req.params;
     const {marca, modelo}= req.body;
     autoSchema.updateOne({_id: id}, { $set: {marca, modelo}})
     .then((data)=> res.json(data))
     .catch((Error)=> res.json({message: Error}));
});

router.delete("/borrar/:id", (req, res)=>{
    const {id}= req.params;
    autoSchema.deleteOne({_id: id}).then((data)=> res.json(data))
    .catch((Error)=> res.json({message: Error}));
});

module.exports = router;