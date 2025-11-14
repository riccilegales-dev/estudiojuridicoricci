import { Link } from "react-router-dom";
import logoRicci from "@/assets/logo-ricci-circle.png";

// Componente personalizado para desplazamiento
const ScrollLink = ({ children }: { children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation(); // Método soportado por TypeScript
    const target = document.getElementById("servicios"); // Especificamos el id directamente
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Error: No se encontró la sección con id='servicios'.");
    }
  };

  return (
    <Link to="#" onClick={handleClick} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
      {children}
    </Link>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-foreground/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <img 
              src={logoRicci} 
              alt="Estudio Jurídico Ricci" 
              className="h-32 md:h-40 w-auto"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Estudio Jurídico Ricci
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
            Soluciones legales integrales<br />
            <span className="text-base md:text-lg text-white/80">En Provincia de Buenos Aires y Capital Federal</span><br />
            <span className="text-lg md:text-xl text-gray-200">By Santiago E. Ricci - Founder</span>
          </p>
          
          <div className="pt-4">
            <ScrollLink>
              Consultar
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </ScrollLink>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;