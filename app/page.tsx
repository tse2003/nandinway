import Image from "next/image";
import Header from "./components/header";
import { links } from "./navigation";
import BookingForm from "./components/booking-form";
import Icon from "./components/ui-icon";
const services = [
  [
    "plane",
    "Нислэгийн тийз",
    "Олон улсын болон дотоодын нислэгийн тийз захиалга",
  ],
  [
    "globe",
    "Олон улсын бүх чиглэл",
    "Дэлхийн бүх улс руу хамгийн тохиромжтой сонголт",
  ],
  [
    "tag",
    "Тийзний үнэ, сонголтын зөвлөгөө",
    "Таны хэрэгцээнд тохирсон зөвлөгөө, уян хатан шийдэл",
  ],
  [
    "briefcase",
    "Байгууллагын тийзний үйлчилгээ",
    "Аж ахуйн нэгж, байгууллагад зориулсан тусгай нөхцөл",
  ],
  ["users", "Групп аяллын тийз", "Аялал жуулчлалын компани, бүлгийн захиалга"],
  [
    "swap",
    "Нислэгийн өөрчлөлт, зохицуулалт",
    "Огноо, чиглэл, буцаалт зэрэгт мэргэжлийн дэмжлэг",
  ],
];
const destinations = [
  ["tokyo", "Токио", "Япон"],
  ["seoul", "Сөүл", "Солонгос"],
  ["bangkok", "Бангкок", "Тайланд"],
  ["singapore", "Сингапур", "Сингапур"],
  ["istanbul", "Истанбул", "Турк"],
  ["new-york", "Нью-Йорк", "Америк"],
  ["london", "Лондон", "Англи"],
  ["world", "Дэлхийн", "бүх чиглэл"],
];
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Үндсэн агуулга руу
      </a>
      <Header />
      <main id="main">
        <section
          id="home"
          className="hero"
          aria-label="Таны нандин дурсамж эндээс эхэлнэ"
        >
          <h1 className="sr-only">Таны нандин дурсамж эндээс эхэлнэ</h1>
          <Image
            src="/images/hero.webp"
            width={953}
            height={382}
            priority
            sizes="100vw"
            alt="Nandinway — Дэлхийн өнцөг булан бүрт хүрэх таны аяллын найдвартай түнш. Олон улсын бүх чиглэл, мэргэжлийн зөвлөгөө, итгэлтэй хамтрагч."
          />
          <a href="#booking" className="hero-cta">
            Аяллаа төлөвлөх <Icon name="arrow" />
          </a>
        </section>
        <BookingForm />
        <section className="container services-section" id="services">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR SERVICES</span>
              <h2>ҮЙЛЧИЛГЭЭ</h2>
              <p>Таны аялалд бид хамтдаа</p>
            </div>
            <a className="text-link" href="#booking">
              Захиалга өгөх <Icon name="arrow" />
            </a>
          </div>
          <div className="services-grid">
            {services.map(([icon, title, desc], i) => (
              <a
                href="#booking"
                className="service-card"
                key={title}
                id={i === 3 ? "corporate" : undefined}
              >
                <span className="round-icon">
                  <Icon name={icon} />
                </span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </a>
            ))}
          </div>
        </section>
        <section className="about" id="about">
          <div className="container about-grid">
            <div>
              <span className="eyebrow">ABOUT US</span>
              <h2>БИДНИЙ ТУХАЙ</h2>
              <p>
                2012 оноос эхлэн үйл ажиллагаагаа явуулж буй NANDINWAY нь олон
                улсын болон дотоодын нислэгийн тийзний мэргэжлийн агентлаг юм.
                Бид үйлчлүүлэгч бүрт итгэлтэй, найдвартай, чанартай үйлчилгээг
                хүргэхийг эрхэмлэдэг.
              </p>
              <a className="outline-button" href="#contact">
                Холбоо барих <Icon name="arrow" />
              </a>
            </div>
            <div className="about-emblem">
              <span className="emblem-circle">
                <Icon name="globe" />
                <strong>NANDINWAY</strong>
              </span>
              <h3>
                ТАНЫ АЯЛЛЫН
                <br />
                ИТГЭЛТЭЙ ХАМТРАГЧ
              </h3>
              <p>Дэлхийтэй холбох таны гүүр</p>
            </div>
            <div className="about-facts">
              {[
                ["calendar", "2012 оноос эхлэн"],
                ["shield", "Найдвартай үйлчилгээ"],
                ["users", "Мэргэшсэн баг"],
                ["heart", "Таны аяллын итгэлтэй түнш"],
              ].map(([icon, text]) => (
                <div key={icon}>
                  <Icon name={icon} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="container destinations-section" id="destinations">
          <div className="section-heading">
            <div>
              <span className="eyebrow">POPULAR DESTINATIONS</span>
              <h2>ТҮГЭЭМЭЛ ЧИГЛЭЛҮҮД</h2>
              <p>Дэлхийн хамгийн сайхан хотууд таныг хүлээж байна</p>
            </div>
            <a href="#booking" className="text-link">
              Бүх чиглэл <Icon name="arrow" />
            </a>
          </div>
          <div className="destinations-grid">
            {destinations.map(([image, title, country]) => (
              <a
                className="destination-card"
                href="#booking"
                key={image}
                aria-label={`${title}, ${country} — захиалга өгөх`}
              >
                <Image
                  src={`/images/${image}.webp`}
                  fill
                  sizes="(max-width: 600px) 45vw, (max-width: 900px) 23vw, 12vw"
                  alt={`${title} хотын үзэмж`}
                />
                <div>
                  <h3>{title}</h3>
                  <p>{country}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
        <section id="advice" className="container advice">
          <span className="eyebrow">TRAVEL TIPS</span>
          <h2>АЯЛЛЫН ЗӨВЛӨГӨӨ</h2>
          <div className="tips-grid">
            {[
              [
                "Аяллын өмнө юу шалгах вэ?",
                "Паспортын хүчинтэй хугацаа, виз болон дамжин өнгөрөх улсын шаардлагаа тухайн улсын албан ёсны эх сурвалжаас шалгаарай.",
              ],
              [
                "Тээшний нөхцөлөө хэрхэн мэдэх вэ?",
                "Тээшний хэмжээ, жин нь авиа компани болон тийзний төрлөөс хамаарна. Захиалгынхаа нөхцөлийг нягтална уу.",
              ],
              [
                "Тийзний огноо өөрчилж болох уу?",
                "Өөрчлөлт, буцаалтын боломж болон хураамж тийз бүрт ялгаатай. Худалдан авахаасаа өмнө манай зөвлөхтэй ярилцаарай.",
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="container contact-grid">
            <div>
              <h2>
                БИДЭНТЭЙ
                <br />
                ХОЛБОГДООРОЙ!
              </h2>
              <p>Таны аяллын талаар бид үргэлж зөвлөгөө өгөхөд бэлэн.</p>
            </div>
            <a className="contact-card" href="tel:70002929">
              <Icon name="phone" />
              <span>
                <strong>7000 2929</strong>
                <small>Ажлын цаг 09:00 – 18:00</small>
              </span>
            </a>
            <a className="contact-card" href="mailto:info@nandinway.mn">
              <Icon name="mail" />
              <span>
                <strong>info@nandinway.mn</strong>
                <small>Бидэнд имэйл бичих</small>
              </span>
            </a>
            <div className="contact-card">
              <Icon name="pin" />
              <span>
                <strong>Гурван гал office</strong>
                <small>4 давхар, 409 тоот</small>
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footer-top">
            <a href="#home" className="footer-brand">
              NANDINWAY<span>AIR TICKETING AGENCY</span>
            </a>
            <nav aria-label="Хөлийн цэс">
              {links.map(([name, href]) => (
                <a href={href} key={href}>
                  {name}
                </a>
              ))}
            </nav>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Nandinway. Бүх эрх хуулиар
              хамгаалагдсан.
            </p>
            <p>
              Таны нандин дурсамж эндээс эхэлнэ <Icon name="plane" />
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
