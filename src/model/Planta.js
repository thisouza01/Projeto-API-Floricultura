import mongoose from "mongoose";

const plantaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        valor: {type: Number, required: true}
    }
);

const plantas = mongoose.model("plantas", plantaSchema);

export default plantas;