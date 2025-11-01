"use client";

import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Phone,
  Send,
  RefreshCw,
  Info,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function WhatsAppContact() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^\+?[1-9]\d{9,14}$/.test(phone.replace(/\s+/g, ""))) {
      setStatus("⚠️ Please enter a valid phone number with country code");
      return;
    }

    if (!message.trim()) {
      setStatus("⚠️ Please enter a message");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const formattedPhone = phone.startsWith("+") ? phone.substring(1) : phone;
      const encodedMessage = encodeURIComponent(message);
      window.open(
        `https://wa.me/${formattedPhone}?text=${encodedMessage}`,
        "_blank"
      );
      setStatus("✅ Opening WhatsApp...");
      setLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setPhone("");
    setMessage("");
    setStatus("");
  };

  return (
    <section className="py-12 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-[#128C7E] flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" /> WhatsApp Me
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Get in touch directly via WhatsApp
          </p>
        </CardHeader>

        <CardContent>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Phone Number
                </label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground transition-colors cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-[250px]">
                      <p>Include country code (e.g., +1 for USA, +44 for UK)</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div
                className={`relative transition-all duration-200 ${
                  focusedField === "phone"
                    ? "ring-2 ring-[#25D366]/30 rounded-lg"
                    : ""
                }`}
              >
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  +
                </span>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="1234567890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`pl-7 py-5 text-base ${
                    focusedField === "phone" ? "border-[#25D366]" : ""
                  }`}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="text-sm font-medium text-muted-foreground"
              >
                Your Message
              </label>
              <div
                className={`transition-all duration-200 ${
                  focusedField === "message"
                    ? "ring-2 ring-[#25D366]/30 rounded-lg"
                    : ""
                }`}
              >
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value.slice(0, 1000))}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  required
                  className={`text-base resize-none ${
                    focusedField === "message" ? "border-[#25D366]" : ""
                  }`}
                />
                <p className="text-xs text-right text-muted-foreground mt-1">
                  {message.length}/1000 characters
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
              >
                {loading ? (
                  <span className="flex items-center">
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send via WhatsApp
                  </span>
                )}
              </Button>

              <Button
                type="button"
                onClick={handleReset}
                variant="outline"
                className="w-1/3"
              >
                Clear
              </Button>
            </div>

            {status && (
              <div
                className={`mt-2 p-3 rounded-lg flex items-center gap-2 text-sm ${
                  status.startsWith("✅")
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {status.startsWith("✅") ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <AlertCircle className="w-4 h-4" />
                )}
                <span>{status}</span>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
