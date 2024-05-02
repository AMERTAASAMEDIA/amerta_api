const mongoose = require("mongoose");

const Master_itemSchema = mongoose.Schema(
  {
    item_nama: {
      type: String,
      required: [true, "NAMA ITEM TOLONG JANGAN DIKOSONGI"],
    },

    item_stok: {
      type: String,
      required: [true, "ITEM STOK TOLONG JANGAN DIKOSONGI"],
    },

    item_domain: {
        type: String,
        required: [true, "ITEM DOMAIN TOLONG JANGAN DIKOSONGI"]
    },

    item_harga: {
      type: String,
      required: [true, "ITEM HARGA TOLONG JANGAN DIKOSONGI"],
    },
    item_created:{
        type:String,
        required:[true, "ITEM CREATED TOLONG JANGAN DIKOSONGI"]
    },
    item_updated:{
        type:String,
        required:[true, "ITEM UPDATED TOLONG JANGAN DIKOSONGI"]
    },
    item_user_updated:{
        type:String,
        required:[true, "ITEM USER UPDATED TOLONG JANGAN DIKOSONGI"]
    },
    item_status:{
        type:String,
        required:[true, "ITEM STATUS TOLONG JANGAN DIKOSONGI"]
    },
    item_invoice_asal:{
        type:String,
        required:[true,"INVOICE ASAL TOLONG JANGAN DIKOSONGI"]
    },
    item_history:{
        type:Array,
        "default":[]
    }
  },
  {
    timestamps: true,
  }
);


const Master_item = mongoose.model("Master_item", Master_itemSchema);

module.exports = Master_item;