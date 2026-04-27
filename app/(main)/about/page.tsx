import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Zyntro360 - Top Digital Agency in Bangladesh',
  description: 'Learn the story behind Zyntro360. We are a dedicated team in Bangladesh providing exceptional web design, SEO, and digital marketing services to a global clientele.',
};

export default function About() {
  return (
    <>
      <section className="relative pt-36 pb-20 z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white mb-6 animate-float shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accentPurple animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-500">The Story of Zyntro360</span>
          </div>

          <h1 className="font-heading font-black text-5xl md:text-7xl leading-tight mb-8 uppercase text-textMain max-w-4xl mx-auto">
            Builders of <br />
            <span className="text-gradient">Digital Success</span>
          </h1>

          <p className="text-textMuted text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-16">
            We are a collective of designers, developers, and strategists. We skip the jargon and focus entirely on
            creating impactful digital products that drive measurable growth for your business.
          </p>

          <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-3xl overflow-hidden glass-panel p-2 shadow-2xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Zyntro360 Team Collaboration"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-6 right-6 glass-panel p-4 rounded-2xl border border-white bg-white/90 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-accentBlue">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Serving</p>
                <p className="text-textMain font-heading font-bold">15+ Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading font-black text-4xl uppercase tracking-wide mb-6 text-textMain">
              Local Roots.<br />
              <span className="text-gradient-teal">Global Standards.</span>
            </h2>
            <p className="text-textMuted font-light text-lg mb-6 leading-relaxed">
              Zyntro360 was founded in Bangladesh with a singular focus. We saw a growing need for an agency that
              delivered world class digital solutions without the confusing tech vocabulary.
            </p>
            <p className="text-textMuted font-light text-lg mb-8 leading-relaxed">
              Today we provide top tier web design and SEO services to local brands trying to dominate their
              market and international businesses looking for reliable development partners. We rely on human
              expertise and proven data. We do not use automated shortcuts or AI generated fluff to build your
              strategy.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="text-3xl font-heading font-black text-accentBlue mb-2">98%</h4>
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Client Retention</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="text-3xl font-heading font-black text-accentPurple mb-2">250+</h4>
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Projects Delivered</p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-teal-50 border border-teal-100 rounded-full scale-90 animate-pulse-soft"></div>
            <div className="relative w-72 h-72 glass-panel rounded-full border border-white shadow-2xl flex items-center justify-center z-10 bg-white/80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
                alt="Team strategy meeting"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-blue-100 border border-white shadow-lg flex items-center justify-center z-20 animate-float">
              <svg className="w-8 h-8 text-accentBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-purple-100 border border-white shadow-lg flex items-center justify-center z-20 animate-float-delayed">
              <svg className="w-8 h-8 text-accentPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl uppercase tracking-wide mb-4 text-textMain">
            The Zyntro360 <span className="text-gradient">Advantage</span>
          </h2>
          <p className="text-textMuted font-light text-lg max-w-2xl mx-auto mb-16">
            We operate differently. We value clarity over complexity and focus entirely on measurable outcomes.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left">
              <div className="w-12 h-12 mb-6 rounded-xl bg-blue-50 flex items-center justify-center text-accentBlue">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-textMain mb-3">Authentic Strategies</h3>
              <p className="text-textMuted text-sm leading-relaxed">
                Every digital marketing and SEO campaign is crafted by humans. We analyze your specific market
                to create campaigns that actually resonate.
              </p>
            </div>

            <div className="glass-panel bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left">
              <div className="w-12 h-12 mb-6 rounded-xl bg-purple-50 flex items-center justify-center text-accentPurple">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-textMain mb-3">Performance Web Design</h3>
              <p className="text-textMuted text-sm leading-relaxed">
                We build websites that load fast and look stunning. We understand that design must serve a
                purpose and drive user action seamlessly.
              </p>
            </div>

            <div className="glass-panel bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left">
              <div className="w-12 h-12 mb-6 rounded-xl bg-teal-50 flex items-center justify-center text-accentTeal">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-textMain mb-3">Transparent Scaling</h3>
              <p className="text-textMuted text-sm leading-relaxed">
                We provide clear reports and honest timelines. When you partner with us, you know exactly what
                is happening and how your investment is performing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
