import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowDown, ArrowRight, Github, ExternalLink, Mail, Linkedin, Pin, GraduationCap } from "lucide-react";
import heroCat from "@/assets/hero-cat.png";
import sleepingCat from "@/assets/sleeping-cat.png";
import mailboxCat from "@/assets/mailbox-cat.png";
import desk from "@/assets/desk.jpg";
import { Cat, Floaties, Navbar, Section, SectionHeading, SocialIcons, WalkingCat } from "@/components/garden";
import { certificates, education, profile, projects, skillGroups, traits } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jyotsana Agrawal — a cozy little corner of the internet 🌷" },
      { name: "description", content: "Portfolio of Jyotsana Agrawal, first-year B.Tech CSE student at JECRC University, learning programming, web and AI." },
      { property: "og:title", content: "Jyotsana Agrawal — Portfolio" },
      { property: "og:description", content: "A cozy cat garden where code, curiosity and cats come together." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const btnPrimary = "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift";
const btnGhost = "inline-flex items-center gap-2 rounded-full border-2 border-bark/20 bg-card px-6 py-3 font-bold transition-all hover:-translate-y-0.5 hover:bg-rose";
const btnSmall = "inline-flex items-center gap-1.5 rounded-full border bg-card px-4 py-2 text-sm font-bold transition-all hover:-translate-y-0.5 hover:bg-sage";

function Index() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <WalkingCat />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 pb-16">
      <div aria-hidden className="absolute -right-32 top-20 h-[28rem] w-[28rem] rounded-full bg-sage/50 blur-3xl" />
      <div aria-hidden className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-rose/50 blur-3xl" />
      <Floaties />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-hand text-2xl text-primary">welcome to my little garden ~</p>
          <h1 className="mt-2 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Hi, I'm <span className="italic text-bark">Jyotsana Agrawal</span> 👋
          </h1>
          <p className="mt-5 text-lg font-bold text-muted-foreground">Computer Science Student • Curious Learner • Future Developer</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed">
            I'm a first-year Computer Science Engineering student at JECRC University, exploring programming, problem solving, AI, and the endless possibilities of technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={btnPrimary}>Explore My Work <ArrowRight className="h-4 w-4" /></a>
            <a href="#contact" className={btnGhost}>Let's Connect 🌼</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute inset-x-6 bottom-6 h-16 rounded-[50%] bg-sage/70 blur-md" />
          <span aria-hidden className="absolute bottom-10 left-0 animate-sway text-4xl">🌷</span>
          <span aria-hidden className="absolute bottom-12 right-2 animate-sway text-4xl" style={{ animationDelay: "1s" }}>🌿</span>
          <span aria-hidden className="absolute bottom-8 right-12 text-3xl">🍄</span>
          <Cat src={heroCat} alt="A cute ginger cat sitting in the garden" message="psst... welcome!" w={1024} h={1024} eager />
        </div>
      </div>
      <a href="#about" className="absolute bottom-16 left-1/2 flex -translate-x-1/2 animate-bounce-soft items-center gap-1.5 font-hand text-xl text-muted-foreground">
        scroll to explore
        <ArrowDown className="mt-1 h-4 w-4" aria-hidden />
      </a>
    </section>
  );
}

