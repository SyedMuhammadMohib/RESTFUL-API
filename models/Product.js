const moongoose = require('mongoose');

const productSchema = new moongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Product = moongoose.model('Product', productSchema);

module.exports = Product;