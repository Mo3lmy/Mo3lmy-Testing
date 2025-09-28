# Mo3lmy Platform - منصة معلمي التعليمية

## نبذة عن المشروع

منصة معلمي هي منصة تعليمية متكاملة تهدف إلى تحويل التجربة التعليمية في الوطن العربي من خلال دمج أحدث تقنيات الذكاء الاصطناعي مع أساليب التعلم الحديثة. تم تصميم المنصة لتلبي احتياجات الطلاب في مختلف المراحل الدراسية، مع التركيز بشكل خاص على المناهج المصرية والعربية.

## الرؤية والرسالة

**رؤيتنا:** أن نكون الرائدين في مجال التعليم الذكي في الوطن العربي، ونساهم في بناء جيل متعلم قادر على مواكبة التطورات التكنولوجية.

**رسالتنا:** توفير بيئة تعليمية تفاعلية وذكية تتكيف مع احتياجات كل طالب، وتوظف أحدث التقنيات لجعل التعلم أكثر متعة وفعالية.

## المميزات الأساسية

### 1. التعلم التكيفي الذكي
المنصة تستخدم خوارزميات متقدمة لتحليل أداء الطالب وتكييف المحتوى التعليمي بناءً على:
- مستوى الفهم الحالي
- سرعة التعلم الفردية
- نقاط القوة والضعف
- أسلوب التعلم المفضل (بصري، سمعي، حركي)

### 2. المساعد التعليمي بالذكاء الاصطناعي
مساعد ذكي متاح على مدار الساعة يقدم:
- إجابات فورية على الاستفسارات
- شرح مفصل للمفاهيم الصعبة
- مساعدة في حل الواجبات والتمارين
- دعم باللغتين العربية والإنجليزية

### 3. نظام الذكاء العاطفي
تقنية فريدة لرصد وتحليل الحالة النفسية للطالب:
- تحديد مستوى التوتر والقلق
- قياس مستوى الثقة والحماس
- تقديم الدعم النفسي والتحفيزي المناسب
- تنبيهات لأولياء الأمور عند الحاجة

### 4. نظام التقييم الشامل
- اختبارات تكيفية تتناسب مع مستوى كل طالب
- تصحيح فوري مع شرح للأخطاء
- تحليل تفصيلي للأداء
- توصيات للتحسين

### 5. التلعيب والمكافآت
- نقاط خبرة ومستويات
- شارات إنجاز
- تحديات يومية وأسبوعية
- مسابقات بين الطلاب
- مكافآت افتراضية قابلة للاستبدال

### 6. تقارير أولياء الأمور
- تقارير دورية مفصلة
- متابعة التقدم الأكاديمي
- رصد الحالة النفسية
- توصيات للدعم المنزلي

## البنية التقنية

### التقنيات الأساسية

#### Backend Architecture
- **Runtime Environment:** Node.js v18+
- **Primary Language:** TypeScript
- **Web Framework:** Express.js
- **Database ORM:** Prisma
- **Database:** SQLite (Development) / PostgreSQL (Production)
- **Caching:** Redis
- **Real-time Communication:** Socket.io
- **Task Queue:** BullMQ

#### Frontend Architecture
- **Framework:** Next.js 15
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Data Fetching:** React Query
- **Form Handling:** React Hook Form
- **Animation:** Framer Motion

#### AI & Machine Learning
- **Language Model:** OpenAI GPT-4
- **Embeddings:** OpenAI text-embedding-3
- **RAG Framework:** LangChain
- **Vector Search:** Custom implementation
- **Voice Synthesis:** ElevenLabs

#### DevOps & Infrastructure
- **Version Control:** Git
- **Package Management:** npm
- **Process Management:** PM2
- **Monitoring:** Custom logging system
- **Testing:** Jest, React Testing Library

### الخدمات المتكاملة

#### Content Processing Pipeline
- معالجة المحتوى التعليمي الخام
- إثراء المحتوى بالوسائط المتعددة
- توليد التمارين والأسئلة
- إنشاء الشرائح التفاعلية

#### Real-time Services
- محادثات فورية مع المساعد الذكي
- تحديثات مباشرة للتقدم
- إشعارات فورية
- جلسات تعليمية تفاعلية

