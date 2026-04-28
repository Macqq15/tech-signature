const technologies = [
  "n8n", "TypeScript", "React", "Node.js", "OpenAI", "Claude", "Pinecone", "Tailwind", "PostgreSQL", "Docker", "AWS", "Next.js"
];

export const StackMarquee = () => {
  return (
    <section id="stack" className="py-24 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Powering systems with</p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-scroll whitespace-nowrap flex gap-16 items-center">
          {[...technologies, ...technologies, ...technologies].map((tech, i) => (
            <span
              key={i}
              className="text-2xl md:text-4xl font-bold text-white/20 hover:text-white/80 transition-colors duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </section>
  );
};
