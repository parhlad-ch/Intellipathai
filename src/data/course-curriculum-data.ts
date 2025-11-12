// Course Curriculum Data for all disciplines

export type CurriculumModule = {
  title: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: { title: string }[];
};

export type CourseCurriculum = {
  courseId: number;
  modules: CurriculumModule[];
  learningOutcomes: {
    title: string;
    description: string;
  }[];
};

export const courseCurriculumData: CourseCurriculum[] = [
  // 1. Computer Science
  {
    courseId: 1,
    modules: [
      {
        title: "Foundations of Computer Science",
        duration: "Duration: 4 weeks",
        difficulty: "Beginner",
        topics: [
          { title: "Introduction to Programming" },
          { title: "Variables & Data Types" },
          { title: "Control Flow & Loops" },
          { title: "Functions & Methods" }
        ]
      },
      {
        title: "Data Structures & Algorithms",
        duration: "Duration: 6 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Arrays & Linked Lists" },
          { title: "Stacks & Queues" },
          { title: "Trees & Graphs" },
          { title: "Sorting & Searching" },
          { title: "Dynamic Programming" }
        ]
      },
      {
        title: "Web Development",
        duration: "Duration: 5 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "HTML, CSS, JavaScript" },
          { title: "React & Modern Frameworks" },
          { title: "Backend Development" },
          { title: "Database Management" }
        ]
      },
      {
        title: "Advanced Topics",
        duration: "Duration: 4 weeks",
        difficulty: "Advanced",
        topics: [
          { title: "System Design" },
          { title: "Cloud Computing" },
          { title: "DevOps & CI/CD" },
          { title: "Security Best Practices" }
        ]
      }
    ],
    learningOutcomes: [
      {
        title: "Build full-stack web applications from scratch",
        description: "Create complete applications using modern frameworks and best practices"
      },
      {
        title: "Solve complex algorithmic problems efficiently",
        description: "Master problem-solving techniques used in technical interviews"
      },
      {
        title: "Debug and optimize code like a professional",
        description: "Learn advanced debugging techniques and performance optimization"
      },
      {
        title: "Prepare for technical interviews at top companies",
        description: "Practice with real interview questions and get AI-powered feedback"
      },
      {
        title: "Master modern development frameworks and tools",
        description: "Gain hands-on experience with industry-standard technologies"
      }
    ]
  },

  // 2. Medical Studies
  {
    courseId: 2,
    modules: [
      {
        title: "Human Anatomy & Physiology",
        duration: "Duration: 8 weeks",
        difficulty: "Beginner",
        topics: [
          { title: "Organ Systems" },
          { title: "Biochemistry" },
          { title: "Cellular Biology" },
          { title: "Pathophysiology" }
        ]
      },
      {
        title: "Diagnostic Medicine",
        duration: "Duration: 10 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Clinical Examination" },
          { title: "Medical Imaging" },
          { title: "Laboratory Tests" },
          { title: "Differential Diagnosis" }
        ]
      },
      {
        title: "AI-Powered Case Studies",
        duration: "Duration: 6 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Patient Assessment" },
          { title: "Evidence-Based Medicine" },
          { title: "Treatment Planning" },
          { title: "Clinical Decision Making" }
        ]
      },
      {
        title: "Specialized Fields",
        duration: "Duration: 12 weeks",
        difficulty: "Advanced",
        topics: [
          { title: "Cardiology" },
          { title: "Neurology" },
          { title: "Pediatrics" },
          { title: "Surgery Fundamentals" }
        ]
      }
    ],
    learningOutcomes: [
      {
        title: "Master human anatomy and physiology",
        description: "Understand the structure and function of human body systems"
      },
      {
        title: "Develop strong diagnostic reasoning skills",
        description: "Apply clinical knowledge to diagnose medical conditions"
      },
      {
        title: "Prepare effectively for NEET and medical entrance exams",
        description: "Comprehensive preparation with practice questions and mock tests"
      },
      {
        title: "Understand evidence-based medical practices",
        description: "Learn to apply research evidence in clinical decision-making"
      },
      {
        title: "Gain confidence in clinical decision-making",
        description: "Practice real patient scenarios with AI-powered feedback"
      }
    ]
  },

  // 3. Teacher Training (B.Ed)
  {
    courseId: 3,
    modules: [
      {
        title: "Educational Psychology",
        duration: "Duration: 5 weeks",
        difficulty: "Beginner",
        topics: [
          { title: "Learning Theories" },
          { title: "Motivation & Engagement" },
          { title: "Child Development" },
          { title: "Special Education" }
        ]
      },
      {
        title: "Pedagogical Methods",
        duration: "Duration: 6 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Teaching Strategies" },
          { title: "Assessment Methods" },
          { title: "Curriculum Design" },
          { title: "Differentiated Instruction" }
        ]
      },
      {
        title: "Classroom Management",
        duration: "Duration: 4 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Behavior Management" },
          { title: "Parent-Teacher Communication" },
          { title: "Creating Inclusive Environments" },
          { title: "Crisis Handling" }
        ]
      },
      {
        title: "Technology in Education",
        duration: "Duration: 4 weeks",
        difficulty: "Advanced",
        topics: [
          { title: "Digital Learning Tools" },
          { title: "Online Teaching" },
          { title: "AI in Education" },
          { title: "Educational Apps" }
        ]
      }
    ],
    learningOutcomes: [
      {
        title: "Design effective and engaging lesson plans",
        description: "Create comprehensive lesson plans that enhance student learning"
      },
      {
        title: "Master classroom management techniques",
        description: "Implement strategies to maintain positive learning environments"
      },
      {
        title: "Implement diverse teaching strategies",
        description: "Apply various pedagogical methods to meet different learning needs"
      },
      {
        title: "Use technology to enhance learning",
        description: "Integrate educational technology tools effectively in teaching"
      },
      {
        title: "Create inclusive learning environments",
        description: "Foster inclusive classrooms that support all students"
      }
    ]
  },

  // 4. Arts & Humanities
  {
    courseId: 4,
    modules: [
      {
        title: "Introduction to Arts & Culture",
        duration: "Duration: 4 weeks",
        difficulty: "Beginner",
        topics: [
          { title: "Art History Fundamentals" },
          { title: "Cultural Studies" },
          { title: "Critical Thinking" },
          { title: "Creative Expression" }
        ]
      },
      {
        title: "Literature & Writing",
        duration: "Duration: 5 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Literary Analysis" },
          { title: "Creative Writing" },
          { title: "Poetry & Prose" },
          { title: "Storytelling Techniques" }
        ]
      },
      {
        title: "Visual & Performing Arts",
        duration: "Duration: 5 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Visual Arts Techniques" },
          { title: "Theater & Performance" },
          { title: "Music Theory" },
          { title: "Digital Arts" }
        ]
      },
      {
        title: "Advanced Studies & Research",
        duration: "Duration: 4 weeks",
        difficulty: "Advanced",
        topics: [
          { title: "Research Methodologies" },
          { title: "Contemporary Issues" },
          { title: "Interdisciplinary Studies" },
          { title: "Portfolio Development" }
        ]
      }
    ],
    learningOutcomes: [
      {
        title: "Develop critical analysis skills",
        description: "Analyze and interpret cultural and artistic works"
      },
      {
        title: "Create original artistic works",
        description: "Express creativity through various artistic mediums"
      },
      {
        title: "Understand cultural contexts",
        description: "Explore diverse cultural perspectives and histories"
      },
      {
        title: "Master communication skills",
        description: "Communicate ideas effectively through writing and presentation"
      },
      {
        title: "Conduct independent research",
        description: "Develop research skills for academic and professional pursuits"
      }
    ]
  },

  // 5. Science
  {
    courseId: 5,
    modules: [
      {
        title: "Scientific Foundations",
        duration: "Duration: 4 weeks",
        difficulty: "Beginner",
        topics: [
          { title: "Scientific Method" },
          { title: "Laboratory Safety" },
          { title: "Data Collection & Analysis" },
          { title: "Scientific Communication" }
        ]
      },
      {
        title: "Core Sciences",
        duration: "Duration: 6 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Physics Principles" },
          { title: "Chemistry Fundamentals" },
          { title: "Biology Essentials" },
          { title: "Environmental Science" }
        ]
      },
      {
        title: "Applied Research",
        duration: "Duration: 5 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Experimental Design" },
          { title: "Statistical Analysis" },
          { title: "Research Ethics" },
          { title: "Scientific Writing" }
        ]
      },
      {
        title: "Advanced Topics",
        duration: "Duration: 4 weeks",
        difficulty: "Advanced",
        topics: [
          { title: "Specialized Research" },
          { title: "Interdisciplinary Studies" },
          { title: "Innovation & Discovery" },
          { title: "Scientific Career Paths" }
        ]
      }
    ],
    learningOutcomes: [
      {
        title: "Apply scientific method to solve problems",
        description: "Use systematic approaches to investigate scientific questions"
      },
      {
        title: "Conduct laboratory experiments safely",
        description: "Perform experiments following proper safety protocols"
      },
      {
        title: "Analyze and interpret scientific data",
        description: "Use statistical tools to analyze experimental results"
      },
      {
        title: "Communicate scientific findings effectively",
        description: "Present research through papers and presentations"
      },
      {
        title: "Engage in independent research",
        description: "Design and execute original scientific investigations"
      }
    ]
  },

  // 6. Commerce
  {
    courseId: 6,
    modules: [
      {
        title: "Business & Accounting Basics",
        duration: "Duration: 4 weeks",
        difficulty: "Beginner",
        topics: [
          { title: "Introduction to Commerce" },
          { title: "Basic Accounting" },
          { title: "Business Mathematics" },
          { title: "Economic Principles" }
        ]
      },
      {
        title: "Financial Accounting",
        duration: "Duration: 5 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Financial Statements" },
          { title: "Cost Accounting" },
          { title: "Auditing Basics" },
          { title: "Taxation" }
        ]
      },
      {
        title: "Banking & Finance",
        duration: "Duration: 5 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Banking Operations" },
          { title: "Financial Markets" },
          { title: "Investment Planning" },
          { title: "Insurance & Risk" }
        ]
      },
      {
        title: "Advanced Commerce",
        duration: "Duration: 4 weeks",
        difficulty: "Advanced",
        topics: [
          { title: "International Trade" },
          { title: "E-Commerce" },
          { title: "Financial Management" },
          { title: "Business Law" }
        ]
      }
    ],
    learningOutcomes: [
      {
        title: "Master accounting principles and practices",
        description: "Prepare financial statements and analyze business performance"
      },
      {
        title: "Understand financial markets and instruments",
        description: "Navigate investment opportunities and financial planning"
      },
      {
        title: "Manage business finances effectively",
        description: "Make informed financial decisions for business success"
      },
      {
        title: "Apply taxation and auditing knowledge",
        description: "Handle tax compliance and financial audits"
      },
      {
        title: "Develop e-commerce business strategies",
        description: "Build and manage online business operations"
      }
    ]
  },

  // 7. Engineering
  {
    courseId: 7,
    modules: [
      {
        title: "Engineering Fundamentals",
        duration: "Duration: 4 weeks",
        difficulty: "Beginner",
        topics: [
          { title: "Engineering Mathematics" },
          { title: "Physics for Engineers" },
          { title: "Technical Drawing" },
          { title: "Problem Solving" }
        ]
      },
      {
        title: "Core Engineering Principles",
        duration: "Duration: 6 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Mechanics & Materials" },
          { title: "Thermodynamics" },
          { title: "Electrical Circuits" },
          { title: "Engineering Design" }
        ]
      },
      {
        title: "Applied Engineering",
        duration: "Duration: 5 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "CAD & Modeling" },
          { title: "Manufacturing Processes" },
          { title: "Control Systems" },
          { title: "Project Management" }
        ]
      },
      {
        title: "Advanced Engineering",
        duration: "Duration: 4 weeks",
        difficulty: "Advanced",
        topics: [
          { title: "Advanced Design" },
          { title: "Innovation & R&D" },
          { title: "Sustainable Engineering" },
          { title: "Professional Practice" }
        ]
      }
    ],
    learningOutcomes: [
      {
        title: "Design and analyze engineering systems",
        description: "Create innovative solutions to complex engineering problems"
      },
      {
        title: "Use CAD and simulation tools",
        description: "Model and test designs using industry-standard software"
      },
      {
        title: "Apply engineering principles to real projects",
        description: "Work on practical engineering applications"
      },
      {
        title: "Manage engineering projects effectively",
        description: "Plan, execute, and deliver engineering projects on time"
      },
      {
        title: "Develop sustainable engineering solutions",
        description: "Design with environmental and social responsibility"
      }
    ]
  },

  // 8. Law
  {
    courseId: 8,
    modules: [
      {
        title: "Legal Fundamentals",
        duration: "Duration: 4 weeks",
        difficulty: "Beginner",
        topics: [
          { title: "Introduction to Law" },
          { title: "Legal Systems" },
          { title: "Constitutional Law" },
          { title: "Legal Research" }
        ]
      },
      {
        title: "Core Legal Studies",
        duration: "Duration: 6 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Contract Law" },
          { title: "Criminal Law" },
          { title: "Civil Procedure" },
          { title: "Evidence Law" }
        ]
      },
      {
        title: "Specialized Law Areas",
        duration: "Duration: 5 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Corporate Law" },
          { title: "Family Law" },
          { title: "Property Law" },
          { title: "Labor Law" }
        ]
      },
      {
        title: "Legal Practice & Ethics",
        duration: "Duration: 4 weeks",
        difficulty: "Advanced",
        topics: [
          { title: "Legal Writing" },
          { title: "Advocacy Skills" },
          { title: "Professional Ethics" },
          { title: "Alternative Dispute Resolution" }
        ]
      }
    ],
    learningOutcomes: [
      {
        title: "Understand legal principles and systems",
        description: "Grasp fundamental concepts of law and legal reasoning"
      },
      {
        title: "Conduct comprehensive legal research",
        description: "Find and analyze relevant case law and statutes"
      },
      {
        title: "Draft legal documents effectively",
        description: "Prepare contracts, briefs, and other legal documents"
      },
      {
        title: "Apply law to practical situations",
        description: "Analyze legal issues and provide sound legal advice"
      },
      {
        title: "Develop advocacy and negotiation skills",
        description: "Represent clients and negotiate favorable outcomes"
      }
    ]
  },

  // 9. Agriculture
  {
    courseId: 9,
    modules: [
      {
        title: "Agricultural Foundations",
        duration: "Duration: 4 weeks",
        difficulty: "Beginner",
        topics: [
          { title: "Introduction to Agriculture" },
          { title: "Soil Science" },
          { title: "Plant Biology" },
          { title: "Agricultural Economics" }
        ]
      },
      {
        title: "Crop Production",
        duration: "Duration: 5 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Crop Management" },
          { title: "Pest Control" },
          { title: "Irrigation Systems" },
          { title: "Fertilizer Management" }
        ]
      },
      {
        title: "Animal Husbandry",
        duration: "Duration: 5 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Livestock Management" },
          { title: "Animal Nutrition" },
          { title: "Dairy Farming" },
          { title: "Poultry Farming" }
        ]
      },
      {
        title: "Modern Agriculture",
        duration: "Duration: 4 weeks",
        difficulty: "Advanced",
        topics: [
          { title: "Precision Agriculture" },
          { title: "Sustainable Farming" },
          { title: "Agri-Business" },
          { title: "Agricultural Technology" }
        ]
      }
    ],
    learningOutcomes: [
      {
        title: "Implement sustainable farming practices",
        description: "Apply environmentally friendly agricultural techniques"
      },
      {
        title: "Manage crop production efficiently",
        description: "Optimize crop yields using modern methods"
      },
      {
        title: "Practice animal husbandry professionally",
        description: "Care for and manage livestock effectively"
      },
      {
        title: "Use agricultural technology",
        description: "Leverage modern tools and precision agriculture"
      },
      {
        title: "Develop agri-business ventures",
        description: "Start and manage agricultural enterprises"
      }
    ]
  },

  // 10. Management
  {
    courseId: 10,
    modules: [
      {
        title: "Management Fundamentals",
        duration: "Duration: 4 weeks",
        difficulty: "Beginner",
        topics: [
          { title: "Principles of Management" },
          { title: "Organizational Behavior" },
          { title: "Business Communication" },
          { title: "Decision Making" }
        ]
      },
      {
        title: "Strategic Management",
        duration: "Duration: 5 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Strategic Planning" },
          { title: "Competitive Analysis" },
          { title: "Business Model Innovation" },
          { title: "Change Management" }
        ]
      },
      {
        title: "Operations & HR",
        duration: "Duration: 5 weeks",
        difficulty: "Intermediate",
        topics: [
          { title: "Operations Management" },
          { title: "Supply Chain Management" },
          { title: "Human Resource Management" },
          { title: "Performance Management" }
        ]
      },
      {
        title: "Leadership Excellence",
        duration: "Duration: 4 weeks",
        difficulty: "Advanced",
        topics: [
          { title: "Leadership Styles" },
          { title: "Team Building" },
          { title: "Conflict Resolution" },
          { title: "Executive Management" }
        ]
      }
    ],
    learningOutcomes: [
      {
        title: "Develop and implement strategic plans",
        description: "Create comprehensive strategies for organizational success"
      },
      {
        title: "Lead and motivate diverse teams",
        description: "Build high-performing teams and inspire excellence"
      },
      {
        title: "Optimize business operations",
        description: "Improve efficiency across all business functions"
      },
      {
        title: "Manage organizational change effectively",
        description: "Guide organizations through transformation"
      },
      {
        title: "Make data-driven business decisions",
        description: "Use analytics and insights for strategic decision-making"
      }
    ]
  }
];

// Helper function to get curriculum by course ID
export const getCurriculumByCourseId = (courseId: number): CourseCurriculum | undefined => {
  return courseCurriculumData.find(curriculum => curriculum.courseId === courseId);
};
