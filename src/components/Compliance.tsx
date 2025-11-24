import { Card } from "@/components/ui/card";
import { Shield, FileText, CheckCircle2, AlertTriangle } from "lucide-react";

const complianceAreas = [
  {
    icon: Shield,
    title: "IFRS 15 Compliance",
    description: "Full adherence to International Financial Reporting Standards for revenue recognition"
  },
  {
    icon: FileText,
    title: "Ind AS 115 Standards",
    description: "Complete compliance with Indian Accounting Standards for revenue from contracts"
  },
  {
    icon: CheckCircle2,
    title: "SOX Controls",
    description: "Sarbanes-Oxley compliant internal controls and documentation"
  },
  {
    icon: AlertTriangle,
    title: "Risk Management",
    description: "Proactive identification and mitigation of revenue recognition risks"
  }
];

const Compliance = () => {
  return (
    <section id="compliance" className="py-24 bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Regulatory Compliance & Assurance
          </h2>
          <p className="text-lg text-muted-foreground">
            Built-in compliance frameworks ensuring adherence to global accounting standards and regulatory requirements
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {complianceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-lg transition-shadow border-border bg-card"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-card-foreground">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {area.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="rounded-lg border border-border bg-card p-8 text-center">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">
            Stay Ahead of Regulatory Changes
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our platform is continuously updated to reflect the latest regulatory requirements, 
            ensuring your organization maintains compliance without disruption.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Quarterly Updates
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Expert Support
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Training Included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
