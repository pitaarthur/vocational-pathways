import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Alumni Connect</h3>
                <p className="text-sm text-primary-foreground/80">วิทยาลัยอาชีวศึกษา</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              แพลตฟอร์มที่เชื่อมโยงศิษย์เก่าวิทยาลัยอาชีวศึกษาทั่วประเทศ 
              เพื่อสร้างเครือข่ายแห่งความสำเร็จร่วมกัน
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">ลิงก์ด่วน</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">เครือข่ายศิษย์เก่า</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">ตำแหน่งงาน</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">ข่าวสาร</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">กิจกรรม</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">ความช่วยเหลือ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">บริการ</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">สำหรับศิษย์เก่า</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">สำหรับสถานศึกษา</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">สำหรับนายจ้าง</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">การรายงาน</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">API สำหรับนักพัฒนา</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">รับข่าวสารล่าสุด</h4>
            <p className="text-primary-foreground/80 text-sm">
              สมัครรับข้อมูลข่าวสาร โอกาสงาน และกิจกรรมต่างๆ
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="อีเมลของคุณ"
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="w-full">
                สมัครรับข้อมูล
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-secondary" />
              <div>
                <div className="text-sm font-medium">อีเมล</div>
                <div className="text-sm text-primary-foreground/80">info@alumniconnect.ac.th</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-secondary" />
              <div>
                <div className="text-sm font-medium">โทรศัพท์</div>
                <div className="text-sm text-primary-foreground/80">02-123-4567</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-secondary" />
              <div>
                <div className="text-sm font-medium">ที่อยู่</div>
                <div className="text-sm text-primary-foreground/80">กรุงเทพมหานคร 10100</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            © 2024 Alumni Connect. สงวนลิขสิทธิ์ทั้งหมด
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">นโยบายความเป็นส่วนตัว</a>
            <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">ข้อตกลงการใช้งาน</a>
            <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">คำถามที่พบบ่อย</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;