#### Analytics Engine
- تحليل أنماط التعلم
- تتبع الأداء
- توقع الصعوبات المستقبلية
- توصيات مخصصة

## هيكل المشروع

```
Mo3lmy-Testing/
│
├── src/                          # Source code للخادم
│   ├── api/                     # RESTful APIs & Routes
│   │   ├── middleware/          # Authentication, validation, etc.
│   │   └── rest/               # API endpoints
│   │
│   ├── core/                    # Core business logic
│   │   ├── auth/               # Authentication system
│   │   ├── content/            # Content management
│   │   ├── quiz/               # Quiz generation & evaluation
│   │   ├── rag/                # RAG implementation
│   │   └── progress/           # Progress tracking
│   │
│   ├── services/                # External services integration
│   │   ├── ai/                 # AI services (OpenAI, etc.)
│   │   ├── teaching/           # Teaching assistant logic
│   │   ├── websocket/          # Real-time communication
│   │   └── queue/              # Background jobs
│   │
│   └── config/                  # Configuration files
│
├── frontend/                     # Next.js application
│   ├── app/                     # App router pages
│   ├── components/              # Reusable components
│   ├── hooks/                   # Custom React hooks
│   ├── services/                # API client services
│   └── styles/                  # Global styles
│
├── prisma/                       # Database schema & migrations
│   ├── migrations/              # Database migrations
│   └── schema.prisma            # Database schema definition
│
├── data/                         # Educational content
│   └── curriculum/              # Structured curriculum data
│
├── public/                       # Static assets
├── temp/                         # Temporary files
└── dist/                         # Compiled JavaScript
```

## متطلبات التشغيل

### System Requirements
- **OS:** Windows 10+, macOS 10.15+, Ubuntu 20.04+
- **Node.js:** 18.0.0 or higher
- **npm:** 9.0.0 or higher
- **RAM:** Minimum 2GB, Recommended 4GB
- **Storage:** 500MB free space

### Required Services
- Redis Server (Optional for development)
- PostgreSQL (For production)

## دليل التثبيت

### 1. Clone Repository
```bash
git clone https://github.com/Mo3lmy/Mo3lmy-Testing.git
cd Mo3lmy-Testing
```

### 2. Install Dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 3. Environment Configuration
```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your configurations
# Make sure to update:
# - DATABASE_URL
# - OPENAI_API_KEY
# - JWT_SECRET
# - Other service keys
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Seed initial data
npm run db:seed
```

### 5. Content Processing
```bash
# Process educational content
npm run content:process

# Generate embeddings for RAG
npm run embeddings:generate
```

### 6. Start Development Servers
```bash
# Terminal 1: Start backend & worker
npm run dev

# Terminal 2: Start frontend
cd frontend
npm run dev
```

Access the application at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## Available Scripts

### Backend Scripts
```bash
npm run dev                 # Start development server
npm run build              # Build for production
npm run start              # Start production server
npm run worker:dev         # Start worker in development
npm run test               # Run tests
npm run lint               # Run linter
npm run typecheck          # Type checking
```

### Database Scripts
```bash
npm run db:migrate         # Run migrations
npm run db:generate        # Generate Prisma client
npm run db:seed            # Seed database
npm run db:reset           # Reset database
npm run db:studio          # Open Prisma Studio
```

### Content Scripts
```bash
npm run content:process    # Process educational content
npm run content:verify     # Verify content integrity
npm run embeddings:generate # Generate embeddings
npm run rag:index          # Index RAG content
```

## API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123",
  "firstName": "أحمد",
  "lastName": "محمد",
  "grade": 10
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123"
}
```

### Content Endpoints

#### Get Subjects
```http
GET /api/subjects
Authorization: Bearer {token}
```

#### Get Lesson Details
```http
GET /api/lessons/{lessonId}
Authorization: Bearer {token}
```

#### Get Enriched Content
```http
GET /api/content/enriched/{lessonId}
Authorization: Bearer {token}
```

### Quiz Endpoints

#### Generate Quiz
```http
POST /api/quiz/generate
Authorization: Bearer {token}
Content-Type: application/json

{
  "lessonId": "lesson_123",
  "difficulty": "medium",
  "questionCount": 10
}
```

#### Submit Quiz
```http
POST /api/quiz/submit
Authorization: Bearer {token}
Content-Type: application/json

