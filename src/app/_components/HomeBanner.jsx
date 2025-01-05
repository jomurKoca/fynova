import { Button } from "@/components/ui/button";

export default function HomeBanner() {
    return (
      <section className="h-auto py-20 px-5 text-center sm:text-left" style={{ backgroundColor: '#fcb2d3' }}>
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
           
                <div className="mb-6 sm:mb-0">
                    <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
                    Deine Lebensmittel, geliefert in Minuten.
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl">
                    Ein ganzer Supermarkt in nur einer App. So kannst du deine Lebensmittel online bestellen. 
                    <strong><i>Fynova</i></strong> liefert Supermarkt-Produkte – von A wie Apfel bis Z wie Zahnpasta – bequem nach Hause. 
                    In Minuten. Bis zur Tür. Jetzt einkaufen
                    </p>
                </div>
        
                
                <div className="flex flex-col items-center sm:items-end">
                    <Button className=" font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition">
                    Jetzt einkaufen
                    </Button>
                </div>
            </div>
        </section>
    );
  }
  