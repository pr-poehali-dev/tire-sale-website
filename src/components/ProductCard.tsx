import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  season: "summer" | "winter" | "all-season";
  inStock: boolean;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  id,
  name,
  image,
  price,
  oldPrice,
  season,
  inStock,
  rating,
  isNew,
  isSale,
}: ProductCardProps) => {
  const seasonLabels = {
    "summer": "Летние",
    "winter": "Зимние",
    "all-season": "Всесезонные"
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border hover:shadow-md transition-shadow">
      <div className="relative">
        {isNew && (
          <Badge className="absolute top-2 left-2 bg-green-600 hover:bg-green-600">Новинка</Badge>
        )}
        {isSale && (
          <Badge variant="destructive" className="absolute top-2 right-2">Скидка</Badge>
        )}
        <div className="flex items-center justify-center mb-4">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="h-40 object-contain"
          />
        </div>
        <div className="absolute top-2 right-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-gray-100">
            <Heart size={16} className="text-gray-400 hover:text-tire-red" />
          </Button>
        </div>
      </div>

      <div>
        <div className="flex items-center mb-1">
          <Badge variant="outline" className="text-xs font-normal">
            {seasonLabels[season]}
          </Badge>
          <div className="ml-auto flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                ★
              </span>
            ))}
          </div>
        </div>
        <h3 className="font-medium text-base line-clamp-2 h-12 mb-2">{name}</h3>
        
        <div className="flex justify-between items-end mt-4">
          <div>
            {oldPrice && (
              <p className="text-sm text-gray-500 line-through">{oldPrice.toLocaleString()} ₽</p>
            )}
            <p className="text-lg font-bold">{price.toLocaleString()} ₽</p>
          </div>
          
          <Button
            size="sm"
            disabled={!inStock}
            className="rounded-lg"
          >
            <ShoppingCart size={16} className="mr-1" />
            {inStock ? "В корзину" : "Нет в наличии"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