{
  "quizId": "quiz_456",
  "answers": [...]
}
```

### Chat Endpoints

#### Send Message
```http
POST /api/chat/message
Authorization: Bearer {token}
Content-Type: application/json

{
  "message": "اشرح لي الدرس",
  "lessonId": "lesson_123"
}
```

### WebSocket Events

#### Connection
```javascript
const socket = io('http://localhost:3001', {
  auth: { token: 'Bearer {token}' }
});
```

#### Available Events
- `chat:message` - Send/receive chat messages
- `progress:update` - Progress updates
- `notification` - System notifications
- `achievement:unlocked` - Achievement notifications

## Performance Optimization

### Caching Strategy
- Redis for session management
- In-memory cache for frequently accessed data
- Browser caching for static assets
- CDN integration ready

### Database Optimization
- Indexed queries for fast retrieval
- Connection pooling
- Query optimization with Prisma
- Batch operations for bulk data

### AI Optimization
- Response caching for similar queries
- Embedding cache for vector search
- Batch processing for AI operations
- Rate limiting and throttling

## Security Measures

### Authentication & Authorization
- JWT-based authentication
- Role-based access control (RBAC)
- Session management
- Password hashing with bcrypt

### Data Protection
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CORS configuration

### API Security
- Rate limiting
- Request throttling
- API key management
- Audit logging

## Testing

### Unit Tests
```bash
npm run test:unit
```

### Integration Tests
```bash
npm run test:integration
```

### E2E Tests
```bash
npm run test:e2e
```

### Coverage Report
```bash
npm run test:coverage
```

## Deployment

### Production Build
```bash
# Build backend
npm run build

# Build frontend
cd frontend
npm run build
```

### Environment Variables
Ensure all production environment variables are properly set:
- Database credentials
- API keys
- JWT secrets
- Redis connection
- Service URLs

### Process Management
```bash
# Using PM2
pm2 start ecosystem.config.js
```

### Database Migration
```bash
# Run production migrations
npx prisma migrate deploy
```

## Monitoring & Maintenance

### Health Checks
- `/api/health` - System health status
- `/api/metrics` - Performance metrics

### Logging
- Application logs in `./logs/`
- Error tracking
- Performance monitoring
- User activity tracking

### Backup Strategy
- Daily database backups
- Content versioning
- User data export functionality

## Troubleshooting

### Common Issues

#### Database Connection Failed
```bash
# Check database status
npx prisma studio

# Reset database if needed
npm run db:reset
```

#### Redis Connection Error
```bash
# Check Redis service
redis-cli ping

# Start Redis if not running
redis-server
```

#### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

## Contributing Guidelines

نرحب بمساهمات المجتمع التقني. للمساهمة في المشروع:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Standards
- Follow TypeScript best practices
- Use ESLint and Prettier
- Write unit tests for new features
- Document API changes
- Update README when needed

### Commit Convention
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `test:` Testing
- `chore:` Maintenance

## الدعم الفني

للحصول على الدعم الفني أو الإبلاغ عن المشاكل:

📧 **Email:** molmyplatform@gmail.com
🐛 **Issues:** [GitHub Issues](https://github.com/Mo3lmy/Mo3lmy-Testing/issues)
📖 **Documentation:** [Wiki](https://github.com/Mo3lmy/Mo3lmy-Testing/wiki)

## الفريق

تم تطوير منصة معلمي بواسطة **فريق الرواد** - مجموعة من المطورين والمختصين في مجال تقنيات التعليم، يجمعهم شغف مشترك لتطوير التعليم في الوطن العربي.


## الرخصة

Copyright © 2024 فريق الرواد. جميع الحقوق محفوظة.

هذا البرنامج محمي بموجب حقوق الملكية الفكرية. يُحظر استخدام أو نسخ أو تعديل أو توزيع أي جزء من هذا البرنامج دون الحصول على إذن كتابي صريح من فريق الرواد.

للاستفسار عن الترخيص التجاري، يرجى التواصل عبر: molmyplatform@gmail.com

---

**منصة معلمي** - نحو تعليم أذكى ومستقبل أفضل 🚀
