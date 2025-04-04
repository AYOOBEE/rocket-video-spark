
const BrandsSection = () => {
  return (
    <div className="mt-16 md:mt-24 border-t border-white/5 pt-6 md:pt-8">
      <p className="text-center text-xs md:text-sm text-gray-500 mb-4 md:mb-6">TRUSTED BY INNOVATIVE TEAMS</p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70">
        <div className="h-6 md:h-8 w-auto grayscale hover:grayscale-0 transition-all">
          <svg className="h-full w-auto" viewBox="0 0 124 34" fill="white">
            <path d="M11.5 3.5c-4.4 0-8 3.6-8 8s3.6 8 8 8h16v-16h-16zm21 0v16h8c4.4 0 8-3.6 8-8s-3.6-8-8-8h-8z"/>
          </svg>
        </div>
        <div className="h-6 md:h-8 w-auto grayscale hover:grayscale-0 transition-all">
          <svg className="h-full w-auto" viewBox="0 0 124 34" fill="white">
            <path d="M26 18.5c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5 1.6 3.5 3.5 3.5z"/>
            <path d="M48 22.5c0-1.9-1.6-3.5-3.5-3.5s-3.5 1.6-3.5 3.5 1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5z"/>
            <path d="M63.5 9h-9c-1.9 0-3.5 1.6-3.5 3.5v9c0 1.9 1.6 3.5 3.5 3.5h9c1.9 0 3.5-1.6 3.5-3.5v-9c0-1.9-1.6-3.5-3.5-3.5z"/>
          </svg>
        </div>
        <div className="h-6 md:h-8 w-auto grayscale hover:grayscale-0 transition-all">
          <svg className="h-full w-auto" viewBox="0 0 124 34" fill="white">
            <rect x="10" y="9" width="24" height="16" rx="2"/>
            <rect x="40" y="9" width="16" height="16" rx="8"/>
            <rect x="62" y="9" width="24" height="16" rx="2"/>
          </svg>
        </div>
        <div className="h-6 md:h-8 w-auto grayscale hover:grayscale-0 transition-all">
          <svg className="h-full w-auto" viewBox="0 0 124 34" fill="white">
            <circle cx="19" cy="17" r="8"/>
            <rect x="33" y="9" width="16" height="16" rx="2"/>
            <path d="M73 9h-10c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
