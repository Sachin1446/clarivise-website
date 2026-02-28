import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const supportChannels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with our support team for quick answers about responses or app usage.",
    action: "Message Us",
    href: "#",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with a guide to better understand scripture-based responses.",
    action: "Call Us",
    href: "#",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Write to us for detailed queries, suggestions, or collaboration requests.",
    action: "Email Us",
    href: "#",
  },
];

const SupportSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
            <Headphones className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">We're Here to Help</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Need <span className="text-gradient-gold">Guidance?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question about a response? Want to dive deeper into a teaching? 
            Our support team is available to help you understand and apply scriptural wisdom.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {supportChannels.map((channel, i) => (
            <motion.div
              key={channel.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={i}
              className="group p-8 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-500 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                <channel.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">{channel.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{channel.description}</p>
              <Button variant="outline" size="sm" className="border-gold-subtle" asChild>
                <a href={channel.href}>{channel.action}</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
