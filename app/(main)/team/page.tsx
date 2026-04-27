import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Team | Zyntro360 - Digital Experts in Bangladesh',
  description: 'Meet the core team behind Zyntro360. Our founders deliver top-tier digital marketing and web design solutions.',
};

export default function Team() {
  return (
    <>
      {/* Elegant Team Hero */}
      <section className="relative pt-48 pb-20 z-10 text-center bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-50 border border-slate-100 mb-10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accentBlue shadow-[0_0_10px_#3b82f6]"></span>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">Core Leadership</span>
          </div>

          <h1 className="font-heading font-black text-6xl md:text-7xl leading-tight mb-8 uppercase text-slate-900 tracking-tighter max-w-4xl mx-auto">
            THE MINDS <br />
            <span className="text-accentBlue">BEHIND THE VISION</span>
          </h1>

          <p className="text-slate-500 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            Zyntro360 is led by founders who blend creative strategy with technical precision to build the 
            future of digital branding.
          </p>
        </div>
      </section>

      <section className="pb-32 relative z-10 bg-white">
        <div className="max-w-6xl mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Fuad Hasan Dipro */}
            <div className="group relative animate-in fade-in slide-in-from-bottom duration-1000">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] mb-10 shadow-2xl transition-all duration-700 group-hover:-translate-y-2">
                <img
                  src="/fuad.jpg"
                  alt="Fuad Hasan Dipro"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="px-4 text-center">
                <h2 className="font-heading font-black text-4xl text-slate-900 mb-2 uppercase tracking-tighter">Fuad Hasan Dipro</h2>
                <p className="text-accentBlue font-black text-[10px] uppercase tracking-[0.4em] mb-6">Co-Founder & Creative Director</p>

                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10 max-w-sm mx-auto">
                  Fuad drives the creative vision and strategic direction, ensuring every brand asset captures 
                  emotion and delivers measurable growth.
                </p>

                <div className="flex justify-center gap-6">
                  {['LinkedIn', 'Facebook'].map((social) => (
                    <a
                      key={social}
                      href={social === 'LinkedIn' ? 'https://bd.linkedin.com/in/fuad-hasan-dipro' : 'https://www.facebook.com/FuadHasanDipro'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-accentBlue transition-all"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Shahrear Nadim Sabbir */}
            <div className="group relative animate-in fade-in slide-in-from-bottom duration-1000 delay-200 mt-0 md:mt-24">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] mb-10 shadow-2xl transition-all duration-700 group-hover:-translate-y-2">
                <img
                  src="/sabbir.jpg"
                  alt="Shahrear Nadim Sabbir"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="px-4 text-center">
                <h2 className="font-heading font-black text-4xl text-slate-900 mb-2 uppercase tracking-tighter">Shahrear Sabbir</h2>
                <p className="text-accentPurple font-black text-[10px] uppercase tracking-[0.4em] mb-6">Co-Founder & Technical Lead</p>

                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10 max-w-sm mx-auto">
                  Sabbir leads technical execution, bridging the gap between high-end web development and 
                  user-focused, flawless functionality.
                </p>

                <div className="flex justify-center gap-6">
                  {['LinkedIn', 'Facebook'].map((social) => (
                    <a
                      key={social}
                      href={social === 'LinkedIn' ? 'https://linkedin.com/in/shahrear-nadim-sabbir-702524276' : 'https://www.facebook.com/sabbir5757'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-accentPurple transition-all"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative z-10 border-t border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-textMain mb-6">Work With The Founders</h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto mb-8">
            At Zyntro360, you do not get passed off to junior account managers. You work directly with the experts who are invested in your success.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-textMain text-white font-heading font-bold text-sm uppercase tracking-widest rounded-full hover:bg-accentBlue shadow-lg transition-all duration-300"
          >
            Start A Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
