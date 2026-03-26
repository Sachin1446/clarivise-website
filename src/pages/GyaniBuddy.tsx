import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ClariviseIcon } from "@/components/ClariviseIcon";

const GyaniBuddy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-display font-bold text-gradient-gold">
            <ClariviseIcon className="w-6 h-6" />
            Clarivise
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </nav>
      <div className="flex-1 pt-[61px]">
        <iframe
          src="https://gyanibuddy.clarivise.in"
          title="Gyani Buddy — Your Spiritual Friend"
          className="w-full h-full border-0"
          style={{ height: "calc(100vh - 61px)", minHeight: "600px" }}
          allow="clipboard-write"
        />
      </div>
    </div>
  );
};

export default GyaniBuddy;
