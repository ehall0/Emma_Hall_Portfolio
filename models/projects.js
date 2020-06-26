const {Schema, model} =require('mongoose');

const projectSchema = new Schema ({
    title: {type: String},
    code: {type: String},
    deployment : {type: String},
    image: {type: String},
    description: {type: String}
})


module.exports = model('Project', projectSchema)