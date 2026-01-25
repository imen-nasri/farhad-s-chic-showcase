import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Loader2, CheckCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  projectType: z.string().min(1, "Veuillez sélectionner un type de projet"),
  message: z.string().trim().min(10, "Le message doit contenir au moins 10 caractères").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@farhad-model.com",
      href: "mailto:info@farhad-model.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+45 71 45 56 77",
      href: "https://wa.me/4571455677",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Paris, France",
      href: "#",
    },
  ];

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - Replace with actual backend call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      toast.success("Message envoyé avec succès !");
      setFormData({ name: "", email: "", projectType: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    } catch {
      toast.error("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: { borderColor: "hsl(var(--primary))" },
    blur: { borderColor: "hsl(var(--border))" },
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Collaborons
            </p>
            <h2 className="font-display text-5xl lg:text-7xl font-light text-foreground mb-8">
              Prenons
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block italic text-primary"
              >
                Contact
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-muted-foreground leading-relaxed max-w-md mb-12"
            >
              Pour les demandes de collaboration, les réservations ou toute autre 
              information, n'hésitez pas à me contacter directement ou via mon agence.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-6 group"
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }}
                    className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-card p-8 lg:p-12 border border-border"
          >
            <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-8">
              Demande de Réservation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                    Nom
                  </label>
                  <motion.input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`w-full bg-transparent border-b py-3 font-body text-foreground focus:outline-none transition-colors ${
                      errors.name ? "border-destructive" : "border-border focus:border-primary"
                    }`}
                    placeholder="Votre nom"
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-2">{errors.name}</p>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full bg-transparent border-b py-3 font-body text-foreground focus:outline-none transition-colors ${
                      errors.email ? "border-destructive" : "border-border focus:border-primary"
                    }`}
                    placeholder="votre@email.com"
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-2">{errors.email}</p>
                  )}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                  Type de Projet
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => handleInputChange("projectType", e.target.value)}
                  className={`w-full bg-transparent border-b py-3 font-body text-foreground focus:outline-none transition-colors cursor-pointer ${
                    errors.projectType ? "border-destructive" : "border-border focus:border-primary"
                  }`}
                >
                  <option value="" className="bg-card">Sélectionnez une option</option>
                  <option value="editorial" className="bg-card">Editorial</option>
                  <option value="campaign" className="bg-card">Campagne Publicitaire</option>
                  <option value="runway" className="bg-card">Défilé</option>
                  <option value="other" className="bg-card">Autre</option>
                </select>
                {errors.projectType && (
                  <p className="text-destructive text-xs mt-2">{errors.projectType}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                  Message
                </label>
                <motion.textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className={`w-full bg-transparent border-b py-3 font-body text-foreground focus:outline-none transition-colors resize-none ${
                    errors.message ? "border-destructive" : "border-border focus:border-primary"
                  }`}
                  placeholder="Décrivez votre projet..."
                  variants={inputVariants}
                  whileFocus="focus"
                />
                {errors.message && (
                  <p className="text-destructive text-xs mt-2">{errors.message}</p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSuccess}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full mt-8 py-4 font-body text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSuccess
                    ? "bg-green-600 text-white"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                } disabled:opacity-70`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Message Envoyé
                  </>
                ) : (
                  "Envoyer la Demande"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
