import {FiFacebook, FiInstagram, FiTwitter, FiYoutube} from 'react-icons/fi'
import { Grid, GridItem } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'


export default function Footer(){
    return (
        <footer className="footer">
            <Grid templateColumns='repeat(3, 1fr)' className='text-slate-200 p-6' gap={40}>
                <GridItem w='100%' h='10'>
                    <p className=" text-[25px]"><strong>Informações</strong></p>
                    Somos uma comunidade dedicada à compartilhar com todos o acesso livre a leitura
                </GridItem>
                <GridItem w='100%' h='10'>
                    <p className="text-slate-200 text-[25px]"><strong>Contatos</strong></p>
                    <ul className='gap-2 flex'>
                        <li>
                            <Button href="" colorScheme='blue' variant='outline'>
                                <FiFacebook size={25} />
                            </Button>
                        </li>
                        <li>
                            <Button href="" colorScheme='blue' variant='outline'>
                                <FiInstagram size={25} />
                            </Button>
                        </li>
                        <li>
                            <Button href="" colorScheme='blue' variant='outline'>
                                <FiTwitter size={25} />
                            </Button>
                        </li>
                        <li>
                            <Button href="" colorScheme='blue' variant='outline'>
                                <FiYoutube size={25} />
                            </Button>
                        </li>
                    </ul>
                </GridItem>
                <GridItem w='100%' h='10'>
                    <p className="text-slate-200 text-[25px]"><strong>Sessões</strong></p>
                    <ul>
                        <li>
                            <a href="">Inicio</a>
                        </li>
                        <li>
                            <a href="">Sobre</a>
                        </li>
                        <li>
                            <a href="">Comunidade</a>
                        </li>
                    </ul>
                </GridItem>
            </Grid>
            <div className=' bottom-0 bg-slate-800 absolute h-[30px] w-full text-slate-200 pl-6'>
                <p><span>&#169;</span> StefWolf 2022 - Todo os direitos reservados</p>
            </div>
        </footer>

    )
}