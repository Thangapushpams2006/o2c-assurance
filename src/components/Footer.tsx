const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark" />
              <span className="text-xl font-bold text-foreground">O2C Assurance</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Enterprise-grade Order-to-Cash internal controls and revenue assurance solutions 
              ensuring compliance and maximizing revenue integrity.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Internal Controls
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-foreground transition-colors">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-foreground transition-colors">
                  Revenue Assurance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} O2C Assurance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
