import { Button } from '@chakra-ui/react'
import BookOsMiseraveis from '../img/BookOsMiseraveis.jpg'
import TagCategory from './TagCategory'

//Futuramente passar os dados para props
export default function CardBook(){
    return (
        <div className="w-[300px] min-h-[600px] flex-col bg-slate-300/20 p-[2%] relative shadow-lg">
            <div className="flex gap-5">
                <h1 className="text-[30px]">Título</h1>
                
                <div className="w-[50px] h-[25px]  p-1 ml-5 ">
                    <TagCategory name="romance" />
                </div>
            </div>
            <img src={BookOsMiseraveis} />
            <p>
                    Aqui temos a descrição de uma obra que foi publicada e está em estante
            </p>
            <button className='p-3 border-2 border-black rounded-md w-full mt-2 hover:bg-yellow-principal transition-colors hover:border-yellow-principal'>
                <a href="/Book">Visualizar</a>
            </button>
            
        </div>
    )
}