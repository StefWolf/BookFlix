import { useState } from "react";
import { FiMenu }  from "react-icons/fi";

export default function MenuLateral(){
    const [modal, setModal] = useState(false);

    return(
        <div onMouseEnter={() => setModal(true)} onMouseLeave={() => setModal(false)}>
            <button className="text-gray-400">
                <FiMenu size={30} />
            </button>
            {
                modal && (
                    <div data-aos="fade-right" className="w-[500px] z-40  min-h-[200px] bg-yellow-principal">

                    </div>
                )
            }
        </div>
    )
}