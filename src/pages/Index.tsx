import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TireSelector from "@/components/TireSelector";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Truck, Clock, CreditCard, Award, ChevronRight, ChevronLeft } from "lucide-react";

// Временные данные для примера
const popularTires = [
  {
    id: "1",
    name: "Michelin Pilot Sport 4 SUV",
    image: "/placeholder.svg",
    price: 12500,
    oldPrice: 14000,
    season: "summer",
    inStock: true,
    rating: 5,
    isSale: true
  },
  {
    id: "2",
    name: "Continental ContiWinterContact TS 860",
    image: "/placeholder.svg",
    price: 10800,
    season: "winter",
    inStock: true,
    rating: 4
  },
  {
    id: "3",
    name: "Bridgestone Blizzak DM-V2",
    image: "/placeholder.svg",
    price: 11300,
    season: "winter",
    inStock: true,
    rating: 4
  },
  {
    id: "4",
    name: "Nokian Hakkapeliitta R3 SUV",
    image: "/placeholder.svg",
    price: 13200,
    season: "winter",
    inStock: true,
    rating: 5,
    isNew: true
  }
];

const popularDisks = [
  {
    id: "5",
    name: "СКАД Веритас",
    image: "/placeholder.svg",
    price: 7500,
    oldPrice: 8200,
    season: "summer",
    inStock: true,
    rating: 4,
    isSale: true
  },
  {
    id: "6",
    name: "Replay MR110 GMF",
    image: "/placeholder.svg",
    price: 8900,
    season: "summer",
    inStock: true,
    rating: 5
  },
  {
    id: "7",
    name: "K&K Стоун-Центурион",
    image: "/placeholder.svg",
    price: 6800,
    season: "summer",
    inStock: true,
    rating: 4
  },
  {
    id: "8",
    name: "N2O Y9113",
    image: "/placeholder.svg",
    price: 7200,
    season: "summer",
    inStock: false,
    rating: 3
  }
];

const brands = [
  "Michelin", "Continental", "Bridgestone", "Nokian", 
  "Pirelli", "Goodyear", "Dunlop", "Hankook",
  "Yokohama", "Toyo", "Kumho", "Nexen"
];

