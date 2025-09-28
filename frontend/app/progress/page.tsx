'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  TrendingUp,
  Trophy,
  Clock,
  Target,
  Award,
  BookOpen,
  Users,
  ChevronRight,
  Star,
  Zap,
  Brain,
  ArrowUp,
  ArrowDown,
  Medal,
  Crown,
  Lock,
  CheckCircle,
  Activity,
  BarChart3,
  PieChart,
  Calendar
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart as RePieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar
} from 'recharts';

interface ProgressData {
  overall: number;
  completedLessons: number;
  totalLessons: number;
  studyHours: number;
  successRate: number;
  streak: number;
  points: number;
  rank: number;
}

interface SubjectProgress {
  id: string;
  name: string;
  nameAr: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  successRate: number;
  color: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
  points: number;
  unlockedAt?: Date;
}

interface LeaderboardEntry {
  rank: number;
  id: string;
  name: string;
  points: number;
  level: number;
  avatar?: string;
  isCurrentUser?: boolean;
}

export default function ProgressPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const [progressData, setProgressData] = useState<ProgressData | null>(null);
  const [subjectProgress, setSubjectProgress] = useState<SubjectProgress[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    fetchProgressData();
  }, []);

  const fetchProgressData = async () => {
    try {
      // محاولة جلب البيانات الحقيقية مع معالجة أفضل للأخطاء
      const [progressRes, analyticsRes, leaderboardRes] = await Promise.allSettled([
        fetch('http://localhost:3001/api/v1/quiz/progress').catch(() => null),
        fetch('http://localhost:3001/api/v1/quiz/analytics').catch(() => null),
        fetch('http://localhost:3001/api/v1/quiz/leaderboard').catch(() => null)
      ]);

      // معالجة البيانات إذا نجحت الـ API calls
      if (progressRes.status === 'fulfilled' && progressRes.value?.ok) {
        const data = await progressRes.value.json();
        if (data?.data) {
          setProgressData(data.data);
          setLoading(false);
          return;
        }
      }

      // استخدم البيانات التجريبية إذا فشلت الـ API
      setProgressData({
        overall: 75,
        completedLessons: 45,
        totalLessons: 60,
        studyHours: 128,
        successRate: 88,
        streak: 7,
        points: 2450,
        rank: 3
      });

      setSubjectProgress([
        {
          id: '1',
          name: 'Mathematics',
          nameAr: 'الرياضيات',
          progress: 85,
          completedLessons: 17,
          totalLessons: 20,
          successRate: 92,
          color: '#3B82F6'
        },
        {
          id: '2',
          name: 'Physics',
          nameAr: 'الفيزياء',
          progress: 70,
          completedLessons: 14,
          totalLessons: 20,
          successRate: 85,
          color: '#10B981'
        },
        {
          id: '3',
          name: 'Chemistry',
          nameAr: 'الكيمياء',
          progress: 65,
          completedLessons: 13,
          totalLessons: 20,
          successRate: 78,
          color: '#F59E0B'
        },
        {
          id: '4',
          name: 'Biology',
          nameAr: 'الأحياء',
          progress: 80,
          completedLessons: 16,
          totalLessons: 20,
          successRate: 90,
          color: '#EF4444'
        }
      ]);

      // بيانات الرسم البياني
      setChartData([
        { name: 'الأحد', progress: 65, lessons: 3 },
        { name: 'الإثنين', progress: 70, lessons: 4 },
        { name: 'الثلاثاء', progress: 68, lessons: 3 },
        { name: 'الأربعاء', progress: 72, lessons: 5 },
        { name: 'الخميس', progress: 75, lessons: 4 },
        { name: 'الجمعة', progress: 73, lessons: 3 },
        { name: 'السبت', progress: 75, lessons: 2 }
      ]);

      // بيانات الإنجازات
      setAchievements([
        {
          id: '1',
          title: 'البداية القوية',
          description: 'أكمل درسك الأول',
          icon: '🎯',
          unlocked: true,
          progress: 1,
          maxProgress: 1,
          points: 10,
          unlockedAt: new Date('2024-01-15')
        },
        {
          id: '2',
          title: 'الطالب المجتهد',
          description: 'أكمل 10 دروس',
          icon: '📚',
          unlocked: true,
          progress: 10,
          maxProgress: 10,
          points: 50,
          unlockedAt: new Date('2024-01-20')
        },
        {
          id: '3',
          title: 'عبقري الرياضيات',
          description: 'احصل على 100% في 5 اختبارات رياضيات',
          icon: '🧮',
          unlocked: true,
          progress: 5,
          maxProgress: 5,
          points: 100,
          unlockedAt: new Date('2024-01-25')
        },
        {
          id: '4',
          title: 'أسبوع مثالي',
          description: 'ادرس كل يوم لمدة أسبوع',
          icon: '🔥',
          unlocked: true,
          progress: 7,
          maxProgress: 7,
          points: 75
        },
        {
          id: '5',
          title: 'نصف الطريق',
          description: 'أكمل 50% من المنهج',
          icon: '🎖️',
          unlocked: false,
          progress: 45,
          maxProgress: 60,
          points: 200
        },
        {
          id: '6',
          title: 'البطل الأسطوري',
          description: 'أكمل جميع الدروس بنجاح',
          icon: '👑',
          unlocked: false,
          progress: 45,
          maxProgress: 100,
          points: 500
        }
      ]);

      // بيانات لوحة المتصدرين
      setLeaderboard([
        { rank: 1, id: '1', name: 'أحمد محمد', points: 3250, level: 15, avatar: '👨‍🎓' },
        { rank: 2, id: '2', name: 'فاطمة علي', points: 2890, level: 14, avatar: '👩‍🎓' },
        { rank: 3, id: '3', name: 'أنت', points: 2450, level: 12, avatar: '🎯', isCurrentUser: true },
        { rank: 4, id: '4', name: 'محمد سالم', points: 2200, level: 11, avatar: '👨‍🎓' },
        { rank: 5, id: '5', name: 'نور الهدى', points: 2150, level: 10, avatar: '👩‍🎓' },
        { rank: 6, id: '6', name: 'يوسف أحمد', points: 2000, level: 10, avatar: '👨‍🎓' },
        { rank: 7, id: '7', name: 'مريم حسن', points: 1850, level: 9, avatar: '👩‍🎓' },
        { rank: 8, id: '8', name: 'عبدالله خالد', points: 1700, level: 8, avatar: '👨‍🎓' },
        { rank: 9, id: '9', name: 'آية محمود', points: 1650, level: 8, avatar: '👩‍🎓' },
        { rank: 10, id: '10', name: 'عمر سامي', points: 1500, level: 7, avatar: '👨‍🎓' }
      ]);

    } catch (error) {
      console.error('Error fetching progress data:', error);
    } finally {
      setLoading(false);
    }
  };

  // دالة لحساب اللون حسب النسبة
  const getProgressColor = (progress: number) => {
    if (progress >= 80) return '#10B981';
    if (progress >= 60) return '#F59E0B';
    return '#EF4444';
  };

  // دالة للرقم المتحرك
  const AnimatedNumber = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      const duration = 1000;
      const steps = 50;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [value]);

    return <span>{displayValue}{suffix}</span>;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-700 font-medium">جاري تحميل بيانات التقدم...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold mb-2">لوحة التقدم والإنجازات</h1>
          <p className="text-blue-100">تابع تقدمك وإنجازاتك في رحلة التعلم</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* القسم الأول: Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between mb-4">
              <Activity className="h-8 w-8 opacity-80" />
              <span className="text-3xl font-bold">
                <AnimatedNumber value={progressData?.overall || 0} suffix="%" />
              </span>
            </div>
            <h3 className="font-semibold mb-1">التقدم الإجمالي</h3>
            <p className="text-sm opacity-90">من إجمالي المنهج</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="h-8 w-8 opacity-80" />
              <span className="text-3xl font-bold">
                <AnimatedNumber value={progressData?.completedLessons || 0} />
                <span className="text-xl">/{progressData?.totalLessons}</span>
              </span>
            </div>
            <h3 className="font-semibold mb-1">الدروس المكتملة</h3>
            <p className="text-sm opacity-90">درس مكتمل</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between mb-4">
              <Clock className="h-8 w-8 opacity-80" />
              <span className="text-3xl font-bold">
                <AnimatedNumber value={progressData?.studyHours || 0} />
                <span className="text-xl"> ساعة</span>
              </span>
            </div>
            <h3 className="font-semibold mb-1">ساعات التعلم</h3>
            <p className="text-sm opacity-90">إجمالي وقت الدراسة</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <div className="flex items-center justify-between mb-4">
              <Trophy className="h-8 w-8 opacity-80" />
              <span className="text-3xl font-bold">
                <AnimatedNumber value={progressData?.successRate || 0} suffix="%" />
              </span>
            </div>
            <h3 className="font-semibold mb-1">معدل النجاح</h3>
            <p className="text-sm opacity-90">في الاختبارات</p>
          </Card>
        </div>

        {/* القسم الثاني: رسم بياني للتقدم */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">التقدم عبر الوقت</h2>
            <div className="flex gap-2">
              {(['daily', 'weekly', 'monthly'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    timeRange === range
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {range === 'daily' ? 'يومي' : range === 'weekly' ? 'أسبوعي' : 'شهري'}
                </button>
              ))}
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#3B82F6"
                strokeWidth={3}
                name="التقدم %"
                dot={{ fill: '#3B82F6', r: 6 }}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="lessons"
                stroke="#10B981"
                strokeWidth={3}
                name="الدروس المكتملة"
                dot={{ fill: '#10B981', r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* القسم الثالث: نقاط القوة والضعف */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">نقاط القوة والضعف</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-3">نقاط القوة 💪</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">الرياضيات - المعادلات</span>
                    <span className="text-green-600 font-bold">95%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">الفيزياء - الحركة</span>
                    <span className="text-green-600 font-bold">92%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">الأحياء - الخلية</span>
                    <span className="text-green-600 font-bold">90%</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-orange-600 mb-3">تحتاج مراجعة 📚</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">الكيمياء - التفاعلات</span>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-600 font-bold">65%</span>
                      <Button size="sm" variant="secondary">مراجعة</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">الفيزياء - الكهرباء</span>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-600 font-bold">70%</span>
                      <Button size="sm" variant="secondary">مراجعة</Button>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-4 bg-blue-50 border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">💡 توصيات الدراسة</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• ركز على مراجعة التفاعلات الكيميائية</li>
                  <li>• حل المزيد من تمارين الكهرباء</li>
                  <li>• استمر في الأداء الممتاز في الرياضيات</li>
                </ul>
              </Card>
            </div>
          </Card>

          {/* القسم الرابع: التقدم حسب المادة */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">التقدم حسب المادة</h2>

            <div className="space-y-4">
              {subjectProgress.map((subject) => (
                <div key={subject.id}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{subject.nameAr}</span>
                    <span className="text-sm text-gray-600">
                      {subject.completedLessons}/{subject.totalLessons} درس
                    </span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="h-3 rounded-full transition-all duration-500"
                        style={{
                          width: `${subject.progress}%`,
                          backgroundColor: subject.color
                        }}
                      />
                    </div>
                    <span
                      className="absolute -top-1 text-xs font-bold text-white px-2 py-0.5 rounded"
                      style={{
                        left: `${subject.progress - 5}%`,
                        backgroundColor: subject.color
                      }}
                    >
                      {subject.progress}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-500">معدل النجاح: {subject.successRate}%</span>
                  </div>
                </div>
              ))}
            </div>

            {/* رسم بياني دائري للمواد */}
            <div className="mt-6">
              <ResponsiveContainer width="100%" height={200}>
                <RePieChart>
                  <Pie
                    data={subjectProgress}
                    dataKey="completedLessons"
                    nameKey="nameAr"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    label={(entry) => `${entry.nameAr}: ${entry.completedLessons}`}
                  >
                    {subjectProgress.map((entry) => (
                      <Cell key={entry.id} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* القسم الخامس: لوحة المتصدرين */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">🏆 لوحة المتصدرين</h2>
              <span className="text-sm text-gray-600">الأسبوع الحالي</span>
            </div>

            <div className="space-y-3">
              {leaderboard.map((entry) => {
                const getRankIcon = () => {
                  if (entry.rank === 1) return <Crown className="h-6 w-6 text-yellow-500" />;
                  if (entry.rank === 2) return <Medal className="h-6 w-6 text-gray-400" />;
                  if (entry.rank === 3) return <Medal className="h-6 w-6 text-orange-600" />;
                  return <span className="text-lg font-bold text-gray-600">#{entry.rank}</span>;
                };

                return (
                  <div
                    key={entry.id}
                    className={`flex items-center gap-4 p-3 rounded-lg transition-all ${
                      entry.isCurrentUser
                        ? 'bg-blue-50 border-2 border-blue-300'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex-shrink-0 w-8">{getRankIcon()}</div>
                    <div className="text-2xl">{entry.avatar}</div>
                    <div className="flex-1">
                      <div className="font-medium">
                        {entry.name}
                        {entry.isCurrentUser && (
                          <span className="text-blue-600 text-sm mr-2">(أنت)</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">المستوى {entry.level}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{entry.points}</div>
                      <div className="text-xs text-gray-500">نقطة</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button variant="secondary" className="w-full mt-4">
              عرض المزيد
            </Button>
          </Card>

          {/* القسم السادس: الإنجازات */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">🏅 الإنجازات</h2>
              <span className="text-sm text-gray-600">
                {achievements.filter(a => a.unlocked).length}/{achievements.length} مفتوح
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`relative p-4 rounded-lg text-center transition-all cursor-pointer ${
                    achievement.unlocked
                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 hover:shadow-lg transform hover:scale-105'
                      : 'bg-gray-100 opacity-60'
                  }`}
                >
                  {!achievement.unlocked && (
                    <Lock className="absolute top-2 right-2 h-4 w-4 text-gray-400" />
                  )}
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <h4 className="text-xs font-semibold mb-1">{achievement.title}</h4>
                  <p className="text-xs text-gray-600 mb-2">{achievement.description}</p>
                  {achievement.unlocked ? (
                    <div className="text-xs font-bold text-green-600">+{achievement.points} نقطة</div>
                  ) : (
                    <div className="mt-2">
                      <div className="w-full bg-gray-300 rounded-full h-1.5">
                        <div
                          className="bg-blue-600 h-1.5 rounded-full"
                          style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500">
                        {achievement.progress}/{achievement.maxProgress}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-purple-900">الإنجاز القادم</h4>
                  <p className="text-sm text-purple-700">أكمل 5 دروس إضافية</p>
                </div>
                <div className="text-2xl">🎯</div>
              </div>
              <div className="mt-2 w-full bg-purple-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
          </Card>
        </div>

        {/* إحصائيات إضافية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center">
            <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold mb-1">{progressData?.streak || 0} يوم</h3>
            <p className="text-gray-600">سلسلة الأيام المتتالية</p>
          </Card>

          <Card className="p-6 text-center">
            <Trophy className="h-12 w-12 text-blue-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold mb-1">#{progressData?.rank || 0}</h3>
            <p className="text-gray-600">ترتيبك في الصف</p>
          </Card>

          <Card className="p-6 text-center">
            <Star className="h-12 w-12 text-purple-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold mb-1">{progressData?.points || 0}</h3>
            <p className="text-gray-600">إجمالي النقاط</p>
          </Card>
        </div>

        {/* أزرار التنقل */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => router.push('/dashboard')}
            className="flex items-center justify-center gap-2"
          >
            <ArrowUp className="h-5 w-5" />
            العودة للوحة التحكم
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={() => router.push('/subjects')}
            className="flex items-center justify-center gap-2"
          >
            <BookOpen className="h-5 w-5" />
            استكشف المواد
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => router.push('/achievements')}
            className="flex items-center justify-center gap-2"
          >
            <Award className="h-5 w-5" />
            كل الإنجازات
          </Button>
        </div>
      </div>
    </div>
  );
}