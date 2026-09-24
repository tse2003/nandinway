"use client";
import { useState, type FormEvent } from "react";
import Icon from "./ui-icon";
const cities = [
  "Улаанбаатар",
  "Токио",
  "Сөүл",
  "Бангкок",
  "Сингапур",
  "Истанбул",
  "Нью-Йорк",
  "Лондон",
  "Бусад",
];
export default function BookingForm() {
  const [services, setServices] = useState<string[]>(["Нислэгийн тийз"]);
  const [departure, setDeparture] = useState("");
  const [error, setError] = useState("");
  const [summary, setSummary] = useState("");
  const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "Asia/Ulaanbaatar",
  });
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    setSummary("");
    if (!services.length) {
      setError("Та дор хаяж нэг үйлчилгээ сонгоно уу.");
      return;
    }
    if (d.get("from") === d.get("to") && d.get("from") !== "Бусад") {
      setError("Хаанаас, хаашаа явах хот ялгаатай байх ёстой.");
      return;
    }
    if (
      String(d.get("departure")) <
        new Date().toLocaleDateString("en-CA", {
          timeZone: "Asia/Ulaanbaatar",
        }) ||
      (d.get("return") && String(d.get("return")) < String(d.get("departure")))
    ) {
      setError("Аяллын огноогоо шалгана уу.");
      return;
    }
    setError("");
    setSummary(
      `Үйлчилгээ: ${services.join(", ")}\nЧиглэл: ${d.get("from")} → ${d.get("to")}\nЯвах огноо: ${d.get("departure")}\nБуцах огноо: ${d.get("return") || "Нэг талдаа"}\nЗорчигч: ${d.get("passengers")}\nУтас: ${d.get("phone")}`,
    );
  }
  return (
    <section
      className="booking container"
      id="booking"
      aria-labelledby="booking-title"
    >
      <div className="booking-heading">
        <span className="round-icon large">
          <Icon name="document" />
        </span>
        <div>
          <h2 id="booking-title">АЯЛЛЫН ЗАХИАЛГА ӨГӨХ</h2>
          <p>Аяллын мэдээллээ бөглөж, хүсэлтээ бэлдээрэй.</p>
        </div>
      </div>
      <form
        onSubmit={submit}
        onChange={() => {
          setSummary("");
          setError("");
        }}
      >
        <fieldset className="service-choices">
          <legend className="sr-only">Үйлчилгээ сонгох</legend>
          {[
            ["Нислэгийн тийз", "plane"],
            ["Визний зөвлөгөө", "shield"],
            ["Групп аялал", "users"],
          ].map(([label, icon]) => (
            <label
              key={label}
              className={
                services.includes(label) ? "choice selected" : "choice"
              }
            >
              <input
                type="checkbox"
                checked={services.includes(label)}
                onChange={(e) =>
                  setServices(
                    e.target.checked
                      ? [...services, label]
                      : services.filter((s) => s !== label),
                  )
                }
              />
              <Icon name={icon} />
              <span>{label}</span>
            </label>
          ))}
        </fieldset>
        <div className="form-grid">
          <label>
            Хаанаас
            <select name="from" required defaultValue="">
              <option value="" disabled>
                Хотоо сонгох
              </option>
              {cities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
          <label>
            Хаашаа
            <select name="to" required defaultValue="">
              <option value="" disabled>
                Чиглэл сонгох
              </option>
              {cities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
          <label>
            Явах огноо
            <input
              type="date"
              name="departure"
              required
              min={today}
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            />
          </label>
          <label>
            Буцах огноо <small>(заавал биш)</small>
            <input type="date" name="return" min={departure || today} />
          </label>
        </div>
        <div className="form-bottom">
          <label>
            Зорчигчийн тоо
            <select name="passengers" defaultValue="1">
              {Array.from({ length: 9 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1} зорчигч
                </option>
              ))}
              <option value="10+">10+ зорчигч</option>
            </select>
          </label>
          <label>
            Утасны дугаар
            <input
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="Жишээ: 9911 2233"
              pattern="[+]?[0-9 ]{8,19}"
              required
              title="8–20 тэмдэгттэй утасны дугаар оруулна уу"
            />
          </label>
          <button className="primary-button" type="submit">
            <Icon name="plane" />
            ХҮСЭЛТ БЭЛДЭХ
          </button>
        </div>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        {summary && (
          <div className="request-summary" role="status">
            <h3>Таны хүсэлт бэлэн боллоо</h3>
            <p>
              Доорх товчоор имэйлээ нээгээд илгээнэ үү. Энэ формоос захиалга
              автоматаар илгээгдэхгүй.
            </p>
            <pre>{summary}</pre>
            <a
              className="primary-button"
              href={`mailto:info@nandinway.mn?subject=${encodeURIComponent("Аяллын захиалгын хүсэлт")}&body=${encodeURIComponent(summary)}`}
            >
              <Icon name="mail" />
              Имэйлээр илгээх
            </a>
            <a className="summary-call" href="tel:70002929">
              Эсвэл 7000 2929 дугаарт залгах
            </a>
          </div>
        )}
      </form>
    </section>
  );
}
