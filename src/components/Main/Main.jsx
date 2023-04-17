import React from "react";
import mCss from "./Main.module.css";
import widget from "../../assets/img/widget.png";
import p from "../../assets/img/p.png";
import step1 from "../../assets/img/step1.png";
import step2 from "../../assets/img/step2.png";
import step3 from "../../assets/img/step3.png";
import Two from "./Two/Two";
import rus from "../../assets/img/rus.png";
import ukr from "../../assets/img/ukraine.png";
import tur from "../../assets/img/turkey.png";
import kaz from "../../assets/img/kazakhstan.png";
import bel from "../../assets/img/belarus.png";
import foot from "../../assets/img/foot.png";
import soc from "../../assets/img/soc.png";

let contentTwo = [
  {
    img: step1,
    step: "1",
    h: "Создай или найди сделку",
    p: "Широкий спектр услуг по торговле и управлению цифровыми активами для удовлетворения ",
  },
  {
    img: step2,
    step: "2",
    h: "Безопасно переведи средства",
    p: "Широкий спектр услуг по торговле и управлению цифровыми активами для удовлетворения ",
  },
  {
    img: step3,
    step: "3",
    h: "Заверши обмен",
    p: "Широкий спектр услуг по торговле и управлению цифровыми активами для удовлетворения ",
  },
];

function Main() {
  return (
    <>
      <div className={mCss["one"]}>
        <div className="container">
          <div className={mCss["one-content"]}>
            <div className={mCss["left"]}>
              <h1>Обменивай крипту и фиат без ограничений</h1>
              <button>Launch app</button>
              <p>
                <img src={p} alt="" />
                Работает на смарт-контрактах
              </p>
            </div>
            <div className={mCss["right"]}>
              <img src={widget} alt="" className={mCss['imgss']}  />
            </div>
          </div>
        </div>
      </div>
      <div className={mCss["two"]}>
        <div className="container">
          <div className={mCss["two-content"]}>
            <div className={mCss["top"]}>
              <h1>Ведущая платформа для торговли цифровыми активами</h1>
              <p>
                Широкий спектр услуг по торговле и управлению цифровыми активами
                для удовлетворения разнообразных торговых потребностей.
                Всесторонняя защита пользовательских активов с нашим автономным
                хранилищем, многофакторным шифрованием и круглосуточным
                мониторингом безопасности.
              </p>
            </div>
            <div className={mCss["bottom"]}>
              <div className={mCss["col"]}>
                <h1>Совершите обмен за 3 шага</h1>
                <button>Начать обмен</button>
              </div>
              <div className={mCss["blocks"]}>
                {contentTwo.map((e) => (
                  <Two {...e} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={mCss["three"]}>
        <div className="container">
          <div className={mCss["three-content"]}>
            <div className={mCss["cat"]}>
              <div className={mCss["content"]}>
                <p>
                  <img src={rus} alt="" />
                  Россия
                </p>
                <p>
                  <img src={ukr} alt="" />
                  Украина
                </p>
                <p>
                  <img src={tur} alt="" />
                  Турция
                </p>
                <p>
                  <img src={kaz} alt="" />
                  Казахстан
                </p>
                <p>
                  <img src={bel} alt="" />
                  Беларусь
                </p>
              </div>
            </div>
            <h1>Страны, с которыми уже работает сервис</h1>
            <div className={mCss["btns"]}>
              <button>Launch app</button>
              <button>Подключить мою страну</button>
            </div>
          </div>
        </div>
      </div>
      <div className={mCss['four']}>
          <div className='container'>
              <div className={mCss['four-content']}>
                  <div className={mCss["left"]}>
                    <h1>FAQ</h1>
                    <p>Найдите ответы, на интересующие вопросы</p>
                  </div>
                  <div className={mCss["right"]}>
                    <div><p>How does staking work?</p> <span>+</span></div>
                    <div><p>Which Proof of Stake asset(s) earn staking rewards?</p> <span>+</span></div>
                    <div><p>Who is eligible to stake on DEPO?</p> <span>+</span></div>
                    <div><p>How does ETH staking work?</p> <span>+</span></div>
                    <div><p>What’s the difference between staking and DeFi yield?</p> <span>+</span></div>
                  </div>
              </div>
          </div>
      </div>
      <div className={mCss['five']}>
          <div className='container'>
              <div className={mCss['five-content']}>
                  <div className={mCss["left"]}>
                    <h1>Обменяйте средства за считанные минуты</h1>
                    <p>Широкий спектр услуг по торговле и управлению цифровыми активами для удовлетворения разнообразных торговых потребностей</p>
                    <button>Launch app</button>
                  </div>
                  <img src={foot} alt="" className={mCss['imgss']} />
              </div>
          </div>
      </div>
      <div className={mCss['six']}>
          <div className='container'>
              <div className={mCss['six-content']}>
                  <p>© DEPO 2022</p>
                  <p><span>Terms of Use</span> <span>Privacy policy</span></p>
                  <p><span>Наши социальные сети</span> <img src={soc} alt="" /></p>
              </div>
          </div>
      </div>
    </>
  );
}

export default Main;
