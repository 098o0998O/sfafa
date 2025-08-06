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
  Crown,
  Server,
  Settings,
  Gamepad2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Altyapilar() {
  return (
    <div className="min-h-screen bg-background">
      {/* Floating Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Header */}
      <header className="border-b border-border bg-card/30 backdrop-blur-sm sticky top-0 z-50 gradient-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-6xl">
          <Link to="/" className="flex items-center space-x-2">
            <Bot className="w-7 h-7 text-primary glow-text subtle-float" />
            <span className="text-xl font-bold text-foreground glow-text">
              Wapers
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Ana Sayfa
            </Link>
            <Link to="/altyapilar" className="text-primary font-medium text-sm">
              Altyapılar
            </Link>
            <Link
              to="/kiralama"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Kiralama
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
      <section className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 glow">
              Discord v14 Uyumlu Altyapılar
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent glow-text">
            Bot Altyapı Kategorileri
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            İhtiyacınıza uygun Discord bot altyapısını seçin. Her kategori
            özenle tasarlanmış özellikler içerir.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Premium Altyapılar */}
            <Card className="sophisticated-card gentle-pulse group">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center glow-intense">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2 glow-text">
                  Premium Altyapılar
                </CardTitle>
                <CardDescription>
                  En gelişmiş özelliklerle donatılmış profesyonel bot
                  altyapıları
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Tam Canvas Desteği</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Gelişmiş Guard Sistemi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Modüler Yapı</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>7/24 Premium Destek</span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-lg text-muted-foreground line-through">
                    3.000₺
                  </div>
                  <div className="text-3xl font-bold text-primary glow-text">
                    1.800₺
                  </div>
                  <Badge className="mt-2 bg-green-500/20 text-green-400 border-green-500/30">
                    %40 İndirim
                  </Badge>
                </div>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow group-hover:glow-intense transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://discordapp.com/users/1376137503127638157",
                      "_blank",
                    )
                  }
                >
                  Premium Al
                  <Crown className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Standart Altyapılar */}
            <Card className="sophisticated-card group">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center glow">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">
                  Standart Altyapılar
                </CardTitle>
                <CardDescription>
                  Temel ihtiyaçları karşılayan kaliteli bot altyapıları
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span>Temel Guard Sistemi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span>Yetki Yönetimi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span>Stat Sistemi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span>Standart Destek</span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-foreground">
                    1.200₺
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white group-hover:glow transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://discordapp.com/users/1376137503127638157",
                      "_blank",
                    )
                  }
                >
                  Standart Al
                  <Server className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Özel Altyapılar */}
            <Card className="sophisticated-card group">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center glow">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">Özel Altyapılar</CardTitle>
                <CardDescription>
                  İhtiyaçlarınıza göre özelleştirilmiş bot altyapıları
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-orange-400" />
                    <span>Tamamen Özelleştirilebilir</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-orange-400" />
                    <span>İsteğe Göre ��zellikler</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-orange-400" />
                    <span>Kaynak Kodu Dahil</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-orange-400" />
                    <span>Öncelikli Destek</span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-foreground">80₺</div>
                  <div className="text-sm text-muted-foreground">
                    / 100 satır kod
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white group-hover:glow transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://discordapp.com/users/1376137503127638157",
                      "_blank",
                    )
                  }
                >
                  Teklif Al
                  <Settings className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-16 px-4 bg-card/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 glow-text">
              Altyapı Özellikleri
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Her altyapımız Discord v14'e tam uyumlu ve en son teknolojilerle
              geliştirilmiştir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="sophisticated-card text-center group">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4 glow-text group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg">Güvenlik</CardTitle>
                <CardDescription className="text-sm">
                  Gelişmiş guard sistemleri ve koruma mekanizmaları
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="sophisticated-card text-center group">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4 glow-text group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg">Yetki Yönetimi</CardTitle>
                <CardDescription className="text-sm">
                  Kapsamlı rol ve yetki yönetim sistemi
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="sophisticated-card text-center group">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4 glow-text group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg">İstatistikler</CardTitle>
                <CardDescription className="text-sm">
                  Detaylı sunucu ve kullanıcı istatistikleri
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="sophisticated-card text-center group">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mx-auto mb-4 glow-text group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg">Performans</CardTitle>
                <CardDescription className="text-sm">
                  Optimize edilmiş ve hızlı çalışma garantisi
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4 glow-text">
            Hangi Altyapı Size Uygun?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Size en uygun altyapıyı seçmenizde yardımcı olmak için bizimle
            iletişime geçin.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-intense gentle-pulse"
            onClick={() =>
              window.open(
                "https://discordapp.com/users/1376137503127638157",
                "_blank",
              )
            }
          >
            Discord'da Danışın
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 bg-card/20">
        <div className="container mx-auto text-center max-w-6xl">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bot className="w-6 h-6 text-primary glow-text" />
            <span className="font-bold text-primary glow-text">Wapers</span>
          </div>
          <p className="text-sm text-muted-foreground">
            �� 2024 Wapers. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