const banners = [
  {
    id: 1,
    image: "/placeholder.svg",
    title: "Зимние шины со скидкой до 30%",
    subtitle: "Успейте подготовиться к зиме!",
    btnText: "Подробнее"
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "Бесплатный шиномонтаж",
    subtitle: "При покупке комплекта шин",
    btnText: "Узнать больше"
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Сезонное хранение шин",
    subtitle: "Освободите место в гараже",
    btnText: "Узнать условия"
  }
];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  return (
    <div className="relative rounded-lg overflow-hidden h-[300px] md:h-[400px]">
      {banners.map((banner, index) => (
        <div 
          key={banner.id} 
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img 
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-8 md:px-12">
            <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">{banner.title}</h2>
            <p className="text-white text-lg md:text-xl mb-6">{banner.subtitle}</p>
            <Button className="w-fit">{banner.btnText}</Button>
          </div>
        </div>
      ))}
      
      <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
        aria-label="Следующий слайд"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("tires");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Главный баннер */}
        <section className="bg-tire-light py-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <BannerSlider />
              </div>
              <div>
                <TireSelector />
              </div>
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-12 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center">
                  <div className="rounded-full bg-tire-light p-4 mr-4">
                    <Truck className="h-6 w-6 text-tire-red" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Доставка по Москве</h3>
                    <p className="text-sm text-tire-gray">Бесплатно от 8000 ₽</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center">
                  <div className="rounded-full bg-tire-light p-4 mr-4">
                    <Clock className="h-6 w-6 text-tire-red" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Шиномонтаж за 1 час</h3>
                    <p className="text-sm text-tire-gray">В день покупки</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center">
                  <div className="rounded-full bg-tire-light p-4 mr-4">
                    <CreditCard className="h-6 w-6 text-tire-red" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Удобная оплата</h3>
                    <p className="text-sm text-tire-gray">Наличные/карта/рассрочка</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center">
                  <div className="rounded-full bg-tire-light p-4 mr-4">
                    <Award className="h-6 w-6 text-tire-red" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Гарантия качества</h3>
                    <p className="text-sm text-tire-gray">Только оригинальная продукция</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Популярные товары */}
        <section className="py-12 bg-tire-light">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Популярные товары</h2>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="tires">Шины</TabsTrigger>
                  <TabsTrigger value="disks">Диски</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <TabsContent value="tires" className={activeTab === "tires" ? "block" : "hidden"}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {popularTires.map((tire) => (
                  <ProductCard
                    key={tire.id}
                    id={tire.id}
                    name={tire.name}
                    image={tire.image}
                    price={tire.price}
                    oldPrice={tire.oldPrice}
                    season={tire.season as "summer" | "winter" | "all-season"}
                    inStock={tire.inStock}
                    rating={tire.rating}
                    isNew={tire.isNew}
                    isSale={tire.isSale}
                  />
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button variant="outline" size="lg">
                  Смотреть все шины <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="disks" className={activeTab === "disks" ? "block" : "hidden"}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {popularDisks.map((disk) => (
                  <ProductCard
                    key={disk.id}
                    id={disk.id}
                    name={disk.name}
                    image={disk.image}
                    price={disk.price}
                    oldPrice={disk.oldPrice}
                    season={disk.season as "summer" | "winter" | "all-season"}
                    inStock={disk.inStock}
                    rating={disk.rating}
                    isNew={disk.isNew}
                    isSale={disk.isSale}
                  />
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button variant="outline" size="lg">
                  Смотреть все диски <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          </div>
        </section>

        {/* Категории */}
        <section className="py-12 bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8">Каталог товаров</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img src="/placeholder.svg" alt="Летние шины" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <Badge className="mb-2">Летний сезон</Badge>
                      <h3 className="text-xl font-bold text-white">Летние шины</h3>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img src="/placeholder.svg" alt="Зимние шины" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <Badge className="mb-2">Зимний сезон</Badge>
                      <h3 className="text-xl font-bold text-white">Зимние шины</h3>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img src="/placeholder.svg" alt="Всесезонные шины" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <Badge className="mb-2">Всесезонные</Badge>
                      <h3 className="text-xl font-bold text-white">Всесезонные шины</h3>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img src="/placeholder.svg" alt="Литые диски" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <Badge className="mb-2">Диски</Badge>
                      <h3 className="text-xl font-bold text-white">Литые диски</h3>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img src="/placeholder.svg" alt="Кованые диски" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <Badge className="mb-2">Диски</Badge>
                      <h3 className="text-xl font-bold text-white">Кованые диски</h3>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img src="/placeholder.svg" alt="Штампованные диски" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <Badge className="mb-2">Диски</Badge>
                      <h3 className="text-xl font-bold text-white">Штампованные диски</h3>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Бренды */}
        <section className="py-12 bg-tire-light">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8">Популярные бренды</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {brands.map((brand) => (
                <Card key={brand} className="flex items-center justify-center p-6 hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="bg-gray-100 p-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <img src="/placeholder.svg" alt={brand} className="max-w-full max-h-full" />
                    </div>
                    <span className="text-sm">{brand}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* SEO блок */}
        <section className="py-12 bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">Шины и диски в Москве</h2>
            <div className="prose max-w-none">
              <p>
                Наш интернет-магазин предлагает широкий выбор шин и дисков для любых автомобилей в Москве. 
                Мы работаем с ведущими производителями и гарантируем качество всей продукции.
              </p>
              <p>
                В нашем каталоге вы найдете летние, зимние и всесезонные шины от таких известных брендов, 
                как Michelin, Continental, Bridgestone, Nokian и многих других. Также в ассортименте 
                представлены литые, кованые и штампованные диски различных размеров и дизайна.
              </p>
              <p>
                Мы предлагаем не только продажу, но и профессиональный шиномонтаж, сезонное хранение шин 
                и другие услуги. Наши специалисты помогут подобрать оптимальный вариант для вашего автомобиля 
                с учетом дорожных условий и стиля вождения.
              </p>
              <p>
                Оформите заказ онлайн или позвоните нам — мы доставим товар по Москве и области в кратчайшие сроки!
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
