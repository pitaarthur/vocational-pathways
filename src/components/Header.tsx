import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Menu, Bell, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Alumni Connect</h1>
              <p className="text-xs text-muted-foreground">วิทยาลัยอาชีวศึกษา</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              หน้าหลัก
            </a>
            <a href="#alumni" className="text-foreground hover:text-primary transition-colors font-medium">
              เครือข่ายศิษย์เก่า
            </a>
            <a href="#jobs" className="text-foreground hover:text-primary transition-colors font-medium">
              ตำแหน่งงาน
            </a>
            <a href="#news" className="text-foreground hover:text-primary transition-colors font-medium">
              ข่าวสาร
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              เกี่ยวกับเรา
            </a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Notification */}
            <Button variant="ghost" size="icon" className="relative hidden md:flex">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-secondary text-xs flex items-center justify-center">
                3
              </Badge>
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="w-5 h-5" />
            </Button>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost">เข้าสู่ระบบ</Button>
              <Button variant="default">สมัครสมาชิก</Button>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                หน้าหลัก
              </a>
              <a href="#alumni" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                เครือข่ายศิษย์เก่า
              </a>
              <a href="#jobs" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                ตำแหน่งงาน
              </a>
              <a href="#news" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                ข่าวสาร
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                เกี่ยวกับเรา
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
                <Button variant="ghost" className="justify-start">เข้าสู่ระบบ</Button>
                <Button variant="default" className="justify-start">สมัครสมาชิก</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;