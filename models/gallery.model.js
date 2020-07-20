const mongoose = require("mongoose");
const galleryItemSchema = new mongoose.Schema({
	imgUrl: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

const GalleryItems = mongoose.model("GalleryItems", galleryItemSchema);

module.exports = GalleryItems;
