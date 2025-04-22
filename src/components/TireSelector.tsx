import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TireSelector = () => {
  const [vehicleType, setVehicleType] = useState("passenger");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Tabs defaultValue="by-size" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="by-size">По размеру</TabsTrigger>
          <TabsTrigger value="by-auto">По автомобилю</TabsTrigger>
        </TabsList>
        
        <TabsContent value="by-size">
          <div className="space-y-4">
            <div className="flex space-x-4 mb-4">
              <Button
                variant={vehicleType === "passenger" ? "default" : "outline"}
                onClick={() => setVehicleType("passenger")}
                className="flex-1"
              >
                Легковые
              </Button>
              <Button
                variant={vehicleType === "suv" ? "default" : "outline"}
                onClick={() => setVehicleType("suv")}
                className="flex-1"
              >
                Внедорожники
              </Button>
              <Button
                variant={vehicleType === "light-truck" ? "default" : "outline"}
                onClick={() => setVehicleType("light-truck")}
                className="flex-1"
              >
                Легкогрузовые
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Ширина</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите ширину" />
                  </SelectTrigger>
                  <SelectContent>
                    {[175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275].map((width) => (
                      <SelectItem key={width} value={width.toString()}>
                        {width} мм
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Высота</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите высоту" />
                  </SelectTrigger>
                  <SelectContent>
                    {[45, 50, 55, 60, 65, 70, 75, 80].map((height) => (
                      <SelectItem key={height} value={height.toString()}>
                        {height}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Диаметр</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите диаметр" />
                  </SelectTrigger>
                  <SelectContent>
                    {[13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map((diameter) => (
                      <SelectItem key={diameter} value={diameter.toString()}>
                        R{diameter}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-6">
              <Button className="w-full">Подобрать шины</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="by-auto">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Марка</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите марку" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Audi", "BMW", "Mercedes", "Toyota", "Volkswagen"].map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Модель</label>
                <Select disabled>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите модель" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="placeholder">Сначала выберите марку</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Год выпуска</label>
                <Select disabled>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите год" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="placeholder">Сначала выберите модель</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-6">
              <Button className="w-full">Подобрать шины</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TireSelector;
