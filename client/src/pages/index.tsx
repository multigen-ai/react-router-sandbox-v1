const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <span className="text-xl font-bold tracking-tight">Acme</span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a
              href="#features"
              className="hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="hover:text-foreground transition-colors"
            >
              Testimonials
            </a>
          </nav>
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl mx-auto">
            Ship faster with <span className="text-primary">AI-powered</span>{" "}
            workflows
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Automate your marketing, sales, and operations with intelligent
            agents that learn your brand and execute at scale.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Learn More
            </a>
          </div>
        </section>

        <section id="features" className="border-t bg-muted/40">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Everything you need to grow
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Brand Capture",
                  desc: "Automatically extract your brand voice, colors, and typography from any website.",
                },
                {
                  title: "Content Engine",
                  desc: "Generate on-brand copy for ads, emails, and landing pages in seconds.",
                },
                {
                  title: "Deploy Anywhere",
                  desc: "Push marketing sites to Cloudflare Workers with one click.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-lg border bg-card p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by fast-moving teams
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote:
                  "We launched 12 landing pages in a single afternoon. Unreal.",
                author: "Sarah K., Growth Lead",
              },
              {
                quote:
                  "The brand capture alone saved us weeks of agency back-and-forth.",
                author: "Mike T., Founder",
              },
            ].map((t) => (
              <blockquote
                key={t.author}
                className="rounded-lg border bg-card p-6 shadow-sm"
              >
                <p className="text-sm italic text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-medium">{t.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="cta" className="border-t bg-muted/40">
          <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Start your free trial today. No credit card required.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Acme Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
