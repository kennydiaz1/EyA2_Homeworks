const {Schema, model} = require('mongoose');

const TaskSchema = Schema({
    title: {
        type: String,
        required: [true, 'El título es obligatorio']
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});


module.exports = model('Task', TaskSchema);
