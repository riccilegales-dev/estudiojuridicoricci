import { Car, FileText, HardHat, ShieldAlert, Building2, Scale, Users, Home, Gavel, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Car,
    title: "Accidentes de Tránsito",
    description: "Defensa integral en casos de accidentes vehiculares, reclamos por daños y perjuicios."
  },
  {
    icon: FileText,
    title: "Incumplimientos Contractuales",
    description: "Rechazo del pago por robo del automotor, problemas derivados de contratos inmobiliarios."
  },
  {
    icon: HardHat,
    title: "A.R.T",
    description: "Asesoramiento y representación en reclamos contra Aseguradoras de Riesgos del Trabajo y Enfermedades Profesionales"
  },
  {
    icon: ShieldAlert,
    title: "Defensa del Consumidor",
    description: "Protección de derechos del consumidor, reclamos y denuncias ante organismos competentes."
  },
  {
    icon: Building2,
    title: "Reclamos Bancarios",
    description: "Gestión de reclamos ante entidades bancarias"
  },
  {
    icon: Scale,
    title: "Sucesiones",
    description: "Tramitación de sucesiones, Ab intestato y testamentaria"
  },
  {
    icon: Users,
    title: "Divorcios",
    description: "Asesoramiento por divorcio unilateral y de común acuerdo, liquidación de la sociedad conyugal"
  },
  {
    icon: Home,
    title: "Alimentos",
    description: "Reclamos de cuota alimentaria, régimen de comunicación y cuidado personal de hijos."
  },
  {
    icon: Gavel,
    title: "Defensa Penal",
    description: "Representación legal en causas penales, defensa de imputados y víctimas."
  },
  {
    icon: FileCheck,
    title: "Contratos",
    description: "Redacción, revisión y asesoramiento en todo tipo de contratos civiles y comerciales."
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos soluciones jurídicas especializadas en diversas áreas del derecho
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-10 h-10 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
