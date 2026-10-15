import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function PageHeader({ title, subtitle, description, imageSrc, imageAlt }: PageHeaderProps) {
  return (
    <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-[#060D12]" aria-label={`${title} hero`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-60"
        />
        {/* Dark luxury gradient overlay */}
        <div className="absolute inset-0 bg-[#060D12]/75" />
        <div 
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(6,13,18,0.9) 0%, rgba(6,13,18,0.5) 50%, rgba(6,13,18,0.95) 100%)" }}
        />
      </div>

      {/* Gold ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D7A03F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-site relative z-10 text-center">
        {subtitle && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/10 mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7A03F]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D7A03F]">
              {subtitle}
            </span>
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5">
          {title}
        </h1>
        {description && (
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
