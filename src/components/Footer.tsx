import logoIcon from "@/assets/logo-ricci-circle.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img src={logoIcon} alt="Logo Ricci" className="w-12 h-12" />
            <div>
              <div className="text-xl font-semibold">Estudio Jurídico Ricci</div>
              <div className="text-sm text-primary-foreground/80">Soluciones Legales</div>
            </div>
          </div>
          
          <div className="text-center md:text-right text-sm text-primary-foreground/80">
            <p>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
            <p className="mt-1">Servicios legales profesionales</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
