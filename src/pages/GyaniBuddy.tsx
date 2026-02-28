import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  MessageCircle,
  Sparkles,
  ArrowLeft,
  ScrollText,
  Flame,
  Compass,
  Shield,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import ClariviseIcon from "@/components/ClariviseIcon";
import SupportSection from "@/components/gyani-buddy/SupportSection";
import FeedbackSection from "@/components/gyani-buddy/FeedbackSection";
import DonationSection from "@/components/gyani-buddy/DonationSection";
import WellnessCentreSection from "@/components/gyani-buddy/WellnessCentreSection";
import ParticleBackground from "@/components/animations/ParticleBackground";
import ScrollReveal from "@/components/animations/ScrollReveal";
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

const scriptures = [
  { name: "4 Vedas", icon: ScrollText, description: "Rigveda, Yajurveda, Samaveda & Atharvaveda — the foundational hymns of cosmic knowledge and universal truth" },
  { name: "108 Upanishads", icon: Lightbulb, description: "Profound philosophical inquiries into the nature of Brahman, Atman, and the ultimate reality of existence" },
  { name: "Puranas", icon: BookOpen, description: "Ancient narratives of creation, cosmology, genealogies, and the stories of devas, sages, and avatars" },
  { name: "Itihasas", icon: Shield, description: "The Ramayana & Mahabharata — epic histories rich with lessons on dharma, duty, ethics, and human nature" },
  { name: "Darshanas", icon: Compass, description: "Six classical schools of Hindu philosophy — Nyaya, Vaisheshika, Sankhya, Yoga, Mimamsa & Vedanta" },
  { name: "Bhagavad Gita ✦", icon: Flame, description: "The essence of all scriptures — Phase One of Gyani Buddy is built entirely on the Gita's timeless wisdom" },
];

const features = [
  {
    icon: Brain,
    title: "Scripture-Trained SLM",
    description:
      "A Small Language Model fine-tuned exclusively on sacred texts — delivering authentic, contextual spiritual guidance without hallucination.",
  },
  {
    icon: MessageCircle,
    title: "Ask Life Questions",
    description:
      "Facing a dilemma? Ask in plain language and receive thoughtful responses rooted in scriptural wisdom — not generic advice.",
  },
  {
    icon: BookOpen,
    title: "Source-Referenced Answers",
    description:
      "Every response cites the exact scripture, chapter, and verse — so you can explore the original teachings yourself.",
  },
  {
    icon: Sparkles,
    title: "Modern Accessibility",
    description:
      "Ancient wisdom, modern interface. Available in multiple languages with simple, jargon-free explanations anyone can understand.",
  },
];

const useCases = [
  "Seeking clarity during tough career decisions",
  "Understanding duty and responsibility in relationships",
  "Finding peace during anxiety or grief",
  "Exploring philosophical questions about life's purpose",
  "Learning scriptural stories relevant to your situation",
  "Daily spiritual reflection and morning guidance",
];

