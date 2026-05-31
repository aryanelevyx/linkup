"use client";

import {
  ArrowUpRight,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  Compass,
  Home,
  Map,
  MapPin,
  MessageCircle,
  Navigation,
  Search,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  User,
  Users,
} from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, active: true },
  { label: "Founders", icon: Users },
  { label: "Map", icon: Map },
  { label: "Profile", icon: User },
  { label: "Account", icon: Settings },
];

const stats = [
  { label: "Nearby founders", value: "248", delta: "+18%", icon: Users },
  { label: "Warm intros", value: "37", delta: "+9 this week", icon: MessageCircle },
  { label: "Local events", value: "12", delta: "4 today", icon: CalendarDays },
];

const founders = [
  {
    name: "Maya Rao",
    role: "AI Ops founder",
    distance: "0.8 km",
    focus: "B2B SaaS",
    tone: "bg-emerald-100 text-emerald-900",
  },
  {
    name: "Arjun Mehta",
    role: "Fintech operator",
    distance: "1.6 km",
    focus: "Payments",
    tone: "bg-amber-100 text-amber-900",
  },
  {
    name: "Nisha Kapoor",
    role: "Consumer founder",
    distance: "2.1 km",
    focus: "Marketplace",
    tone: "bg-sky-100 text-sky-900",
  },
];

