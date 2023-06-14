import mongoose from "mongoose";

const vasoSchema = new mongoose.Schema(
    {
        id: {type: String},
        tipo: {type: String, required: true},
        valor: {type: Number, required: true}
    }
)

const vasos = mongoose.model("vasos", vasoSchema);

export default vasos;