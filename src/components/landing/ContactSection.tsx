import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - would integrate with backend
    console.log({ name, message });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? Reach out through any of these channels or send us a message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Buttons */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Quick Contact
            </h3>
            
            <a
              href="mailto:contact@placeholder.com"
              className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-muted-foreground text-sm">contact@placeholder.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">WhatsApp</p>
                <p className="text-muted-foreground text-sm">+1 (234) 567-890</p>
              </div>
            </a>

            <a
              href="https://t.me/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Telegram</p>
                <p className="text-muted-foreground text-sm">@placeholder</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-secondary/50 border-border focus:border-primary resize-none"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
