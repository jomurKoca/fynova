import { Button } from "@/components/ui/button";

export default function HomeBanner() {
    return ( 
        <section className="h-auto sm:py-20 py-10 sm:text-left flex flex-col sm:flex-row items-center sm:items-start" style={{ backgroundColor: '#fcb2d3'}}>
            
            <div className="sm:ml-64" style={{width:'420px'}}>
                <h1 className="px-5 text-4xl sm:text-4xl mb-20 font-extrabold leading-tight" style={{ color: '#e2186f'}}>
                    <i>Fynova</i>
                </h1>
                <h1 className="text-center sm:text-left px-5 text-4xl sm:text-5xl font-extrabold leading-tight" style={{ color: '#002855' }}>
                    Deine Lebensmittel, gleich geliefert
                </h1>
                <p className="text-center sm:text-left px-5 mt-4 text-lg sm:text-xl" style={{ color: '#002855'}}>
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

  