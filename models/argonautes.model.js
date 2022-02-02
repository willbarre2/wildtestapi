const mongoose = require('mongoose');

const argoSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 55,
        unique: true,
        trim: true
      }
    },
    {
        timestamps: true,
    }
);

const ArgoModel = mongoose.model("argonaute", argoSchema);

module.exports = ArgoModel;