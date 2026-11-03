const categories = [
  { name: "IT & Software", count: "2,400+ jobs", icon: "💻" },
  { name: "Sales & Marketing", count: "1,850+ jobs", icon: "📈" },
  { name: "Banking & Finance", count: "960+ jobs", icon: "🏦" },
  { name: "Healthcare", count: "1,200+ jobs", icon: "🩺" },
  { name: "Education", count: "780+ jobs", icon: "🎓" },
  { name: "Operations", count: "1,050+ jobs", icon: "⚙️" }
];

const featuredJobs = [
  { role: "Frontend Developer", company: "Your next company", location: "Bengaluru, Karnataka", type: "Full-time", salary: "₹5–9 LPA", tag: "Technology" },
  { role: "Business Development Executive", company: "Growing Indian business", location: "Lucknow, Uttar Pradesh", type: "Full-time", salary: "₹2.5–4 LPA", tag: "Sales" },
  { role: "Customer Support Associate", company: "Customer-first team", location: "Remote, India", type: "Remote", salary: "₹2–3.5 LPA", tag: "Support" }
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-2 text-2xl font-black tracking-tight text-brand-900">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-lg text-white">J</span>
            Job<span className="text-brand-600">Dhudho</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#jobs" className="hover:text-brand-600">Find Jobs</a>
            <a href="#categories" className="hover:text-brand-600">Categories</a>
            <a href="#how-it-works" className="hover:text-brand-600">How it works</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/login" className="hidden rounded-xl px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100 sm:inline-flex">Log in</a>
            <a href="/employer/register" className="rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-brand-700">For employers</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-[#1e3a8a] to-brand-700">
        <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center sm:py-28 lg:px-8">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">Opportunities across India</span>
          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">Find a job that moves <span className="text-orange-300">you forward.</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">Explore opportunities, discover great employers and take the next step in your career with Job Dhudho.</p>
          <form action="/jobs" className="mx-auto mt-10 grid max-w-4xl gap-3 rounded-2xl bg-white p-3 text-left shadow-2xl sm:grid-cols-[1.3fr_1fr_auto]">
            <label className="flex items-center gap-3 rounded-xl px-3 py-2">
              <span className="text-xl">⌕</span>
              <span className="min-w-0 flex-1"><span className="block text-xs font-bold text-slate-500">WHAT</span><input name="q" placeholder="Job title, skill or company" className="w-full border-0 bg-transparent py-1 text-sm text-slate-900 outline-none placeholder:text-slate-400" /></span>
            </label>
            <label className="flex items-center gap-3 rounded-xl px-3 py-2 sm:border-l sm:border-slate-200 sm:pl-5">
              <span className="text-xl">⌖</span>
              <span className="min-w-0 flex-1"><span className="block text-xs font-bold text-slate-500">WHERE</span><input name="location" placeholder="City, state or remote" className="w-full border-0 bg-transparent py-1 text-sm text-slate-900 outline-none placeholder:text-slate-400" /></span>
            </label>
            <button className="rounded-xl bg-accent px-7 py-3 text-sm font-extrabold text-white transition hover:bg-orange-600">Search jobs →</button>
          </form>
          <p className="mt-5 text-sm text-blue-100">Popular: <span className="font-semibold text-white">Fresher</span> · <span className="font-semibold text-white">Work from home</span> · <span className="font-semibold text-white">Software</span> · <span className="font-semibold text-white">Sales</span></p>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-sm font-extrabold uppercase tracking-widest text-brand-600">Explore opportunities</p><h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Browse by category</h2><p className="mt-2 text-slate-500">Find roles that match your skills and ambitions.</p></div>
          <a href="/jobs" className="text-sm font-bold text-brand-600 hover:text-brand-700">Explore all jobs →</a>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => <a key={item.name} href="/jobs" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"><div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl">{item.icon}</span><span className="text-xl text-slate-300 transition group-hover:text-brand-600">↗</span></div><h3 className="mt-5 font-extrabold text-slate-900">{item.name}</h3><p className="mt-1 text-sm text-slate-500">{item.count}</p></a>)}
        </div>
      </section>

      <section id="jobs" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-extrabold uppercase tracking-widest text-brand-600">Start your next chapter</p><h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Featured opportunities</h2><p className="mt-2 text-slate-500">A preview of the job discovery experience.</p></div><a href="/jobs" className="text-sm font-bold text-brand-600">View all jobs →</a></div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {featuredJobs.map((job) => <article key={job.role} className="rounded-2xl border border-slate-200 p-6 transition hover:shadow-soft"><span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{job.tag}</span><h3 className="mt-5 text-lg font-extrabold text-slate-900">{job.role}</h3><p className="mt-1 text-sm font-semibold text-slate-500">{job.company}</p><div className="mt-5 space-y-2 text-sm text-slate-600"><p>⌖ {job.location}</p><p>◷ {job.type}</p><p>₹ {job.salary}</p></div><div className="mt-6 border-t border-slate-100 pt-4"><a href="/jobs" className="text-sm font-extrabold text-brand-600">View opportunity →</a></div></article>)}
          </div>
          <p className="mt-5 text-xs text-slate-400">Illustrative sample listings for the design preview. These are not live vacancies.</p>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-7 py-12 text-center sm:px-12"><p className="text-sm font-extrabold uppercase tracking-widest text-orange-300">Your career, your next move</p><h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black text-white sm:text-4xl">A simpler way to find the right opportunity.</h2><p className="mx-auto mt-4 max-w-xl text-slate-300">Create your profile, explore relevant openings and connect with employers as Job Dhudho grows.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a href="/register" className="rounded-xl bg-accent px-6 py-3 text-sm font-extrabold text-white hover:bg-orange-600">Create free account</a><a href="/employer/register" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-extrabold text-white hover:bg-white/10">Post a job</a></div></div>
      </section>

      <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"><a href="/" className="font-black text-brand-900">Job Dhudho</a><p>Helping India discover better career opportunities.</p><p>© {new Date().getFullYear()} Job Dhudho. All rights reserved.</p></div></footer>
    </main>
  );
}
