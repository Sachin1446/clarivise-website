import { motion } from "framer-motion";
import { Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const DonationSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Optional</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Support the <span className="text-gradient-gold">Mission</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
            Gyani Buddy is built with the vision of making sacred wisdom freely accessible to all. 
            If this mission resonates with you, consider supporting us with a voluntary contribution.
          </p>

          <p className="text-sm text-muted-foreground mb-10">
            Your donations help us expand scripture coverage, improve AI accuracy, and keep the 
            platform running — all while remaining free for everyone.
          </p>

          <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 glow-gold text-base px-8" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Heart className="w-5 h-5 mr-2" />
              Contribute & Support
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>

          <p className="text-xs text-muted-foreground mt-6">
            Every contribution, big or small, makes a difference. 🙏
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationSection;
