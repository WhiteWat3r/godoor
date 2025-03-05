import footerLogo from "@/assets/images/doors/logo-footer.png";

import { FooterListItem } from "../ui/FooterListItem";

export const Footer = () => {
  return (
    <footer className="bg-[#343434]">
      <div className="mx-auto mt-20 flex w-full max-w-[1440px] justify-between py-[60px]">
        <div>
          <img src={footerLogo} alt="GODOOR" />
          <p className="mt-[10px] text-[12px] text-[#A4A4A4]">
            ИП Петухов Ильяс Поздняковский <br />
            ИНН: 1327081247 / ОГРНИП: 31124152312651
          </p>
        </div>
        <nav className="text-white">
          <h3 className="text-[18px] font-bold">МЕНЮ</h3>
          <ul className="mt-[15px] flex flex-col justify-center text-[16px]">
            <FooterListItem text="Главная" url="/" border link/>
            <FooterListItem text="Новинки 2024" url="/" border link/>
            <FooterListItem text="Цены" url="/" border link/>
            <FooterListItem text="Наши работы" url="/" link/>
          </ul>
        </nav>
        <nav className="text-white">
          <h3 className="text-[18px] font-bold">ДВЕРИ</h3>
          <ul className="mt-[15px] flex flex-col justify-center text-[16px]">
            <FooterListItem text="Входные двери" url="/" border link/>
            <FooterListItem text="Межкомнатные двери" url="/" border link/>
            <FooterListItem text="Двери из массива" url="/" link/>
          </ul>
        </nav>
        <div className="text-white">
          <h3 className="text-[18px] font-bold">КОНТАКТЫ</h3>
          <ul className="mt-[15px] flex flex-col justify-center text-[16px]">
            <FooterListItem text="+7 (960) 331-31-86" border />
            <FooterListItem text="@GoDoor@yandex.ru" border />
            <FooterListItem text="г. Саранск, ул. Полежаева, д. 11" border/>
            <FooterListItem text="Пн-Вс: 09:00 - 18:00" />
          </ul>
        </div>
      </div>
    </footer>
  );
};
