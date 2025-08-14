import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Briefcase, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-alumni.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              เชื่อมต่อศิษย์เก่าทั่วประเทศ
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Vocational
                <span className="block bg-gradient-to-r from-secondary to-yellow-300 bg-clip-text text-transparent">
                  Alumni Connect
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                แพลตฟอร์มที่เชื่อมโยงศิษย์เก่าวิทยาลัยอาชีวศึกษา ติดตามความก้าวหน้าในอาชีพ 
                และสร้างเครือข่ายแห่งความสำเร็จร่วมกัน
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                เข้าสู่ระบบ
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="accent" size="lg">
                สำหรับสถานศึกษา
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15,000+</div>
                <div className="text-sm text-white/80">ศิษย์เก่า</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">85%</div>
                <div className="text-sm text-white/80">มีงานทำ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">120+</div>
                <div className="text-sm text-white/80">วิทยาลัย</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-float">
              <img 
                src={heroImage} 
                alt="Alumni Network"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-elegant animate-float" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">เครือข่ายศิษย์เก่า</div>
                  <div className="text-xs text-muted-foreground">พบเพื่อนเก่า</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-elegant animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">โอกาสงาน</div>
                  <div className="text-xs text-muted-foreground">หางานใหม่</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;