const GalleryItems = require("../models/gallery.model");
const CarouselItems = require("../models/carousel.model");

module.exports.getCarousel = (req, res, next) => {
	CarouselItems.find()
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => console.log(error));
};

module.exports.getGallery = (req, res, next) => {
	GalleryItems.find()
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => console.log(error));
};

module.exports.addCarouselItem = (req, res, next) => {
	const { imgUrl, description } = req.body.carouselItem;

	const carouselItem = new CarouselItems({
		imgUrl,
		description,
	});

	carouselItem
		.save()
		.then((response) => {
			res.status(201).json(response);
		})
		.catch((error) => console.log(error));
};

module.exports.addGalleryItem = (req, res, next) => {
	const { imgUrl, description } = req.body;

	const galleryItem = new GalleryItems({
		imgUrl,
		description,
	});

	galleryItem
		.save()
		.then((response) => {
			res.status(201).json(response);
		})
		.catch((error) => console.log(error));
};
