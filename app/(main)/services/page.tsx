import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services | Zyntro360 - Web Design & SEO Agency Bangladesh',
  description: 'Explore Zyntro360\'s premium digital services. We offer expert web design, GFX design, SEO services, and digital marketing to scale your business locally and globally.',
};

export default function Services() {
  return (
    <>
      <section className="relative pt-40 pb-20 z-10 text-center border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white mb-6 animate-float shadow-sm bg-white/50">
            <span className="w-2 h-2 rounded-full bg-accentTeal animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-500">End-to-End Solutions</span>
          </div>

          <h1 className="font-heading font-black text-5xl md:text-7xl leading-tight mb-8 uppercase text-textMain max-w-4xl mx-auto">
            Engineering Your <br />
            <span className="text-gradient">Digital Growth</span>
          </h1>

          <p className="text-textMuted text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
            We provide premium digital agency services designed to scale your business. From initial strategy to final deployment, we handle every detail to ensure your brand stands out globally.
          </p>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">
          {/* Service 1: Web Design */}
          <div className="grid md:grid-cols-2 gap-16 items-center group">
            <div className="order-2 md:order-1">
              <div className="w-14 h-14 mb-6 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-accentBlue group-hover:scale-110 transition-transform duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-textMain mb-4">Web Design & Development</h2>
              <p className="text-textMuted text-lg font-light leading-relaxed mb-6">
                Your website is your digital storefront. Our web design services prioritize high performance, rapid load times, and flawless mobile responsiveness. We do not use generic templates. We build custom platforms that guide your visitors naturally toward making a purchase or contacting your team.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-accentBlue"></span> Custom UI/UX Design
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-accentBlue"></span> Frontend & Backend Development
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-accentBlue"></span> E-Commerce Solutions
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-wider text-accentBlue hover:text-textMain transition-colors">
                Start Web Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] w-full">
              <div className="absolute inset-0 bg-blue-50 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 glass-panel border border-white rounded-3xl overflow-hidden shadow-xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                  alt="Web Development screen"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Service 2: GFX Design */}
          <div className="grid md:grid-cols-2 gap-16 items-center group">
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 bg-purple-50 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 glass-panel border border-white rounded-3xl overflow-hidden shadow-xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80"
                  alt="Graphic Design workspace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div>
              <div className="w-14 h-14 mb-6 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-accentPurple group-hover:scale-110 transition-transform duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-textMain mb-4">GFX Design & Branding</h2>
              <p className="text-textMuted text-lg font-light leading-relaxed mb-6">
                A strong visual identity is non-negotiable in the modern market. Our GFX design team conceptualizes and executes premium graphics that tell your unique story. We craft memorable logos, striking marketing assets, and cohesive branding packages that make your company unmistakable.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-accentPurple"></span> Brand Identity & Logo Design
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-accentPurple"></span> Marketing collateral & Print
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-accentPurple"></span> Social Media Visuals
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-wider text-accentPurple hover:text-textMain transition-colors">
                Explore GFX Portfolio
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Service 3: SEO */}
          <div className="grid md:grid-cols-2 gap-16 items-center group">
            <div className="order-2 md:order-1">
              <div className="w-14 h-14 mb-6 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-accentTeal group-hover:scale-110 transition-transform duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-textMain mb-4">SEO Services Bangladesh</h2>
              <p className="text-textMuted text-lg font-light leading-relaxed mb-6">
                Beautiful design only works if people can find you. We provide highly effective SEO services in Bangladesh aimed at capturing top spots on Google. We perform deep keyword research, technical website audits, and white-hat link building to generate sustainable, high-quality organic traffic for your brand.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-accentTeal"></span> On-Page & Technical SEO
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-accentTeal"></span> Content Strategy & Optimization
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-accentTeal"></span> Local & International Ranking
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-wider text-accentTeal hover:text-textMain transition-colors">
                Boost Your Ranking
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] w-full">
              <div className="absolute inset-0 bg-teal-50 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 glass-panel border border-white rounded-3xl overflow-hidden shadow-xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                  alt="SEO Data analysis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Service 4: Digital Marketing */}
          <div className="grid md:grid-cols-2 gap-16 items-center group">
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 bg-slate-100 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 glass-panel border border-white rounded-3xl overflow-hidden shadow-xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
                  alt="Digital Marketing campaigns"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div>
              <div className="w-14 h-14 mb-6 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-textMain group-hover:scale-110 transition-transform duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
              </div>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-textMain mb-4">Digital Marketing</h2>
              <p className="text-textMuted text-lg font-light leading-relaxed mb-6">
                Stop guessing and start scaling. Our comprehensive digital marketing approach utilizes concrete data to place your message directly in front of buyers. Whether through targeted social media campaigns or paid search advertising, we focus strictly on delivering a positive return on your investment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-textMain"></span> Paid Media (Google Ads, Meta)
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-textMain"></span> Social Media Management
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-textMain"></span> Conversion Rate Optimization
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-wider text-textMain hover:text-accentBlue transition-colors">
                Scale Your Business
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-panel border border-white bg-white/80 rounded-[3rem] p-12 md:p-16 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accentBlue via-accentPurple to-accentTeal"></div>

            <h2 className="font-heading font-black text-4xl md:text-5xl text-textMain mb-6">
              Ready to dominate your market?
            </h2>
            <p className="text-textMuted text-lg max-w-2xl mx-auto mb-10">
              Partner with the leading agency in Bangladesh. Let our team audit your current digital presence and build a roadmap for genuine growth.
            </p>

            <Link href="/contact" className="inline-block px-10 py-4 bg-textMain text-white font-heading font-bold text-sm uppercase tracking-widest rounded-full hover:bg-accentBlue shadow-[0_10px_20px_rgba(15,23,42,0.1)] transition-all duration-300">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
