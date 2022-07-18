import {FiBookOpen} from 'react-icons/fi'

//BiBookOpen
export default function Header(){
    return(
        <header className="navbar_header">
            <div className="flex">
                <div className="w-[75%] flex gap-2">
                    <FiBookOpen size={30} />
                    <p className="title"><strong>BookFlix</strong></p>
                </div>
                <div className="gap-8 flex">
                    <a href="">Início</a>
                    <a href="">Sobre</a>
                    <a href="">Comunidade</a>
                </div>
                
            </div>
        </header>
    )
}