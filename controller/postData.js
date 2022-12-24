import PostMessage from "../model/FarmerModel.js";

export const getPost= async (req,res)=>{
    try{
        const postMessage =await PostMessage.find();
        res.status(200).json(postMessage);
    }
    catch(error){
res.status(404).json({message:error.message})
    }
}

export const createPost= async(req,res)=>{

    const body=req.body;

    const FarmerData= new PostMessage(body);

    try{
            await FarmerData.save();
            res.status(201).json(NewPost);
    }
    catch(error){
            res.status(409).json({message:error.message})
    }
}