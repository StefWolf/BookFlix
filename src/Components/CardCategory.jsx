

export default function CardCategory({icon, title}){
    return(
        <div className="w-[8%] h-[100px] bg-slate-200 -mt-16 shadow-md p-4 rounded-lg flex-col gap-5 ">
            <p>{icon}</p>
            <p>{title}</p>
        </div>
    )
}