const activities = [
  {
    title: "Rohan accepted your coffee invite",
    meta: "Koramangala Social · 12 min ago",
    icon: MessageCircle,
  },
  {
    title: "Three seed-stage founders joined your area",
    meta: "Within 3 km · 34 min ago",
    icon: Navigation,
  },
  {
    title: "Pitch night opened 18 new seats",
    meta: "Indiranagar · Tomorrow, 7:00 PM",
    icon: CalendarDays,
  },
  {
    title: "Your marketplace match score improved",
    meta: "Based on updated interests · 2 hrs ago",
    icon: TrendingUp,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen p-3 text-[#17211d] sm:p-5 lg:p-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-7xl flex-col overflow-hidden rounded-[28px] border border-white/70 bg-white/55 shadow-2xl shadow-slate-900/10 backdrop-blur xl:flex-row">
        <aside className="flex shrink-0 flex-col justify-between border-b border-slate-200/80 bg-[#1f3a34] p-4 text-white xl:w-72 xl:border-b-0 xl:border-r">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-2xl bg-[#dea757] text-[#17211d] shadow-lg shadow-black/15">
                  <Compass size={22} />
                </div>
                <div>
                  <p className="text-lg font-semibold tracking-normal">LinkUp</p>
                  <p className="text-xs text-emerald-50/70">Founder radar</p>
                </div>
              </div>
              <button className="grid size-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/15" aria-label="Notifications">
                <Bell size={18} />
              </button>
            </div>

            <nav className="mt-8 grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className={`flex h-12 items-center gap-3 rounded-2xl px-4 text-sm font-medium transition ${
                    item.active
                      ? "bg-white text-[#1f3a34] shadow-lg shadow-black/15"
                      : "text-emerald-50/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon size={19} />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-8 rounded-3xl bg-white/10 p-4 ring-1 ring-white/10">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-full bg-white text-[#1f3a34]">
                <Target size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold">Match strength</p>
                <p className="text-xs text-emerald-50/70">Investor-ready network</p>
              </div>
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/15">
              <div className="h-2 w-[76%] rounded-full bg-[#dea757]" />
            </div>
          </div>
        </aside>

        <section className="flex-1 overflow-hidden bg-[#f6f8f6]">
          <div className="flex h-full flex-col gap-5 p-4 sm:p-6 lg:p-8">
            <header className="flex flex-col gap-4 rounded-[24px] bg-white/80 p-4 ring-1 ring-slate-200/70 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-[#6b766f]">Good evening, Aryan</p>
                <h1 className="mt-1 text-3xl font-semibold tracking-normal text-[#17211d] sm:text-4xl">
                  Build your local founder circle
                </h1>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-11 items-center gap-2 rounded-full bg-[#eef2f0] px-4 text-sm font-medium text-[#31433b]">
                  <MapPin size={17} className="text-[#b9792e]" />
                  Bengaluru, India
                </div>
                <button className="grid size-11 place-items-center rounded-full bg-[#17211d] text-white shadow-lg shadow-slate-900/15" aria-label="Search">
                  <Search size={18} />
                </button>
              </div>
            </header>

            <section className="grid gap-4 md:grid-cols-3">
              {stats.map((stat) => (
                <article key={stat.label} className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-slate-200/75 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/8">
                  <div className="flex items-center justify-between">
                    <div className="grid size-11 place-items-center rounded-2xl bg-[#eef2f0] text-[#1f3a34]">
                      <stat.icon size={20} />
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                      {stat.delta}
                    </span>
                  </div>
                  <p className="mt-5 text-3xl font-semibold tracking-normal">{stat.value}</p>
                  <p className="mt-1 text-sm text-[#6b766f]">{stat.label}</p>
                </article>
              ))}
            </section>

            <section className="overflow-hidden rounded-[28px] bg-[#d8e6dc] ring-1 ring-[#c8d9ce]">
              <div className="grid gap-6 p-6 lg:grid-cols-[1fr_18rem] lg:items-center">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-[#41534a]">
                    <Sparkles size={14} className="text-[#b9792e]" />
                    Featured in your area
                  </div>
                  <h2 className="max-w-2xl text-2xl font-semibold tracking-normal text-[#17211d] sm:text-3xl">
                    Startup mixer for climate, fintech, and AI founders
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#4f5f56]">
                    Meet 60 curated builders within 5 km, find collaborators by intent, and reserve a table for focused intros.
                  </p>
                </div>
                <button className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#17211d] px-5 text-sm font-semibold text-white transition hover:bg-[#26362f]">
                  Reserve spot
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </section>

            <section className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-slate-200/75">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#6b766f]">Founder matches</p>
                    <h2 className="mt-1 text-xl font-semibold">Nearby builders</h2>
                  </div>
                  <button className="grid size-10 place-items-center rounded-full bg-[#eef2f0] text-[#31433b]" aria-label="View founder matches">
                    <ChevronRight size={18} />
                  </button>
                </div>
                <div className="mt-5 grid gap-3">
                  {founders.map((founder) => (
                    <div key={founder.name} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-[#fbfcfb] p-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="grid size-11 shrink-0 place-items-center rounded-full bg-[#1f3a34] text-sm font-semibold text-white">
                          {founder.name.split(" ").map((part) => part[0]).join("")}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold">{founder.name}</p>
                          <p className="truncate text-xs text-[#6b766f]">{founder.role} · {founder.distance}</p>
                        </div>
                      </div>
                      <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${founder.tone}`}>
                        {founder.focus}
                      </span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="relative overflow-hidden rounded-[24px] bg-[#17211d] p-5 text-white shadow-sm">
                <div className="absolute right-5 top-5 grid size-12 place-items-center rounded-2xl bg-white/10">
                  <MapPin size={22} className="text-[#dea757]" />
                </div>
                <p className="text-sm text-emerald-50/70">Live map pulse</p>
                <h2 className="mt-1 max-w-xs text-xl font-semibold">High-intent connections around you</h2>
                <div className="mt-6 aspect-[16/10] rounded-[22px] bg-[#243b34] p-4 ring-1 ring-white/10">
                  <div className="relative h-full rounded-[18px] bg-[linear-gradient(135deg,#dce7df_0_1px,transparent_1px_42px),linear-gradient(45deg,#dce7df_0_1px,transparent_1px_42px)] bg-[#eef2f0]">
                    <span className="absolute left-[18%] top-[30%] size-4 rounded-full bg-[#dea757] shadow-[0_0_0_10px_rgba(222,167,87,0.25)]" />
                    <span className="absolute left-[58%] top-[24%] size-3 rounded-full bg-[#1f3a34] shadow-[0_0_0_9px_rgba(31,58,52,0.2)]" />
                    <span className="absolute left-[70%] top-[68%] size-5 rounded-full bg-[#b9792e] shadow-[0_0_0_12px_rgba(185,121,46,0.22)]" />
                    <span className="absolute left-[36%] top-[62%] size-3 rounded-full bg-[#2f7d69] shadow-[0_0_0_8px_rgba(47,125,105,0.2)]" />
                  </div>
                </div>
              </article>
            </section>

            <section className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-slate-200/75">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#6b766f]">Recent activity</p>
                  <h2 className="mt-1 text-xl font-semibold">Network timeline</h2>
                </div>
                <button className="flex h-10 items-center gap-2 rounded-full bg-[#eef2f0] px-4 text-sm font-semibold text-[#31433b]">
                  <BriefcaseBusiness size={16} />
                  Deals
                </button>
              </div>
              <div className="grid gap-3">
                {activities.map((activity) => (
                  <div key={activity.title} className="flex items-start gap-3 rounded-2xl bg-[#fbfcfb] p-3 ring-1 ring-slate-100">
                    <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#eef2f0] text-[#1f3a34]">
                      <activity.icon size={17} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">{activity.title}</p>
                      <p className="mt-1 text-xs text-[#6b766f]">{activity.meta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
