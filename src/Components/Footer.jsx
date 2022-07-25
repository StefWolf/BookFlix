import {FiFacebook, FiInstagram, FiTwitter, FiYoutube} from 'react-icons/fi'
import { Grid, GridItem } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'


export default function Footer(){
    return (
        <footer className="footer">
            <Grid templateColumns='repeat(3, 1fr)' className='text-black p-6' gap={40}>
                <GridItem w='100%' h='10'>
                    <p className=" text-[25px]"><strong>Informações</strong></p>
                    Somos uma comunidade dedicada à compartilhar com todos o acesso livre a leitura
                </GridItem>
                <GridItem w='100%' h='10'>
                    <p className="text-black text-[25px]"><strong>Contatos</strong></p>
                    <ul className='gap-2 flex'>
                        <li>
                            <Button href="" colorScheme='yellow' variant='outline'>
                                <FiFacebook size={25} />
                            </Button>
                        </li>
                        <li>
                            <Button href="" colorScheme='yellow' variant='outline'>
                                <FiInstagram size={25} />
                            </Button>
                        </li>
                        <li>
                            <Button href="" colorScheme='yellow' variant='outline'>
                                <FiTwitter size={25} />
                            </Button>
                        </li>
                        <li>
                            <Button href="" colorScheme='yellow' variant='outline'>
                                <FiYoutube size={25} />
                            </Button>
                        </li>
                    </ul>
                </GridItem>
                <GridItem w='100%' h='10'>
                    <p className="text-black text-[25px]"><strong>Sessões</strong></p>
                    <ul>
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li>
                            <a href="">Sobre</a>
                        </li>
                        <li>
                            <a href="/Login">Comunidade</a>
                        </li>
                    </ul>
                </GridItem>
            </Grid>
            <div className=' bottom-0 bg-yellow-600 absolute h-[30px] w-full text-black pl-6'>
                <p><span>&#169;</span> StefWolf 2022 - Todo os direitos reservados</p>
            </div>
        </footer>

    )
}