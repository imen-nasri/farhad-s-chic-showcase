import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

interface LightboxProps {
  images: { src: string; title: string; category: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox = ({ images, currentIndex, isOpen, onClose, onNavigate }: LightboxProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
      setIsZoomed(false);
    }
  }, [currentIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
      setIsZoomed(false);
    }
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          handlePrev();
          break;
        case "ArrowRight":
          handleNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>

          {/* Navigation buttons */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
          )}

          {currentIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          )}

          {/* Zoom button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(!isZoomed);
            }}
            className="absolute top-6 right-24 z-50 w-12 h-12 flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            {isZoomed ? (
              <ZoomOut className="w-5 h-5 text-foreground" />
            ) : (
              <ZoomIn className="w-5 h-5 text-foreground" />
            )}
          </button>

          {/* Image container */}
          <div 
            className="flex items-center justify-center w-full h-full p-16"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: isZoomed ? 1.5 : 1,
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`relative max-w-full max-h-full ${isZoomed ? 'cursor-zoom-out overflow-auto' : 'cursor-zoom-in'}`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={currentImage.src}
                alt={currentImage.title}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </motion.div>
          </div>

          {/* Image info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
          >
            <p className="font-body text-xs tracking-widest uppercase text-primary mb-2">
              {currentImage.category}
            </p>
            <h3 className="font-display text-2xl text-foreground">
              {currentImage.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground mt-2">
              {currentIndex + 1} / {images.length}
            </p>
          </motion.div>

          {/* Thumbnails */}
          <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(index);
                  setIsZoomed(false);
                }}
                className={`w-16 h-16 overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "border-primary opacity-100"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
