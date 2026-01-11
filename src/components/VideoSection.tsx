import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: true });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="showreel"
      className="py-24 lg:py-32 bg-card relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Vidéo
          </p>
          <h2 className="font-display text-5xl lg:text-7xl font-light text-foreground">
            Showreel
          </h2>
          <div className="line-elegant w-24 mx-auto mt-8" />
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative aspect-video max-w-5xl mx-auto group"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => !isPlaying && setShowControls(true)}
        >
          {/* Video placeholder with elegant styling */}
          <div className="absolute -inset-4 border border-primary/20 -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          
          <div className="relative w-full h-full bg-background overflow-hidden">
            {/* Placeholder Video - using a gradient as demo */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted={isMuted}
              loop
              playsInline
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230a0a0a'/%3E%3Cstop offset='50%25' style='stop-color:%231a1a1a'/%3E%3Cstop offset='100%25' style='stop-color:%230a0a0a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='1920' height='1080'/%3E%3Ctext x='960' y='540' fill='%23b4a574' font-family='serif' font-size='48' text-anchor='middle'%3EFARHAD - SHOWREEL%3C/text%3E%3C/svg%3E"
            >
              {/* Add actual video source here */}
              <source src="" type="video/mp4" />
            </video>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />

            {/* Play button overlay */}
            <motion.div
              initial={false}
              animate={{ opacity: !isPlaying || showControls ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <button
                onClick={togglePlay}
                className="w-24 h-24 rounded-full border-2 border-primary bg-background/30 backdrop-blur-sm flex items-center justify-center group/btn hover:bg-primary/20 hover:scale-110 transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-primary" />
                ) : (
                  <Play className="w-8 h-8 text-primary ml-1" />
                )}
              </button>
            </motion.div>

            {/* Bottom controls */}
            <motion.div
              initial={false}
              animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-foreground" />
                    ) : (
                      <Play className="w-4 h-4 text-foreground ml-0.5" />
                    )}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-foreground" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-foreground" />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-body text-sm text-muted-foreground">
                    FARHAD - Fashion Showreel 2024
                  </span>
                  <button
                    onClick={handleFullscreen}
                    className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Maximize className="w-4 h-4 text-foreground" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Video Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center mt-12"
        >
          <p className="font-body text-muted-foreground leading-relaxed">
            Une compilation de mes meilleures collaborations avec les plus grandes 
            maisons de couture. De Paris à Milan, découvrez l'essence de mon travail 
            et ma vision de la mode contemporaine.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
