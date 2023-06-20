import mongoose from "mongoose";

const vasoSchema = new mongoose.Schema(
    {
        id: {type: String},
        tipo: {
            type: String,
            required: [true, "O tipo do vaso é obrigatório"]
            },
        valor: {
            type: Number,
            required: [true, "O valor do vaso é obrigatório"]
        }
    }
)

const vasos = mongoose.model("vasos", vasoSchema);

export default vasos;