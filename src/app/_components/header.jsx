import { Button } from "@/components/ui/button"; 


export default function Header() {
    return (
        <div style={{ backgroundColor: '#002855', height:"72px", display:'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' }}>
            <div className="text-white">
                Bei <i>Fynova</i> bestellen und Rabatt sichern
            </div>
            <Button variant="outline" className="rounded-3xl font-bold "> App laden </Button>
        </div>
    );
}
