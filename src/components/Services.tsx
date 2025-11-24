import { Card } from "@/components/ui/card";
import { 
  UserCheck, 
  FileCheck, 
  DollarSign, 
  CreditCard, 
  Receipt, 
  TrendingUp, 
  BookOpen 
} from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "Customer Onboarding / KYC",
    description: "Streamlined customer verification and risk assessment processes ensuring regulatory compliance from day one."
  },
  {
    icon: FileCheck,
    title: "Contract Review",
    description: "Comprehensive contract analysis and revenue recognition compliance checks for all agreements."
  },
  {
    icon: DollarSign,
    title: "Pricing & Discount Controls",
    description: "Automated pricing validation and discount authorization workflows preventing revenue leakage."
  },
  {
    icon: CreditCard,
    title: "Credit Management",
    description: "Intelligent credit risk assessment and limit monitoring to minimize bad debt exposure."
  },
  {
    icon: Receipt,
    title: "Billing Accuracy",
    description: "Real-time billing verification ensuring accurate invoicing and revenue capture."
  },
  {
    icon: TrendingUp,
    title: "Accounts Receivable Aging",
    description: "Proactive aging analysis and collection workflows optimizing cash flow management."
  },
  {
    icon: BookOpen,
    title: "IFRS / Ind AS Compliance",
    description: "Full compliance with IFRS 15 and Ind AS 115 revenue recognition standards and reporting."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Comprehensive O2C Control Framework
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end internal controls covering every critical touchpoint in your revenue cycle
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-shadow border-border bg-card"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
