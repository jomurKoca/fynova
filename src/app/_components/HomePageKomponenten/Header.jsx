import { Button } from "@/components/ui/button"; 


export default function Header() {
    return (
        <div className="sm:text-left flex sm:flex-row " style={{ backgroundColor: '#002855', height:"72px", display:'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' }}>
            <div className="text-white sm:ml-20">
                Bei <strong><i>Fynova</i></strong> bestellen und Rabatt sichern
            </div>
            <Button variant="outline" size="fynovaAppButton" className="rounded-3xl font-extrabold sm:mr-24"> 
                App laden 
            </Button>
        </div>
    );
}
