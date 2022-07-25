

export default function TagCategory({name}){
    return(
        <button className="bg-gray-100 hover:bg-gray-principal flex min-w-[50px] h-[30px] rounded-md p-1">
            {name}
        </button>
    )
}