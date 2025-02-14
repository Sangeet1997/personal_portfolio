import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
    href: "https://github.com",
  },
  {
    icon: <FiLinkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: <FiTwitter className="w-5 h-5" />,
    label: "Twitter",
    href: "https://twitter.com",
  },
  {
    icon: <FiMail className="w-5 h-5" />,
    label: "Email",
    href: "mailto:your.email@example.com",
  },
];

export default function Contact() {
  return (
    <PageTransition>
      <div className="py-12">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full">Send Message</Button>
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
