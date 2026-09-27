/* =========================================================
   作品集内容配置 —— 以后只需要改这个文件
   ---------------------------------------------------------
   【多语言】凡是写成 { zh: "简体", zht: "繁體", en: "English", ja: "日本語", fr: "Français", ko: "한국어" }
            的地方，右上角切换语言时会自动换。
            没写的语言会自动退回：繁体 → 简体，其它 → 英文 → 简体。
            只写一种也可以：直接写 "文字"。
   【图片】image 留空 ""：自动画一张繁花拼贴图（占位）
          填路径：例如 "images/campus-cover.jpg"；或完整网址
   【配色】theme 决定占位拼贴的配色：
          "rose" 粉玫瑰 / "blue" 蓝花蝴蝶 / "garden" 红花鼠尾草 / "pressed" 干燥压花 / "meadow" 黄色野花
   【案例】process、website、pdf 都可以删掉，删掉的部分详情页就不显示
   ========================================================= */

window.PORTFOLIO = {
  /* 个人信息
     photo：个人照片路径，例如 "images/me.jpg"；留空显示占位
     resume：简历 PDF（files/resume.pdf），替换同名文件即可更新
     about：关于我页面的段落；bio：首页名片下的一句话 */
  profile: {
    nameEn: [
      "Ziqi Zhou",
      "Cathy"
    ],
    nameZh: "周子淇",
    monogram: "Cathy Z.",
    ticker: "Ziqi Zhou's portfolio",
    sealLetter: "C",
    photo: "",
    heroImage: "",
    tag: {
      zh: "交互设计 · Interaction Design Portfolio",
      zht: "互動設計 · Interaction Design Portfolio",
      en: "Interaction Design Portfolio",
      ja: "インタラクションデザイン · ポートフォリオ",
      fr: "Design d'Interaction · Portfolio",
      ko: "인터랙션 디자인 · 포트폴리오"
    },
    tagline: {
      zh: "用设计连接人与体验",
      zht: "用設計連接人與體驗",
      en: "Connecting people through design",
      ja: "デザインで人と体験をつなぐ",
      fr: "Connecter les personnes à travers le design",
      ko: "디자인으로 사람과 경험을 연결하다"
    },
    bio: {
      zh: "我是周子淇（Cathy），Sheridan College 交互设计荣誉学士在读，一名以用户体验为核心的视觉设计师，希望让数字体验更好用、更有温度。",
      zht: "我是周子淇（Cathy），Sheridan College 互動設計榮譽學士在讀，一名以用戶體驗為核心的視覺設計師，希望讓數位體驗更好用、更有溫度。",
      en: "I'm Ziqi Zhou (Cathy), an Honours Bachelor of Interaction Design student at Sheridan College and a UX-focused visual designer who wants to make digital experiences better.",
      ja: "周子淇（Cathy）です。Sheridan College でインタラクションデザイン（Honours Bachelor）を学ぶ、UX を軸にしたビジュアルデザイナーです。",
      fr: "Je suis Ziqi Zhou (Cathy), étudiante en Honours Bachelor of Interaction Design à Sheridan College, designer visuelle centrée sur l'expérience utilisateur.",
      ko: "저는 저우쯔치(Cathy)입니다. Sheridan College 인터랙션 디자인 우등 학사 과정에 재학 중인, 사용자 경험 중심의 비주얼 디자이너입니다."
    },
    aboutHeading: {
      zh: "以<em>好奇心</em>驱动的<br>设计师",
      zht: "以<em>好奇心</em>驅動的<br>設計師",
      en: "A designer driven<br>by <em>curiosity</em>",
      ja: "<em>好奇心</em>で動く<br>デザイナー",
      fr: "Une designer portée<br>par la <em>curiosité</em>",
      ko: "<em>호기심</em>으로 이끄는<br>디자이너"
    },
    about: [
      {
        zh: "你好！我是周子淇（Cathy），在 Sheridan College 攻读交互设计荣誉学士（预计 2028 年 4 月毕业）。我是一名以用户体验为核心的视觉设计师，热衷于让数字体验变得更清晰、更好用。",
        zht: "你好！我是周子淇（Cathy），在 Sheridan College 攻讀互動設計榮譽學士（預計 2028 年 4 月畢業）。我是一名以用戶體驗為核心的視覺設計師，熱衷於讓數位體驗變得更清晰、更好用。",
        en: "Hi! I'm Ziqi Zhou (Cathy), studying for an Honours Bachelor of Interaction Design at Sheridan College (expected April 2028). I'm a UX-focused visual designer, passionate about making digital experiences clearer and easier to use.",
        ja: "こんにちは！周子淇（Cathy）です。Sheridan College でインタラクションデザインの Honours Bachelor を学んでいます（2028年4月卒業予定）。UX を軸にしたビジュアルデザイナーとして、デジタル体験をもっとわかりやすく使いやすくすることに取り組んでいます。",
        fr: "Bonjour ! Je suis Ziqi Zhou (Cathy), en Honours Bachelor of Interaction Design à Sheridan College (diplôme prévu en avril 2028). Designer visuelle centrée sur l'UX, j'aime rendre les expériences numériques plus claires et plus simples.",
        ko: "안녕하세요! 저우쯔치(Cathy)입니다. Sheridan College에서 인터랙션 디자인 우등 학사 과정을 공부하고 있습니다(2028년 4월 졸업 예정). 사용자 경험 중심의 비주얼 디자이너로서 디지털 경험을 더 명확하고 쓰기 쉽게 만드는 일에 열정을 갖고 있습니다."
      },
      {
        zh: "我的课程和项目涵盖用户研究、信息架构、线框图到高保真原型、品牌与字体排版，以及用 p5.js、Makey Makey 和 Arduino 做的实体与声音交互。我擅长用 Figma 和 ProtoPie 做交互原型，也会用 HTML / CSS / JavaScript 把设计做成真正可用的网页。",
        zht: "我的課程和項目涵蓋用戶研究、資訊架構、線框圖到高保真原型、品牌與字體排版，以及用 p5.js、Makey Makey 和 Arduino 做的實體與聲音互動。我擅長用 Figma 和 ProtoPie 做互動原型，也會用 HTML / CSS / JavaScript 把設計做成真正可用的網頁。",
        en: "My coursework and projects cover UX research, information architecture, wireframes through to high-fidelity prototypes, branding and typography, and physical and sound interaction with p5.js, Makey Makey and Arduino. I prototype in Figma and ProtoPie and build working websites in HTML, CSS and JavaScript.",
        ja: "授業やプロジェクトでは、UXリサーチ、情報設計、ワイヤーフレームから高精度プロトタイプ、ブランディングとタイポグラフィ、そして p5.js・Makey Makey・Arduino を使ったフィジカル／サウンドインタラクションに取り組んできました。Figma と ProtoPie でプロトタイプを作り、HTML・CSS・JavaScript で実際に動くサイトを制作します。",
        fr: "Mes cours et projets couvrent la recherche UX, l'architecture de l'information, des wireframes aux prototypes haute fidélité, l'identité visuelle et la typographie, ainsi que l'interaction physique et sonore avec p5.js, Makey Makey et Arduino. Je prototype dans Figma et ProtoPie et je code des sites en HTML, CSS et JavaScript.",
        ko: "수업과 프로젝트를 통해 UX 리서치, 정보 구조, 와이어프레임부터 고충실도 프로토타입, 브랜딩과 타이포그래피, 그리고 p5.js·Makey Makey·Arduino를 활용한 피지컬·사운드 인터랙션을 다뤄 왔습니다. Figma와 ProtoPie로 프로토타입을 만들고 HTML·CSS·JavaScript로 실제 작동하는 웹사이트를 구현합니다."
      },
      {
        zh: "在团队里，我是那个让事情顺利推进的人：组织能力强、注重细节，愿意承担支持和协调的角色。课外我负责中国学生学者联合会（CSSA）的社交媒体运营，也曾参加 Hult Prize 2025 加拿大全国赛。我能用英语和普通话工作。",
        zht: "在團隊裡，我是那個讓事情順利推進的人：組織能力強、注重細節，願意承擔支持和協調的角色。課外我負責中國學生學者聯合會（CSSA）的社群媒體營運，也曾參加 Hult Prize 2025 加拿大全國賽。我能用英語和普通話工作。",
        en: "In a team I'm the one who keeps things moving: organised, detail-minded and happy to take on a supporting, coordinating role. Outside class I run social media for the Chinese Students and Scholars Association (CSSA), and I competed in the Hult Prize 2025 Canada National Competition. I work in English and Mandarin.",
        ja: "チームでは物事を円滑に進める役割が得意です。整理力があり、細部に気を配り、サポートや調整役を進んで引き受けます。授業外では中国学生学者連合会（CSSA）のSNS運用を担当し、Hult Prize 2025 カナダ全国大会にも参加しました。英語と中国語（普通話）で仕事ができます。",
        fr: "En équipe, je fais avancer les choses : organisée, attentive aux détails et à l'aise dans un rôle de soutien et de coordination. En dehors des cours, je gère les réseaux sociaux de la Chinese Students and Scholars Association (CSSA) et j'ai participé à la finale nationale canadienne du Hult Prize 2025. Je travaille en anglais et en mandarin.",
        ko: "팀에서는 일이 원활하게 진행되도록 돕는 역할을 맡습니다. 조직력이 좋고 세부 사항에 신경 쓰며, 지원과 조율 역할을 기꺼이 맡습니다. 수업 외에는 중국 학생학자 연합회(CSSA)의 소셜 미디어 운영을 담당하고 있으며, Hult Prize 2025 캐나다 전국 대회에도 참가했습니다. 영어와 중국어(표준어)로 일할 수 있습니다."
      }
    ],
    philosophy: {
      lead: {
        zh: "我为那些“心思在别处”的时刻做设计：课间赶路的学生、在候诊室里等待的病人。好的交互设计，应该让人在不注意界面的情况下，顺利拿到他们需要的东西。",
        en: "I design for the moments when people's minds are somewhere else: a student rushing between classes, a patient sitting in a waiting room. Good interaction design lets them get what they need without having to think about the interface."
      },
      principles: [
        {
          title: {
            zh: "先理解人，再设计界面",
            en: "People before screens"
          },
          text: {
            zh: "我从人出发，而不是从屏幕出发。访谈、观察和旅程地图让我看到人们真实的行为，而它往往和需求说明里的假设不一样。我把研究发现当成设计材料，在整个项目中不断回头对照。",
            en: "I start with people, not screens. Interviews, observation and journey maps show me how people actually behave, which is rarely what a brief assumes. I treat research findings as design material and keep returning to them as the work develops."
          }
        },
        {
          title: {
            zh: "用原型提问",
            en: "Prototype to learn"
          },
          text: {
            zh: "每一个版本都是一个问题：它有没有让任务变得更容易？和真实用户做小而快的测试，比打磨一个没人试过的设计更有价值。能量化的地方我会量化，比如任务完成率，再让结果决定下一轮迭代。",
            en: "Every version is a question: does this make the task easier? Small, fast tests with real users teach me more than polishing a design nobody has tried. Where I can, I measure the answer, for example with task completion rates, and let the result decide the next iteration."
          }
        },
        {
          title: {
            zh: "设计完整的体验",
            en: "Design the whole journey"
          },
          text: {
            zh: "服务设计让我明白，屏幕之外的东西同样重要：等待、指引、标识上的一句话，都会影响人的感受。我希望我的作品清晰、对不同年龄和能力的人都友好，并且体贴得恰到好处。",
            en: "Service design taught me that what happens off-screen matters just as much: waiting, wayfinding and the words on a sign all shape how people feel. I want my work to be clear, accessible to people of every age and ability, and quietly considerate."
          }
        }
      ]
    },
    city: "Toronto",
    timezone: "America/Toronto",
    status: {
      zh: "寻找 2026 实习机会",
      zht: "尋找 2026 實習機會",
      en: "Looking for 2026 internships",
      ja: "2026年のインターンを探しています",
      fr: "À la recherche d'un stage 2026",
      ko: "2026 인턴십 구하는 중"
    },
    email: "zhou37@sheridancollege.ca",
    resume: "files/resume.pdf",
    contactHeading: {
      zh: "一起创造<em>有意义</em>的设计",
      zht: "一起創造<em>有意義</em>的設計",
      en: "Let's create something <em>meaningful</em>",
      ja: "一緒に<em>意味のある</em>デザインを",
      fr: "Créons quelque chose <em>de sens</em>",
      ko: "함께 <em>의미 있는</em> 디자인을"
    },
    contactSub: {
      zh: "如果你有任何合作想法、实习机会，或只是想打个招呼，都欢迎联系我！",
      zht: "如果你有任何合作想法、實習機會，或只是想打個招呼，都歡迎聯絡我！",
      en: "Whether you have a collaboration idea, an internship opportunity, or just want to say hello — feel free to reach out!",
      ja: "コラボレーションのアイデア、インターンシップの機会、または単なる挨拶でも、お気軽にご連絡ください！",
      fr: "Que vous ayez une idée de collaboration, une offre de stage, ou juste envie de dire bonjour — n'hésitez pas !",
      ko: "협업 아이디어, 인턴십 기회, 또는 인사라도 언제든지 연락 주세요!"
    },
    contactNote: {
      zh: "我目前在 Sheridan College 就读，欢迎关于实习合作、设计交流的联系。我会在 24 小时内回复邮件。",
      zht: "我目前在 Sheridan College 就讀，歡迎關於實習合作、設計交流的聯絡。我會在 24 小時內回覆郵件。",
      en: "I'm currently studying at Sheridan College and open to internship and design collaboration opportunities. I reply to emails within 24 hours.",
      ja: "現在 Sheridan College に在学中です。インターンシップやデザインコラボレーションに関するお問い合わせをお待ちしています。24時間以内に返信します。",
      fr: "J'étudie actuellement à Sheridan College et suis ouverte aux opportunités de stage et de collaboration design. Je réponds aux emails sous 24h.",
      ko: "현재 Sheridan College 재학 중이며 인턴십 및 디자인 협업 기회를 환영합니다. 이메일은 24시간 내에 답장드립니다."
    },
    contacts: [
      {
        type: "email",
        label: {
          zh: "邮件",
          zht: "郵件",
          en: "Email",
          ja: "メール",
          fr: "Email",
          ko: "이메일"
        },
        value: "zhou37@sheridancollege.ca",
        url: "mailto:zhou37@sheridancollege.ca"
      },
      {
        type: "linkedin",
        label: "LinkedIn",
        value: "Ziqi Zhou (Cathy)",
        url: "https://www.linkedin.com/in/ziqi-zhou-cathy-05oct/"
      },
      {
        type: "resume",
        label: {
          zh: "简历",
          zht: "簡歷",
          en: "Résumé",
          ja: "履歴書",
          fr: "CV",
          ko: "이력서"
        },
        value: {
          zh: "下载 PDF",
          zht: "下載 PDF",
          en: "Download PDF",
          ja: "PDF をダウンロード",
          fr: "Télécharger le PDF",
          ko: "PDF 다운로드"
        },
        url: "files/resume.pdf"
      }
    ],
    facts: [
      {
        k: {
          zh: "学校",
          zht: "學校",
          en: "School",
          ja: "学校",
          fr: "École",
          ko: "학교"
        },
        v: "Sheridan"
      },
      {
        k: {
          zh: "专业",
          zht: "專業",
          en: "Major",
          ja: "専攻",
          fr: "Filière",
          ko: "전공"
        },
        v: {
          zh: "交互设计",
          zht: "互動設計",
          en: "IxD",
          ja: "IxD",
          fr: "IxD",
          ko: "IxD"
        }
      },
      {
        k: {
          zh: "年份",
          zht: "年份",
          en: "Years",
          ja: "在学",
          fr: "Années",
          ko: "기간"
        },
        v: "2024—28"
      }
    ]
  },
  /* 作品分类（精选作品上方的标签）
     id 用英文；每个作品的 category 填这里的 id
     没有作品的分类会显示成灰色、点不了；想完全隐藏就把 hideEmptyCategories 改成 true */
  hideEmptyCategories: true,
  categories: [
    {
      id: "ux",
      zh: "UX 与网页",
      zht: "UX 與網頁",
      en: "UX & Web",
      ja: "UX・Web",
      fr: "UX & Web",
      ko: "UX & 웹"
    },
    {
      id: "physical",
      zh: "实体与交互",
      zht: "實體與互動",
      en: "Physical & Interactive",
      ja: "フィジカル・インタラクティブ",
      fr: "Physique & Interactif",
      ko: "피지컬 & 인터랙티브"
    },
    {
      id: "games",
      zh: "游戏与工具",
      zht: "遊戲與工具",
      en: "Games & Tools",
      ja: "ゲーム・ツール",
      fr: "Jeux & Outils",
      ko: "게임 & 도구"
    },
    {
      id: "brand",
      zh: "品牌与标识",
      zht: "品牌與標識",
      en: "Branding & Identity",
      ja: "ブランド・ロゴ",
      fr: "Identité visuelle",
      ko: "브랜딩 & 아이덴티티"
    },
    {
      id: "type",
      zh: "字体排版",
      zht: "字體排版",
      en: "Typography",
      ja: "タイポグラフィ",
      fr: "Typographie",
      ko: "타이포그래피"
    },
    {
      id: "client",
      zh: "客户",
      zht: "客戶",
      en: "Client",
      ja: "クライアント",
      fr: "Client",
      ko: "클라이언트"
    }
  ],

  /* ---------------- 作品 ----------------
     id：英文短名（小写字母、数字、-），网址里会用到：index.html#case-id
     category：填上面 categories 里的 id
     specs：详情页顶部的信息卡（课程、学期、工具、时长……），可以增减
     website：网站 / Figma / Protopie 原型链接
     pdf：src 填 PDF 链接（放在 files 文件夹里，或 Google Drive 预览链接）
     process：问题背景 / 用户研究 / 概念发想 / 设计迭代 / 测试与验证 / 最终成果
              每一步的 images 里可以放多张图片，例如 ["images/campus-01.jpg", "images/campus-02.jpg"]
     intro：首页卡片和详情页上的简短介绍
     outline：长流程大纲（只需要给一个作品写）；每一步有 text（段落）和 media：
              image 图片 / gallery 多张图 / video 视频 / diagram 图表 / stats 数字 / quotes 引用
     demo：做出来的成品网页（“体验成品”按钮），比如 Project 2、3
     view：作品的过程记录网站（“过程网站”按钮）（需要单独打开的那种）。填 { url: "projects/你的文件夹/index.html" } 或完整网址，
           作品卡片和详情页就会出现“点击查看”按钮，点击在新窗口打开
     draft: true 的作品不会显示；删掉这一行就会出现在网站上
     顺序就是网站上的顺序 */
  projects: [
    {
      id: "ixd-methods-art-club",
      category: "ux",
      course: "Interaction Design: Methods",
      title: {
        zh: "Art Discovery Club",
        en: "Art Discovery Club"
      },
      subtitle: {
        zh: "艺术社团网站设计",
        en: "Art club website design"
      },
      intro: {
        zh: "为一个线上艺术社团设计的网站，面向喜欢绘画、摄影和手工的学生。我先写了项目简介，做了三个用户画像，再画站点地图、整理每个页面的内容和用户流程，最后用 HTML、CSS 和 JavaScript 做出网站：首页、作品展示、活动日历、学习资源和关于我们五个部分，点击导航即可切换。",
        en: "A website for an online art club for students who love painting, photography and crafts. I wrote a project synopsis, created three personas, mapped the site, planned the content of each page and the user flow, then built it in HTML, CSS and JavaScript: five sections (Home, Works Show, Activities, Resources and About Us) that switch from the navigation bar."
      },
      summary: {
        zh: "",
        en: ""
      },
      tags: [
        "Web design",
        "Personas",
        "Site map",
        "HTML / CSS / JS"
      ],
      image: "images/projects/p4/site-works.webp",
      theme: "rose",
      demo: {
        url: "projects/Art-Discovery-Club/index.html",
        label: {
          zh: "体验成品 ↗",
          zht: "體驗成品 ↗",
          en: "Try final design ↗",
          ja: "完成作品を体験 ↗",
          fr: "Essayer le projet ↗",
          ko: "완성작 체험 ↗"
        }
      },
      links: [
        {
          label: {
            zh: "Figma 用户画像与流程 ↗",
            en: "Personas & user flow in Figma ↗"
          },
          url: "https://www.figma.com/board/eZnAjTyjzpCAYpULZaXTGF/Untitled?node-id=0-1&t=XDQmDIXaqYSB6vAE-1"
        }
      ],
      pdf: {
        src: "files/Art-Discovery-Club-Website-Documentation.pdf",
        pages: 21,
        label: "Art Discovery Club · Website Documentation.pdf"
      },
      specs: [
        {
          k: {
            zh: "课程",
            zht: "課程",
            en: "Course",
            ja: "コース",
            fr: "Cours",
            ko: "과목"
          },
          v: "Interaction Design: Methods"
        },
        {
          k: {
            zh: "课程代码",
            zht: "課程代碼",
            en: "Code",
            ja: "コード",
            fr: "Code",
            ko: "코드"
          },
          v: "DESN 19428"
        },
        {
          k: {
            zh: "学期",
            zht: "學期",
            en: "Term",
            ja: "学期",
            fr: "Session",
            ko: "학기"
          },
          v: {
            zh: "2024 秋季学期",
            en: "Fall 2024"
          }
        },
        {
          k: {
            zh: "提交日期",
            zht: "提交日期",
            en: "Submitted",
            ja: "提出日",
            fr: "Remis le",
            ko: "제출일"
          },
          v: {
            zh: "2024 年 10 月 2 日",
            en: "October 2, 2024"
          }
        },
        {
          k: {
            zh: "工具与材料",
            zht: "工具與材料",
            en: "Tools & materials",
            ja: "ツール・素材",
            fr: "Outils et matériaux",
            ko: "도구 · 재료"
          },
          v: {
            zh: "Figma、HTML、CSS、JavaScript",
            en: "Figma, HTML, CSS, JavaScript"
          }
        },
        {
          k: {
            zh: "作品类型",
            zht: "作品類型",
            en: "Type",
            ja: "種類",
            fr: "Type",
            ko: "유형"
          },
          v: {
            zh: "网站设计",
            en: "Website design"
          }
        }
      ],
      outline: [
        {
          key: "problem",
          title: {
            zh: "项目简介",
            en: "Synopsis"
          },
          text: [
            {
              zh: "Art Discovery Club 是一个设在线上的学生艺术社团，成员热爱绘画、摄影、雕塑和手工。社团通过工作坊、展览和讨论为大家提供创作和交流的平台，欢迎零基础的新手，也欢迎有经验的创作者。",
              en: "Art Discovery Club is a virtual student art community for people who love painting, photography, sculpture and crafts. Through workshops, exhibitions and discussions it gives members a place to create and share, open to complete beginners and experienced makers alike."
            },
            {
              zh: "这个项目的任务是为社团设计一个网站：让新成员了解社团、浏览大家的作品、查看活动并找到学习资源。",
              en: "The task was to design the club's website, so newcomers can learn about the club, browse members' work, find upcoming events and reach learning resources."
            }
          ],
          media: [
            {
              type: "image",
              src: "images/projects/p4/site-home.webp",
              alt: {
                zh: "网站首页：黑色页头、黄色背景和导航栏",
                en: "Website home: black header, yellow background and navigation"
              },
              caption: {
                zh: "网站首页",
                en: "Home page"
              },
              wide: true
            }
          ]
        },
        {
          key: "research",
          title: {
            zh: "用户画像",
            en: "Personas"
          },
          text: [
            {
              zh: "我根据社团可能的成员做了三个用户画像，分别有不同的目标、动机和困扰：",
              en: "I created three personas for likely members, each with different goals, motivations and frustrations:"
            },
            {
              zh: "Astrid，19 岁，心理学专业新生，有两年摄影和插画经验。她想探索艺术和心理健康的关系，但常常对自己的作品太苛刻，也搞不清技术细节。",
              en: "Astrid, 19, a first-year psychology student with two years of photography and illustration. She wants to explore how art and mental health connect, but is very self-critical and gets lost in technical details."
            },
            {
              zh: "Henry Nicholas，22 岁，视觉艺术学生，有三年绘画和摄影经验。他想提升绘画、学习雕塑、参加更多展览，但缺少自信，也找不到合适的平台。",
              en: "Henry Nicholas, 22, a visual arts student with three years of painting and photography. He wants to improve his drawing, learn sculpture and show in more exhibitions, but lacks confidence and can't find the right platform."
            },
            {
              zh: "Anastasia，22 岁，建筑专业学生，有五年模型制作和手绘经验。她想做多媒体艺术项目、和不同专业的人合作，但很难平衡学业和创作，也缺少专业反馈。",
              en: "Anastasia, 22, an architecture student with five years of model-making and hand drawing. She wants to do multimedia projects and collaborate across disciplines, but struggles to balance school and art, and lacks professional feedback."
            }
          ],
          media: [
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p4/persona-astrid.webp",
                  alt: {
                    zh: "用户画像：Astrid",
                    en: "Persona: Astrid"
                  },
                  caption: {
                    zh: "Astrid",
                    en: "Astrid"
                  }
                },
                {
                  src: "images/projects/p4/persona-henry.webp",
                  alt: {
                    zh: "用户画像：Henry Nicholas",
                    en: "Persona: Henry Nicholas"
                  },
                  caption: {
                    zh: "Henry Nicholas",
                    en: "Henry Nicholas"
                  }
                },
                {
                  src: "images/projects/p4/persona-anastasia.webp",
                  alt: {
                    zh: "用户画像：Anastasia",
                    en: "Persona: Anastasia"
                  },
                  caption: {
                    zh: "Anastasia",
                    en: "Anastasia"
                  }
                }
              ]
            }
          ]
        },
        {
          key: "ideation",
          title: {
            zh: "站点地图",
            en: "Site map"
          },
          text: [
            {
              zh: "我先手画了两版站点地图，比较不同的分组方式，再整理成最终结构：首页、关于我们、活动、作品展示、讨论区、资源和个人中心。",
              en: "I sketched two versions of the site map by hand to compare groupings, then settled on the final structure: Home, About Us, Activities, Works Show, Discussion, Resources and Personal Center."
            },
            {
              zh: "每个页面都写了内容分析：首页放社团介绍、活动通知和最新消息；作品展示按绘画、摄影、手工三大类浏览；活动页有日历和活动详情；资源页有教程链接和图书馆书目；个人中心可以编辑资料和查看报名记录。",
              en: "I wrote a content plan for each page. Home holds the club introduction, notices and latest news; Works Show is browsed by painting, photography and crafts; Activities has a calendar and event details; Resources lists tutorials and library books; and the Personal Center lets members edit their profile and see their registrations."
            }
          ],
          media: [
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p4/sitemap-plan1.webp",
                  alt: {
                    zh: "手绘站点地图方案一",
                    en: "Hand-drawn site map, plan 1"
                  },
                  caption: {
                    zh: "方案一",
                    en: "Plan 1"
                  }
                },
                {
                  src: "images/projects/p4/sitemap-plan2.webp",
                  alt: {
                    zh: "手绘站点地图方案二",
                    en: "Hand-drawn site map, plan 2"
                  },
                  caption: {
                    zh: "方案二",
                    en: "Plan 2"
                  }
                }
              ]
            },
            {
              type: "image",
              src: "images/projects/p4/sitemap.webp",
              alt: {
                zh: "最终站点地图",
                en: "Final site map"
              },
              caption: {
                zh: "最终站点地图",
                en: "Final site map"
              },
              wide: true
            }
          ]
        },
        {
          key: "design",
          title: {
            zh: "用户流程",
            en: "User flow"
          },
          text: [
            {
              zh: "用户流程图把首页作为起点，展示用户如何进入作品展示、活动报名、讨论区、资源和个人中心。讨论区还做了一个社区讨论板的界面草图。",
              en: "The user flow starts from Home and shows how people move to the Works Show, event registration, the discussion board, resources and the Personal Center. I also sketched an interface for the community discussion board."
            }
          ],
          media: [
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p4/userflow.webp",
                  alt: {
                    zh: "彩色用户流程图",
                    en: "Colour-coded user flow diagram"
                  },
                  caption: {
                    zh: "用户流程",
                    en: "User flow"
                  }
                },
                {
                  src: "images/projects/p4/discussion.webp",
                  alt: {
                    zh: "讨论区界面草图",
                    en: "Discussion board interface sketch"
                  },
                  caption: {
                    zh: "讨论区草图",
                    en: "Discussion board sketch"
                  }
                }
              ]
            }
          ]
        },
        {
          key: "testing",
          title: {
            zh: "网站实现",
            en: "Building the site"
          },
          text: [
            {
              zh: "我用 HTML、CSS 和 JavaScript 把设计做成了网站。所有内容写在一个页面里，用一个简单的 showSection() 函数，点击导航按钮时只显示对应的部分，其他部分隐藏。",
              en: "I built the design in HTML, CSS and JavaScript. All content lives on one page, and a small showSection() function shows only the section chosen in the navigation and hides the rest."
            },
            {
              zh: "视觉上用黑色和明亮的黄色做强烈对比；作品展示页把九种艺术形式配上图片和介绍；样式里加了两个断点，在平板和手机上导航按钮会变成整行、图文改为上下排列。",
              en: "Visually it pairs black with a bright yellow for strong contrast. The Works Show page pairs nine art forms with an image and description each, and two breakpoints stack the navigation buttons and the image-and-text rows on tablets and phones."
            }
          ],
          media: [
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p4/site-works.webp",
                  alt: {
                    zh: "作品展示页",
                    en: "Works Show page"
                  },
                  caption: {
                    zh: "作品展示",
                    en: "Works Show"
                  }
                },
                {
                  src: "images/projects/p4/site-activities.webp",
                  alt: {
                    zh: "活动日历页",
                    en: "Activity calendar page"
                  },
                  caption: {
                    zh: "活动日历",
                    en: "Activities"
                  }
                },
                {
                  src: "images/projects/p4/site-resources.webp",
                  alt: {
                    zh: "资源页",
                    en: "Resources page"
                  },
                  caption: {
                    zh: "学习资源",
                    en: "Resources"
                  }
                }
              ]
            },
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p4/site-mobile.webp",
                  alt: {
                    zh: "手机上的网站首页",
                    en: "Home page on a phone"
                  },
                  caption: {
                    zh: "手机版",
                    en: "On mobile"
                  }
                }
              ]
            }
          ]
        },
        {
          key: "outcome",
          title: {
            zh: "反思",
            en: "Reflection"
          },
          text: [
            {
              zh: "这是我第一次从用户画像一路做到能运行的网站。画像让我在决定页面内容时有了依据；两版站点地图的比较让我意识到结构决定了用户能不能找到东西。",
              en: "This was my first time going all the way from personas to a working website. The personas gave me a reason behind each content decision, and comparing two site maps showed me how much the structure decides whether people can find things."
            },
            {
              zh: "最终网站实现了首页、作品展示、活动、资源和关于我们五个部分；讨论区和个人中心留在了设计阶段，下一步可以把它们做出来，并加入真实的报名表单。",
              en: "The final site covers Home, Works Show, Activities, Resources and About Us. The discussion board and Personal Center stayed at the design stage; next I'd build them and add a working sign-up form."
            }
          ],
          media: []
        }
      ]
    },
    {
      id: "vdes-panda-identity",
      category: "brand",
      course: "Design and Visual Language",
      title: {
        zh: "Panda Café 品牌标识",
        en: "Panda Café Identity"
      },
      subtitle: {
        zh: "熊猫咖啡馆 · 标志与品牌规范",
        en: "Panda café · logo and identity guidelines"
      },
      intro: {
        zh: "为一家虚构的熊猫主题咖啡馆设计的品牌标识。标志是一只伸出两只爪子的熊猫，它的轮廓同时像一只咖啡杯，把“熊猫”和“咖啡”合在一起；主色是黑白渐变，辅以咖啡棕。项目包括标志在大中小三种尺寸、横竖两种组合下的呈现，以及一份品牌规范手册：比例和安全区、色彩和字体标准，以及在笔、标识牌、制服、车辆和咖啡杯上的应用。",
        en: "A brand identity for a fictional panda-themed café. The symbol is a panda reaching up with both paws, its outline doubling as a coffee cup, so panda and coffee read as one mark. The main colour is a black-to-white gradient with coffee brown as support. The project covers the logo at three sizes and in vertical and horizontal lockups, plus an identity specification document: proportions and clear space, colour and type standards, and applications on a pen, signage, uniforms, a vehicle and coffee cups."
      },
      summary: {
        zh: "",
        en: ""
      },
      tags: [
        "Logo",
        "Brand identity",
        "Illustrator",
        "InDesign"
      ],
      image: "images/projects/p5/cover.webp",
      theme: "pressed",
      demo: {
        url: "projects/Panda-Logo-Sizing/index.html",
        label: {
          zh: "查看标志尺寸展示 ↗",
          zht: "查看標誌尺寸展示 ↗",
          en: "View logo sizing ↗",
          ja: "ロゴサイズを見る ↗",
          fr: "Voir les formats du logo ↗",
          ko: "로고 크기 보기 ↗"
        }
      },
      pdf: {
        src: "files/Panda-Identity-Specification.pdf",
        pages: 19,
        label: "Panda · Identity Specification Document.pdf"
      },
      specs: [
        {
          k: {
            zh: "课程",
            zht: "課程",
            en: "Course",
            ja: "コース",
            fr: "Cours",
            ko: "과목"
          },
          v: "Design and Visual Language"
        },
        {
          k: {
            zh: "课程代码",
            zht: "課程代碼",
            en: "Code",
            ja: "コード",
            fr: "Code",
            ko: "코드"
          },
          v: "VDES 19798"
        },
        {
          k: {
            zh: "学期",
            zht: "學期",
            en: "Term",
            ja: "学期",
            fr: "Session",
            ko: "학기"
          },
          v: {
            zh: "2024 秋季学期",
            en: "Fall 2024"
          }
        },
        {
          k: {
            zh: "提交日期",
            zht: "提交日期",
            en: "Submitted",
            ja: "提出日",
            fr: "Remis le",
            ko: "제출일"
          },
          v: {
            zh: "2024 年 11 月 30 日",
            en: "November 30, 2024"
          }
        },
        {
          k: {
            zh: "工具与材料",
            zht: "工具與材料",
            en: "Tools & materials",
            ja: "ツール・素材",
            fr: "Outils et matériaux",
            ko: "도구 · 재료"
          },
          v: {
            zh: "Adobe Illustrator、Adobe InDesign",
            en: "Adobe Illustrator, Adobe InDesign"
          }
        },
        {
          k: {
            zh: "作品类型",
            zht: "作品類型",
            en: "Type",
            ja: "種類",
            fr: "Type",
            ko: "유형"
          },
          v: {
            zh: "标志与品牌规范",
            en: "Logo & identity guidelines"
          }
        }
      ],
      outline: [
        {
          key: "brief",
          title: {
            zh: "项目要求",
            zht: "項目要求",
            en: "The brief",
            ja: "課題の内容",
            fr: "Le brief",
            ko: "과제 내용"
          },
          text: [
            {
              zh: "这门课的后两个项目连在一起：项目二要求为一家公司、组织或运动设计一套视觉标识（不能是重新设计现有品牌），包括图形标志和字体，用矢量软件绘制，要能横竖两种排版使用，并提交大中小三种尺寸的黑白和彩色版本、字体和色彩研究、过程稿和设计说明。",
              en: "The last two projects in this course build on each other. Project 2 asked for a visual identity for a company, organization or movement (not a redesign of an existing brand): a symbol plus typography, drawn in vector software, working in both horizontal and vertical formats, shown at small, medium and large sizes in black and white and in colour, with type and colour studies, process work and a design rationale."
            },
            {
              zh: "项目三要求用 InDesign 做一份 11×17 英寸横版的品牌规范手册，告诉其他设计师如何准确复制这个标识：组件命名和组合方式、比例和安全区、色彩标准（CMYK、RGB 和 Hex）、字体标准，以及在文具、标识牌、制服、车辆和其他物品上的应用。",
              en: "Project 3 asked for an 11 × 17 in. landscape identity specification document in InDesign, telling other designers how to reproduce the identity accurately: component names and configurations, proportions and clear space, colour standards in CMYK, RGB and hex, typography standards, and applications on stationery, signage, uniforms, vehicles and other items."
            }
          ],
          media: []
        },
        {
          key: "problem",
          title: {
            zh: "品牌概念",
            en: "Brand concept"
          },
          text: [
            {
              zh: "Panda 是一家开在城市热闹街区的熊猫主题咖啡馆，想把中国传统文化和现代咖啡体验结合起来。熊猫象征自然与平和，咖啡是品牌的核心。",
              en: "Panda is a panda-themed café in a busy part of the city that blends traditional Chinese culture with a modern coffee experience. The panda stands for nature and calm, and coffee is at the heart of the brand."
            },
            {
              zh: "标志的灵感来自熊猫本身：一只仰躺着伸出两只爪子的熊猫，头顶的线条弯成咖啡杯的把手，整个轮廓像一只杯子，把“熊猫”和“咖啡”巧妙地合在一起。",
              en: "The mark comes straight from the panda: lying back with both paws raised, the curve above its head forms a cup handle, so the whole outline reads as a coffee cup and brings panda and coffee together."
            }
          ],
          media: [
            {
              type: "image",
              src: "images/projects/p5/storefront.webp",
              alt: {
                zh: "Panda 咖啡馆门店效果图",
                en: "Rendering of the Panda café storefront"
              },
              caption: {
                zh: "门店效果",
                en: "Storefront"
              },
              wide: true
            }
          ]
        },
        {
          key: "ideation",
          title: {
            zh: "标志与组合方式",
            en: "Symbol and configurations"
          },
          text: [
            {
              zh: "标志由三个部分组成：熊猫图形、咖啡杯轮廓和品牌名“Panda”。熊猫图形可以单独作为品牌符号使用；品牌名用柔和弧线的手写体，呼应熊猫圆润的线条。",
              en: "The identity has three parts: the panda graphic, the coffee-cup outline and the name “Panda”. The panda can stand alone as a symbol, and the name uses a script with soft curves that echo the panda's rounded lines."
            },
            {
              zh: "我设计了四种组合：横向组合用于招牌和横幅，竖向组合用于竖牌和门面，单色版本用于印刷受限的场合，黑白渐变版本是标准版本。标志在大、中、小三种尺寸下都要清晰可辨。",
              en: "I designed four configurations: horizontal for signs and banners, vertical for upright signs and façades, single colour for limited printing, and the black-to-white gradient as the standard version. The mark had to stay clear at large, medium and small sizes."
            }
          ],
          media: [
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p5/logo-black.webp",
                  alt: {
                    zh: "黑白单色的熊猫标志",
                    en: "Single-colour black panda symbol"
                  },
                  caption: {
                    zh: "单色标志",
                    en: "Single-colour symbol"
                  }
                },
                {
                  src: "images/projects/p5/logo-gradient.webp",
                  alt: {
                    zh: "黑白渐变的标志加品牌名",
                    en: "Gradient symbol with the Panda wordmark"
                  },
                  caption: {
                    zh: "渐变竖向组合",
                    en: "Gradient vertical lockup"
                  }
                },
                {
                  src: "images/projects/p5/logo-outline.webp",
                  alt: {
                    zh: "标志的虚线轮廓结构",
                    en: "Dashed outline of the symbol's structure"
                  },
                  caption: {
                    zh: "轮廓结构",
                    en: "Outline structure"
                  }
                }
              ]
            },
            {
              type: "image",
              src: "images/projects/p5/site.webp",
              alt: {
                zh: "标志尺寸展示网页",
                en: "Logo sizing web page"
              },
              caption: {
                zh: "网页展示：标志在大中小三种尺寸和横竖组合下的效果",
                en: "Web page showing the symbol at three sizes and in vertical and horizontal lockups"
              },
              wide: true
            }
          ]
        },
        {
          key: "design",
          title: {
            zh: "比例、色彩与字体",
            en: "Proportions, colour and type"
          },
          text: [
            {
              zh: "比例：熊猫图形约为品牌名高度的三倍（3:1），这样缩小后依然清楚。安全区至少等于熊猫图形的高度，标志四周不能被文字、图片或复杂背景挤占。",
              en: "Proportions: the panda is about three times the height of the name (3:1), so it stays legible when small. The clear space around it is at least the height of the panda, and no text, image or busy background may crowd it."
            },
            {
              zh: "色彩：主色是黑、白和黑白渐变，代表熊猫本身的颜色和简洁现代的气质；辅助色咖啡棕（#5C331E）代表咖啡和自然。我在初稿里试过彩色版本，最后选择了更能代表熊猫的黑白渐变。",
              en: "Colour: the main palette is black, white and a black-to-white gradient, the panda's own colours and a clean, modern feel. Coffee brown (#5C331E) supports it, standing for coffee and nature. I tried colourful versions in early drafts before settling on the gradient as truest to the panda."
            },
            {
              zh: "字体：我比较了十几种字体，最后选了一款柔和的手写体做品牌名，让它和熊猫的圆润线条相呼应。",
              en: "Type: I compared over a dozen typefaces and chose a soft script for the name so it echoes the panda's rounded lines."
            }
          ],
          media: [
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p5/proportions.webp",
                  alt: {
                    zh: "标志比例说明页",
                    en: "Proportions page"
                  },
                  caption: {
                    zh: "比例 3:1",
                    en: "3:1 proportions"
                  }
                },
                {
                  src: "images/projects/p5/safety-zone.webp",
                  alt: {
                    zh: "安全区说明页",
                    en: "Clear space page"
                  },
                  caption: {
                    zh: "安全区",
                    en: "Clear space"
                  }
                }
              ]
            },
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p5/colour-drafts.webp",
                  alt: {
                    zh: "色彩标准和彩色初稿",
                    en: "Colour standards and early colour drafts"
                  },
                  caption: {
                    zh: "色彩标准与初稿",
                    en: "Colour standards and drafts"
                  }
                },
                {
                  src: "images/projects/p5/typography.webp",
                  alt: {
                    zh: "字体比较页",
                    en: "Typography comparison page"
                  },
                  caption: {
                    zh: "字体研究",
                    en: "Type study"
                  }
                }
              ]
            }
          ]
        },
        {
          key: "testing",
          title: {
            zh: "品牌应用",
            en: "Applications"
          },
          text: [
            {
              zh: "规范手册最后展示了标志在不同物品上的用法：品牌笔、店内指示牌（咖啡区用咖啡棕，茶区用竹绿）、员工 T 恤和围裙、印有放大标志的车身，以及外带咖啡杯和纸袋。",
              en: "The document ends by showing the identity in use: a branded pen, interior signs (coffee brown in the coffee area, bamboo green in the tea area), staff T-shirts and aprons, a vehicle with an enlarged logo, and takeaway cups and bags."
            }
          ],
          media: [
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p5/app-pen.webp",
                  alt: {
                    zh: "印有标志的品牌笔",
                    en: "Branded pen"
                  },
                  caption: {
                    zh: "文具",
                    en: "Stationery"
                  }
                },
                {
                  src: "images/projects/p5/app-signage.webp",
                  alt: {
                    zh: "咖啡棕和竹绿的店内标识",
                    en: "Interior signs in coffee brown and bamboo green"
                  },
                  caption: {
                    zh: "标识牌",
                    en: "Signage"
                  }
                },
                {
                  src: "images/projects/p5/app-uniform.webp",
                  alt: {
                    zh: "员工制服应用",
                    en: "Staff uniform"
                  },
                  caption: {
                    zh: "制服",
                    en: "Uniform"
                  }
                }
              ]
            },
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p5/app-vehicle.webp",
                  alt: {
                    zh: "车身应用",
                    en: "Vehicle graphics"
                  },
                  caption: {
                    zh: "车辆",
                    en: "Vehicle"
                  }
                },
                {
                  src: "images/projects/p5/app-cups.webp",
                  alt: {
                    zh: "外带咖啡杯应用",
                    en: "Takeaway coffee cups"
                  },
                  caption: {
                    zh: "包装",
                    en: "Packaging"
                  }
                }
              ]
            }
          ]
        },
        {
          key: "outcome",
          title: {
            zh: "反思",
            en: "Reflection"
          },
          text: [
            {
              zh: "这个项目让我第一次完整地走完一个品牌从概念、标志到规范手册的过程。我学到，一个标志不只是一张好看的图，还要在很小的尺寸、单色印刷和各种物品上都站得住；规范手册则是让别人也能正确使用它的“说明书”。",
              en: "This project took me through a full identity for the first time, from concept to symbol to specification. I learned that a logo isn't just an attractive picture; it has to hold up at tiny sizes, in one colour and across many surfaces, and the specification document is the manual that lets other people use it correctly."
            },
            {
              zh: "如果继续改进，我会让渐变版本在小尺寸下更清楚，并为品牌补充一款更易读的辅助字体。",
              en: "Next time I'd make the gradient version read more clearly at small sizes and add a more legible secondary typeface to the brand."
            }
          ],
          media: []
        },
        {
          key: "outcomes",
          title: {
            zh: "项目学习成果",
            zht: "項目學習成果",
            en: "Learning outcomes",
            ja: "学習成果",
            fr: "Acquis d'apprentissage",
            ko: "학습 성과"
          },
          text: [
            {
              zh: "根据课程项目说明，这个项目练习和展示了以下能力：",
              en: "Based on the course project briefs, this project practised and demonstrated:"
            }
          ],
          media: [
            {
              type: "list",
              items: [
                {
                  zh: "运用构图原理与对比（形、尺度、重量、空间、方向、质感、节奏）组织视觉元素。",
                  en: "Using compositional principles and contrast (form, scale, weight, space, direction, texture and rhythm) to organize visual elements."
                },
                {
                  zh: "为一个品牌设计原创的图形标志和字标，并能在横向和竖向两种格式中使用。",
                  en: "Designing an original symbol and wordmark for a brand that work in both horizontal and vertical formats."
                },
                {
                  zh: "用 Illustrator 绘制干净、可缩放的矢量图形，处理好图底关系，让标志在大中小三种尺寸下都清晰。",
                  en: "Drawing clean, scalable vector graphics in Illustrator with a resolved figure-ground relationship, legible at small, medium and large sizes."
                },
                {
                  zh: "进行色彩和字体研究，并把它们应用到标识的各个元素上。",
                  en: "Carrying out colour and type studies and applying them across the identity."
                },
                {
                  zh: "写设计说明，解释设计选择如何体现品牌并传达给目标用户。",
                  en: "Writing a design rationale explaining how the choices reflect the brand and speak to its audience."
                },
                {
                  zh: "制作行业通用的品牌规范手册：组件命名、比例和安全区、CMYK / RGB / Hex 色彩标准和字体标准。",
                  en: "Producing an industry-style identity specification: component names, proportions and clear space, CMYK / RGB / hex colour standards and typography standards."
                },
                {
                  zh: "把标识应用到文具、标识牌、制服、车辆和包装上，并用网格在 InDesign 中统一排版。",
                  en: "Applying the identity to stationery, signage, uniforms, vehicles and packaging, laid out consistently on a grid in InDesign."
                },
                {
                  zh: "记录并展示完整的设计过程，从草图、迭代到最终方案。",
                  en: "Documenting and presenting the full process, from rough ideas and iterations to the final design."
                }
              ]
            }
          ]
        }
      ]
    }
  ],

  /* 我的方向（首页邮票）：project 填对应作品的 id，点击会跳到那个作品 */
  directions: [
    {
      name: {
        zh: "交互原型",
        zht: "互動原型",
        en: "Interactive Prototyping",
        ja: "プロトタイピング",
        fr: "Prototypage",
        ko: "프로토타이핑"
      },
      en: "Interactive Prototyping",
      desc: {
        zh: "Figma、ProtoPie 与可用的网页",
        zht: "Figma、ProtoPie 與可用的網頁",
        en: "Figma, ProtoPie and working websites",
        ja: "Figma・ProtoPie・動くサイト",
        fr: "Figma, ProtoPie et sites fonctionnels",
        ko: "Figma, ProtoPie, 작동하는 웹"
      },
      project: "ixd-methods-art-club",
      theme: "blue"
    },
    {
      name: {
        zh: "用户研究",
        zht: "用戶研究",
        en: "UX Research",
        ja: "UXリサーチ",
        fr: "Recherche UX",
        ko: "UX 리서치"
      },
      en: "UX Research",
      desc: {
        zh: "人物画像、旅程与信息架构",
        zht: "人物畫像、旅程與資訊架構",
        en: "Personas, journeys and information architecture",
        ja: "ペルソナ・ジャーニー・情報設計",
        fr: "Personas, parcours, architecture de l'info",
        ko: "페르소나, 여정, 정보 구조"
      },
      project: "ixd-methods-art-club",
      theme: "pressed"
    },
    {
      name: {
        zh: "视觉与字体",
        zht: "視覺與字體",
        en: "Visual & Type",
        ja: "ビジュアルと文字",
        fr: "Visuel & typo",
        ko: "비주얼 & 타입"
      },
      en: "Visual & Type",
      desc: {
        zh: "品牌标识与字体排版",
        zht: "品牌標識與字體排版",
        en: "Brand identity and typography",
        ja: "ブランドとタイポグラフィ",
        fr: "Identité et typographie",
        ko: "브랜드와 타이포그래피"
      },
      project: "vdes-panda-identity",
      theme: "rose"
    },
    {
      name: {
        zh: "实体交互",
        zht: "實體互動",
        en: "Physical Interaction",
        ja: "フィジカル",
        fr: "Interaction physique",
        ko: "피지컬 인터랙션"
      },
      en: "Physical Interaction",
      desc: {
        zh: "p5.js、Makey Makey 与电路",
        zht: "p5.js、Makey Makey 與電路",
        en: "p5.js, Makey Makey and circuits",
        ja: "p5.js・Makey Makey・回路",
        fr: "p5.js, Makey Makey et circuits",
        ko: "p5.js, Makey Makey, 회로"
      },
      project: "",
      theme: "meadow"
    }
  ],

  /* 简历（关于我页面 + 首页）：detail 可以写成一段文字，或写成 [要点, 要点] 列表 */
  education: [
    {
      years: {
        zh: "2024 — 2028（预计）",
        zht: "2024 — 2028（預計）",
        en: "2024 — Apr 2028 (expected)",
        ja: "2024 — 2028年4月（予定）",
        fr: "2024 — avr. 2028 (prévu)",
        ko: "2024 — 2028년 4월(예정)"
      },
      school: "Sheridan College · Oakville, ON",
      major: {
        zh: "交互设计荣誉学士",
        zht: "互動設計榮譽學士",
        en: "Honours Bachelor of Interaction Design",
        ja: "インタラクションデザイン Honours Bachelor",
        fr: "Honours Bachelor of Interaction Design",
        ko: "인터랙션 디자인 우등 학사"
      },
      detail: [
        {
          zh: "GPA 3.34 / 4.0",
          zht: "GPA 3.34 / 4.0",
          en: "GPA 3.34 / 4.0",
          ja: "GPA 3.34 / 4.0",
          fr: "GPA 3.34 / 4.0",
          ko: "GPA 3.34 / 4.0"
        },
        {
          zh: "相关课程：Interaction Design: Methods、Design and Visual Language、Design and Typography、IXD: Media, Motion & Body",
          zht: "相關課程：Interaction Design: Methods、Design and Visual Language、Design and Typography、IXD: Media, Motion & Body",
          en: "Relevant courses: Interaction Design: Methods; Design and Visual Language; Design and Typography; IXD: Media, Motion & Body",
          ja: "関連科目：Interaction Design: Methods、Design and Visual Language、Design and Typography、IXD: Media, Motion & Body",
          fr: "Cours pertinents : Interaction Design: Methods ; Design and Visual Language ; Design and Typography ; IXD: Media, Motion & Body",
          ko: "관련 과목: Interaction Design: Methods, Design and Visual Language, Design and Typography, IXD: Media, Motion & Body"
        }
      ]
    }
  ],
  experience: [
    {
      years: {
        zh: "2026.03 — 至今",
        zht: "2026.03 — 至今",
        en: "Mar 2026 — Present",
        ja: "2026年3月 — 現在",
        fr: "mars 2026 — aujourd'hui",
        ko: "2026.03 — 현재"
      },
      title: {
        zh: "社交媒体运营",
        zht: "社群媒體營運",
        en: "Social Media Operations",
        ja: "SNS運用",
        fr: "Gestion des réseaux sociaux",
        ko: "소셜 미디어 운영"
      },
      org: {
        zh: "中国学生学者联合会（CSSA）",
        zht: "中國學生學者聯合會（CSSA）",
        en: "Chinese Students and Scholars Association (CSSA)",
        ja: "中国学生学者連合会（CSSA）",
        fr: "Chinese Students and Scholars Association (CSSA)",
        ko: "중국 학생학자 연합회(CSSA)"
      },
      detail: [
        {
          zh: "负责微信公众号、Bilibili、微博、抖音、小红书和 Instagram 等多个平台的日常内容发布与维护。",
          zht: "負責微信公眾號、Bilibili、微博、抖音、小紅書和 Instagram 等多個平台的日常內容發布與維護。",
          en: "Publish and maintain daily content across WeChat Official Account, Bilibili, Weibo, TikTok, Xiaohongshu (RED) and Instagram.",
          ja: "WeChat公式アカウント、Bilibili、Weibo、TikTok、小紅書（RED）、Instagram で日々の投稿と運用を担当。",
          fr: "Publication et suivi quotidiens du contenu sur WeChat, Bilibili, Weibo, TikTok, Xiaohongshu (RED) et Instagram.",
          ko: "WeChat 공식 계정, Bilibili, 웨이보, 틱톡, 샤오홍슈(RED), 인스타그램의 일일 콘텐츠 게시와 관리를 담당."
        },
        {
          zh: "管理用户社群，回复评论和私信，保持账号活跃度和互动。",
          zht: "管理用戶社群，回覆評論和私訊，保持帳號活躍度和互動。",
          en: "Manage the community, reply to comments and messages, and keep accounts active and engaging.",
          ja: "コミュニティを管理し、コメントやDMに対応してアカウントの活発さとエンゲージメントを維持。",
          fr: "Animation de la communauté, réponses aux commentaires et messages, maintien de l'engagement.",
          ko: "커뮤니티를 관리하고 댓글과 메시지에 응답하며 계정 활동과 참여를 유지."
        },
        {
          zh: "收集整理用户反馈，为内容和互动策略的优化提供依据。",
          zht: "收集整理用戶回饋，為內容和互動策略的優化提供依據。",
          en: "Collect and organise user feedback to improve content and engagement strategy.",
          ja: "ユーザーの声を集めて整理し、コンテンツとエンゲージメント戦略の改善に活用。",
          fr: "Collecte et organisation des retours utilisateurs pour améliorer la stratégie de contenu.",
          ko: "사용자 피드백을 수집·정리해 콘텐츠와 참여 전략 개선에 활용."
        },
        {
          zh: "协调团队内部沟通，确保内容按时发布。",
          zht: "協調團隊內部溝通，確保內容按時發布。",
          en: "Coordinate team communication so content goes out on time.",
          ja: "チーム内の連絡を調整し、予定どおりの公開を実現。",
          fr: "Coordination de l'équipe pour publier dans les délais.",
          ko: "팀 내부 소통을 조율해 콘텐츠가 제때 게시되도록 관리."
        }
      ]
    },
    {
      years: {
        zh: "2025.03 — 2025.04",
        zht: "2025.03 — 2025.04",
        en: "Mar — Apr 2025",
        ja: "2025年3月 — 4月",
        fr: "mars — avr. 2025",
        ko: "2025.03 — 2025.04"
      },
      title: {
        zh: "团队成员",
        zht: "團隊成員",
        en: "Team Member",
        ja: "チームメンバー",
        fr: "Membre d'équipe",
        ko: "팀원"
      },
      org: {
        zh: "Hult Prize 2025 加拿大全国赛 · McGill University",
        zht: "Hult Prize 2025 加拿大全國賽 · McGill University",
        en: "Hult Prize 2025 Canada National Competition · McGill University",
        ja: "Hult Prize 2025 カナダ全国大会 · McGill University",
        fr: "Hult Prize 2025, finale nationale canadienne · McGill University",
        ko: "Hult Prize 2025 캐나다 전국 대회 · McGill University"
      },
      detail: [
        {
          zh: "负责团队项目的用户研究和市场分析。",
          zht: "負責團隊項目的用戶研究和市場分析。",
          en: "Led user research and market analysis for the team's project.",
          ja: "チームプロジェクトのユーザーリサーチと市場分析を担当。",
          fr: "Recherche utilisateur et analyse de marché pour le projet de l'équipe.",
          ko: "팀 프로젝트의 사용자 리서치와 시장 분석을 담당."
        },
        {
          zh: "分析市场规模、竞争格局和目标用户，为商业模式设计提供依据。",
          zht: "分析市場規模、競爭格局和目標用戶，為商業模式設計提供依據。",
          en: "Analysed market size, the competitive landscape and the target audience to inform the business model.",
          ja: "市場規模、競合状況、ターゲット層を分析し、ビジネスモデル設計に反映。",
          fr: "Analyse de la taille du marché, de la concurrence et du public cible pour orienter le modèle d'affaires.",
          ko: "시장 규모, 경쟁 구도, 타깃 사용자를 분석해 비즈니스 모델 설계에 반영."
        }
      ]
    }
  ],
  /* 证书 */
  certifications: [
    {
      years: {
        zh: "2025.11",
        zht: "2025.11",
        en: "Nov 2025",
        ja: "2025年11月",
        fr: "nov. 2025",
        ko: "2025.11"
      },
      title: "ProtoPie 101 Crash Course",
      org: "ProtoPie"
    },
    {
      years: {
        zh: "2025.01",
        zht: "2025.01",
        en: "Jan 2025",
        ja: "2025年1月",
        fr: "janv. 2025",
        ko: "2025.01"
      },
      title: "TCPS 2: CORE 2022",
      org: {
        zh: "加拿大研究伦理委员会（PRE）",
        zht: "加拿大研究倫理委員會（PRE）",
        en: "Panel on Research Ethics (PRE)",
        ja: "研究倫理パネル（PRE）",
        fr: "Groupe en éthique de la recherche (GER)",
        ko: "연구윤리위원회(PRE)"
      }
    }
  ],
  skills: [
    {
      group: {
        zh: "核心能力",
        zht: "核心能力",
        en: "Core strengths",
        ja: "得意分野",
        fr: "Points forts",
        ko: "핵심 역량"
      },
      items: [
        {
          zh: "交互原型",
          zht: "互動原型",
          en: "Interactive Prototyping",
          ja: "インタラクティブプロトタイピング",
          fr: "Prototypage interactif",
          ko: "인터랙티브 프로토타이핑"
        },
        {
          zh: "用户体验研究",
          zht: "用戶體驗研究",
          en: "UX Research",
          ja: "UXリサーチ",
          fr: "Recherche UX",
          ko: "UX 리서치"
        },
        {
          zh: "用户旅程地图",
          zht: "用戶旅程地圖",
          en: "User Journey Mapping",
          ja: "カスタマージャーニーマップ",
          fr: "Parcours utilisateur",
          ko: "사용자 여정 지도"
        },
        {
          zh: "线框图（低保真到高保真）",
          zht: "線框圖（低保真到高保真）",
          en: "Wireframing (low to high fidelity)",
          ja: "ワイヤーフレーム（低〜高精度）",
          fr: "Wireframes (basse à haute fidélité)",
          ko: "와이어프레임(저~고충실도)"
        },
        {
          zh: "信息架构",
          zht: "資訊架構",
          en: "Information Architecture",
          ja: "情報設計",
          fr: "Architecture de l'information",
          ko: "정보 구조"
        },
        {
          zh: "无障碍设计",
          zht: "無障礙設計",
          en: "Accessible Design",
          ja: "アクセシブルデザイン",
          fr: "Design accessible",
          ko: "접근성 디자인"
        },
        {
          zh: "数据可视化",
          zht: "數據視覺化",
          en: "Data Visualization",
          ja: "データ可視化",
          fr: "Visualisation de données",
          ko: "데이터 시각화"
        },
        {
          zh: "可用性测试",
          zht: "可用性測試",
          en: "Usability Testing",
          ja: "ユーザビリティテスト",
          fr: "Tests d'utilisabilité",
          ko: "사용성 테스트"
        }
      ]
    },
    {
      group: {
        zh: "原型与设计工具",
        zht: "原型與設計工具",
        en: "Prototyping & design tools",
        ja: "プロトタイプ・デザインツール",
        fr: "Prototypage & design",
        ko: "프로토타입 · 디자인 툴"
      },
      items: [
        "Figma (Advanced)",
        "ProtoPie (Advanced)",
        "Framer",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe InDesign",
        "Cinema 4D",
        "Notion",
        "Microsoft 365"
      ]
    },
    {
      group: {
        zh: "技术",
        zht: "技術",
        en: "Technical",
        ja: "技術",
        fr: "Technique",
        ko: "기술"
      },
      items: [
        "HTML / CSS / JavaScript",
        "p5.js",
        "Visual Studio Code",
        "Arduino IDE",
        "Makey Makey",
        {
          zh: "实体原型",
          zht: "實體原型",
          en: "Physical Prototyping",
          ja: "フィジカルプロトタイピング",
          fr: "Prototypage physique",
          ko: "피지컬 프로토타이핑"
        }
      ]
    },
    {
      group: {
        zh: "语言",
        zht: "語言",
        en: "Languages",
        ja: "言語",
        fr: "Langues",
        ko: "언어"
      },
      items: [
        {
          zh: "英语",
          zht: "英語",
          en: "English",
          ja: "英語",
          fr: "Anglais",
          ko: "영어"
        },
        {
          zh: "中文（普通话）",
          zht: "中文（普通話）",
          en: "Chinese (Mandarin)",
          ja: "中国語（普通話）",
          fr: "Chinois (mandarin)",
          ko: "중국어(표준어)"
        }
      ]
    }
  ]
};
