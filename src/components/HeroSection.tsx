import heroImage from "@/assets/hero-farhad.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Farhad - Fashion Model"
          className="w-full h-full object-cover object-top opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="overflow-hidden">
          <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-4 animate-fade-up opacity-0 delay-300">
            International Fashion Model
          </p>
        </div>

        <div className="overflow-hidden">
          <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] font-light tracking-wider text-foreground animate-fade-up opacity-0 delay-500">
            FARHAD
          </h1>
        </div>

        <div className="overflow-hidden mt-8">
          <div className="line-elegant w-32 mx-auto animate-fade-up opacity-0 delay-700" />
        </div>

        <div className="overflow-hidden mt-8">
          <p className="font-body text-sm md:text-base text-muted-foreground tracking-widest uppercase animate-fade-up opacity-0 delay-1000">
            Paris · Milan · New York
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up opacity-0 delay-1000">
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-xs tracking-widest text-muted-foreground uppercase">
            Découvrir
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
