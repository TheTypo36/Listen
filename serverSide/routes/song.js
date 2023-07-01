import express from "express";
import multer from "multer";
import {addSong} from '../controllers/songController.js';
const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        if(file.fieldname==="song")
            cb(null, 'uploads/songs/');
        else if(file.fieldname==="poster")
            cb(null, 'uploads/posters/');
        else
            cb(null,'uploads/artistImgs/')
    },
    filename: function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    }
   })
   const upload = multer({storage}).fields([
    {name: 'song', maxCount: 1},
    {name: 'poster', maxCount: 1},
    {name: 'artistImg', maxCount: 1},
   ]);
router.post('/addSong',upload,addSong);

export default router;