import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { Text } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

export default function FiltroCompra(){
    const [modal, setModal] = useState(false);

    return(
        <>
            <button onClick={() => setModal(true)} className="mr-10 flex bg-blue-claro hover:bg-blue-claro/80 p-2 gap-2  rounded-md text-white">
                <FiSearch />Filtro
            </button>
            {modal && (
                <div data-aos="zoom-in" className="bg-gray-secundaria w-[350px] h-[400px] p-5 absolute rounded-md shadow-lg">
                    <div className="w-full flex justify-between">
                        <Text fontSize='2xl '>Filtro de pesquisa</Text>
                        <button 
                            onClick={() => setModal(false)}
                            className="bg-red-700/60 hover:bg-red-700 transition-colors rounded-md p-2 text-white">
                            <FiX size={20}/>
                        </button>
                    </div>
                    <form className="mt-7 flex-col">
                        <div className="flex gap-5">
                            <label className="text-[20px]">Vendedor:</label>
                            <Input placeholder='Digite o nome' size='sm' />
                        </div>
                        <br />
                        <div className="flex gap-2">
                            <div className="flex-col">
                                <label className="text-[15px]">Estado</label>
                                <Input htmlSize={2} size="sm" width='auto' placeholder="Sigla" />
                            </div>
                            <div>
                                <label className="text-[15px]">Cidade:</label>
                                <Input placeholder='Cidade' size='sm' />
                            </div>
                        </div >
                        <br />
                        <div className="flex-col">
                            <p>Preço estimado entre:</p>
                            <div className="flex gap-5">
                                <Input htmlSize={2} size="sm" type="number" width='auto' placeholder="R$" />
                                x
                                <Input htmlSize={2} size="sm" type="number" width='auto' placeholder="R$" />
                            </div>
                        </div>
                    </form>
                    <button className="bg-blue-claro w-full h-[40px] hover:bg-blue-claro/80 rounded-md mt-5 text-white p-2">
                        Pesquisar
                    </button>
                </div>
            )}


        </>
    )
}