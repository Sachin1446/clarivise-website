import { motion } from "framer-motion";
import { Bot, TrendingUp, GraduationCap, Heart, HandHeart, ArrowRight, Mail, Phone, MapPin, Sparkles, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import ClariviseIcon from "@/components/ClariviseIcon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ParticleBackground from "@/components/animations/ParticleBackground";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingElements from "@/components/decorative/FloatingElements";
import GlowOrb from "@/components/decorative/GlowOrb";
import StructuredData from "@/components/SEO/StructuredData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  highlighted?: boolean;
}

const services: Service[] = [
  {
    icon: Heart,
    title: "Spiritual Wellbeing",
    description: "Tech-enabled mindfulness and wellbeing platforms that bring ancient wisdom into the modern world.",
    link: "/gyani-buddy",
    highlighted: true,
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Custom AI solutions that streamline operations, reduce costs, and unlock new possibilities for SMEs.",
  },
  {
    icon: TrendingUp,
    title: "Trading & Investment",
    description: "Data-driven trading insights and investment strategies powered by advanced analytics and machine learning.",
  },
  {
    icon: GraduationCap,
    title: "Education & Mentorship",
    description: "Empowering the next generation with AI literacy, tech mentorship, and career guidance programmes.",
  },
  {
    icon: HandHeart,
    title: "Social Impact",
    description: "Pro-bono technology support for small charities and community organisations making a difference.",
  },
];

const testimonials = [
  {
    quote: "Clarivise transformed our workflow. What took days now takes hours.",
    author: "Sarah M.",
    role: "Operations Director",
  },
  {
    quote: "Their AI solutions gave us insights we never knew were possible.",
    author: "James K.",
    role: "Fund Manager",
  },
  {
    quote: "A rare blend of technical excellence and genuine care for impact.",
    author: "Priya S.",
    role: "Charity Founder",
  },
];

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <StructuredData type="Organization" />
      <StructuredData type="WebSite" />
      <StructuredData type="LocalBusiness" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-2xl font-display font-bold text-gradient-gold">
            <ClariviseIcon className="w-8 h-8" />
            Clarivise
          </a>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "About", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <ThemeToggle />
          <Button size="sm" className="bg-gradient-gold text-primary-foreground hover:opacity-90" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <ParticleBackground count={40} className="z-0" />
        <FloatingElements count={6} className="z-0" />
        <GlowOrb size={400} x="70%" y="30%" className="z-0" />
        <GlowOrb size={300} x="20%" y="70%" opacity={0.1} className="z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(42,78%,55%,0.08),transparent_60%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-subtle bg-secondary/50 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI-Powered Solutions for Modern Business</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
          >
            Transform Your Business
            <br />
            <span className="text-gradient-gold">with AI Solutions</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            We bring clarity to complexity — helping businesses, educators, and communities
            harness the power of artificial intelligence with wisdom and purpose.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 glow-gold text-base px-8">
              Explore Our Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-gold-subtle text-foreground hover:bg-secondary text-base px-8">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 relative">
        <GlowOrb size={350} x="80%" y="20%" opacity={0.08} className="z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              What We <span className="text-gradient-gold">Offer</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Five pillars of innovation, each designed to create lasting impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const isHighlighted = service.highlighted;
              const cardContent = (
                <>
                   <div className="flex items-center justify-between mb-5">
                     <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${isHighlighted ? "bg-primary/15" : "bg-secondary group-hover:bg-primary/10"}`}>
                       <service.icon className="w-6 h-6 text-primary" />
                     </div>
                     {isHighlighted && (
                       <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                         <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                         In Progress
                       </span>
                     )}
                   </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  {"link" in service && (
                    <span className="inline-flex items-center gap-1 mt-4 text-sm text-primary font-medium">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  )}
                </>
              );
              const className = `group p-8 rounded-xl border transition-all duration-500 hover-lift ${
                isHighlighted
                  ? "border-primary/40 bg-primary/5 glow-gold ring-1 ring-primary/20"
                  : "border-border bg-card hover:border-primary/30 hover:glow-gold"
              } ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`;

              return (
                <motion.div
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  custom={i}
                  className={className}
                >
                  {service.link ? (
                    <Link to={service.link} className="block">
                      {cardContent}
                    </Link>
                  ) : (
                    cardContent
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32 border-t border-border relative overflow-hidden">
        <FloatingElements count={4} className="z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Clarity Meets <span className="text-gradient-gold">Purpose</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Clarivise was born from a simple belief: technology should illuminate, not complicate.
                We combine deep AI expertise with a genuine commitment to making a positive difference —
                whether that's helping a small business automate their operations, guiding an investor
                with data-driven insights, or supporting a charity with pro-bono tech solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our name says it all — <span className="text-foreground font-medium">clarity</span> and{" "}
                <span className="text-foreground font-medium">wisdom</span>, working together to
                transform how businesses and communities thrive in the age of AI.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: 50, suffix: "+", label: "Projects Delivered" },
                  { value: 5, suffix: "", label: "Service Pillars" },
                  { value: 100, suffix: "%", label: "Purpose-Driven" },
                ].map((stat) => (
                  <ScrollReveal key={stat.label} delay={0.2}>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={1}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-card border border-border overflow-hidden flex items-center justify-center hover-lift">
                <div className="text-center p-10">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow">
                    <Sparkles className="w-12 h-12 text-primary" />
                  </div>
                  <p className="font-display text-2xl font-semibold text-foreground mb-2">See Clearly.</p>
                  <p className="font-display text-2xl font-semibold text-gradient-gold">Act Wisely.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-32 border-t border-border relative">
        <GlowOrb size={300} x="30%" y="50%" opacity={0.06} className="z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Trusted by <span className="text-gradient-gold">Leaders</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              What our clients and partners say about working with Clarivise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="p-8 rounded-xl border border-border bg-card hover-lift hover:border-primary/20"
              >
                <p className="text-foreground mb-6 leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 border-t border-border relative">
        <ParticleBackground count={20} className="z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Let's Build Something <span className="text-gradient-gold">Remarkable</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Whether you're a business looking to harness AI, an educator seeking tech solutions,
                or a charity in need of support — we'd love to hear from you.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Mail, text: "clarivise06@gmail.com" },
                  { icon: Phone, text: "+91 9960839401" },
                  { icon: MapPin, text: "Indore (MP), India" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={1}
              className="space-y-5"
            >
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 glow-gold">
                Send Message
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-2xl font-display font-bold text-gradient-gold">
              <ClariviseIcon className="w-7 h-7" />
              Clarivise
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Clarivise. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <a key={link} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
