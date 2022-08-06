const router = require("express").Router()
const Produto = require("./models/Produto");

//C
router.post("/", async (req, res) => {
    //req.body
    const {
      genus,
      name,
      family,
      order,
      nutritions,
      carbohydrates,
      protein,
      fat,
      calories,
      sugar,
    } = req.body;

    const produto = {
      genus,
      name,
      order,
      family,
      nutritions,
      carbohydrates,
      protein,
      fat,
      calories,
      sugar,
    };
  
    try{
       await Produto.create(produto)
       res.status(201).json({message: "Fruta inserida com sucesso"})
    }catch(error){
      res.status(500).json({error: error})
    }
  
  });
  //R
  router.get("/", async (req, res) => {
    //mostrar req
    try{
        const produtos = await Produto.find()
        res.status(200).json(produtos)
    }catch(error){
        res.status(500).json({error: error})
    }
  });

  router.get("/:id", async(req,res)=>{

    const id = req.params.id

    try{

        const produto = await Produto.findOne({_id:id})
        
        if(!produto){
            res.status(422).json({message: 'A fruta não foi encontrada!'})
            return
        }
            res.status(200).json(produto)

    }catch(error){
        res.status(500).json({error: error})
    }
  })

  //U
  router.patch("/:id", async (req,res)=>{
    const id = req.params.id

    const {
        genus,
        name,
        family,
        order,
        nutritions,
        carbohydrates,
        protein,
        fat,
        calories,
        sugar,
      } = req.body;
  
      const produto = {
        genus,
        name,
        order,
        family,
        nutritions,
        carbohydrates,
        protein,
        fat,
        calories,
        sugar,
      };
  

    try{
        const updateProduto = await Produto.updateOne({_id:id}, produto)
        if (updateProduto.matchedCount === 0){
            res.status(422).json({message: 'A fruta não foi encontrada!'})
            return
        }
        
        res.status(200).json(produto)
    }catch(error){
        res.status(500).json({error: error})
    }

  })

//D
  router.delete("/:id", async(req,res)=>{
    const id = req.params.id
    const produto = await Produto.findOne({_id:id})
    if(!produto){
        res.status(422).json({message: 'A fruta não foi encontrada!'})
        return
    }

    try{

        await Produto.deleteOne({_id:id})
        res.status(200).json({message: "Fruta removida com sucesso"})

    }catch(error){
        res.status(500).json({error: error})
    }
  })
  module.exports = router