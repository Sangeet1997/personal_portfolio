import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
} from "react-icons/fi";

const socials = [
  {
    icon: <FiGithub className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/Sangeet1997",
  },
  {
    icon: <FiLinkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sangeet-saha-a2b1651aa/",
  },
  {
    icon: <FiMail className="w-5 h-5" />,
    label: "Email",
    href: "mailto:saha.san@northeastern.edu",
  },
];

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "saha.san@northeastern.edu",
        },
        import.meta.env.VITE_EMAILJS_KEY
      );

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <PageTransition>
      <div className="py-12">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="min-h-[150px]"
                  required
                />
              </div>
              {status && (
                <div className={`text-sm ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                  {status}
                </div>
              )}
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
            <div className="grid gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {social.icon}
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}