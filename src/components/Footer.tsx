import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tire-dark text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-tire-red">Шины</span>
              <span>Диски</span>
              <span className="text-xs ml-1 text-tire-gray">Москва</span>
            </h3>
            <p className="text-sm text-tire-gray mb-4">
              Профессиональный магазин шин и дисков в Москве с быстрой доставкой и установкой.
            </p>
            <div className="flex items-center space-x-2 mb-3">
              <Phone size={16} className="text-tire-red" />
              <a href="tel:+74951234567" className="text-sm">
                +7 (495) 123-45-67
              </a>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <Mail size={16} className="text-tire-red" />
              <a href="mailto:info@shiny-diski.ru" className="text-sm">
                info@shiny-diski.ru
              </a>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin size={16} className="text-tire-red mt-1" />
              <span className="text-sm">
                г. Москва, ул. Автомобильная, д. 10, стр. 1
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Покупателям</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/delivery" className="text-sm text-tire-gray hover:text-white">
                  Доставка и оплата
                </NavLink>
              </li>
              <li>
                <NavLink to="/installation" className="text-sm text-tire-gray hover:text-white">
                  Шиномонтаж
                </NavLink>
              </li>
              <li>
                <NavLink to="/warranty" className="text-sm text-tire-gray hover:text-white">
                  Гарантия
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="text-sm text-tire-gray hover:text-white">
                  Часто задаваемые вопросы
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts" className="text-sm text-tire-gray hover:text-white">
                  Контакты
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Каталог</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/tires/summer" className="text-sm text-tire-gray hover:text-white">
                  Летние шины
                </NavLink>
              </li>
              <li>
                <NavLink to="/tires/winter" className="text-sm text-tire-gray hover:text-white">
                  Зимние шины
                </NavLink>
              </li>
              <li>
                <NavLink to="/disks/cast" className="text-sm text-tire-gray hover:text-white">
                  Литые диски
                </NavLink>
              </li>
              <li>
                <NavLink to="/disks/stamped" className="text-sm text-tire-gray hover:text-white">
                  Штампованные диски
                </NavLink>
              </li>
              <li>
                <NavLink to="/brands" className="text-sm text-tire-gray hover:text-white">
                  Бренды
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/about" className="text-sm text-tire-gray hover:text-white">
                  О компании
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-sm text-tire-gray hover:text-white">
                  Блог
                </NavLink>
              </li>
              <li>
                <NavLink to="/reviews" className="text-sm text-tire-gray hover:text-white">
                  Отзывы
                </NavLink>
              </li>
              <li>
                <NavLink to="/sale" className="text-sm text-tire-gray hover:text-white">
                  Акции и скидки
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-tire-gray">
              © 2023 ШиныДиски Москва. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <NavLink to="/policy" className="text-sm text-tire-gray hover:text-white">
                Политика конфиденциальности
              </NavLink>
              <NavLink to="/terms" className="text-sm text-tire-gray hover:text-white">
                Пользовательское соглашение
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
