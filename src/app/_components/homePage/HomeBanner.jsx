import { Button } from "@/components/ui/button";

export default function HomeBanner() {
    return ( 
        <section className="h-auto py-20 px-5 text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start" style={{ backgroundColor: '#fcb2d3'}}>
            
            <div className="text-left text-lg font-medium sm:ml-64" style={{width:'420px'}}>
                <h2 className="text-4xl sm:text-4xl  font-bold leading-tight" style={{ color: '#e2186f', marginBottom:"80px"}}>
                    <i>Fynova</i>
                </h2>
                <h1 className="text-3xl sm:text-5xl  font-bold leading-tight" style={{ color: '#002855' }}>
                    Deine Lebensmittel, gleich geliefert
                </h1>
                <p className="mt-4 text-lg sm:text-xl" style={{ color: '#002855', marginBottom:"60px" }}>
                    Ein ganzer Supermarkt in nur einer App. So kannst du deine Lebensmittel online bestellen.
                    <strong><i>Fynova</i></strong> liefert Supermarkt-Produkte – von A wie Apfel bis Z wie Zahnpasta – bequem nach Hause.
                    In Minuten. Bis zur Tür.
                </p>
                <div className="flex justify-center mt-6">
                    <Button  className="font-bold py-3 px-6 rounded-lg shadow-md" style={{ backgroundColor: '#e2186f' }}>
                        Jetzt einkaufen
                    </Button>
                </div>
                
            </div>
            <div className="mt-10 sm:mt-0 sm:ml-10">
                <img 
                    src="/fotos/bannerbild3.jpg" 
                    alt="Supermarkt-Produkte" 
                    className="rounded-lg shadow-lg max-w-full h-auto"
                    style={{ maxWidth: '400px' }}
                />
            </div>
            
        </section>
    );
}

  