import { Metadata } from 'next';
import { Hind_Siliguri } from 'next/font/google';
import Link from 'next/link';

const hindSiliguri = Hind_Siliguri({
  weight: ['400', '500', '600', '700'],
  subsets: ['bengali'],
});

export const metadata: Metadata = {
  title: 'ChaalKhata | Rice Mill Management Reinvented',
  description: 'Goodbye Manual Khata. ChaalKhata is the modern, secure, and smart way to manage your rice mill business in Bangladesh.',
};

export default function ChaalKhataLanding() {
  return (
    <div className={`${hindSiliguri.className} bg-white text-slate-900 selection:bg-green-100`}>
      {/* Premium Header */}
      <header className="fixed w-full top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-heading font-black text-2xl tracking-tighter text-[#064e3b]">
              CHAAL<span className="text-green-600">KHATA</span>
            </span>
          </Link>

          <nav className="hidden md:flex gap-10 items-center">
            <Link href="/" className="text-sm font-bold text-slate-600 hover:text-green-700 transition-colors">হোম</Link>
            <a href="#problem" className="text-sm font-bold text-slate-600 hover:text-green-700 transition-colors">কেন ডিজিটাল?</a>
            <a href="#features" className="text-sm font-bold text-slate-600 hover:text-green-700 transition-colors">ফিচারসমূহ</a>
            <a href="#pricing" className="text-sm font-bold text-slate-600 hover:text-green-700 transition-colors">মূল্য তালিকা</a>
          </nav>

          <div className="flex items-center gap-6">
            <a href="#contact" className="px-7 py-3 bg-[#064e3b] text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-green-900 hover:shadow-lg transition-all">
              ফ্রি ডেমো
            </a>
          </div>
        </div>
      </header>

      {/* Hero: The Evolution */}
      <section className="relative pt-48 pb-32 px-4 overflow-hidden bg-slate-50">
        {/* Background Atmosphere */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="/redesign/atmosphere.png" alt="" className="w-full h-full object-cover grayscale" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-[#064e3b] mb-8 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Manual Khata is History</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-[#064e3b] tracking-tight">
              খাতা-কলমের ঝামেলা <span className="text-green-600 italic">শেষ!</span> <br />
              রাইস মিলের হিসাব এখন <span className="text-green-600 italic">সহজ ও স্মার্ট</span>
            </h1>

            <p className="text-xl font-medium mb-10 leading-relaxed text-slate-600 max-w-xl">
              সনাতন খাতা-কলমের ভুল ও ঝক্কি ভুলে যান। চালখাতার মাধ্যমে আপনার মিলের প্রোডাকশন, পার্টি লেজার এবং ক্যাশবুক ম্যানেজ করুন এক ক্লিকে— শতভাগ নিরাপদে।
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <a href="#pricing" className="w-full sm:w-auto bg-[#064e3b] text-white text-lg font-bold py-4 px-10 rounded-2xl shadow-xl hover:bg-green-900 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                এখনই শুরু করুন
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
              <div className="flex items-center gap-4 px-6 py-2 border-l border-slate-200">
                <div className="text-[#064e3b] font-black text-2xl">01703-903030</div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">সরাসরি কথা বলুন</div>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
            <img
              src="/hero.png"
              alt="ChaalKhata Dashboard"
              className="w-full lg:w-[125%] max-w-none h-auto animate-float"
            />
          </div>
        </div>
      </section>

      {/* The Problem: Why Digital? */}
      <section id="problem" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-slate-100 rounded-3xl -rotate-2"></div>
            <img
              src="/redesign/old_khata.png"
              alt="Traditional Manual Khata"
              className="relative z-10 w-full rounded-2xl shadow-2xl grayscale-[0.3]"
            />
            <div className="absolute -bottom-8 -right-8 bg-red-500 text-white p-6 rounded-2xl shadow-xl z-20 animate-bounce">
              <div className="font-bold text-3xl italic">ভুল হবার ভয়?</div>
              <div className="text-xs uppercase font-black opacity-80 mt-1">Manual books are risky</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] mb-10 leading-tight">
              ম্যানুয়াল খাতা কেন আপনার <br />
              ব্যাবসার বড় বাধা?
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center font-bold text-xl">১</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">হিসাবের গড়মিল ও সময় অপচয়</h4>
                  <p className="text-slate-600 font-medium">হাজার হাজার লেনদেনের হিসাব মেলাতে ঘণ্টার পর ঘণ্টা সময় লাগে, যা ব্যবসার প্রসারে বাধা দেয়।</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center font-bold text-xl">২</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">নিরাপত্তার অভাব ও তথ্য হারানোর ঝুঁকি</h4>
                  <p className="text-slate-600 font-medium">খাতা ছিঁড়ে যাওয়া, ভিজে যাওয়া কিংবা হারিয়ে যাওয়ার ভয় থাকে সবসময়। কোনো ব্যাকআপ নেই।</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center font-bold text-xl">৩</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">স্টক ও উৎপাদনের অস্পষ্টতা</h4>
                  <p className="text-slate-600 font-medium">মিলিং লস কিংবা স্টকের সঠিক তথ্য তাৎক্ষণিক পাওয়া অসম্ভব, যা চুরির সুযোগ বাড়িয়ে দেয়।</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section id="features" className="py-32 bg-slate-50 relative border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] mb-6">একটি পূর্ণাঙ্গ চালকল সমাধান</h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto italic">
              "সব হিসাব খাতা নয়, এখন হবে স্মার্ট চালখাতায়"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: '👥', title: 'পার্টি লেজার', desc: 'কৃষক ও সাপ্লায়ারদের নির্ভুল হিসাব, ডিউ রিমাইন্ডার এবং এসএমএস অ্যালার্ট।' },
              { icon: '🏭', title: 'মিলিং ও প্রোডাকশন', desc: 'কত মণ ধান থেকে কত বস্তা চাল বের হচ্ছে তার লাইভ হিসাব এবং লস ট্র্যাকিং।' },
              { icon: '💰', title: 'অটোমেটেড ক্যাশবুক', desc: 'প্রতিদিনের আয়-ব্যয় এবং ব্যাংক লেনদেন অটো-সিঙ্ক, মালিকের হাতের মুঠোয়।' },
              { icon: '📦', title: 'স্মার্ট ইনভেন্টরি', desc: 'ধান, চাল ও খালি বস্তার রিয়েল-টাইম স্টক যা যেকোনো ধরনের ঘাটতি রোধ করবে।' },
              { icon: '🧾', title: 'ইনভয়েস ও বিলিং', desc: 'প্রফেশনাল ইনভয়েস জেনারেট করুন এবং মুহূর্তেই পার্টিকে পাঠিয়ে দিন।' },
              { icon: '🔐', title: 'নিরাপদ ক্লাউড', desc: 'আপনার তথ্য ১০০% ইনক্রিপ্টেড এবং নিরাপদ। মালিকের পূর্ণ নিয়ন্ত্রণ নিশ্চিত।' },
            ].map((f, i) => (
              <div key={i} className="group bg-white p-10 rounded-3xl border border-slate-200 hover:border-green-500 hover:shadow-2xl transition-all">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 origin-left">{f.icon}</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{f.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us: The Alignment Fix Included */}
      <section className="py-32 bg-white px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2 relative lg:mt-12">
            <div className="absolute -inset-10 bg-green-50 rounded-full opacity-50 blur-3xl pointer-events-none"></div>
            <img
              src="/why_its_best_alt.png"
              alt="Digital Management Interface"
              className="relative z-10 w-full h-auto animate-float"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] mb-10">যে কারণে চালখাতা সেরা</h2>
            <ul className="space-y-8">
              {[
                { t: 'গ্লোবাল অ্যাক্সেস', d: 'মিলের হিসাব দেখতে পারবেন বিশ্বের যেকোনো প্রান্ত থেকে।' },
                { t: 'মোবাইল ও পিসি', d: 'কম্পিউটার কিংবা মোবাইল— সব ডিভাইসেই সমান সাবলীল।' },
                { t: 'বাংলা ও ইংরেজি', d: 'সম্পূর্ণ ইন্টারফেস আমাদের মাতৃভাষা বাংলায় ব্যবহারযোগ্য।' },
                { t: 'লোকাল সাপোর্ট', d: 'মিলের ওজনের সব ইউনিট (মন, কেজি, বস্তা) নিখুঁত হিসাব।' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-slate-800">{item.t}</h5>
                    <p className="text-slate-600 font-medium">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing: Clean & Modern */}
      <section id="pricing" className="py-32 bg-[#064e3b] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
          <img src="/redesign/atmosphere.png" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">আপনার ব্যবসার জন্য সঠিক প্ল্যান</h2>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full border border-white/20 shadow-inner">
              <span className="text-green-300 font-bold">অফার:</span>
              <span className="text-white font-medium">প্রথম মাস সম্পূর্ণ <span className="text-green-400 font-black">ফ্রি!</span></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {[
              { duration: '১ মাস', price: '৯৯৯ ৳', tag: 'ফ্লেক্সিবল', setup: '৪,৯৯৯ ৳ সেটআপ ফি', note: '১ম মাস ফ্রি', primary: false },
              { duration: '১ বছর', price: '৯,৯৯৯ ৳', tag: 'সেরা ভ্যালু', setup: 'সেটআপ ফি নেই!', note: 'সেটআপ সাশ্রয় ৪,৯৯৯ ৳', primary: true },
              { duration: '৬ মাস', price: '৪,৯৯৯ ৳', tag: 'জনপ্রিয়', setup: '৪,৯৯৯ ৳ সেটআপ ফি', note: '৫০০ ৳ সাশ্রয়', primary: false },
            ].map((p, i) => (
              <div key={i} className={`p-10 rounded-[3rem] border ${p.primary ? 'bg-white text-slate-900 border-white scale-110 shadow-2xl z-20' : 'bg-green-900/40 border-green-800 text-white hover:bg-green-800/60 z-10'} transition-all text-center relative overflow-hidden group`}>
                {p.primary && <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-black uppercase px-4 py-1 rounded-b-xl tracking-widest">Recommended</div>}

                <h3 className="text-2xl font-bold mb-2">{p.duration}</h3>
                <div className={`text-xs mb-8 opacity-60 font-black uppercase `}>{p.tag}</div>

                <div className="mb-10">
                  <div className="text-5xl font-black mb-2">{p.price}</div>
                  <div className={`text-sm font-bold ${p.primary ? 'text-green-600' : 'text-green-400'}`}>{p.note}</div>
                </div>

                <div className={`py-4 px-6 rounded-2xl mb-10 text-xs font-bold uppercase tracking-widest ${p.primary ? 'bg-slate-100 text-slate-500' : 'bg-white/5 text-white/40'}`}>
                  {p.setup}
                </div>

                <button className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${p.primary ? 'bg-[#064e3b] text-white hover:bg-green-900 shadow-xl' : 'bg-white text-[#064e3b] hover:bg-green-100'}`}>
                  শুরু করুন
                </button>
              </div>
            ))}
          </div>

          <p className="text-center mt-16 text-green-200/60 text-sm font-medium">
            * সব প্রাইস ভ্যাট ও ট্যাক্স মুক্ত। ওয়ান-টাইম সেটআপ ফি শুধুমাত্র ১ মাসের এবং ৬ মাসের প্যাকেজের জন্য প্রযোজ্য।
          </p>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-900 text-white pt-32 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
            <div>
              <h2 className="text-5xl font-bold mb-10 leading-tight">আপনার মিলের ডিজিটাল <br />বিপ্লব শুরু হোক আজই</h2>
              <p className="text-xl text-slate-400 font-medium mb-12">আমাদের এক্সপার্ট টিম আপনাকে সফটওয়্যারের ডেমো দেখাতে প্রস্তুত।</p>

              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-2xl shadow-inner">📞</div>
                  <div>
                    <div className="text-xs uppercase font-black text-slate-500 tracking-widest mb-1">সরাসরি কথা বলুন</div>
                    <div className="text-2xl font-bold">01703-903030</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-2xl shadow-inner">✉️</div>
                  <div>
                    <div className="text-xs uppercase font-black text-slate-500 tracking-widest mb-1">ইমেইল করুন</div>
                    <div className="text-2xl font-bold">fuad@chaalkhata.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[3rem] p-12 text-slate-900 shadow-2xl transform rotate-1">
              <h4 className="text-3xl font-bold mb-8">বিস্তারিত তথ্য প্রদান করুন</h4>
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                <input type="hidden" name="access_key" value="6df542c5-7e23-4097-b146-245a1869e60d" />
                <input type="hidden" name="subject" value="New ChaalKhata Inquiry" />
                <input type="hidden" name="from_name" value="ChaalKhata Landing Page" />
                
                <div className="space-y-2">
                  <label className="text-xs uppercase font-black text-slate-400 tracking-widest">মিলের নাম</label>
                  <input type="text" name="mill_name" required placeholder="যেমন: মেসার্স রহিম রাইস মিল" className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-green-500 transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-black text-slate-400 tracking-widest">আপনার নাম ও মোবাইল</label>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="name" required placeholder="আপনার নাম" className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-green-500 transition-all font-medium" />
                    <input type="tel" name="phone" required placeholder="017XXXXXXXX" className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-green-500 transition-all font-medium" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-all uppercase tracking-[0.2em]">
                  রিকোয়েস্ট সাবমিট করুন
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-bold uppercase tracking-widest">
            <p>© {new Date().getFullYear()} CHAALKHATA. BUILT FOR MODERN MILLS.</p>
            <p>A PRODUCT BY ZYNTRO360</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
