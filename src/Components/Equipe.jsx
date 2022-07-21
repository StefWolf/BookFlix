import CardEquipe from "./CardEquipe";

export default function Equipe(){
    return(
        <div className="bg-slate-300 w-full gap-2 h-[300px] p-4 flex-col">
            <div className="ml-[40%]">
                <h1 className="text-slate-900 text-[40px] "><strong>Equipe</strong></h1>
                <hr className="w-[18%] mb-8" />
            </div>
            <div className="flex">
                <CardEquipe />
                <CardEquipe />
                <CardEquipe />
            </div>
        </div>
    )
}