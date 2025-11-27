import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedTariff, setSelectedTariff] = useState('Комфорт');
  const [distance, setDistance] = useState(5);
  const [calculatedPrice, setCalculatedPrice] = useState(250);

  const handleOrder = () => {
    if (!from || !to || !phone) {
      toast.error('Заполните все поля');
      return;
    }
    toast.success('Заказ принят! Водитель прибудет через 5 минут');
    setFrom('');
    setTo('');
    setPhone('');
  };

  const tariffs = [
    {
      name: 'Эконом',
      icon: 'Car',
      basePrice: 90,
      pricePerKm: 15,
      features: ['Седан или хэтчбек', 'До 3 пассажиров', 'Кондиционер'],
      color: 'bg-secondary',
      popular: false
    },
    {
      name: 'Комфорт',
      icon: 'Car',
      basePrice: 140,
      pricePerKm: 18,
      features: ['Комфортный седан', 'До 4 пассажиров', 'Премиум салон', 'Детское кресло'],
      color: 'bg-primary',
      popular: true
    },
    {
      name: 'Минивэн',
      icon: 'Bus',
      basePrice: 250,
      pricePerKm: 50,
      features: ['Вместительный минивэн', 'До 7 пассажиров', 'Большой багажник', 'Комфорт класс'],
      color: 'bg-accent',
      popular: false
    }
  ];

  const calculatePrice = (tariffName: string, dist: number) => {
    const tariff = tariffs.find(t => t.name === tariffName);
    if (!tariff) return 0;
    return tariff.basePrice + (tariff.pricePerKm * dist);
  };

  const handleTariffChange = (tariffName: string) => {
    setSelectedTariff(tariffName);
    setCalculatedPrice(calculatePrice(tariffName, distance));
  };

  const handleDistanceChange = (dist: number) => {
    setDistance(dist);
    setCalculatedPrice(calculatePrice(selectedTariff, dist));
  };

  const advantages = [
    { icon: 'Clock', title: 'Быстрая подача', text: 'Среднее время подачи 5 минут' },
    { icon: 'Shield', title: 'Безопасность', text: 'Проверенные водители с лицензией' },
    { icon: 'CreditCard', title: 'Удобная оплата', text: 'Наличные или карта в приложении' },
    { icon: 'Star', title: 'Высокий рейтинг', text: '4.9 звёзд по отзывам клиентов' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 via-red-500 to-red-700">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-red-900/90 border-b border-red-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <Icon name="Sunrise" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-white">
              Заря
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#order" className="text-white hover:text-yellow-300 transition-colors font-medium">
              Заказать
            </a>
            <a href="#tariffs" className="text-white hover:text-yellow-300 transition-colors font-medium">
              Тарифы
            </a>
            <a href="#about" className="text-white hover:text-yellow-300 transition-colors font-medium">
              О нас
            </a>
          </nav>
          <Button className="hidden md:flex gap-2 bg-white text-red-600 hover:bg-yellow-300">
            <Icon name="Phone" size={18} />
            +7 (978) 123-45-67
          </Button>
        </div>
      </header>

      <section id="order" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-white/20 text-white border-white/40 px-4 py-1">
                🚀 Такси №1 в Евпатории
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                Быстрое такси
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  по всему городу
                </span>
              </h1>
              <p className="text-xl text-white/90">
                Комфортные поездки с заботой о вас. Работаем 24/7 для вашего удобства.
              </p>

              <div className="pt-4">
                <p className="text-white/90 mb-4 font-medium text-center">Скачайте наше приложение</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-3 bg-black hover:bg-black/80 text-white px-6 py-3 rounded-xl transition-all hover:scale-105"
                  >
                    <Icon name="Apple" size={28} />
                    <div className="text-left">
                      <div className="text-xs">Загрузите в</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </a>
                  <a 
                    href="https://www.rustore.ru/catalog/app/uptaxi.all" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-black hover:bg-black/80 text-white px-6 py-3 rounded-xl transition-all hover:scale-105"
                  >
                    <Icon name="Smartphone" size={28} />
                    <div className="text-left">
                      <div className="text-xs">Доступно в</div>
                      <div className="text-lg font-semibold">RuStore</div>
                    </div>
                  </a>
                </div>
              </div>
              
              <Card className="border-2 border-primary/20">
                <CardContent className="p-4">
                  <div className="aspect-video w-full bg-gradient-to-br from-blue-100 to-orange-50 rounded-lg overflow-hidden relative">
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?ll=33.366667,45.193889&z=13&l=map"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      className="absolute inset-0"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    📍 Работаем по всей Евпатории и окрестностям
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-2xl border-2 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl">Заказать такси</CardTitle>
                <CardDescription>Заполните данные, и водитель приедет через 5 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                  <CardContent className="pt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Калькулятор стоимости</span>
                      <Icon name="Calculator" size={18} className="text-primary" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Тариф</label>
                      <div className="grid grid-cols-3 gap-2">
                        {tariffs.map((tariff) => (
                          <Button
                            key={tariff.name}
                            variant={selectedTariff === tariff.name ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => handleTariffChange(tariff.name)}
                            className="text-xs"
                          >
                            {tariff.name}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-medium">Расстояние</label>
                        <span className="text-sm font-bold text-primary">{distance} км</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="30"
                        value={distance}
                        onChange={(e) => handleDistanceChange(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1 км</span>
                        <span>30 км</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t flex justify-between items-center">
                      <span className="text-sm font-medium">Примерная стоимость:</span>
                      <span className="text-3xl font-bold text-primary">{calculatedPrice} ₽</span>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    Откуда
                  </label>
                  <Input
                    placeholder="Улица, дом"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="border-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Icon name="MapPinCheck" size={16} className="text-secondary" />
                    Куда
                  </label>
                  <Input
                    placeholder="Адрес назначения"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="border-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Icon name="Phone" size={16} className="text-primary" />
                    Телефон
                  </label>
                  <Input
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border-2"
                  />
                </div>
                <Button
                  onClick={handleOrder}
                  className="w-full h-12 text-lg font-semibold animate-pulse-glow"
                  size="lg"
                >
                  <Icon name="Car" size={20} className="mr-2" />
                  Заказать за {calculatedPrice} ₽
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-4 bg-gradient-to-b from-white/50 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20">Тарифы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Выберите свой класс</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Цены указаны за поездку по городу. Для междугородних поездок действуют специальные тарифы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tariffs.map((tariff, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all hover:scale-105 hover:shadow-xl ${
                  tariff.popular ? 'border-primary border-2 shadow-lg' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tariff.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary">Популярный</Badge>
                )}
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${tariff.color} flex items-center justify-center mb-4`}>
                    <Icon name={tariff.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{tariff.basePrice}</span>
                      <span className="text-muted-foreground text-sm">₽ базовая</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      + {tariff.pricePerKm} ₽/км
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tariff.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tariff.popular ? 'default' : 'outline'}
                    className="w-full mt-6"
                    onClick={() => {
                      document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
                      toast.success(`Выбран тариф: ${tariff.name}`);
                    }}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20">О компании</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Почему выбирают нас</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto flex items-center justify-center mb-4">
                    <Icon name={advantage.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary to-secondary text-white border-0">
            <CardContent className="py-12 text-center space-y-6">
              <h3 className="text-3xl font-bold">Работаем для вас 24/7</h3>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Такси 'Заря' — это надёжный сервис в Евпатории. Мы работаем круглосуточно, 
                чтобы вы всегда могли быстро добраться до нужного места.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Icon name="Phone" size={20} />
                  Позвонить сейчас
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Icon name="MessageCircle" size={20} />
                  Написать в Telegram
                </Button>
              </div>
              

            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t bg-white/50 backdrop-blur">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sunrise" className="text-white" size={18} />
              </div>
              <span className="font-bold text-lg">Заря Такси</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Такси Заря. Евпатория, Крым
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;