import Footer from "../Components/Footer";
import Header from "../Components/Header";
import BookOsMiseraveis from '../img/BookOsMiseraveis.jpg'
import { Text } from '@chakra-ui/react'
import { FiStar } from "react-icons/fi";
import BookComprar from "../Components/BookComprar";
import TagCategory from "../Components/TagCategory";

//Boa parte das informações daqui são de propósito de testes para a interface
export default function Book(){
    
    return (
        <>
            <Header />
            <main className="w-full bg-gray-200 h-full justify-center ">
                <div className="w-full bg-white h-[50px] mb-[3%] shadow-md p-3 flex gap-3">
                    <TagCategory name="Fantasia" />
                    <TagCategory name="Biografia" />
                    <TagCategory name="Romance" />
                    <TagCategory name="Ficção" />
                    <TagCategory name="Receita" />
                </div>
                <div className="flex gap-6">
                    <section className="w-[60%] bg-white min-h-[400px] rounded-sm shadow-md">
                        <div className="flex">
                            <div className="flex-col p-5">
                                <img src={BookOsMiseraveis} className="w-full" />
                                <div className="flex justify-center gap-2 mt-2">
                                    <FiStar size={25} />
                                    <FiStar size={25} />
                                    <FiStar size={25} />
                                    <FiStar size={25} />
                                    <FiStar size={25} />
                                </div>

                            </div>
                            <div className="flex-col  ml-30 mr-5">
                                <Text fontSize='3xl' >Os Miseráveis</Text>
                                <p className="text-justify">
                                Na França do século 19, o ex-prisioneiro Jean Valjean, perseguido
                                 ao longo de décadas pelo impiedoso policial Javert por ter violado
                                  sua liberdade condicional, busca redenção pelo seu passado e decide 
                                  acolher a filha da prostituta Fantine.
                                </p>
                                <div className="pt-4">
                                    <p><b>Autor(a):</b> Victor Hugo</p>
                                    <p><b>Ano Edição:</b> 2014</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="w-[40%] bg-white h-[400px] rounded-sm shadow-md pt-3 pl-[3%]">
                        <div className="w-full h-[10%] flex justify-between">
                            <Text fontSize='2xl '> Livros usados</Text>
                            <button className="mr-10">Filtro</button>
                        </div>
                        <div className="w-[95%] p-2 bg-gray-100 h-[70%] shadow-md flex-col">
                            <BookComprar 
                                nome="Stefane de Assis"
                                cep="59010-020"
                                preco="R$55,99"
                                url=" "
                                estado="RN"
                            />
                            <BookComprar 
                                nome="Gabriel Fernandes"
                                cep="50010-020"
                                preco="R$89,99"
                                url=" "
                                estado="BA"
                            />
                            <BookComprar 
                                nome="Letícia Silva"
                                cep="59010-020"
                                preco="R$33,99"
                                url=" "
                                estado="RS"
                            />
                            <BookComprar 
                                nome="Letícia Silva"
                                cep="59010-020"
                                preco="R$33,99"
                                url=" "
                                estado="RN"
                            />
                        </div>
                    </section>
                </div>
                
                <section className="w-[95%] ml-[2%] h-[200px] mt-7  bg-white shadow-md">

                </section>
            </main>
            <Footer />
        </>
    )
}