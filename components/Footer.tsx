import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { SITE } from "@/lib/projects";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <Newsletter />
        <div className="foot-big rv">
          Let&rsquo;s build something
          <br />
          that <em>performs</em>.
        </div>
        <div className="foot-grid">
          <div>
            <Link className="btn btn-primary magnetic" data-mag=".2" href="/contact" data-cursor="Say hi">
              Start a project <span className="arw">&rarr;</span>
            </Link>
          </div>
          <div>
            <h4>Menu</h4>
            <Link className="fl" href="/">Home</Link>
            <Link className="fl" href="/work">Work</Link>
            <Link className="fl" href="/services">Services</Link>
            <Link className="fl" href="/about">About</Link>
            <Link className="fl" href="/notes">Notes</Link>
            <Link className="fl" href="/faq">FAQ</Link>
            <Link className="fl" href="/uses">Uses</Link>
            <Link className="fl" href="/contact">Contact</Link>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <a className="fl" href={SITE.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="fl" href={SITE.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="fl" href={`mailto:${SITE.email}`}>Email ↗</a>
            <a className="fl" href="/rss.xml">RSS ↗</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; {new Date().getFullYear()} {SITE.name}</span>
          <span>Website Developer &times; Digital Marketer</span>
          <span>{SITE.location}</span>
        </div>
      </div>
    </footer>
  );
}
