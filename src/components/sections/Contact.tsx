import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState, FormEvent } from "react";
import { AtSign, Mail, MapPin, Phone, Send } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating EmailJS send
    try {
      // This is where you would add your actual EmailJS integration
      // Example:
      // await emailjs.send(
      //   "YOUR_SERVICE_ID",
      //   "YOUR_TEMPLATE_ID",
      //   formData,
      //   "YOUR_USER_ID"
      // );
      
      // For demo purposes, we'll use a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <AtSign className="h-5 w-5" />,
      label: "Email",
      value: "kirttinathojha000@gmail.com",
      href: "mailto:kirttinathojha000@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Bhubaneswar, Odisha",
      href: null,
    },
  ];

  return (
    <section id="contact" className="bg-muted/50">
      <div className="container" ref={ref}>
        <div className="flex flex-col gap-12">
          <div className="space-y-4 text-center">
            <h2>Contact Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? Reach out to me.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card 
              className={cn(
                "transition-all duration-700 transform",
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              )}
            >
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div 
              className={cn(
                "space-y-6 transition-all duration-700 transform",
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              )}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    You can reach me through the following channels.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          {item.href ? (
                            <a 
                              href={item.href} 
                              className="font-medium hover:underline"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Connect with Me</CardTitle>
                  <CardDescription>
                    Find me on professional networks.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-12 w-12 bg-card rounded-full border flex items-center justify-center transition-colors hover:bg-muted"
                      aria-label="GitHub"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.574 9.5 21.292 9.5 21.052C9.5 20.825 9.492 19.985 9.492 19.139C7 19.607 6.35 18.535 6.15 17.975C6.037 17.691 5.55 16.783 5.125 16.557C4.775 16.375 4.275 15.908 5.112 15.895C5.9 15.882 6.462 16.627 6.65 16.923C7.55 18.437 8.937 18.012 9.537 17.772C9.623 17.108 9.878 16.665 10.158 16.413C7.975 16.16 5.7 15.313 5.7 11.477C5.7 10.387 6.087 9.488 6.675 8.787C6.575 8.562 6.225 7.477 6.775 6.112C6.775 6.112 7.612 5.874 9.505 7.162C10.312 6.962 11.163 6.863 12.012 6.863C12.85 6.863 13.7 6.963 14.512 7.162C16.387 5.862 17.225 6.113 17.225 6.113C17.775 7.477 17.425 8.563 17.337 8.788C17.925 9.488 18.312 10.375 18.312 11.477C18.312 15.325 16.025 16.163 13.825 16.413C14.175 16.725 14.475 17.325 14.475 18.263C14.475 19.6 14.462 20.738 14.462 21.052C14.462 21.294 14.625 21.574 15.125 21.487C17.105 20.818 18.8 19.52 19.979 17.821C21.158 16.122 21.755 14.08 21.75 12C21.75 6.477 17.272 2 12 2Z" fill="currentColor"/>
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-12 w-12 bg-card rounded-full border flex items-center justify-center transition-colors hover:bg-muted"
                      aria-label="LinkedIn"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="currentColor"/>
                        <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="currentColor"/>
                        <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 15 11 16 12.5V10C16 9.44771 16.4477 9 17 9H18C18.5523 9 19 9.44772 19 10V18C19 18.5523 18.5523 19 18 19H17C16.4477 19 16 18.5523 16 18V16.5C16 15 13 14 13 16.5V18C13 18.5523 12.5523 19 12 19H11Z" fill="currentColor"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="currentColor"/>
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