function About() {
  return (
    <Section id="about">
      <SectionHeading kicker="dear diary," title="About Me 🌷" />
      <div className="grid items-center gap-12 md:grid-cols-[1fr_1.3fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="rotate-[-3deg] rounded-[2rem] border bg-card p-4 pb-12 shadow-lift transition-transform duration-500 hover:rotate-0">
            <img src={desk} alt="Illustration of a cozy study desk with a laptop, coffee and a peeking cat" width={1024} height={1024} loading="lazy" className="aspect-square w-full rounded-[1.5rem] object-cover" />
            <p className="mt-3 text-center font-hand text-2xl">my cozy corner ☕</p>
          </div>
          <span aria-hidden className="absolute -right-3 -top-4 rotate-12 rounded-md bg-rose/80 px-6 py-1.5 shadow-soft" />
        </div>
        <div>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>Hello! I'm Jyotsana, a Computer Science Engineering student at JECRC University. I'm currently building my foundation in programming and computer science while discovering what areas of technology excite me the most.</p>
            <p>I enjoy learning by experimenting, building small projects, solving problems, and understanding how things work rather than simply memorizing them.</p>
            <p>I'm currently exploring programming, web development, AI, data structures, and problem solving, and I'm excited to see where my journey takes me.</p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-3">
            {traits.map((t, i) => (
              <li key={t.text} className={cn("rounded-2xl border px-4 py-2.5 font-semibold shadow-soft transition-transform hover:-translate-y-1 hover:rotate-1", ["bg-sage/60", "bg-rose/60", "bg-lavender/60", "bg-beige"][i % 4])}>
                <span className="mr-1.5">{t.emoji}</span>{t.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" className="bg-paper/60">
      <SectionHeading kicker="where I'm growing" title="My Education 🎓" />
      <div className="relative mx-auto max-w-2xl">
        <div aria-hidden className="absolute bottom-0 left-6 top-0 border-l-2 border-dashed border-primary/40" />
        <span aria-hidden className="absolute -top-6 left-[0.9rem] text-2xl">🌸</span>
        <span aria-hidden className="absolute -bottom-6 left-[0.9rem] text-2xl">🌼</span>
        {education.map((e) => (
          <div key={e.school} className="relative pl-16">
            <div className="absolute left-0 top-6 grid h-12 w-12 place-items-center rounded-full border-4 border-background bg-sage shadow-soft">
              <GraduationCap className="h-5 w-5" />
            </div>
            <article className="cozy-card p-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-rose px-3 py-1 text-sm font-bold">{e.period}</span>
                <span className="font-hand text-xl text-primary">{e.note}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{e.school}</h3>
              <p className="mt-1 font-semibold text-muted-foreground">{e.degree}</p>
            </article>
          </div>
        ))}
        <Cat src={sleepingCat} alt="A tabby cat sleeping near the timeline" message="zzz... coding break? ☕" w={992} h={672} className="ml-auto mt-10 w-48 md:-mr-24 md:w-56" />
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills">
      <SectionHeading kicker="slowly, steadily" title="Things I'm Learning 🌱" />
      <p className="-mt-6 mb-12 text-center text-muted-foreground">Seeds I've planted and am watering every day — still learning, always growing.</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <article key={g.title} className="cozy-card p-6">
            <div className="flex items-center gap-3">
              <span className={cn("grid h-12 w-12 place-items-center rounded-2xl text-2xl", g.tone)}>{g.emoji}</span>
              <h3 className="text-xl font-semibold">{g.title}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <li key={s} className="rounded-full border bg-background px-3 py-1 text-sm font-semibold">🌱 {s}</li>
              ))}
            </ul>
          </article>
        ))}
        <div className="flex items-end justify-center">
          <Cat src={heroCat} alt="A ginger cat sitting by the skills" message="meow 👋" w={1024} h={1024} className="w-44" />
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" className="bg-paper/60">
      <SectionHeading kicker="little things, made with love" title="Things I've Built 💻" />
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <article key={p.name} className="cozy-card relative flex flex-col overflow-visible p-4">
            {i === 0 && <span aria-hidden className="absolute -right-3 -top-7 text-4xl transition-transform hover:-translate-y-2" title="you found me!">🐈‍⬛</span>}
            <div className={cn("grid aspect-[4/3] place-items-center rounded-[1.25rem] text-6xl", p.tone)}>
              <span className="transition-transform duration-500 hover:scale-110">{p.emoji}</span>
            </div>
            <div className="flex flex-1 flex-col p-3">
              <h3 className="mt-2 text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 flex-1 text-muted-foreground">{p.description}</p>
              {p.tech.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => <li key={t} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-bold">{t}</li>)}
                </ul>
              )}
              {(p.github || p.demo) && (
                <div className="mt-5 flex gap-2">
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className={btnSmall}><Github className="h-4 w-4" /> GitHub</a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className={btnSmall}><ExternalLink className="h-4 w-4" /> Live Demo</a>}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading kicker="pinned to my study board" title="Certificates & Achievements 🏆" />
      <div className="grid gap-8 md:grid-cols-3">
        {certificates.map((c, i) => (
          <article key={i} className={cn("relative rounded-2xl p-6 pt-8 shadow-soft transition-all duration-300 hover:rotate-0 hover:-translate-y-1 hover:shadow-lift", c.tone, ["-rotate-2", "rotate-1", "-rotate-1"][i % 3])}>
            <Pin aria-hidden className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-12 fill-rose text-bark" />
            <p className="font-hand text-lg text-muted-foreground">{c.date}</p>
            <h3 className="mt-1 text-xl font-semibold">{c.title}</h3>
            <p className="text-sm font-bold text-muted-foreground">{c.org}</p>
            <p className="mt-3">{c.description}</p>
            <a href={c.link} target="_blank" rel="noopener noreferrer" className={cn(btnSmall, "mt-5")}>View Certificate <ArrowRight className="h-4 w-4" /></a>
          </article>
        ))}
      </div>
    </Section>
  );
}

