import { useState } from "react";

export default function CardCategory({icon, title}){
    const [buton, setButon] = useState(false);

    function setingButon(){
        setButon(!buton)
        console.log(buton)
    }

    return(
        <button 
            className="w-[8%] h-[100px] bg-white hover:bg-slate-300 transition-all -mt-16 shadow-md p-4 rounded-lg flex-col gap-5 "
            onClick={setingButon}
            >
          
            <p>{icon}</p>
            <p>{title}</p>
        </button>
    )
}