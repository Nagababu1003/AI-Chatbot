import { useEffect,useState } from "react";

export const useTypingEffect = (text, speed = 25) => {
    const [output,setOutput]=useState("");

    useEffect(()=>{
        let i=0;
        setOutput("");
        const interval=setInterval(()=>{
            setOutput((prev)=>prev+text.charAt(i));
            i++;
            if(i>=text.length) clearInterval(interval);
        },speed);
        
        return ()=>clearInterval(interval);
    },[text,speed]);
    return output;
};