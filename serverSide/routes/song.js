import express from "express";
import multer from "multer";
import {addSong,getSong} from '../controllers/songController.js';
const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        if(file.fieldname==="song")
            cb(null, 'C:/Users/Administrator/Desktop/Listen/listen/public/assets/uploads/songs/');
        else if(file.fieldname==="poster")
            cb(null, 'C:/Users/Administrator/Desktop/Listen/listen/public/assets/uploads/posters/');
        else
            cb(null,'C:/Users/Administrator/Desktop/Listen/listen/public/assets/uploads/artistImgs/')
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
router.get('/getSong',getSong)

export default router;