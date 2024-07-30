const MOVIES = require('../models/moviesModel');

const cloudinaryInstance = require('../config/cloudinary');
const uploadMiddleware = require('../middlewares/upload-middleware')

const addMovie = (req, res) => {
    try {
        console.log('hitted');
        if (!req.file) {
            res.send('file is not visible')
        }
        cloudinaryInstance.uploader.upload(req.file.path, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'something went wrong' })
            }
            const imageUrl = result.url
            const { title, description, genre, cast, rating } = req.body;

            MOVIES({
                title: title,
                description: description,
                genre: genre,
                cast: cast,
                rating: rating,
                poster: imageUrl
            }).save().then((response) => {
                res.status(200).json({ message: 'movie added successfully', response })
            }).catch((error) => {
                console.log(error);
                res.status(500).json({ message: 'error occured' })

            })
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports={addMovie}
