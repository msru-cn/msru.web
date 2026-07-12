import Image from "next/image";

export interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
}

export function Testimonial({ quote, author, role, avatar }: TestimonialProps) {
  return (
    <section className="py-32 bg-zinc-950 text-white">
      <div className="container mx-auto px-6 max-w-4xl text-center space-y-10">
        <blockquote className="text-3xl md:text-4xl font-bold tracking-tight leading-snug">"{quote}"</blockquote>
        <div className="flex items-center justify-center gap-4">
          {avatar && <Image src={avatar} alt={author} width={48} height={48} className="rounded-full object-cover" />}
          <div className="text-left">
            <div className="font-bold">{author}</div>
            {role && <div className="text-sm text-zinc-400">{role}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
