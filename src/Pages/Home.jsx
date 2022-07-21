import Header from "../Components/Header";
import { Button, ButtonGroup, Center, Input } from '@chakra-ui/react'
import SectionCardsCategory from "../Components/SectionCardsCategory";
import Footer from "../Components/Footer";
import { FiAtSign, FiUser } from "react-icons/fi";
import CardBook from "../Components/CardBook";
import CardEquipe from "../Components/CardEquipe";
import Equipe from "../Components/Equipe";

export default function Home(){
    return(
        <>
            <main>
                <Header />
                <div className="w-full min-h-[625px]">
                    <div className=" top-0  w-full h-full flex items-center justify-center">
                        <div className=" w-full h-screen  bg-slate-900/50 ">
                            <div className="lg:ml-32 lg:mt-24 w-[500px]  min-h-[300px]"> 
                                <div className="p-5 flex-col">
                                    <h1 className="text-[40px] text-cyan-500"><strong>Bem vindo ao BookFlix!</strong></h1>
                                    <div className="text-center text-[20px] text-white">
                                        O site com maior variedade de livros já publicado e compartilhado por todo o Brasil! 
                                        Venha fazer parte dessa comunidade e encontre aquele livro que livro que tanto procura.
                                    </div>
                                    <div className="items-center justify-center mt-4">
                                        <Center>
                                            <Button colorScheme="red" className="justify-center" variant='solid' size='lg'>
                                                Participe da comunidade
                                            </Button>
                                        </Center>
        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
               <div className="bg-slate-300 w-full min-h-[1000px]">
                    <SectionCardsCategory />
                    <section className="h-[600px] gap-5 p-[5%] flex w-full">
                        <CardBook />
                        <CardBook />
                        <CardBook />
                        <CardBook />
                    </section>
               </div>
               <Equipe />
               <div className=" w-full h-[220px]  bg-slate-900/50 p-10">
                    <div className=" flex-col">
                        <h1 className="text-slate-300 text-[20px]">Quer ser noticiada de novas publicações?</h1>
                        <br />
                        <div className="flex">
                            <div className="flex gap-2 w-[45%]">
                                <FiAtSign size={30} className="mt-2 text-white" />
                                <Input variant='outline'  placeholder='Digite seu email' />
                            </div>
                            <div className="flex gap-2 w-[30%] ml-20">
                                <FiUser size={30} className="mt-2 text-white" />
                                <Input variant='outline'  placeholder='Digite seu Nome' />
                            </div>
                        </div>
                        <Button colorScheme="red" className="justify-center left-[73%] mt-6" variant='solid' size='lg'>
                            Enviar
                        </Button>
                        
                    </div>
               </div>
            </main>
            <Footer />
        </>
    )
}