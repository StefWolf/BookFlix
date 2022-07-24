import CardCategory from "./CardCategory"
import { GiAxeSword, GiChainedHeart, GiBlackBook, GiDna2 } from "react-icons/gi";

export default function SectionCardsCategory(){
    return (
        <section className="p-9 flex gap-2 justify-center">
            <CardCategory 
                icon={<GiAxeSword size={40} />} title="Fantasia" />
            <CardCategory 
                icon={<GiChainedHeart size={40} />} title="Romance" />
            <CardCategory 
                icon={<GiBlackBook size={40} />} title="Receitas" />
            <CardCategory 
                icon={<GiDna2 size={40} />} title="Ciência" />
            <CardCategory 
                icon={<GiBlackBook size={40} />} title="Receitas" />
            
        </section>
    )
}