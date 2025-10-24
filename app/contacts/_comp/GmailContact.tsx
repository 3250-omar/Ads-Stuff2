"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Send, RefreshCcw } from "lucide-react";

export default function GmailForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.endsWith("@gmail.com")) {
      setStatus("⚠️ Please enter a valid Gmail address.");
      return;
    }

    if (!message.trim()) {
      setStatus("⚠️ Message cannot be empty.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      setStatus("✅ Message sent successfully!");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setEmail("");
    setMessage("");
    setStatus("");
  };

  return (
    <section className="py-20 flex justify-center bg-gradient-to-b">
      <Card className="w-full max-w-md shadow-xl border-2 border-secondary">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-secondary flex items-center justify-center gap-2">
            <Mail className="w-6 h-6" /> Contact Me
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Your Gmail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-none "
            />

            <Textarea
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
              className="border-none "
            />

            <div className="flex gap-3">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary/80 to-secondary text-white"
              >
                {loading ? (
                  <>
                    <RefreshCcw className="animate-spin w-4 h-4 mr-2" />{" "}
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" /> Send
                  </>
                )}
              </Button>

              <Button
                type="button"
                onClick={handleReset}
                variant="outline"
                className="w-full"
              >
                Reset
              </Button>
            </div>
          </form>

          {status && (
            <p className="mt-4 text-center text-sm text-primary">{status}</p>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
