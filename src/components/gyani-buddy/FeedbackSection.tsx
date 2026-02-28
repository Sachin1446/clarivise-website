import { motion } from "framer-motion";
import { useState } from "react";
import { Star, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const FeedbackSection = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast({ title: "Please select a rating", variant: "destructive" });
      return;
    }
    toast({ title: "Thank you for your feedback! 🙏" });
    setRating(0);
    setComment("");
    setName("");
  };

  return (
    <section id="feedback" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Share Your <span className="text-gradient-gold">Experience</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your feedback helps us improve Gyani Buddy and make ancient wisdom more 
              accessible to everyone. Whether it's a suggestion, appreciation, or concern — 
              we'd love to hear from you.
            </p>
            <p className="text-sm text-muted-foreground">
              Every response is read personally by our team. Your insights shape the future of 
              Gyani Buddy.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={1}
          >
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 space-y-6">
              {/* Star Rating */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">How would you rate your experience?</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          star <= (hoveredRating || rating)
                            ? "text-primary fill-primary"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="feedback-name" className="text-sm font-medium text-foreground mb-2 block">
                  Name <span className="text-muted-foreground">(optional)</span>
                </label>
                <Input
                  id="feedback-name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="feedback-comment" className="text-sm font-medium text-foreground mb-2 block">
                  Your thoughts
                </label>
                <Textarea
                  id="feedback-comment"
                  placeholder="Share what you liked, what could improve, or any suggestions..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 glow-gold">
                <Send className="w-4 h-4 mr-2" />
                Submit Feedback
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
