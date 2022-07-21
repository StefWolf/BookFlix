import { Button } from '@chakra-ui/react'
import BookOsMiseraveis from '../img/BookOsMiseraveis.jpg'

export default function CardBook(){
    return (
        <div className="w-[300px] min-h-[600px] flex-col bg-slate-300/20 p-[2%] relative shadow-lg">
            <div className="flex gap-5">
                <h1 className="text-[30px]">Título</h1>
                <nav className="w-[50px] h-[25px] text-[10px] bg-red-400 p-1 rounded-sm">
                    Etiqueta
                </nav>
            </div>
            <img src={BookOsMiseraveis} />
            <p>
                    Aqui temos a descrição de uma obra que foi publicada e está em estante
            </p>
            <Button colorScheme="red" className="justify-center mt-6 w-full" variant='solid' size='md'>
                            Enviar
            </Button>
        </div>
    )
}