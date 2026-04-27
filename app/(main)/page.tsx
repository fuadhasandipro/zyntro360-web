import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Elegant Light Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
        {/* Background Image with Light Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/mother_site/hero_light.png" 
            alt="Agency Background" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 mb-10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accentBlue shadow-[0_0_10px_#3b82f6]"></span>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-500">
                Premium Digital Agency • Dhaka
              </span>
            </div>

            <h1 className="font-heading font-black text-6xl md:text-8xl leading-[0.9] mb-10 text-slate-900 tracking-tighter">
              WE DESIGN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue via-accentPurple to-accentTeal">
                EMOTIONS
              </span> <br />
              NOT JUST CODE
            </h1>

            <p className="text-slate-500 text-xl md:text-2xl font-medium mb-12 max-w-2xl leading-relaxed">
              Engineering flawless web experiences and high-impact digital strategies that turn ambitious 
              brands into market leaders.
            </p>

            <div className="flex flex-wrap gap-8 items-center">
              <Link
                href="/services"
                className="px-10 py-5 bg-accentBlue text-white font-heading font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-slate-900 shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                Our Capabilities
              </Link>
              <Link
                href="/about"
                className="group flex items-center gap-4 text-slate-900 font-black text-xs uppercase tracking-[0.3em] hover:text-accentBlue transition-all"
              >
                <span className="w-12 h-[1px] bg-slate-200 group-hover:w-16 group-hover:bg-accentBlue transition-all"></span>
                Discover Zyntro
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-slate-200">
          <div className="w-[1px] h-20 bg-gradient-to-b from-slate-200 to-transparent"></div>
          <span className="text-[8px] font-black tracking-[0.5em] uppercase text-slate-400">Scroll</span>
        </div>
      </section>

      {/* Elegant Services Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-24 items-start">
            <div className="lg:sticky lg:top-40 mb-16 lg:mb-0">
              <h2 className="font-heading font-black text-5xl md:text-6xl uppercase tracking-tighter mb-8 text-slate-900 leading-none">
                PRECISE <br />
                <span className="text-accentBlue">SOLUTIONS</span>
              </h2>
              <p className="text-slate-500 font-medium text-lg max-w-md leading-relaxed mb-10">
                We blend creative artistry with deep technical precision to capture attention and convert 
                visitors into life-long partners.
              </p>
              <div className="w-20 h-1 bg-accentBlue rounded-full"></div>
            </div>

            <div className="space-y-32">
              {[
                { 
                  id: '01', 
                  title: 'Web Engineering', 
                  desc: 'We don\'t just build websites; we engineer fast, responsive, and secure digital habitats that thrive in the modern web ecosystem.', 
                  color: 'text-accentBlue', 
                  bg: 'bg-blue-50' 
                },
                { 
                  id: '02', 
                  title: 'Brand Visuals', 
                  desc: 'Striking identity and graphic solutions that communicate your core message instantly and elegantly.', 
                  color: 'text-accentPurple', 
                  bg: 'bg-purple-50' 
                },
                { 
                  id: '03', 
                  title: 'Search Authority', 
                  desc: 'Comprehensive SEO strategies designed to dominate rankings and drive organic growth through high-intent traffic.', 
                  color: 'text-accentTeal', 
                  bg: 'bg-teal-50' 
                },
                { 
                  id: '04', 
                  title: 'Strategic Growth', 
                  desc: 'Data-driven marketing campaigns that utilize deep human insights to connect your brand with the perfect audience.', 
                  color: 'text-slate-900', 
                  bg: 'bg-slate-50' 
                },
              ].map((service, i) => (
                <div key={i} className="group relative animate-in fade-in slide-in-from-right duration-1000" style={{ animationDelay: `${i * 200}ms` }}>
                  <div className="flex items-start gap-10">
                    <span className={`text-sm font-black tracking-widest ${service.color} opacity-30 mt-2`}>{service.id}</span>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter group-hover:text-accentBlue transition-colors">{service.title}</h3>
                      <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8 max-w-xl">{service.desc}</p>
                      <Link href="/services" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-accentBlue transition-all">
                        View Details <span className="w-8 h-[1px] bg-slate-200 group-hover:w-12 group-hover:bg-accentBlue transition-all"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-accentBlue/5 rounded-full blur-[80px] md:blur-[120px] -mr-20 md:-mr-40 -mt-20 md:-mt-40"></div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <img 
                src="/mother_site/services.png" 
                alt="Creative Showcase" 
                className="w-full h-auto rounded-[3rem] shadow-2xl animate-float"
              />
            </div>
            <div className="relative z-10">
              <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-8 text-slate-900">
                GLOBAL QUALITY. <br />
                <span className="text-accentBlue">LOCAL HEART.</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
                Operating from the heart of Dhaka, Zyntro360 brings world-class digital expertise to local 
                enterprises while scaling international brands with cost-effective, high-end solutions.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="text-4xl font-black text-slate-900 mb-2">99%</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-slate-900 mb-2">350+</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Projects Scaled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-heading font-black text-5xl md:text-7xl uppercase tracking-tighter mb-10 text-slate-900 leading-none">
            READY TO <br />
            <span className="text-accentBlue">EVOLVE?</span>
          </h2>
          <p className="text-slate-500 text-xl font-medium mb-12 leading-relaxed">
            Let's build the future of your brand together. Our experts are ready to turn your vision 
            into a digital reality.
          </p>
          <Link
            href="/contact"
            className="px-12 py-6 bg-slate-950 text-white font-heading font-black text-sm uppercase tracking-[0.3em] rounded-full hover:bg-accentBlue shadow-2xl transition-all duration-500 hover:-translate-y-2 inline-block"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
