import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Shield,
  BarChart3,
  Users,
  Code,
  Zap,
  Star,
  ArrowRight,
  Check,
  Calendar,
  Crown,
  Server,
  Settings,
  Gamepad2,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Floating Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Header */}
      <header className="border-b border-border bg-card/30 backdrop-blur-sm sticky top-0 z-50 gradient-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-6xl">
          <div className="flex items-center space-x-2">
            <Bot className="w-7 h-7 text-primary glow-text subtle-float" />
            <span className="text-xl font-bold text-foreground glow-text">
              Wapers
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/altyapilar"
              className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center space-x-1"
            >
              <span>Altyapılar</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
            <Link
              to="/kiralama"
              className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center space-x-1"
            >
              <span>Kiralama</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
            <a
              href="#iletisim"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              İletişim
            </a>
          </nav>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground gentle-pulse"
            onClick={() =>
              window.open(
                "https://discordapp.com/users/1376137503127638157",
                "_blank",
              )
            }
          >
            İletişime Geç
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="mb-8">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 glow subtle-float">
              Discord v14 Uyumlu
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent glow-text">
            Profesyonel Discord Bot
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-primary bg-clip-text text-transparent">
              Altyapıları
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            En kaliteli Discord bot altyapıları ve kiralama hizmetleri.
            Sunucunuzu güçlendirin, yönetimi kolaylaştırın, topluluk deneyimini
            geliştirin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/altyapilar">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow hover:glow-intense transition-all duration-300"
              >
                Altyapıları İncele
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/kiralama">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 sophisticated-card"
              >
                Kiralama Seçenekleri
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features - Enhanced */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Neden Wapers?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Yıllardır Discord bot geliştirme alanında edindiğimiz deneyimle,
              en kaliteli hizmeti sunuyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="sophisticated-card group hover:scale-105 transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center mb-4 glow group-hover:glow-intense transition-all duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl glow-text">
                  Güvenlik Öncelikli
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Tüm altyapılarımız en yüksek güvenlik standartlarıyla
                  geliştirilir. Sunucunuz her zaman güvende.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="sophisticated-card group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 glow group-hover:glow-intense transition-all duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl glow-text">
                  Yüksek Performans
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Optimize edilmiş kod yapısı ile hızlı ve stabil çalışma. Lag
                  olmadan kesintisiz hizmet.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="sophisticated-card group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4 glow group-hover:glow-intense transition-all duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl glow-text">7/24 Destek</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Sürekli teknik destek ve güncellemeler. Her zaman
                  yanınızdayız.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Overview - Premium Showcase */}
      <section className="py-20 px-4 bg-gradient-to-b from-card/20 to-card/5 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Premium Bot Altyapısı
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              En popüler paketimiz - Tam donanımlı sunucu yönetimi için her şey
              dahil
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="sophisticated-card gentle-pulse relative overflow-hidden">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground glow-intense">
                  <Crown className="w-4 h-4 mr-1" />
                  %40 İndirim - Sınırlı Süre
                </Badge>
              </div>

              <CardHeader className="text-center pb-8 pt-8">
                <div className="text-lg text-muted-foreground line-through">
                  3.000₺
                </div>
                <div className="text-5xl font-bold text-primary glow-text mb-4">
                  1.800₺
                </div>
                <CardTitle className="text-2xl mb-2">
                  Premium Bot Altyapısı
                </CardTitle>
                <CardDescription className="text-lg">
                  Discord v14 uyumlu, canvas destekli, tam özellikli bot paketi
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-primary">
                      Paket İçeriği:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span>4x Guard Bot (Koruma)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span>1x Main Bot (Ana yönetim)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span>2x Stat + Yetki Bot</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span>1x Yetki Alım Bot</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-primary">
                      Özel Özellikler:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Star className="w-4 h-4 text-white" />
                        </div>
                        <span>Canvas Altyapı</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Star className="w-4 h-4 text-white" />
                        </div>
                        <span>Ücretsiz kurulum</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Star className="w-4 h-4 text-white" />
                        </div>
                        <span>1 ay garanti</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Star className="w-4 h-4 text-white" />
                        </div>
                        <span>Premium destek</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground glow-intense text-lg py-6"
                    onClick={() =>
                      window.open(
                        "https://discordapp.com/users/1376137503127638157",
                        "_blank",
                      )
                    }
                  >
                    Hemen Satın Al
                    <Crown className="ml-2 w-5 h-5" />
                  </Button>
                  <Link to="/kiralama" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg py-6"
                    >
                      Aylık Kirala (800₺)
                      <Calendar className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Altyapı Kategorileri
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              İhtiyacınıza uygun Discord bot altyapısını seçin
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Link to="/altyapilar" className="group">
              <Card className="sophisticated-card group-hover:scale-105 transition-all duration-500 h-full">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center glow group-hover:glow-intense transition-all duration-300">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl glow-text">Premium</CardTitle>
                  <CardDescription>En gelişmiş özellikler</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-primary">
                      1.800₺
                    </div>
                    <div className="text-sm text-muted-foreground line-through">
                      3.000₺
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:glow transition-all duration-300">
                    İncele
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/altyapilar" className="group">
              <Card className="sophisticated-card group-hover:scale-105 transition-all duration-500 h-full">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center glow group-hover:glow-intense transition-all duration-300">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl glow-text">Standart</CardTitle>
                  <CardDescription>Temel ihtiyaçlar için</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-foreground">
                      1.200₺
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white group-hover:glow transition-all duration-300"
                  >
                    İncele
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/altyapilar" className="group">
              <Card className="sophisticated-card group-hover:scale-105 transition-all duration-500 h-full">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center glow group-hover:glow-intense transition-all duration-300">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl glow-text">Özel</CardTitle>
                  <CardDescription>Özelleştirilmiş çözümler</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-foreground">
                      80₺
                    </div>
                    <div className="text-sm text-muted-foreground">
                      /100 satır
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white group-hover:glow transition-all duration-300"
                  >
                    İncele
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="iletisim"
        className="py-20 px-4 bg-gradient-to-t from-card/20 to-transparent relative"
      >
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
            İletişime Geçin
          </h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Sorularınız için bizimle iletişime geçin. Size en uygun çözümü
            bulalım. Profesyonel Discord bot hizmetlerimiz için hemen iletişime
            geçin.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-intense gentle-pulse text-lg px-8 py-6"
            onClick={() =>
              window.open(
                "https://discordapp.com/users/1376137503127638157",
                "_blank",
              )
            }
          >
            Discord'da Mesaj At
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Enhanced Footer with Lighting */}
      <footer className="border-t border-border py-12 px-4 bg-gradient-to-b from-card/30 to-card/60 relative overflow-hidden">
        {/* Advanced lighting effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-t from-primary/10 via-purple-500/5 to-transparent blur-3xl"></div>

        <div className="container mx-auto text-center max-w-6xl relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center glow-intense">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary glow-text">
              Wapers
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-3 text-primary">Hizmetler</h4>
              <div className="space-y-2">
                <Link
                  to="/altyapilar"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Bot Altyapıları
                </Link>
                <Link
                  to="/kiralama"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kiralama Hizmetleri
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Destek</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  7/24 Teknik Destek
                </a>
                <a
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kurulum Yardımı
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">İletişim</h4>
              <div className="space-y-2">
                <a
                  href="https://discordapp.com/users/1376137503127638157"
                  target="_blank"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-6">
            <p className="text-sm text-muted-foreground">
              © 2024 Wapers. Tüm hakları saklıdır. | Discord v14 Uyumlu Bot
              Altyapıları
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
