import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Building2, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "15,247",
    label: "ศิษย์เก่าที่ลงทะเบียน",
    change: "+12%",
    color: "text-blue-600"
  },
  {
    icon: TrendingUp,
    value: "87.5%",
    label: "อัตราการมีงานทำ",
    change: "+5.2%",
    color: "text-green-600"
  },
  {
    icon: Building2,
    value: "2,845",
    label: "บริษัทพันธมิตร",
    change: "+18%",
    color: "text-purple-600"
  },
  {
    icon: Award,
    value: "45,200",
    label: "บาท (เงินเดือนเฉลี่ย)",
    change: "+8.5%",
    color: "text-orange-600"
  }
];

const Stats = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            สถิติที่น่าภาคภูมิใจ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ข้อมูลล่าสุดแสดงให้เห็นถึงความสำเร็จของศิษย์เก่าและประสิทธิภาพของระบบ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-')}/10 rounded-2xl flex items-center justify-center mx-auto`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {stat.label}
                    </div>
                    <div className={`text-sm font-medium ${stat.color} flex items-center justify-center gap-1`}>
                      <TrendingUp className="w-4 h-4" />
                      {stat.change} จากปีที่แล้ว
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;