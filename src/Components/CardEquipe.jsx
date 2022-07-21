

export default function CardEquipe(){
    return (
        <div className="w-[400px] h-[95%]  flex p-4 shadow-md">
            <div className="bg-slate-900/40 rounded-[50%]  w-[150px] h-[150px] p-2">
               
            </div>
            <div className="ml-10 gap-2 flex-col text-justify w-[50%]">
                <h1><strong>Nome do participante</strong></h1>
                <p>Aqui temos a descrição resumida sobre o funcionário</p>
                <p><b>Cargo:</b> SelecioneCargo</p>
                <p><b>Ano:</b> 12/09/2013</p>
            </div>
        </div>
    )
}