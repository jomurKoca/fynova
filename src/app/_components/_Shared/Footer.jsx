export default function Footer() {
    return (
      <footer className="py-4 border-t border-blue-100 text-[#002855] ">
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
          
          <a href="/terms" className="md:ml-72 ml-8 mb-5">
            Deutschland - DE
          </a>
        </div>
      </footer>
    );
  }
  