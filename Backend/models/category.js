const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name: {
        type: String,

        required: true,
        maxlength: 50,
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",

    },
    level: {
        type: Number,
        required: true,

    }
});


module.exports = mongoose.model("categories", categorySchema) 