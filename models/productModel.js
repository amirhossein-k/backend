const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const productSchema = ({
 
        pic:{
            type: String,
            required:true,
        },
        namecar:{
            type: String,
            required:true,
        },
        factory:{
            type: String,
            required:true,
        },
        distance:{
            type: String,
            required:true,
        }
        },
        skills:{
            type: [String],
            required:true,
        }
    
},{
    timestamps: true,
  })
  
  const Product = mongoose.model('product',productSchema)
  module.exports= Product