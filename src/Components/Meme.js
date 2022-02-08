import React, { useEffect, useState } from "react"

export default function Meme(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMeme] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])

    function getNewImage(){
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    placeholder="Top Text"
                    className="form--input"

                />
                <input 
                    type="text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    placeholder="Bottom Text"
                    className="form--input"

                />
                <button className="form--button" onClick={getNewImage} >Get a new meme image🖼</button>
            </div>
            
            <div className="meme" >
                <img src={meme.randomImage} className="meme--image" alt=""/>
                <h2 className="meme--text top" >{meme.topText}</h2>
                <h2 className="meme--text bottom" >{meme.bottomText}</h2>
            </div>
            
        </main>
    )

}