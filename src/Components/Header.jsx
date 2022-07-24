import { useState } from 'react'
import {FiBookOpen, FiFacebook, FiInstagram, FiYoutube, FiTwitter} from 'react-icons/fi'
import { CloseIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

//BiBookOpen
export default function Header(){
    const [modal, setModal] = useState(false)
    console.warn(modal);

    return(
        <header className="navbar_header">
            <div className="flex">
                <div className="w-[75%] flex gap-2">
                    <FiBookOpen size={30} />
                    <p className="title"><strong>BookFlix</strong></p>
                </div>
                <div className="gap-8 flex">
                    <a href="">Início</a>
                    <div className='text-white'
                        onClick={() => setModal(true)}>Sobre</div>
                    <a href="">Comunidade</a>
                </div>
                
            </div>
            {modal && (
                <div data-aos="fade-down" className="bg-white/90 w-[90%] min-h-[200px] pb-6 m-[5%] rounded-sm fixed flex-col">
                    <div className='w-full flex'>
                        <div className='w-[95%] text-[30px] pl-7 pt-3'>
                            <h1>Sobre o site</h1>
                        </div>
                        <div className='p-3'>
                            <Button className='text-white' onClick={() => setModal(false)} 
                                colorScheme='red'><CloseIcon w={6} h={6} /></Button>
                        </div>
                    </div>
                    <div className='flex-col p-12 mr-[10%] '>
                        <Text fontSize='2xl'>Introdução</Text>
                        <p>Aqui ficaria um breve texto explicando tudo a respeito desse site
                            assim como também pode ser separado logo abaixo, em tópicos que explica 
                            com mais clareza sobre o projeto.
                        </p>
                        <br />
                        <Text fontSize='2xl'>Objetivos</Text>
                        <p>Aqui estariam todos os objetivos, que é claro, tem haver com leitura
                            compartilhar conhecimento e também outras coisas
                        </p>
                        <br />
                        <Text fontSize='2xl'>Redes sociais</Text>
                        <div className='flex mt-3 gap-4'>
                            <Button colorScheme='teal' variant='outline'>
                                <FiFacebook size={30} />
                            </Button>
                            <Button colorScheme='teal' variant='outline'>
                                <FiInstagram size={30} />
                            </Button>
                            <Button colorScheme='teal' variant='outline'>
                                <FiYoutube size={30} />
                            </Button>
                            <Button colorScheme='teal' variant='outline'>
                                <FiTwitter size={30} />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}