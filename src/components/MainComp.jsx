import { CTACard } from "./CTACard"
import { ProductCard } from "./ProductCard"


export const MainComp = () => {
  return (
    <main className="flex flex-col gap-10">
        <section className="flex p-4 gap-4">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </section>

        <section className="flex p-10 gap-4 justify-center">
            <CTACard/>
            <CTACard/>
            <CTACard/>
            <CTACard/>
        </section>
    </main>

    
  )
}
