import { notFound } from "next/navigation";
import { CategoryCraftList } from "@/app/ui/categories/categoryList";



export default async function Page( {params}: { params: { id: string}} ) {

    const craftName = params.id;

    // console.log(params.id);

    if(!craftName) {
        notFound();
      }

    return (
        <main>       
            <CategoryCraftList categoryList={craftName} />
        </main>
    )

}