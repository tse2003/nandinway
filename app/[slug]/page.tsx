import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { sections } from "../sections";
import Icon from "../components/ui-icon";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(sections).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = sections[slug];
  return section ? { title: `${section.title} | NANDINWAY`, description: section.description } : {};
}

export default async function SectionPage({ params }: Props) {
  const { slug } = await params;
  const section = sections[slug];
  if (!section) notFound();

  return <main id="main" className="inner-page">
    <div className="inner-hero">
      <div className="container">
        <Link className="breadcrumb" href="/">Нүүр <span aria-hidden="true">/</span> {section.title}</Link>
        <span className="eyebrow">{section.eyebrow}</span>
        <h1>{section.title}</h1>
        <p>{section.description}</p>
      </div>
    </div>
    <section className="container inner-content" aria-label={`${section.title} мэдээлэл`}>
      <div className={slug === "destinations" ? "inner-grid destination-inner-grid" : "inner-grid"}>
        {section.cards.map((card) => <article className="inner-card" key={card.title}>
          {card.image && <div className="inner-card-image"><Image src={`/images/${card.image}.webp`} alt={`${card.title} хотын үзэмж`} fill sizes="(max-width: 650px) 100vw, (max-width: 1100px) 50vw, 25vw" /></div>}
          <div className="inner-card-body">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            {slug === "destinations" && <Link className="text-link" href="/#booking">Хүсэлт бэлдэх <Icon name="arrow" /></Link>}
            {slug === "contact" && card.title === "Утас" && <a className="text-link" href="tel:70002929">Залгах <Icon name="arrow" /></a>}
            {slug === "contact" && card.title === "И-мэйл" && <a className="text-link" href="mailto:info@nandinway.mn">Имэйл бичих <Icon name="arrow" /></a>}
          </div>
        </article>)}
      </div>
      <div className="inner-action">
        <div><h2>Аяллын хүсэлтээ бэлдэх үү?</h2><p>Чиглэл, огноо болон зорчигчийн мэдээллээ бөглөөд бидэнтэй холбогдоорой.</p></div>
        <Link className="primary-button" href="/#booking">Захиалгын хэсэг рүү <Icon name="arrow" /></Link>
      </div>
    </section>
  </main>;
}
