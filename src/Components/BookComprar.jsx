
export default function BookComprar({nome, preco, cep, url, estado}){
    return(
        <div className="w-full bg-white h-[60px] rounded-lg mb-1 flex p-2 shadow-sm ">
            <div className="w-[60%] h-full flex-col font-sans text-sm">
                <b>Responsável:</b> {nome}
                <br />
                <div className="flex gap-2">
                    <b>CEP:</b> {cep}
                    <b>Estado:</b> {estado}
                </div>
            </div>
            <div className="w-[30%] h-full flex gap-4">
                <div className="mt-2">
                    <strong>
                        <p className="text-[15px] font-sans">{preco}</p>
                    </strong>
                </div>
                <button className="border-2 border-yellow-principal rounded-md p-2 hover:bg-yellow-principal hover:border-yellow-400 transition-colors">
                    <a href={url}>Comprar</a>
                </button>
            </div>
        </div>
    )
}