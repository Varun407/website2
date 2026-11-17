import React from 'react';
import { Check, ArrowRight, Users, Clock, Sparkles } from 'lucide-react';

export default function Services({ onOpenBooking }) {
  const zoomBookingUrl = "https://scheduler.zoom.us/gaya-we-write-you-chill/building-your-personal-brand";

  return (
    <section id="services" className="snap-section min-h-[auto] md:min-h-screen py-14 sm:py-24 bg-slate-50/70 border-t border-slate-200 relative z-10 overflow-hidden flex flex-col justify-center">
      <div className="absolute top-1/3 left-10 w-60 sm:w-96 h-60 sm:h-96 bg-[#2650a8]/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-10 w-60 sm:w-96 h-60 sm:h-96 bg-[#f4ba43]/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#2650a8] px-3.5 py-1.5 rounded-full bg-[#2650a8]/10 border border-[#2650a8]/25 inline-block mb-3 shadow-xs">
            Service Packages
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#000000] tracking-tight leading-tight">
            Two Ways I <span className="highlight-swipe">Provide <span className="word-accent">Support</span></span>
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-600 font-subheading font-medium">
            Whether you want it fully done for you or trained in-house.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-5xl mx-auto">
          {/* Option 01 */}
          <div className="cyclic-card cyclic-delay-1 p-6 sm:p-9 rounded-2xl sm:rounded-3xl flex flex-col justify-between group relative bg-white">
            <div>
              <div className="mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#2650a8]/10 text-[#2650a8] border border-[#2650a8]/20">
                  Option 01
                </span>
              </div>

              <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#000000] mb-2 leading-tight">
                Done-By-Your-Team
              </h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2650a8]"></span>
                <span>6-WEEK PROGRAMME. YOUR TEAM RUNS IT IN-HOUSE.</span>
              </p>

              <div className="p-4 sm:p-4.5 rounded-2xl bg-gradient-to-br from-blue-50/50 to-slate-50 border border-slate-200/90 mb-6 shadow-xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-100/70 text-[#2650a8] flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Support: 3 Zoom sessions with Gaya
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Weeks 1, 3 and 6, plus simple, easy-to-follow guides. Not 35 modules or 500 videos.
                  </p>
                </div>
              </div>

              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3.5 flex items-center gap-2.5">
                <span>By the end of 6 weeks, you’ll have</span>
                <div className="h-px bg-slate-200/80 flex-1"></div>
              </div>

              <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2650a8] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Clear positioning, so a stranger knows who you help in 10 seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2650a8] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">A content system your team can run, with feedback on every draft</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2650a8] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">A LinkedIn outreach sequence set up and ready to send</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2650a8] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">A team member or VA who can run all of it without you</span>
                </li>
              </ul>
            </div>

            <a
              href={zoomBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-[#2650a8] hover:text-white border-2 border-slate-200/90 hover:border-[#2650a8] transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.01] group/btn"
            >
              <span>Apply for the 6-Week Programme</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover/btn:text-white transition-all duration-200 group-hover/btn:translate-x-1" />
            </a>
          </div>

          {/* Option 02 */}
          <div className="cyclic-card cyclic-delay-2 p-6 sm:p-9 pt-8 sm:pt-10 rounded-2xl sm:rounded-3xl flex flex-col justify-between group relative bg-white">
            <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-[#2650a8]/10 via-[#f4ba43]/5 to-transparent rounded-full blur-[60px] pointer-events-none rounded-tr-3xl"></div>

            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#2650a8] to-[#1e4290] text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1.5 z-20 border border-white/40">
              <Sparkles className="w-3.5 h-3.5 text-[#f4ba43] animate-spin" style={{ animationDuration: '6s' }} />
              <span>Most Popular</span>
            </div>

            <div>
              <div className="mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-500/10 text-amber-800 border border-amber-500/25">
                  Option 02
                </span>
              </div>

              <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#000000] mb-2 leading-tight">
                Done-For-You
              </h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f4ba43]"></span>
                <span>12 WEEKS. WE BUILD AND RUN THE SYSTEM FOR YOU.</span>
              </p>

              <div className="p-4 sm:p-4.5 rounded-2xl bg-gradient-to-br from-amber-50/70 via-amber-50/30 to-orange-50/20 border border-[#f4ba43]/40 mb-6 shadow-xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#f4ba43]/20 border border-[#f4ba43]/30 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-amber-700" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm font-bold text-amber-950">
                    Your one commitment: follow up
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    When an enquiry lands in your LinkedIn inbox, you reply. Nobody can have that conversation better than you.
                  </p>
                </div>
              </div>

              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3.5 flex items-center gap-2.5">
                <span>What’s included</span>
                <div className="h-px bg-slate-200/80 flex-1"></div>
              </div>

              <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Positioning and profile built around your expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Content strategy and writing done for you. You never open a blank page.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Outreach run for you, so the right people are connecting and replying</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">Monthly analytics: what landed, what didn’t, and what we’ll change</span>
                </li>
              </ul>
            </div>

            <a
              href={zoomBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#2650a8] to-[#1e4290] hover:from-[#1d4088] hover:to-[#173373] transition-all duration-200 cursor-pointer shadow-lg shadow-[#2650a8]/25 hover:shadow-xl hover:shadow-[#2650a8]/35 hover:scale-[1.01] group/btn"
            >
              <span>Apply for Done-For-You</span>
              <ArrowRight className="w-4 h-4 text-[#f4ba43] transition-transform duration-200 group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

