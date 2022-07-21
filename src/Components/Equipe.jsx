import CardEquipe from "./CardEquipe";

export default function Equipe(){
    return(
        <div className="bg-slate-300 w-full gap-2 h-[250px] p-4 flex">
            <CardEquipe />
            <CardEquipe />
            <CardEquipe />
        </div>
    )
}