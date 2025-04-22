import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart, Menu, X, Search } from "lucide-react";

// Компонент верхней части шапки
const TopHeader = () => (
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
);

// Компонент поиска
const SearchBar = () => (
  <div className="relative w-full">
    <input
      type="text"
      placeholder="Поиск по сайту..."
      className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-tire-red"
    />
    <Search className="absolute right-3 top-2.5 text-tire-gray" size={18} />
  </div>
);

// Компонент основной навигации
const MainNavigation = () => (
  <ul className="flex space-x-8 py-3">
    {["tires", "disks", "seasonal", "services", "sale"].map((item) => (
      <li key={item}>
        <NavLink
          to={`/${item}`}
          className="font-medium hover:text-tire-red transition-colors"
        >
          {getNavItemLabel(item)}
        </NavLink>
      </li>
    ))}
  </ul>
);

// Мобильное навигационное меню
const MobileMenu = () => (
  <div className="md:hidden bg-white absolute top-[136px] left-0 w-full z-50 shadow-lg">
    <div className="container mx-auto py-4 px-6">
      <div className="mb-4">
        <SearchBar />
      </div>
      <ul className="space-y-4">
        {["tires", "disks", "seasonal", "services", "sale"].map((item) => (
          <li key={item}>
            <NavLink
              to={`/${item}`}
              className="block font-medium py-2 hover:text-tire-red"
            >
              {getNavItemLabel(item)}
            </NavLink>
          </li>
        ))}
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
);

// Вспомогательная функция для получения названий пунктов меню
const getNavItemLabel = (key: string): string => {
  const labels: Record<string, string> = {
    tires: "Шины",
    disks: "Диски",
    seasonal: "Сезонное хранение",
    services: "Услуги",
    sale: "Акции",
  };
  return labels[key] || key;
};

// Основной компонент шапки
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto">
        <TopHeader />

        {/* Основная часть шапки */}
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="text-2xl font-bold flex items-center">
            <span className="text-tire-red">Шины</span>
            <span className="text-tire-dark">Диски</span>
            <span className="text-xs ml-1 text-tire-gray">Москва</span>
          </NavLink>

          {/* Поиск - скрыт на мобильных */}
          <div className="hidden md:flex relative w-1/3">
            <SearchBar />
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
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Навигация - скрыта на мобильных */}
        <nav className="hidden md:block border-t">
          <MainNavigation />
        </nav>

        {/* Мобильное меню выпадающее */}
        {isMenuOpen && <MobileMenu />}
      </div>
    </header>
  );
};

export default Header;
