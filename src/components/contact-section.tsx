"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Github, Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must be less than 500 characters."),
});

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would send this data to a server/backend service
    console.log(values);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    form.reset();
  }

  return (
    <section id="contact" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-foreground/80">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
            <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-headline text-2xl font-semibold">Contact Information</h3>
                  <p className="text-foreground/70">
                    You can reach me via email or connect with me on social media. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary"/>
                    <a href="mailto:abrokinla@gmail.com" className="hover:underline">abrokinla@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Linkedin className="h-6 w-6 text-primary"/>
                    <a href="https://www.linkedin.com/in/araoye-abraham-dev/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/araoye-abraham-dev</a>
                  </div>
                   <div className="flex items-center gap-4">
                    <Github className="h-6 w-6 text-primary"/>
                    <a href="https://github.com/abrokinla" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/abrokinla</a>
                  </div>
                </div>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell me about your project..." {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
        </div>
      </div>
    </section>
  );
}