import { Check } from "lucide-react";

const benefits = [
  "Automated revenue recognition workflows reducing manual errors by 95%",
  "Real-time compliance monitoring with IFRS 15 and Ind AS 115 standards",
  "Advanced analytics dashboard providing instant visibility into revenue metrics",
  "Seamless integration with existing ERP and accounting systems",
  "Audit-ready documentation and automated compliance reporting",
  "Reduced DSO (Days Sales Outstanding) through optimized collection processes"
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-secondary">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Why Choose Our O2C Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Transform your order-to-cash process with industry-leading controls and automation that ensure revenue integrity and regulatory compliance.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-sm font-medium text-card-foreground mb-1">Faster Month-End Close</div>
              <div className="text-sm text-muted-foreground">Reduce closing time with automated controls</div>
            </div>
            
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="text-4xl font-bold text-primary mb-2">$2M+</div>
              <div className="text-sm font-medium text-card-foreground mb-1">Revenue Leakage Prevented</div>
              <div className="text-sm text-muted-foreground">Average annual savings per client</div>
            </div>
            
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm font-medium text-card-foreground mb-1">Audit Success Rate</div>
              <div className="text-sm text-muted-foreground">Pass regulatory audits with confidence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
