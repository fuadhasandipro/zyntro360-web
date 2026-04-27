import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Zyntro360 | Digital Agency Bangladesh',
  description: "Get in touch with Zyntro360. Let's discuss your next web design, SEO, or digital marketing project. Based in Bangladesh, serving the globe.",
};

export default function Contact() {
  return (
    <>
      <section className="relative pt-40 pb-12 z-10 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white mb-6 animate-float shadow-sm bg-white/50">
            <span className="w-2 h-2 rounded-full bg-accentTeal animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Ready to scale?</span>
          </div>

          <h1 className="font-heading font-black text-5xl md:text-6xl leading-tight mb-6 uppercase text-textMain max-w-3xl mx-auto">
            Let's Start A <br />
            <span className="text-gradient">Conversation</span>
          </h1>

          <p className="text-textMuted text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Whether you need a complete digital overhaul or targeted SEO strategies, we are here to provide clear
            answers and measurable results.
          </p>
        </div>
      </section>

      <section className="pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="glass-panel bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-accentBlue/30 transition-all duration-300 flex items-start gap-6">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-accentBlue">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-textMain mb-1">Email Us</h3>
                  <p className="text-textMuted text-sm leading-relaxed mb-2">We typically reply within a few hours during business days.</p>
                  <a href="mailto:fuad@zyntro360.com" className="text-accentBlue font-semibold hover:text-accentPurple transition-colors">fuad@zyntro360.com</a>
                </div>
              </div>

              <div className="glass-panel bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-accentPurple/30 transition-all duration-300 flex items-start gap-6">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-accentPurple">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-textMain mb-1">Call Us</h3>
                  <p className="text-textMuted text-sm leading-relaxed mb-2">Available for urgent project inquiries and support.</p>
                  <a href="tel:+8801700000000" className="text-accentPurple font-semibold hover:text-accentBlue transition-colors">+880 1703 903030</a>
                </div>
              </div>

              <div className="glass-panel bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-accentTeal/30 transition-all duration-300 flex items-start gap-6">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-accentTeal">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-textMain mb-1">Global Headquarters</h3>
                  <p className="text-textMuted text-sm leading-relaxed mb-2">Dhaka, Bangladesh</p>
                  <p className="text-slate-600 text-sm font-medium">Serving clients worldwide seamlessly.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="glass-panel bg-white/90 p-8 md:p-12 rounded-[2.5rem] border border-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accentBlue via-accentPurple to-accentTeal"></div>

                <h2 className="font-heading font-black text-2xl md:text-3xl text-textMain mb-2">Send us a message</h2>
                <p className="text-textMuted font-light mb-8">Fill out the form below and our team will get back to you promptly.</p>

                <form action="#" method="POST" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-textMain mb-2 ml-2">Full Name</label>
                      <input type="text" id="name" name="name" placeholder="John Doe" className="modern-input" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-textMain mb-2 ml-2">Email Address</label>
                      <input type="email" id="email" name="email" placeholder="john@example.com" className="modern-input" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-textMain mb-2 ml-2">Service Needed</label>
                    <select id="service" name="service" defaultValue="" className="modern-input appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1.2rem_center] bg-[length:0.7rem_auto] pr-10 cursor-pointer">
                      <option value="" disabled>Select a primary service...</option>
                      <option value="web-design">Web Design & Development</option>
                      <option value="gfx-design">GFX Design & Branding</option>
                      <option value="seo">SEO Services</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-textMain mb-2 ml-2">Project Details</label>
                    <textarea id="message" name="message" rows={4} placeholder="Tell us about your goals, timeline, and any specific requirements..." className="modern-input resize-none" required></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 bg-textMain text-white font-heading font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-accentBlue shadow-[0_10px_20px_rgba(15,23,42,0.1)] hover:shadow-[0_10px_20px_rgba(37,99,235,0.2)] transition-all duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
