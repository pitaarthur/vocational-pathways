import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, BarChart3, Award, MessageCircle, Search } from "lucide-react";
import jobsIcon from "@/assets/jobs-icon.jpg";
import networkIcon from "@/assets/network-icon.jpg";

const features = [
  {
    icon: Users,
    title: "เครือข่ายศิษย์เก่า",
    description: "เชื่อมต่อกับเพื่อนศิษย์เก่า ค้นหาโอกาสใหม่ และสร้างเครือข่ายวิชาชีพ",
    image: networkIcon,
    color: "bg-blue-500"
  },
  {
    icon: Briefcase,
    title: "บอร์ดประกาศงาน",
    description: "ค้นหาโอกาสงานที่เหมาะสม จากบริษัทชั้นนำที่ร่วมมือกับสถานศึกษา",
    image: jobsIcon,
    color: "bg-green-500"
  },
  {
    icon: BarChart3,
    title: "ติดตามสถิติ",
    description: "วิเคราะห์ข้อมูลการมีงานทำ ความก้าวหน้าในอาชีพ และแนวโน้มตลาดแรงงาน",
    image: null,
    color: "bg-purple-500"
  },
  {
    icon: Award,
    title: "เก็บผลงาน",
    description: "จัดเก็บใบรับรอง ผลงาน และความสำเร็จต่างๆ ในโปรไฟล์ดิจิทัล",
    image: null,
    color: "bg-orange-500"
  },
  {
    icon: MessageCircle,
    title: "สื่อสารสะดวก",
    description: "ระบบการสื่อสารที่ง่าย ระหว่างศิษย์เก่า อาจารย์ และสถานศึกษา",
    image: null,
    color: "bg-pink-500"
  },
  {
    icon: Search,
    title: "ค้นหาเก่ง",
    description: "ค้นหาศิษย์เก่าตามสาขา บริษัท ตำแหน่งงาน หรือทักษะเฉพาะ",
    image: null,
    color: "bg-indigo-500"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            คุณสมบัติที่ครบครัน
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ระบบจัดการศิษย์เก่าที่ตอบโจทย์ทุกความต้องการ ทั้งสำหรับศิษย์เก่า สถานศึกษา และผู้ประกอบการ
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Image or Icon */}
                  <div className="relative">
                    {feature.image ? (
                      <div className="w-full h-48 rounded-xl overflow-hidden">
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <Button variant="ghost" className="group-hover:text-primary transition-colors">
                    เรียนรู้เพิ่มเติม
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            เริ่มต้นใช้งานวันนี้
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;