const schema = z.object({
  name: z.string().trim().min(1, "Please tell me your name").max(100),
  email: z.string().trim().email("That email looks a little off").max(255),
  message: z.string().trim().min(5, "Write a little more 🌱").max(1000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  };
  const field = "mt-1.5 w-full rounded-2xl border-2 bg-background px-4 py-3 outline-none transition-colors focus:border-primary";
  return (
    <Section id="contact" className="bg-paper/60">
      <SectionHeading kicker="say hello!" title="Let's Connect 🌼" />
      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="text-center md:text-left">
          <p className="text-lg">Have an idea, want to collaborate, or just want to say hello? I'd love to hear from you!</p>
          <div className="mt-6 flex flex-col gap-3">
            <a href={`mailto:${profile.email}`} className={btnSmall + " w-fit mx-auto md:mx-0"}><Mail className="h-4 w-4" /> {profile.email}</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={btnSmall + " w-fit mx-auto md:mx-0"}><Github className="h-4 w-4" /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={btnSmall + " w-fit mx-auto md:mx-0"}><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
          <Cat src={mailboxCat} alt="A white cat sitting beside a garden mailbox" message="you found me!" w={1024} h={1024} className="mx-auto mt-8 w-56 md:mx-0" />
        </div>
        <div className="cozy-card p-7 hover:transform-none">
          {sent ? (
            <div className="py-12 text-center">
              <p className="text-5xl">🐱💌</p>
              <p className="mt-4 font-display text-2xl">Message sent! A little cat is carrying it to Jyotsana 🐱💌</p>
              <button onClick={() => setSent(false)} className={cn(btnSmall, "mt-6")}>Send another</button>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="space-y-5">
              {(["name", "email"] as const).map((f) => (
                <label key={f} className="block font-bold capitalize">
                  {f}
                  <input name={f} type={f === "email" ? "email" : "text"} maxLength={f === "email" ? 255 : 100} className={field} aria-invalid={!!errors[f]} />
                  {errors[f] && <span className="mt-1 block text-sm font-semibold text-destructive">{errors[f]}</span>}
                </label>
              ))}
              <label className="block font-bold">
                Message
                <textarea name="message" rows={5} maxLength={1000} className={field} aria-invalid={!!errors["message"]} />
                {errors["message"] && <span className="mt-1 block text-sm font-semibold text-destructive">{errors["message"]}</span>}
              </label>
              <button type="submit" className={cn(btnPrimary, "w-full justify-center")}>Send Message 💌</button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t px-5 py-12 pb-16 text-center">
      <p className="font-hand text-2xl">Made with curiosity, code & a little bit of magic ✨</p>
      <div className="mt-4 flex justify-center gap-2"><SocialIcons /></div>
      <p className="mt-4 text-sm text-muted-foreground">© 2026 Jyotsana Agrawal</p>
      <img src={sleepingCat} alt="" width={992} height={672} loading="lazy" className="absolute bottom-2 right-3 hidden w-24 animate-breathe sm:block" />
    </footer>
  );
}
