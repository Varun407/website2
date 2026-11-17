import React from 'react';
import { Check, ArrowRight, Users, Clock } from 'lucide-react';

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
          <div className="cyclic-card cyclic-delay-1 p-5 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between group relative">
            <div>
              <div className="text-[10px] sm:text-[11px] font-extrabold text-[#2650a8] uppercase tracking-wider mb-1.5 sm:mb-2">Option 01</div>
              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-[#000000] mb-2 leading-tight">
                Done-By-Your-Team
              </h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 sm:mb-6">
                6-WEEK PROGRAMME. YOUR TEAM RUNS IT IN-HOUSE.
              </p>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-5 sm:mb-6 text-xs text-slate-700 font-medium space-y-1.5 shadow-xs">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                  <Users className="w-4 h-4 text-[#2650a8]" />
                  <span>Support: 3 Zoom sessions with Gaya</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Weeks 1, 3 and 6, plus simple, easy-to-follow guides. Not 35 modules or 500 videos.
                </p>
              </div>

              <p className="text-xs sm:text-sm font-bold text-slate-900 mb-3">
                By the end of 6 weeks, you’ll have:
              </p>

              <ul className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-8 text-xs sm:text-sm text-slate-700 font-semibold">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2650a8] shrink-0 mt-0.5" />
                  <span>Clear positioning, so a stranger knows who you help in 10 seconds</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2650a8] shrink-0 mt-0.5" />
                  <span>A content system your team can run, with feedback on every draft</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2650a8] shrink-0 mt-0.5" />
                  <span>A LinkedIn outreach sequence set up and ready to send</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2650a8] shrink-0 mt-0.5" />
                  <span>A team member or VA who can run all of it without you</span>
                </li>
              </ul>
            </div>

            <a
              href={zoomBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 px-5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold text-slate-800 bg-slate-50 hover:bg-[#2650a8] hover:text-white border border-slate-200 hover:border-[#2650a8] transition-all cursor-pointer shadow-xs group/btn hover:scale-[1.02]"
            >
              <span>Apply for the 6-Week Programme</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </a>
          </div>

          {/* Option 02 */}
          <div className="cyclic-card cyclic-delay-2 p-5 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between group relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#2650a8]/8 rounded-full blur-[50px] pointer-events-none rounded-tr-3xl"></div>

            <div>
              <div className="text-[10px] sm:text-[11px] font-extrabold text-[#2650a8] uppercase tracking-wider mb-1.5 sm:mb-2">Option 02</div>
              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-[#000000] mb-2 leading-tight">
                Done-For-You
              </h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 sm:mb-6">
                12 WEEKS. WE BUILD AND RUN THE SYSTEM FOR YOU.
              </p>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-5 sm:mb-6 text-xs text-slate-700 font-medium space-y-1.5 shadow-xs">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                  <Clock className="w-4 h-4 text-[#f4ba43]" />
                  <span>Your one commitment: follow up</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  When an enquiry lands in your LinkedIn inbox, you reply. Nobody can have that conversation better than you.
                </p>
              </div>

              <p className="text-xs sm:text-sm font-bold text-slate-900 mb-3">
                What’s included:
              </p>

              <ul className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-8 text-xs sm:text-sm text-slate-700 font-semibold">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2650a8] shrink-0 mt-0.5" />
                  <span>Positioning and profile built around your expertise</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2650a8] shrink-0 mt-0.5" />
                  <span>Content strategy and writing done for you. You never open a blank page.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2650a8] shrink-0 mt-0.5" />
                  <span>Outreach run for you, so the right people are connecting and replying</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2650a8] shrink-0 mt-0.5" />
                  <span>Monthly analytics: what landed, what didn’t, and what we’ll change</span>
                </li>
              </ul>
            </div>

            <a
              href={zoomBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full inline-flex items-center justify-center gap-2.5 py-3 sm:py-3.5 px-5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#2650a8] hover:bg-[#1d4088] transition-all cursor-pointer shadow-md shadow-[#2650a8]/25 hover:scale-[1.02]"
            >
              <span>Apply for Done-For-You</span>
              <ArrowRight className="w-4 h-4 text-[#f4ba43] transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

