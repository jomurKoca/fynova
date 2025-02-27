export default function Footer() {
  return (
    <footer className=" bg-[#f8f8f8] py-6 border-t-2  text-[#002855] bottom-0">
      <div className="flex flex-col-reverse md:flex-row sm:justify-center text-left mx-4 gap-4">
        <p>© 2025 Fynova</p> 
        <a href="/terms" className="hover:underline">
          Impressum
        </a>
        <a href="/terms" className="hover:underline">
          Datenschutz
        </a>
        <a href="/terms" className="hover:underline"> 
          Hinweisgebersystem
        </a>
        <a href="/terms" className="hover:underline">
          AGB
        </a>
        
        <a href="/terms" className="hover:underline">
          Cookies
        </a>
        
        <a href="/terms" className="md:ml-72 ml-8 ">
          Deutschland - DE
        </a>
      </div>
    </footer>
  );
}
{/*
  1- border-t ist eine TailwindCSS Klasse, die eine obere Border hinzufügt
  2- flex-col ist eine TailwindCSS Klasse, die die Flexbox in eine Column umwandelt
  3- reverse erlaubt es, die Reihenfolge der Elemente umzukehren
  4- md:flex-row ermöglicht es uns, die Flexbox in eine Row umzuwandeln, wenn die Bildschirmgröße mindestens md ist
  5- sm:justify-center zentriert die Elemente in der Flexbox, wenn die Bildschirmgröße mindestens sm ist
  6- Mehrere Info für Bildschirmgrößen findest du in CSSTailwind.md Datei
  7- Die Komponente wird in Layout.js importiert damit sie auf jeder Seite angezeigt wird
*/}