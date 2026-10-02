import Image from "next/image";

export default function MediaImage({
  src,
  alt,
  caption,
  sub,
  tag,
  wrapClass = "",
  sizes = "(max-width:900px) 100vw, 50vw",
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  sub?: string;
  tag?: string;
  wrapClass?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`${wrapClass} media`}>
      <div className="inner">
        <Image className="pimg" src={src} alt={alt} fill sizes={sizes} priority={priority} />
        <span className="pscrim" />
        {tag ? <span className="ph-tag">{tag}</span> : null}
        {caption ? (
          <div className="pcap">
            <span className="pn">{caption}</span>
            {sub ? <span className="ps">{sub}</span> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
