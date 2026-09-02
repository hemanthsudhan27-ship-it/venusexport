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
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0A1628]" aria-label={`${title} hero`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-[#0A1628]/50" />
        <div 
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,22,40,0.8) 0%, rgba(10,22,40,0.2) 60%, transparent 100%)" }}
        />
      </div>

      {/* White gradient fading to bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 z-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10 text-center">
        {subtitle && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86EFAC] mb-4">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
