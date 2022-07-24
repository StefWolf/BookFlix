import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Text } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";

export default function Login(){
    return(
        <>
            <Header />
            <main className="w-full bg-slate-300/90 h-screen justify-center p-[5%] pl-[20%]">
                <section className="w-[80%] bg-white min-h-[300px] p-6 rounded-md shadow-lg flex">
                    <div className="flex-col w-[40%] border-r-2">
                        <Text fontSize='3xl' className="pl-[40%]">Login</Text>
                        <form className="p-4">
                            <div>
                                <label>Nome</label>
                                <Input placeholder='Digite o nome de usuário' size='md' />
                            </div>
                            <div>
                                <label>Senha</label>
                                <Input placeholder='Digite o nome de usuário' type='password' size='md' />
                            </div>
                            <br />
                            <div className="flex gap-5">
                                <Button colorScheme='red' variant='solid'>
                                    Entrar
                                </Button>
                                <a href=""><u>Esqueci minha senha</u></a>
                            </div>
                        </form>
                    </div>
                    <div className="flex-col w-[60%] ">
                        <Text fontSize='3xl' className="pl-[40%]">Cadastre-se</Text>
                        <form className="p-4">
                            <div> 
                                <label>Nome completo</label>
                                <div className="flex">
                                    <Input placeholder='Nome'  size='md' />
                                    <Input placeholder='Sobrenome'  size='md' />
                                </div>
                            </div>
                            <div>
                                <label>CPF</label>
                                <Input placeholder='Digite seu CPF'  size='md' />
                            </div>
                            <div className="flex">
                                <div className="flex-col">
                                    <label>N° Telefone</label>
                                    <Input htmlSize={8} width='auto' placeholder="(DDD)" />
                                </div>
                                <div className="flex-col">
                                    <label>Data de Nascimento</label>
                                    <Input
                                        placeHolder="Select Date and Time"
                                        size="md"
                                        backgroundColor="#ffffff"
                                        type="datetime-local"
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="flex gap-4">
                                <Button colorScheme='green' variant='solid'>
                                    Cadastre-se
                                </Button>
                                <p>Ou cadastre-se por: </p>
                                <Button colorScheme='blue' variant='outline'>
                                    <BsFacebook />
                                </Button>
                                <Button colorScheme='red' variant='outline'>
                                    <BsGoogle />
                                </Button>
                                <Button colorScheme='blue' variant='outline'>
                                    <BsTwitter />
                                </Button>

                            </div>

                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
        
    )
}