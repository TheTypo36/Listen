import express from "express";
import Song from "../models/song.js";

const addSong = (req,res) =>{
    try{
        console.log('req body',req.body);
        console.log('file',req.files.song[0].path);
      
        const {songName,artistName , songLabel} = req.body;
        const songUrl = req.files.song[0].path
        const posterUrl = req.files.poster[0].path
       const artistImgUrl = req.files.artistImg[0].path;
       console.log('modified',songUrl);
        const newSong = new Song({
          songName,
          artistName,
          songUrl,
          posterUrl ,
          artistImgUrl,
          songLabel
            
        });
        newSong.save((err)=>{
            if(err){
            console.error(err);
            res.status(500).json({error: 'Failed to add the song' });
        }else{
            res.json({message: 'song added successfully'});
        }
    });
    
   
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }

}
const getSong = async (req,res) =>{
    try{

        const songs = await Song.find();
        
        res.json({songs});
    }catch(e){
        console.error('error in getting song', e);
        res.status(500).json({eror:'Internal server eror'});
    }
}
export  {addSong,getSong};