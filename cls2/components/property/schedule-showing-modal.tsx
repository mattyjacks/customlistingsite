"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle2, Video, Home } from "lucide-react";
import { PROPERTY_DATA } from "@/lib/property-data";

interface ScheduleShowingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScheduleShowingModal({ isOpen, onClose }: ScheduleShowingModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("Afternoon (1:00 PM - 3:00 PM)");
  const [tourType, setTourType] = useState<"in-person" | "video">("in-person");
  const [hasAgent, setHasAgent] = useState("no");
  const [submitted, setSubmitted] = useState(false);

  // Set default date to tomorrow dynamically on client
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Keyboard escape listener
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-card border border-border shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Close Tour Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Success State */
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-bold text-2xl text-foreground">
                Private Tour Request Dispatched!
              </h3>
              <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{name || "Guest"}</strong>. Example Realty has received your request for <strong>{PROPERTY_DATA.address}</strong> on <strong>{date}</strong>. Our listing specialist will text confirmation to <strong>{phone || "your phone"}</strong> in &lt; 5 seconds.
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-500 px-2 py-0.5 rounded bg-amber-500/10">
                VIP Private Showing
              </span>
              <h3 className="font-display font-black text-2xl text-foreground">
                Schedule Private Walkthrough
              </h3>
              <p className="text-xs text-muted-foreground">
                Tour <strong>{PROPERTY_DATA.address}, Chester NH</strong> with an exclusive listing specialist.
              </p>
            </div>

            {/* Tour Type Selector */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-muted border border-border text-xs font-semibold">
              <button
                type="button"
                onClick={() => setTourType("in-person")}
                className={`py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                  tourType === "in-person"
                    ? "bg-card text-foreground shadow-sm font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Home className="w-3.5 h-3.5 text-blue-500" />
                <span>In-Person Tour</span>
              </button>

              <button
                type="button"
                onClick={() => setTourType("video")}
                className={`py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                  tourType === "video"
                    ? "bg-card text-foreground shadow-sm font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Video className="w-3.5 h-3.5 text-purple-500" />
                <span>Live Video Tour</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-foreground">Your Full Name</label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-foreground">Mobile Phone</label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="(603) 555-0192"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="font-semibold text-foreground">Email Address</label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-foreground">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-foreground">Time Window</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-background border border-border text-foreground font-medium outline-none"
                  >
                    <option>Morning (10:00 AM - 12:00 PM)</option>
                    <option>Afternoon (1:00 PM - 3:00 PM)</option>
                    <option>Twilight (4:30 PM - 6:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Representation Question */}
              <div className="space-y-1">
                <label className="font-semibold text-foreground">Are you working with a buyer&apos;s agent?</label>
                <div className="flex gap-4 pt-0.5 text-muted-foreground">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="hasAgent"
                      value="no"
                      checked={hasAgent === "no"}
                      onChange={() => setHasAgent("no")}
                      className="accent-primary"
                    />
                    <span>No, I am unrepresented</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="hasAgent"
                      value="yes"
                      checked={hasAgent === "yes"}
                      onChange={() => setHasAgent("yes")}
                      className="accent-primary"
                    />
                    <span>Yes, I have an agent</span>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/20 transition-all active:scale-98"
              >
                Request Private Showing
              </button>

              <p className="text-[10px] text-muted-foreground text-center">
                Strict NH RSA 507-H privacy protection. Your information is never sold to third parties.
              </p>
            </form>
          </>
        )}

      </div>
    </div>
  );
}
