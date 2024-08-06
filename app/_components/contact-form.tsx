"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Username must be at least 2 characters.",
    })
    .max(100, {
      message: "Username can be at max 100 characters.",
    }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  website: z.string(),
  query: z
    .string()
    .min(3, {
      message: "This field must contain at least 1 character.",
    })
    .max(100, {
      message: "This field can be at max 100 characters.",
    }),
});

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      query: "",
    },
  });

  const { isSubmitting } = form.formState;

  function onSubmit(values: z.infer<typeof formSchema>) {
    axios.post("/api/contact-me", values).then(
      (response) => {},
      (error) => {}
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-10">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="border-2 border-black rounded-sm p-4 md:p-6"
                  placeholder="Your name"
                  disabled={isSubmitting}
                  {...field}
                />
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
              <FormControl>
                <Input
                  className="border-2 border-black rounded-sm p-4 md:p-6"
                  placeholder="Email"
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="border-2 border-black rounded-sm p-4 md:p-6"
                  placeholder="Your website (If exists)"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="border-2 border-black rounded-sm p-4 md:py-4 md:px-6"
                  placeholder="How can I help?*"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full flex flex-row justify-center lg:justify-start items-center">
          <Button
            className="text-white bg-black rounded-sm p-4 md:p-6"
            type="submit"
            disabled={isSubmitting}
          >
            Get In Touch
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ContactForm;
