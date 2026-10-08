import { useEffect, useRef, useState, type ReactNode } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { navItems, profile } from "@/lib/content";
import { cn } from "@/lib/utils";
import catWalkA from "@/assets/walking-cat.png";
import catWalkB from "@/assets/walking-cat-b.png";

/* Cat with hover speech bubble */
export function Cat({ src, alt, message, className, imgClassName, w, h, eager }: {
  src: string; alt: string; message: string; className?: string; imgClassName?: string; w: number; h: number; eager?: boolean;
}) {
  const [show, setShow] = useState(false);
  return (
    <div
      className={cn("group relative select-none", className)}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => setShow((s) => !s)}
    >
      <span
        className={cn(
          "pointer-events-none absolute -top-2 left-1/2 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-2xl border bg-card px-3 py-1.5 font-hand text-lg text-foreground shadow-soft transition-all duration-300",
          show ? "opacity-100" : "translate-y-[-80%] opacity-0",
        )}
      >
        {message}
      </span>
      <img
        src={src}
        alt={alt}
        width={w}
        height={h}
        loading={eager ? undefined : "lazy"}
        className={cn("h-auto w-full animate-breathe transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-105", imgClassName)}
      />
    </div>
  );
}

export function Floaties({ items = ["🌸", "🍃", "🦋", "🌼", "🍃", "🌷"] }: { items?: string[] }) {
  const pos = ["left-[6%] top-[18%]", "left-[42%] top-[8%]", "right-[8%] top-[22%]", "left-[12%] bottom-[18%]", "right-[30%] bottom-[10%]", "right-[4%] bottom-[34%]"];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((e, i) => (
        <span key={i} className={cn("absolute animate-float text-2xl opacity-70 md:text-3xl", pos[i % pos.length])} style={{ animationDelay: `${i * 1.1}s` }}>
          {e}
        </span>
      ))}
    </div>
  );
}

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={cn("reveal", className)}>{children}</div>;
}

export function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="font-hand text-2xl text-primary">{kicker}</p>
      <h2 className="mt-1 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      <div aria-hidden className="mt-4 text-lg tracking-[0.5em] text-muted-foreground/60">· ✿ ·</div>
    </div>
  );
}

export function Section({ id, children, className }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("relative px-5 py-24 md:py-32", className)}>
      <Reveal className="mx-auto max-w-6xl">{children}</Reveal>
    </section>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled && "border-b bg-background/85 backdrop-blur-md")}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="font-display text-xl font-semibold">jyotsana<span className="text-primary">.</span> 🐾</a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <li key={n.id}><a href={`#${n.id}`} className="rounded-full px-3 py-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">{n.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <SocialIcons />
          <button aria-label="Open menu" className="rounded-full p-2 hover:bg-muted lg:hidden" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="mx-4 mb-4 rounded-3xl border bg-card p-3 shadow-soft lg:hidden">
          {navItems.map((n) => (
            <li key={n.id}><a onClick={() => setOpen(false)} href={`#${n.id}`} className="block rounded-2xl px-4 py-3 font-semibold hover:bg-muted">{n.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}

export function SocialIcons() {
  const cls = "grid h-9 w-9 place-items-center rounded-full border bg-card transition-all hover:-translate-y-0.5 hover:bg-sage";
  return (
    <>
      <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={cls}><Github className="h-4 w-4" /></a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={cls}><Linkedin className="h-4 w-4" /></a>
    </>
  );
}

/* ============ Cozy game-style pixel cat ============
   Two hand-drawn frames, flipped like a sprite sheet so the paws
   really alternate. Every "." gets a dark outline pixel if it sits
   next to a coloured one, which gives the chunky game-sprite look. */
const CAT_W = 56; // display width in px; height follows the sprite's aspect ratio

export function WalkingCat() {
  return (
    <div aria-hidden className="pointer-events-none fixed bottom-1 left-0 z-40 animate-walk" style={{ animationDelay: "6s" }}>
      <div className="relative animate-bob" style={{ width: CAT_W }}>
        <img src={catWalkA} alt="" width={CAT_W} className="animate-frame-a block w-full [image-rendering:pixelated]" draggable={false} />
        <img src={catWalkB} alt="" width={CAT_W} className="animate-frame-b absolute left-0 top-0 block w-full [image-rendering:pixelated]" draggable={false} />
      </div>
    </div>
  );
}
