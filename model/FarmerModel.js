import mongoose from "mongoose";



const PostSchema= mongoose.Schema(
    {
        name_of_product:String,
        location:String,
        Quantity:Number,
        availability:String,
        Contact:Number
    }
)

const PostMessage= mongoose.model("PostMessage",PostSchema);

export default PostMessage;