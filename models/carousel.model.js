const mongoose = require("mongoose");
const carouselItemSchema = new mongoose.Schema(
	{
		imgUrl: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const CarouselItems = mongoose.model("CarouselItems", carouselItemSchema);

module.exports = CarouselItems;
