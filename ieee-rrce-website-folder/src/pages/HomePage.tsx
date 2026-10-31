import React from 'react';
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Users, 
  Award, 
  BookOpen, 
  ExternalLink, 
  ChevronRight, 
  CheckCircle2, 
  Clock,
  Download
} from 'lucide-react';
import { 
  BRANCH_INFO, 
  EVENTS_DATA, 
  CHAPTERS_DATA, 
  PROJECTS_DATA 
} from '../data/branchData';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  openAiHub: () => void;
  setSelectedEvent: (event: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  setActiveTab, 
  openAiHub, 
  setSelectedEvent 
}) => {
  // Get upcoming event
  const upcomingEvent = EVENTS_DATA.find(e => e.id === 'techfest-2026') || EVENTS_DATA[0];
  const pastRecap = EVENTS_DATA.find(e => e.registrationStatus === 'completed');

  return (
    <div className="space-y-16 pb-16">
      
      {/* VERIFIED BANNER */}
      <div className="bg-amber-50 border-b border-amber-200/80 text-amber-900 px-4 py-2.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="bg-amber-200/80 text-amber-950 font-bold px-2 py-0.5 rounded text-[10px] tracking-wide uppercase">
              Official News Notice
            </span>
            <span>
              Flagship Annual Symposium: <strong>IEEE TechFest 2026</strong> announced at RajaRajeswari College of Engineering!
            </span>
          </div>
          <a
            href={BRANCH_INFO.contact.officialNewsPage}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#00629B] hover:underline inline-flex items-center gap-1 shrink-0"
          >
            Read college news notice
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-900 via-[#00456e] to-[#00629B] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle engineering grid background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm text-slate-100 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#00B5E2] animate-ping" />
                <span>IEEE Region 10 • Bangalore Section • RRCE Student Branch</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Advancing Technology for Humanity at <span className="text-[#00B5E2]">RRCE</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
                A student-led engineering community at RajaRajeswari College of Engineering, Bengaluru. We bridge academic theory with hands-on hardware prototyping, peer-reviewed research, technical hackathons, and ethical engineering leadership.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setActiveTab('events');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-white text-[#00629B] hover:bg-slate-100 font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <span>Explore Events & TechFest</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setActiveTab('membership');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-[#00456e] hover:bg-[#003758] border border-white/30 text-white font-semibold text-sm rounded-xl transition-colors"
                >
                  Join Branch Roster
                </button>

                <button
                  onClick={openAiHub}
                  className="px-4 py-3.5 bg-[#0b1f33]/80 hover:bg-[#0b1f33] border border-[#00B5E2]/40 text-[#00B5E2] font-semibold text-sm rounded-xl flex items-center gap-2 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#00B5E2]" />
                  <span>AI Engineering Assistant</span>
                </button>

                <a
                  href="/ieee-rrce-website.zip"
                  download="ieee-rrce-website.zip"
                  className="px-4 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm rounded-xl flex items-center gap-2 transition-colors"
                  title="Download complete project ZIP file"
                >
                  <Download className="w-4 h-4 text-[#00B5E2]" />
                  <span>Download ZIP</span>
                </a>
              </div>

              {/* Institution Credentials */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  VTU Belagavi Affiliated
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  AICTE Approved
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  NAAC A+ & NBA Accredited
                </span>
              </div>
            </div>

            {/* Right Card: Next Upcoming Event Highlight */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 shadow-2xl text-slate-900 border border-slate-100 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="inline-flex items-center gap-1.5 bg-[#00629B]/10 text-[#00629B] font-bold text-xs px-2.5 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    Featured Upcoming Event
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Registration Open
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-slate-900 leading-snug">
                    {upcomingEvent.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {upcomingEvent.shortDescription}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-3.5 text-xs text-slate-700 space-y-2 border border-slate-100">
                  <div className="flex items-center gap-2 font-medium">
                    <Calendar className="w-4 h-4 text-[#00629B]" />
                    <span>{upcomingEvent.dateDisplay} ({upcomingEvent.time})</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#00629B] shrink-0 mt-0.5" />
                    <span className="truncate">{upcomingEvent.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Time Zone: Asia/Kolkata (IST - UTC+05:30)</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setSelectedEvent(upcomingEvent);
                    }}
                    className="flex-1 py-2.5 px-4 bg-[#00629B] hover:bg-[#00456e] text-white text-xs font-bold rounded-lg transition-colors text-center"
                  >
                    View Schedule & Register
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('events');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
                  >
                    All Events
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOW TO GET INVOLVED (Concise 3-Step Pathway for First-Time Visitors) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] bg-[#00629B]/10 px-3 py-1 rounded-full">
            First-Time Visitor Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
            How to Get Involved at IEEE RRCE
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            You do not need prior research experience or an existing IEEE membership to start participating in our open student activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative">
            <div className="w-12 h-12 rounded-xl bg-[#00629B]/10 text-[#00629B] font-bold text-lg flex items-center justify-center mb-4">
              01
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Discover & Attend Open Events
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Join open technical seminars, hands-on microcontrollers masterclasses, and college TechFest events. Most introductory talks are open to all RRCE engineering branches.
            </p>
            <button
              onClick={() => {
                setActiveTab('events');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-[#00629B] hover:text-[#00456e] inline-flex items-center gap-1"
            >
              Browse event schedule
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative">
            <div className="w-12 h-12 rounded-xl bg-[#00B5E2]/15 text-[#00629B] font-bold text-lg flex items-center justify-center mb-4">
              02
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Build with Technical Chapters
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Connect with IEEE Computer Society, Robotics and Automation (RAS), Power & Energy (PES), or Women in Engineering (WIE). Work on verified student prototypes.
            </p>
            <button
              onClick={() => {
                setActiveTab('chapters');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-[#00629B] hover:text-[#00456e] inline-flex items-center gap-1"
            >
              Explore technical chapters
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-lg flex items-center justify-center mb-4">
              03
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Join Global IEEE & Lead
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Enroll in official IEEE Student Membership for IEEE Xplore digital access, conference discounts, IEEE Spectrum, and eligibility for annual branch officer leadership roles.
            </p>
            <button
              onClick={() => {
                setActiveTab('membership');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-[#00629B] hover:text-[#00456e] inline-flex items-center gap-1"
            >
              View membership & volunteering
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* FEATURED TECHNICAL CHAPTERS PREVIEW */}
      <section className="bg-slate-100 py-14 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00629B]">
                Specialized Societies & Affinity Groups
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                IEEE Technical Groups at RRCE
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Deepen your knowledge in computing, autonomous robotics, sustainable grids, and diversity in engineering.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveTab('chapters');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00629B] hover:text-[#00456e]"
            >
              <span>View all chapter details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHAPTERS_DATA.map((chapter) => (
              <div
                key={chapter.id}
                className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#00629B] bg-[#00629B]/10 px-2 py-0.5 rounded">
                      {chapter.shortCode}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      {chapter.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 leading-snug mb-2">
                    {chapter.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {chapter.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500 truncate max-w-[140px]">
                    {chapter.targetDepartments[0]}
                  </span>
                  <button
                    onClick={() => {
                      setActiveTab('chapters');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="font-semibold text-[#00629B] hover:underline"
                  >
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFIED PAST ACTIVITY RECAP */}
      {pastRecap && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold px-2 py-0.5 rounded">
                    Recent Activity Recap
                  </span>
                  <span className="text-xs text-slate-400">{pastRecap.dateDisplay}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {pastRecap.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pastRecap.fullDescription}
                </p>
                <div className="flex items-center gap-4 pt-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    80+ Registered Student Participants
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Interdisciplinary (CSE, ECE, EEE)
                  </span>
                </div>
              </div>
              <div className="md:col-span-4 flex justify-start md:justify-end">
                <button
                  onClick={() => {
                    setSelectedEvent(pastRecap);
                  }}
                  className="px-5 py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold text-xs shadow-md transition-colors"
                >
                  Read Event Report & Outcomes
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* AI ASSISTANT PROMPT STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#00629B] via-[#00456e] to-[#0b1f33] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs text-[#00B5E2] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Powered by Google Gemini 3.8 Flash
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Try the IEEE RRCE AI Technical Mentor
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              Get instant feedback on IEEE conference paper abstracts, advice on IEEE technical societies for your department, and answers to student branch FAQs.
            </p>
          </div>
          <button
            onClick={openAiHub}
            className="px-6 py-3.5 bg-white text-[#00629B] hover:bg-slate-100 font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-transform hover:scale-105 shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#00B5E2]" />
            <span>Launch AI Engineering Hub</span>
          </button>
        </div>
      </section>

    </div>
  );
};
