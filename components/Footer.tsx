"use client";

const Footer = () => {
  // const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t">
      <div className="navbar flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
        <p>&copy; {currentYear} </p>
        <p className="hidden sm:block">•</p>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
