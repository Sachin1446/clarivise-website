import { motion } from "framer-motion";
import {
  MapPin,
  Leaf,
  Users,
  Clock,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const offerings = [
  {
    icon: Users,
    title: "Personalised Guidance",
    description: "One-on-one sessions to understand your unique situation and recommend the right spiritual path.",
  },
  {
    icon: Leaf,
    title: "Meditation Techniques",
    description: "Learn and practice various meditation methods suited to your temperament and lifestyle.",
  },
  {
    icon: Clock,
    title: "Lifestyle Training",
    description: "Short workshops on daily routines, mindful living, and integrating spiritual practices into modern life.",
  },
  {
    icon: Sparkles,
    title: "Tailored Programmes",
    description: "Customised guidance based on individual needs — whether it's stress, clarity, purpose, or inner peace.",
  },
];

const WellnessCentreSection = () => {
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
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Coming Soon</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Offline <span className="text-gradient-gold">Wellness Centre</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Beyond the digital experience — we're building physical spaces where you can receive 
            in-person guidance, learn meditation techniques, and get personalised support for your 
            spiritual journey.
          </p>
          <p className="text-sm text-primary font-medium max-w-2xl mx-auto">
            Our trained guides will assess your individual needs and recommend the most suitable 
            practices, techniques, and lifestyle adjustments for your well-being.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {offerings.map((offering, i) => (
            <motion.div
              key={offering.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={i}
              className="flex gap-4 p-6 rounded-xl border border-border bg-card"
            >
              <div className="w-11 h-11 shrink-0 rounded-lg bg-secondary flex items-center justify-center">
                <offering.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold mb-1">{offering.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{offering.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Location & launch details coming soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WellnessCentreSection;
