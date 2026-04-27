import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 relative z-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-12 gap-16 mb-24">
        <div className="md:col-span-6 lg:col-span-7">
          <Link href="/" className="flex flex-col mb-10 group">
            <span className="font-heading font-black text-3xl tracking-tighter text-slate-900">
              ZYNTRO<span className="text-accentBlue opacity-80">360</span>
            </span>
            <span className="text-xs font-bold tracking-[0.5em] text-slate-400 uppercase">Elite Creative Lab</span>
          </Link>
          <p className="text-slate-500 text-sm font-medium mb-10 max-w-sm leading-loose">
            Engineering high-end digital experiences from Dhaka. We turn ambitious brands into market leaders through precision design and strategic growth.
          </p>
          <div className="flex gap-6">
            {['fb', 'in', 'ig'].map((social) => (
              <Link key={social} href="#" className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-500">
                <span className="font-black text-xs uppercase tracking-tighter">{social}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 lg:col-span-2">
          <h4 className="text-slate-900 font-heading font-black text-xs uppercase tracking-[0.3em] mb-8">Navigation</h4>
          <ul className="space-y-4">
            {['About', 'Services', 'Team', 'Chaal Khata', 'Careers', 'Contact'].map((link) => (
              <li key={link}>
                <Link href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`} className="text-slate-500 hover:text-accentBlue text-sm font-bold transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 lg:col-span-3">
          <h4 className="text-slate-900 font-heading font-black text-xs uppercase tracking-[0.3em] mb-8">Get in Touch</h4>
          <ul className="space-y-6">
            <li>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email</div>
              <div className="text-slate-900 font-bold text-sm">fuad@zyntro360.com.bd</div>
            </li>
            <li>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Phone</div>
              <div className="text-slate-900 font-bold text-sm">+880 1703 903030</div>
            </li>
            <li>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Location</div>
              <div className="text-slate-900 font-bold text-sm leading-relaxed">Dhaka, Bangladesh • Global Ops</div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Zyntro360. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-slate-400 hover:text-textMain text-xs font-semibold uppercase tracking-wider transition-colors">Privacy</Link>
          <Link href="#" className="text-slate-400 hover:text-textMain text-xs font-semibold uppercase tracking-wider transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
