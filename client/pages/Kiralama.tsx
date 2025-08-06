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
  Calendar,
  Clock,
  RefreshCcw,
  Shield,
  Check,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Kiralama() {
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
            <Link
              to="/altyapilar"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Altyapılar
            </Link>
            <Link to="/kiralama" className="text-primary font-medium text-sm">
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
              Esnek Kiralama Seçenekleri
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent glow-text">
            Bot Kiralama Hizmetleri
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discord bot altyapılarını aylık, haftalık veya günlük kiralayın.
            İstediğiniz zaman iptal edebilirsiniz.
          </p>
        </div>
      </section>

      {/* Rental Plans */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Monthly Plan */}
            <Card className="sophisticated-card gentle-pulse group relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground glow">
                  <Star className="w-3 h-3 mr-1" />
                  En Popüler
                </Badge>
              </div>
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center glow-intense">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2 glow-text">
                  Aylık Kiralama
                </CardTitle>
                <CardDescription>
                  Tam altyapı paketini aylık kirala
                </CardDescription>
                <div className="text-4xl font-bold text-primary mt-4 glow-text">
                  800₺
                  <span className="text-lg text-muted-foreground">/ay</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>4x Guard Bot (Koruma)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>1x Main Bot (Ana yönetim)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>2x Stat + Yetki Bot</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>1x Yetki Alım Bot</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>7/24 Teknik Destek</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Ücretsiz Güncellemeler</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>İstediğiniz Zaman İptal</span>
                  </div>
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
                  Aylık Kirala
                  <Calendar className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Weekly Plan */}
            <Card className="sophisticated-card group">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center glow">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">
                  Haftalık Kiralama
                </CardTitle>
                <CardDescription>
                  Kısa süreli projeler için ideal
                </CardDescription>
                <div className="text-4xl font-bold text-foreground mt-4">
                  250₺
                  <span className="text-lg text-muted-foreground">/hafta</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span>2x Guard Bot</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span>1x Main Bot</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span>1x Stat Bot</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span>Temel Destek</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span>7 Gün Garanti</span>
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
                  Haftalık Kirala
                  <Clock className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Daily Plan */}
            <Card className="sophisticated-card group">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center glow">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">Günlük Test</CardTitle>
                <CardDescription>Botları test etmek için</CardDescription>
                <div className="text-4xl font-bold text-foreground mt-4">
                  50₺
                  <span className="text-lg text-muted-foreground">/gün</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-orange-400" />
                    <span>1x Guard Bot</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-orange-400" />
                    <span>1x Main Bot</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-orange-400" />
                    <span>Temel Özellikler</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-orange-400" />
                    <span>24 Saat Kullanım</span>
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
                  Günlük Test
                  <Zap className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-card/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 glow-text">
              Kiralama Avantajları
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kiralama hizmetimizle Discord botlarınızı esnek şekilde kullanın.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="sophisticated-card text-center group">
              <CardHeader>
                <RefreshCcw className="w-12 h-12 text-primary mx-auto mb-4 glow-text group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg">Esnek İptal</CardTitle>
                <CardDescription className="text-sm">
                  İstediğiniz zaman kiralama sözleşmenizi iptal edebilirsiniz
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="sophisticated-card text-center group">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4 glow-text group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg">Güvenli Ödeme</CardTitle>
                <CardDescription className="text-sm">
                  Güvenli ödeme yöntemleri ve şeffaf fiyatlandırma
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="sophisticated-card text-center group">
              <CardHeader>
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4 glow-text group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg">Otomatik Yenileme</CardTitle>
                <CardDescription className="text-sm">
                  İsteğe bağlı otomatik yenileme özelliği
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="sophisticated-card text-center group">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-4 glow-text group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg">Anında Kurulum</CardTitle>
                <CardDescription className="text-sm">
                  Ödeme sonrası 5 dakika içinde kurulum
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 glow-text">
              Sık Sorulan Sorular
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="sophisticated-card">
              <CardHeader>
                <CardTitle className="text-lg">
                  Kiralama nasıl çalışır?
                </CardTitle>
                <CardDescription>
                  Seçtiğiniz paketi kiralarsınız, botlar Discord sunucunuza
                  kurulur ve belirlenen süre boyunca kullanırsınız.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="sophisticated-card">
              <CardHeader>
                <CardTitle className="text-lg">İptal edebilir miyim?</CardTitle>
                <CardDescription>
                  Evet, kiralama süreniz dolmadan önce istediğiniz zaman iptal
                  edebilirsiniz. Kalan süre iade edilir.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="sophisticated-card">
              <CardHeader>
                <CardTitle className="text-lg">Teknik destek var mı?</CardTitle>
                <CardDescription>
                  Tüm kiralama paketlerimizde 7/24 teknik destek bulunmaktadır.
                  Discord üzerinden ulaşabilirsiniz.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="sophisticated-card">
              <CardHeader>
                <CardTitle className="text-lg">
                  Özelleştirme yapılır mı?
                </CardTitle>
                <CardDescription>
                  Aylık paketlerde sınırlı özelleştirme mümkündür. Tam
                  özelleştirme için satın alma seçeneğini tercih edin.
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
            Kiralama Hakkında Sorularınız mı Var?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Size en uygun kiralama paketini seçmenizde yardımcı olmak için
            bizimle iletişime geçin.
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
            Discord'da Sorun
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
            © 2024 Wapers. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
