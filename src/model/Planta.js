import mongoose from "mongoose";

const plantaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {
            type: String,
            required: [true, "O nome da planta é obrigatório"]
        },
        valor: {
            type: Number,
             required: [true, "O valor da planta é obrigatório"]}
    }
);

const plantas = mongoose.model("plantas", plantaSchema);

export default plantas;