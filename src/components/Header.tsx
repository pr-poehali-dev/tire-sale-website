import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart, Menu, X, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto">
        {/* Верхняя часть шапки */}
        <div className="flex justify-between items-center py-3 border-b">
          <div className="flex items-center space-x-2">
            <span className="text-tire-gray text-sm">Москва</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/delivery" className="text-sm hover:text-tire-red">
              Доставка и оплата
            </NavLink>
            <NavLink to="/about" className="text-sm hover:text-tire-red">
              О компании
            </NavLink>
            <NavLink to="/contacts" className="text-sm hover:text-tire-red">
              Контакты
            </NavLink>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={16} className="text-tire-red" />
            <a href="tel:+74951234567" className="font-medium">
              +7 (495) 123-45-67
            </a>
          </div>
        </div>

        {/* Основная часть шапки */}
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="text-2xl font-bold flex items-center">
            <span className="text-tire-red">Шины</span>
            <span className="text-tire-dark">Диски</span>
            <span className="text-xs ml-1 text-tire-gray">Москва</span>
          </NavLink>

          {/* Поиск - скрыт на мобильных */}
          <div className="hidden md:flex relative w-1/3">
            <input
              type="text"
              placeholder="Поиск по сайту..."
              className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-tire-red"
            />
            <Search className="absolute right-3 top-2.5 text-tire-gray" size={18} />
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:flex items-center">
              <ShoppingCart size={18} className="mr-2" />
              <span>Корзина</span>
            </Button>

            {/* Мобильное меню */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Навигация */}
        <nav className="hidden md:block border-t">
          <ul className="flex space-x-8 py-3">
            <li>
              <NavLink
                to="/tires"
                className="font-medium hover:text-tire-red transition-colors"
              >
                Шины
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/disks"
                className="font-medium hover:text-tire-red transition-colors"
              >
                Диски
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/seasonal"
                className="font-medium hover:text-tire-red transition-colors"
              >
                Сезонное хранение
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="font-medium hover:text-tire-red transition-colors"
              >
                Услуги
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sale"
                className="font-medium hover:text-tire-red transition-colors"
              >
                Акции
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Мобильное меню выпадающее */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-[136px] left-0 w-full z-50 shadow-lg">
            <div className="container mx-auto py-4 px-6">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Поиск по сайту..."
                  className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-tire-red"
                />
              </div>
              <ul className="space-y-4">
                <li>
                  <NavLink
                    to="/tires"
                    className="block font-medium py-2 hover:text-tire-red"
                  >
                    Шины
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/disks"
                    className="block font-medium py-2 hover:text-tire-red"
                  >
                    Диски
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/seasonal"
                    className="block font-medium py-2 hover:text-tire-red"
                  >
                    Сезонное хранение
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className="block font-medium py-2 hover:text-tire-red"
                  >
                    Услуги
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/sale"
                    className="block font-medium py-2 hover:text-tire-red"
                  >
                    Акции
                  </NavLink>
                </li>
                <li className="border-t pt-2">
                  <NavLink
                    to="/delivery"
                    className="block py-2 text-sm hover:text-tire-red"
                  >
                    Доставка и оплата
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="block py-2 text-sm hover:text-tire-red"
                  >
                    О компании
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contacts"
                    className="block py-2 text-sm hover:text-tire-red"
                  >
                    Контакты
                  </NavLink>
                </li>
                <li className="pt-2">
                  <Button variant="outline" className="w-full justify-center">
                    <ShoppingCart size={18} className="mr-2" />
                    <span>Корзина</span>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
