import { useRef } from "react";
import { useEffect, useState } from "react";

export default function SlideShow({images, autoplay, movement, direction, limit, width, height}){

    const [currentImg, setCurrentImg] = useState(0);
    var slideRef = useRef();
    useEffect(()=>{
        if(movement){
            slideRef.current = setInterval(()=>{
                if(direction === "left"){
                    handleChange(-1)
                }
                else if(direction === "right"){
                    handleChange(1)
                }
            },autoplay)
        }

        return ()=>{
            clearInterval(slideRef.current)
        }
    },[currentImg,autoplay,direction,limit,movement])

    const handleChange = (val) => {
        if(val === -1 && currentImg === 0){
            setCurrentImg(limit)
            // return;
        }
        else if(val === 1 && currentImg === limit){
            setCurrentImg(0)
            // return;
        }
        else{
            setCurrentImg(prev=>prev+val)
        }
    }

    return (
        <div>
            <h1>Slide {currentImg}</h1>
            <div ref={slideRef} style={{
                display:"flex", 
                margin:"auto", 
                width: `${width}px`, 
                height:`${height}px`,
                border:"1px solid red",
                justifyContent:"center"
                }}>
                <img  style={{width:"100%", height:"100%"}} src={images[currentImg]} alt={currentImg} />
            </div>
            <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "30px", marginBottom: "50px"}}>
                {!movement && <button onClick={()=>handleChange(-1)}>Prev</button>}
                {!movement && <button onClick={()=>handleChange(+1)}>Next</button>}
            </div>
        </div>

    )
}

