const ClariviseIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer C-shaped arc (open on right) — represents Clarivise "C" */}
    <path
      d="M44 14C39.5 10.5 34 9 28 10C16 13 10 24 12 36C14 48 24 56 36 53C40 52 43.5 49.5 46 46"
      stroke="url(#cvGrad)"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    {/* Inner diamond-iris — a rotated square representing clarity/focus */}
    <rect
      x="24"
      y="24"
      width="16"
      height="16"
      rx="2"
      transform="rotate(45 32 32)"
      stroke="url(#cvGrad)"
      strokeWidth="2.5"
      fill="none"
    />
    {/* Core dot — the insight point */}
    <circle cx="32" cy="32" r="3" fill="url(#cvGrad)" />
    {/* Three ascending dots on the open side — representing growth/data/wisdom */}
    <circle cx="48" cy="24" r="2" fill="url(#cvGrad)" opacity="0.9" />
    <circle cx="51" cy="32" r="2" fill="url(#cvGrad)" opacity="0.7" />
    <circle cx="48" cy="40" r="2" fill="url(#cvGrad)" opacity="0.5" />
    {/* Connecting lines from C-arc to dots — neural/circuit feel */}
    <line x1="44" y1="18" x2="48" y2="24" stroke="url(#cvGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <line x1="46" y1="46" x2="48" y2="40" stroke="url(#cvGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    <defs>
      <linearGradient id="cvGrad" x1="10" y1="10" x2="52" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="hsl(42, 78%, 55%)" />
        <stop offset="0.6" stopColor="hsl(42, 78%, 68%)" />
        <stop offset="1" stopColor="hsl(35, 85%, 52%)" />
      </linearGradient>
    </defs>
  </svg>
);

export default ClariviseIcon;