const GyaniBuddy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <StructuredData type="WebSite" data={{ name: "Gyani Buddy - Clarivise" }} />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-display font-bold text-gradient-gold">
            <ClariviseIcon className="w-8 h-8" />
            Clarivise
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/">
              <Button variant="outline" size="sm" className="border-gold-subtle">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <ParticleBackground count={25} className="z-0" />
        <GlowOrb size={400} x="60%" y="40%" opacity={0.12} className="z-0" />
        <GlowOrb size={250} x="25%" y="70%" opacity={0.08} className="z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(42,78%,55%,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(35,90%,55%,0.06),transparent_50%)]" />
        
        {/* Scripture-themed decorative elements */}
        <div className="absolute top-32 left-10 w-16 h-16 border-2 border-primary/20 rounded-full animate-float-slow opacity-40" />
        <div className="absolute bottom-32 right-20 w-12 h-12 border border-primary/15 rounded-full animate-float opacity-30" />
        <div className="absolute top-1/3 right-16 w-8 h-8 bg-primary/10 rounded-full animate-float-delayed opacity-50" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-subtle bg-secondary/50 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Coming Soon — A Clarivise Initiative</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
          >
            Gyani <span className="text-gradient-gold">Buddy</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6"
          >
            Your AI-powered spiritual companion — trained on the wisdom of the Gita, Vedas, 
            Ramayana, Mahabharata, Upanishads, and more. Ask life's toughest questions and 
            receive guidance rooted in centuries of sacred knowledge.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">In Development — Launching Soon</span>
          </motion.div>
        </div>
      </section>

      {/* What is Gyani Buddy */}
      <section className="py-24 md:py-32 border-t border-border relative overflow-hidden">
        <GlowOrb size={300} x="80%" y="30%" opacity={0.06} className="z-0" />
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
                What is <span className="text-gradient-gold">Gyani Buddy?</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Gyani Buddy is a purpose-built Small Language Model (SLM) that draws exclusively 
                from India's most revered scriptures. Unlike generic AI chatbots, Gyani Buddy is 
                trained to understand the depth and nuance of spiritual texts — offering you 
                contextual, meaningful guidance for real-life situations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're navigating a career crossroads, dealing with a relationship challenge, 
                or simply seeking inner peace — Gyani Buddy bridges ancient wisdom and modern life, 
                making centuries of spiritual knowledge accessible in a simple conversation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This is not a replacement for spiritual practice — it's a companion that helps you 
                discover what the sages, rishis, and avatars taught, and how it applies to{" "}
                <span className="text-foreground font-medium">your</span> life today.
              </p>
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
                    <BookOpen className="w-12 h-12 text-primary" />
                  </div>
                  <p className="font-display text-2xl font-semibold text-foreground mb-2">Ancient Wisdom.</p>
                  <p className="font-display text-2xl font-semibold text-gradient-gold">Modern Clarity.</p>
                  <p className="text-sm text-muted-foreground mt-4">Powered by Clarivise AI</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scripture Sources */}
      <section className="py-24 md:py-32 border-t border-border relative">
        <ParticleBackground count={15} className="z-0" />
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
              Trained on <span className="text-gradient-gold">Sacred Texts</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              Gyani Buddy's full vision encompasses the breadth of India's spiritual literature — 
              4 Vedas, 108 Upanishads, Puranas, Itihasas, and the Darshanas.
            </p>
            <p className="text-sm text-primary font-medium max-w-2xl mx-auto">
              ✦ Phase One launches with the Bhagavad Gita — the distilled essence of all scriptures, 
              containing the wisdom of the Vedas, Upanishads, and more in a single, transformative dialogue.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scriptures.map((scripture, i) => (
              <motion.div
                key={scripture.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="group p-8 rounded-xl border border-border bg-card hover:border-primary/30 hover-lift transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                  <scripture.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{scripture.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{scripture.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 border-t border-border relative">
        <GlowOrb size={280} x="20%" y="60%" opacity={0.05} className="z-0" />
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
              How It <span className="text-gradient-gold">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Spiritual guidance, reimagined for the age of AI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <div className="flex gap-5 p-6 rounded-xl border border-border bg-card hover-lift hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-secondary flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 md:py-32 border-t border-border relative overflow-hidden">
        <ParticleBackground count={20} className="z-0" />
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
                When You Need <span className="text-gradient-gold">Guidance</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Gyani Buddy is designed for moments when you need perspective — drawing from 
                the same wisdom that has guided millions for thousands of years.
              </p>
              <ul className="space-y-4">
                {useCases.map((useCase, i) => (
                  <motion.li
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i * 0.5}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 shrink-0 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Sparkles className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{useCase}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={1}
            >
              {/* Mock chat interface */}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4 hover-lift">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm">Gyani Buddy</p>
                    <p className="text-xs text-muted-foreground">Spiritual AI Companion</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
                      <p className="text-sm">I'm confused about my career. Should I follow passion or stability?</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">
                      <p className="text-sm text-muted-foreground">
                        In the Bhagavad Gita (Chapter 3, Verse 35), Lord Krishna teaches: 
                        <span className="text-foreground italic"> "It is far better to perform one's natural 
                        prescribed duty, though tinged with faults, than to perform another's prescribed duty."
                        </span> Your svadharma — your true calling — may not be the easiest path, but it 
                        is the most fulfilling one. Consider what aligns with your nature, not just external rewards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/50 border border-border">
                    <MessageCircle className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Ask your question...</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support */}
      <SupportSection />

      {/* Wellness Centre */}
      <WellnessCentreSection />

      {/* Feedback */}
      <FeedbackSection />

      {/* Donation */}
      <DonationSection />

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border relative">
        <ParticleBackground count={30} className="z-0" />
        <GlowOrb size={350} x="50%" y="50%" opacity={0.1} className="z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Coming Soon</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Wisdom Awaits<span className="text-gradient-gold">.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
              Gyani Buddy is currently in development. We're carefully curating and training 
              our model on sacred texts to ensure every response carries the depth and respect 
              these scriptures deserve. Stay connected with Clarivise for updates.
            </p>
            <Link to="/#contact">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 glow-gold text-base px-8">
                Get in Touch for Updates
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-2 text-2xl font-display font-bold text-gradient-gold">
              <ClariviseIcon className="w-7 h-7" />
              Clarivise
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Clarivise. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GyaniBuddy;
