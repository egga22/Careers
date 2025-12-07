// Shared career metadata for the interactive map and detail pages
const baseCareers = [
  { id: "accountant", name: "Accountant", medianSalary: 78000 },
  { id: "actuary", name: "Actuary", medianSalary: 115000 },
  { id: "administrative-assistant", name: "Administrative Assistant", medianSalary: 42000 },
  { id: "aerospace-engineer", name: "Aerospace Engineer", medianSalary: 130000 },
  { id: "air-traffic-controller", name: "Air Traffic Controller", medianSalary: 135000 },
  { id: "aircraft-mechanic", name: "Aircraft Mechanic", medianSalary: 75000 },
  { id: "analytical-chemist", name: "Analytical Chemist", medianSalary: 66000 },
  { id: "animator", name: "Animator", medianSalary: 78000 },
  { id: "anthropologist", name: "Anthropologist", medianSalary: 66000 },
  { id: "architect", name: "Architect", medianSalary: 90000 },
  { id: "architecture-drafter", name: "Architecture Drafter", medianSalary: 60000 },
  { id: "archivist", name: "Archivist", medianSalary: 54000 },
  { id: "art-director", name: "Art Director", medianSalary: 105000 },
  { id: "artist-fine", name: "Fine Artist", medianSalary: 58000 },
  { id: "astronomer", name: "Astronomer", medianSalary: 130000 },
  { id: "athletic-trainer", name: "Athletic Trainer", medianSalary: 54000 },
  { id: "audio-engineer", name: "Audio Engineer", medianSalary: 60000 },
  { id: "auto-mechanic", name: "Auto Mechanic", medianSalary: 48000 },
  { id: "baker", name: "Baker", medianSalary: 34000 },
  { id: "bank-teller", name: "Bank Teller", medianSalary: 36000 },
  { id: "barber", name: "Barber", medianSalary: 40000 },
  { id: "bartender", name: "Bartender", medianSalary: 33000 },
  { id: "biochemist", name: "Biochemist", medianSalary: 105000 },
  { id: "biomedical-engineer", name: "Biomedical Engineer", medianSalary: 95000 },
  { id: "book-editor", name: "Book Editor", medianSalary: 63000 },
  { id: "bricklayer", name: "Bricklayer", medianSalary: 54000 },
  { id: "budget-analyst", name: "Budget Analyst", medianSalary: 86000 },
  { id: "building-inspector", name: "Building Inspector", medianSalary: 68000 },
  { id: "bus-driver", name: "Bus Driver", medianSalary: 45000 },
  { id: "business-analyst", name: "Business Analyst", medianSalary: 90000 },
  { id: "business-owner-small", name: "Small Business Owner", medianSalary: 65000 },
  { id: "butcher", name: "Butcher", medianSalary: 38000 },
  { id: "cable-technician", name: "Cable Technician", medianSalary: 52000 },
  { id: "carpenter", name: "Carpenter", medianSalary: 56000 },
  { id: "cartographer", name: "Cartographer", medianSalary: 70000 },
  { id: "cashier", name: "Cashier", medianSalary: 29000 },
  { id: "chef", name: "Chef", medianSalary: 58000 },
  { id: "chemical-engineer", name: "Chemical Engineer", medianSalary: 115000 },
  { id: "chemist", name: "Chemist", medianSalary: 66000 },
  { id: "childcare-worker", name: "Childcare Worker", medianSalary: 30000 },
  { id: "chiropractor", name: "Chiropractor", medianSalary: 76000 },
  { id: "civil-engineer", name: "Civil Engineer", medianSalary: 97000 },
  { id: "claims-adjuster", name: "Claims Adjuster", medianSalary: 66000 },
  { id: "clinical-lab-technician", name: "Clinical Lab Technician", medianSalary: 57000 },
  { id: "coach-sports", name: "Sports Coach", medianSalary: 49000 },
  { id: "computer-hardware-engineer", name: "Computer Hardware Engineer", medianSalary: 132000 },
  { id: "computer-network-architect", name: "Network Architect", medianSalary: 126000 },
  { id: "computer-programmer", name: "Programmer", medianSalary: 95000 },
  { id: "construction-laborer", name: "Construction Laborer", medianSalary: 42000 },
  { id: "construction-manager", name: "Construction Manager", medianSalary: 105000 },
  { id: "consultant-management", name: "Management Consultant", medianSalary: 125000 },
  { id: "content-creator", name: "Content Creator", medianSalary: 50000 },
  { id: "cookie-decorator", name: "Cookie Decorator", medianSalary: 35000 },
  { id: "correctional-officer", name: "Correctional Officer", medianSalary: 52000 },
  { id: "cosmetologist", name: "Cosmetologist", medianSalary: 36000 },
  { id: "courier", name: "Courier", medianSalary: 38000 },
  { id: "court-reporter", name: "Court Reporter", medianSalary: 65000 },
  { id: "cryptographer", name: "Cryptographer", medianSalary: 140000 },
  { id: "customer-support-agent", name: "Customer Support Agent", medianSalary: 42000 },
  { id: "data-analyst", name: "Data Analyst", medianSalary: 82000 },
  { id: "data-engineer", name: "Data Engineer", medianSalary: 135000 },
  { id: "data-scientist", name: "Data Scientist", medianSalary: 140000 },
  { id: "database-administrator", name: "Database Administrator", medianSalary: 105000 },
  { id: "dental-assistant", name: "Dental Assistant", medianSalary: 43000 },
  { id: "dental-hygienist", name: "Dental Hygienist", medianSalary: 82000 },
  { id: "dentist", name: "Dentist", medianSalary: 160000 },
  { id: "detective", name: "Detective", medianSalary: 81000 },
  { id: "dietitian", name: "Dietitian", medianSalary: 68000 },
  { id: "dispatcher", name: "Dispatcher", medianSalary: 46000 },
  { id: "doctor-family", name: "Family Physician", medianSalary: 220000 },
  { id: "doctor-surgeon", name: "Surgeon", medianSalary: 330000 },
  { id: "dog-trainer", name: "Dog Trainer", medianSalary: 38000 },
  { id: "economist", name: "Economist", medianSalary: 115000 },
  { id: "editor-video", name: "Video Editor", medianSalary: 62000 },
  { id: "electrician", name: "Electrician", medianSalary: 60000 },
  { id: "elementary-teacher", name: "Elementary Teacher", medianSalary: 61000 },
  { id: "emt", name: "EMT", medianSalary: 42000 },
  { id: "environmental-engineer", name: "Environmental Engineer", medianSalary: 97000 },
  { id: "event-planner", name: "Event Planner", medianSalary: 54000 },
  { id: "farmer", name: "Farmer", medianSalary: 55000 },
  { id: "fashion-designer", name: "Fashion Designer", medianSalary: 78000 },
  { id: "financial-advisor", name: "Financial Advisor", medianSalary: 98000 },
  { id: "financial-analyst", name: "Financial Analyst", medianSalary: 90000 },
  { id: "firefighter", name: "Firefighter", medianSalary: 53000 },
  { id: "fitness-trainer", name: "Fitness Trainer", medianSalary: 46000 },
  { id: "flight-attendant", name: "Flight Attendant", medianSalary: 62000 },
  { id: "florist", name: "Florist", medianSalary: 34000 },
  { id: "food-scientist", name: "Food Scientist", medianSalary: 76000 },
  { id: "forensic-scientist", name: "Forensic Scientist", medianSalary: 68000 },
  { id: "frontend-developer", name: "Frontend Developer", medianSalary: 105000 },
  { id: "game-developer", name: "Game Developer", medianSalary: 100000 },
  { id: "genetic-counselor", name: "Genetic Counselor", medianSalary: 92000 },
  { id: "geographer", name: "Geographer", medianSalary: 86000 },
  { id: "geologist", name: "Geologist", medianSalary: 95000 },
  { id: "graphic-designer", name: "Graphic Designer", medianSalary: 56000 },
  { id: "groundskeeper", name: "Groundskeeper", medianSalary: 35000 },
  { id: "hair-stylist", name: "Hair Stylist", medianSalary: 38000 },
  { id: "healthcare-administrator", name: "Healthcare Administrator", medianSalary: 104000 },
  { id: "historian", name: "Historian", medianSalary: 66000 },
  { id: "home-health-aide", name: "Home Health Aide", medianSalary: 33000 },
  { id: "homicide-detective", name: "Homicide Detective", medianSalary: 85000 },
  { id: "hotel-manager", name: "Hotel Manager", medianSalary: 65000 },
  { id: "hr-manager", name: "HR Manager", medianSalary: 130000 },
  { id: "hvac-technician", name: "HVAC Technician", medianSalary: 58000 },
  { id: "illustrator", name: "Illustrator", medianSalary: 62000 },
  { id: "industrial-designer", name: "Industrial Designer", medianSalary: 76000 },
  { id: "industrial-engineer", name: "Industrial Engineer", medianSalary: 96000 },
  { id: "information-security-analyst", name: "Cybersecurity Analyst", medianSalary: 120000 },
  { id: "insurance-agent", name: "Insurance Agent", medianSalary: 58000 },
  { id: "interior-designer", name: "Interior Designer", medianSalary: 65000 },
  { id: "interpreter", name: "Interpreter", medianSalary: 52000 },
  { id: "investigator-private", name: "Private Investigator", medianSalary: 57000 },
  { id: "ironworker", name: "Ironworker", medianSalary: 58000 },
  { id: "it-support-specialist", name: "IT Support Specialist", medianSalary: 56000 },
  { id: "janitor", name: "Janitor", medianSalary: 33000 },
  { id: "journalist", name: "Journalist", medianSalary: 60000 },
  { id: "judge", name: "Judge", medianSalary: 200000 },
  { id: "lab-technician", name: "Lab Technician", medianSalary: 52000 },
  { id: "land-surveyor", name: "Land Surveyor", medianSalary: 67000 },
  { id: "landscaper", name: "Landscaper", medianSalary: 36000 },
  { id: "lawyer", name: "Lawyer", medianSalary: 145000 },
  { id: "librarian", name: "Librarian", medianSalary: 61000 },
  { id: "loan-officer", name: "Loan Officer", medianSalary: 63000 },
  { id: "logistician", name: "Logistician", medianSalary: 79000 },
  { id: "machinist", name: "Machinist", medianSalary: 52000 },
  { id: "maintenance-technician", name: "Maintenance Technician", medianSalary: 50000 },
  { id: "makeup-artist", name: "Makeup Artist", medianSalary: 62000 },
  { id: "management-analyst", name: "Management Analyst", medianSalary: 100000 },
  { id: "marine-biologist", name: "Marine Biologist", medianSalary: 72000 },
  { id: "marketing-manager", name: "Marketing Manager", medianSalary: 135000 },
  { id: "massage-therapist", name: "Massage Therapist", medianSalary: 48000 },
  { id: "mathematician", name: "Mathematician", medianSalary: 115000 },
  { id: "mechanical-engineer", name: "Mechanical Engineer", medianSalary: 100000 },
  { id: "medical-assistant", name: "Medical Assistant", medianSalary: 38000 },
  { id: "medical-scientist", name: "Medical Scientist", medianSalary: 105000 },
  { id: "meteorologist", name: "Meteorologist", medianSalary: 85000 },
  { id: "microbiologist", name: "Microbiologist", medianSalary: 76000 },
  { id: "midwife", name: "Midwife", medianSalary: 120000 },
  { id: "military-officer", name: "Military Officer", medianSalary: 80000 },
  { id: "model-fashion", name: "Fashion Model", medianSalary: 45000 },
  { id: "mortician", name: "Mortician", medianSalary: 60000 },
  { id: "motion-graphics-designer", name: "Motion Graphics Designer", medianSalary: 78000 },
  { id: "museum-curator", name: "Museum Curator", medianSalary: 61000 },
  { id: "music-producer", name: "Music Producer", medianSalary: 70000 },
  { id: "musician", name: "Musician", medianSalary: 55000 },
  { id: "network-engineer", name: "Network Engineer", medianSalary: 110000 },
  { id: "neurologist", name: "Neurologist", medianSalary: 290000 },
  { id: "nuclear-engineer", name: "Nuclear Engineer", medianSalary: 125000 },
  { id: "nuclear-technician", name: "Nuclear Technician", medianSalary: 85000 },
  { id: "nurse-practitioner", name: "Nurse Practitioner", medianSalary: 120000 },
  { id: "nutritionist", name: "Nutritionist", medianSalary: 63000 },
  { id: "occupational-therapist", name: "Occupational Therapist", medianSalary: 92000 },
  { id: "office-manager", name: "Office Manager", medianSalary: 62000 },
  { id: "oncologist", name: "Oncologist", medianSalary: 320000 },
  { id: "ophthalmologist", name: "Ophthalmologist", medianSalary: 300000 },
  { id: "optometrist", name: "Optometrist", medianSalary: 130000 },
  { id: "painter", name: "Painter", medianSalary: 44000 },
  { id: "paramedic", name: "Paramedic", medianSalary: 52000 },
  { id: "park-ranger", name: "Park Ranger", medianSalary: 50000 },
  { id: "paralegal", name: "Paralegal", medianSalary: 58000 },
  { id: "pathologist", name: "Pathologist", medianSalary: 270000 },
  { id: "personal-trainer", name: "Personal Trainer", medianSalary: 48000 },
  { id: "pharmacist", name: "Pharmacist", medianSalary: 128000 },
  { id: "photographer", name: "Photographer", medianSalary: 42000 },
  { id: "physical-therapist", name: "Physical Therapist", medianSalary: 98000 },
  { id: "physician-assistant", name: "Physician Assistant", medianSalary: 120000 },
  { id: "physicist", name: "Physicist", medianSalary: 140000 },
  { id: "pilot-commercial", name: "Commercial Pilot", medianSalary: 120000 },
  { id: "pipefitter", name: "Pipefitter", medianSalary: 63000 },
  { id: "plumber", name: "Plumber", medianSalary: 60000 },
  { id: "police-officer", name: "Police Officer", medianSalary: 65000 },
  { id: "political-scientist", name: "Political Scientist", medianSalary: 122000 },
  { id: "principal", name: "School Principal", medianSalary: 110000 },
  { id: "probation-officer", name: "Probation Officer", medianSalary: 54000 },
  { id: "product-manager", name: "Product Manager", medianSalary: 135000 },
  { id: "professor", name: "College Professor", medianSalary: 92000 },
  { id: "project-manager", name: "Project Manager", medianSalary: 100000 },
  { id: "psychologist", name: "Psychologist", medianSalary: 100000 },
  { id: "psychiatrist", name: "Psychiatrist", medianSalary: 280000 },
  { id: "public-relations-specialist", name: "PR Specialist", medianSalary: 68000 },
  { id: "quality-assurance-tester", name: "QA Tester", medianSalary: 65000 },
  { id: "radiologic-technologist", name: "Radiologic Technologist", medianSalary: 65000 },
  { id: "real-estate-agent", name: "Real Estate Agent", medianSalary: 60000 },
  { id: "real-estate-broker", name: "Real Estate Broker", medianSalary: 90000 },
  { id: "receptionist", name: "Receptionist", medianSalary: 36000 },
  { id: "registered-nurse", name: "Registered Nurse", medianSalary: 83000 },
  { id: "researcher-clinical", name: "Clinical Researcher", medianSalary: 95000 },
  { id: "restaurant-manager", name: "Restaurant Manager", medianSalary: 58000 },
  { id: "roofer", name: "Roofer", medianSalary: 46000 },
  { id: "safety-inspector", name: "Safety Inspector", medianSalary: 70000 },
  { id: "sales-manager", name: "Sales Manager", medianSalary: 140000 },
  { id: "sales-representative", name: "Sales Representative", medianSalary: 57000 },
  { id: "school-counselor", name: "School Counselor", medianSalary: 64000 },
  { id: "scientist-research", name: "Research Scientist", medianSalary: 105000 },
  { id: "security-guard", name: "Security Guard", medianSalary: 35000 },
  { id: "seo-specialist", name: "SEO Specialist", medianSalary: 65000 },
  { id: "social-media-manager", name: "Social Media Manager", medianSalary: 65000 },
  { id: "social-worker", name: "Social Worker", medianSalary: 55000 },
  { id: "software-engineer", name: "Software Engineer", medianSalary: 125000 },
  { id: "software-tester", name: "Software Tester", medianSalary: 70000 },
  { id: "sound-designer", name: "Sound Designer", medianSalary: 65000 },
  { id: "speech-pathologist", name: "Speech Pathologist", medianSalary: 90000 },
  { id: "statistician", name: "Statistician", medianSalary: 112000 },
  { id: "stockbroker", name: "Stockbroker", medianSalary: 90000 },
  { id: "structural-engineer", name: "Structural Engineer", medianSalary: 104000 },
  { id: "supply-chain-manager", name: "Supply Chain Manager", medianSalary: 120000 },
  { id: "surveyor", name: "Surveyor", medianSalary: 68000 },
  { id: "tailor", name: "Tailor", medianSalary: 36000 },
  { id: "tax-preparer", name: "Tax Preparer", medianSalary: 58000 },
  { id: "teacher-highschool", name: "High School Teacher", medianSalary: 65000 },
  { id: "technical-writer", name: "Technical Writer", medianSalary: 78000 },
  { id: "therapist-mental-health", name: "Mental Health Therapist", medianSalary: 60000 },
  { id: "therapist-occupational", name: "Occupational Therapist", medianSalary: 92000 },
  { id: "therapist-physical", name: "Physical Therapist", medianSalary: 98000 },
  { id: "tile-setter", name: "Tile Setter", medianSalary: 48000 },
  { id: "tour-guide", name: "Tour Guide", medianSalary: 36000 },
  { id: "translator", name: "Translator", medianSalary: 52000 },
  { id: "truck-driver", name: "Truck Driver", medianSalary: 52000 },
  { id: "tutor", name: "Tutor", medianSalary: 43000 },
  { id: "ui-ux-designer", name: "UI/UX Designer", medianSalary: 105000 },
  { id: "ultrasound-technician", name: "Ultrasound Technician", medianSalary: 78000 },
  { id: "veterinarian", name: "Veterinarian", medianSalary: 110000 },
  { id: "vet-tech", name: "Veterinary Technician", medianSalary: 38000 },
  { id: "videographer", name: "Videographer", medianSalary: 52000 },
  { id: "waiter", name: "Waiter", medianSalary: 30000 },
  { id: "web-developer", name: "Web Developer", medianSalary: 85000 },
  { id: "welder", name: "Welder", medianSalary: 50000 },
  { id: "writer-author", name: "Writer/Author", medianSalary: 69000 },
  { id: "zoologist", name: "Zoologist", medianSalary: 76000 }
];

const careerTaxonomy = {
  clusters: [
    {
      id: "stem-technical",
      name: "STEM & Technical",
      sectors: [
        {
          id: "software-it",
          name: "Software & IT",
          industries: [
            "Software Development",
            "Cybersecurity",
            "IT Support",
            "Artificial Intelligence",
          ],
        },
        {
          id: "engineering",
          name: "Engineering",
          industries: [
            "Chemical Engineering",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Civil Engineering",
          ],
        },
        {
          id: "science-research",
          name: "Science & Research",
          industries: [
            "Biotechnology",
            "Environmental Science",
            "Physics Research",
            "Data Science",
            "Chemistry Research",
            "Geospatial Science",
            "Forensic Science",
          ],
        },
        {
          id: "math-analytics",
          name: "Math & Analytics",
          industries: [
            "Mathematics",
            "Statistics",
            "Quantitative Analysis",
            "Financial Modeling",
          ],
        },
      ],
    },
    {
      id: "hospitality-retail-services",
      name: "Hospitality, Retail & Services",
      sectors: [
        {
          id: "food-beverage-service",
          name: "Food & Beverage Service",
          industries: [
            "Culinary Arts",
            "Food & Beverage Service",
            "Baking & Pastry",
          ],
        },
        {
          id: "hospitality-tourism",
          name: "Hospitality & Tourism",
          industries: [
            "Lodging Management",
            "Travel & Tourism",
            "Passenger Transport",
          ],
        },
        {
          id: "personal-wellness-services",
          name: "Personal & Wellness Services",
          industries: [
            "Hair & Beauty",
            "Spa & Wellness",
            "Fitness & Coaching",
            "Pet Care & Training",
          ],
        },
        {
          id: "facilities-outdoor",
          name: "Facilities & Outdoor",
          industries: [
            "Custodial & Housekeeping",
            "Groundskeeping & Landscaping",
            "Agriculture & Farming",
          ],
        },
        {
          id: "retail-customer-service",
          name: "Retail & Customer Support",
          industries: [
            "Retail & Customer Service",
            "Specialty Shops & Floral",
            "Apparel & Tailoring",
          ],
        },
      ],
    },
    {
      id: "business-finance",
      name: "Business & Finance",
      sectors: [
        {
          id: "management",
          name: "Management",
          industries: [
            "Corporate Management",
            "Human Resources",
            "Operations Management",
            "Administrative Support",
            "Business Analysis",
          ],
        },
        {
          id: "finance-investing",
          name: "Finance & Investing",
          industries: [
            "Investment Banking",
            "Accounting",
            "Insurance",
            "Real Estate",
            "Banking Services",
          ],
        },
        {
          id: "marketing-sales",
          name: "Marketing & Sales",
          industries: ["Marketing", "Advertising", "Sales", "Public Relations"],
        },
        {
          id: "entrepreneurship-operations",
          name: "Entrepreneurship & Operations",
          industries: [
            "Startups",
            "Small Business",
            "E-commerce",
            "Supply Chain & Logistics",
          ],
        },
      ],
    },
    {
      id: "arts-media-communication",
      name: "Arts, Media & Communication",
      sectors: [
        {
          id: "visual-arts-design",
          name: "Visual Arts & Design",
          industries: ["Graphic Design", "Animation", "Photography", "Illustration"],
        },
        {
          id: "performing-arts",
          name: "Performing Arts",
          industries: [
            "Music Production",
            "Acting",
            "Dance",
            "Theatre Production",
            "Fashion & Modeling",
          ],
        },
        {
          id: "writing-journalism",
          name: "Writing, Journalism & Communications",
          industries: ["Journalism", "Copywriting", "Editing", "Broadcast Media"],
        },
        {
          id: "museums-archives-history",
          name: "Museums, Archives & History",
          industries: [
            "Museums & Curation",
            "Archives & Library Science",
            "History & Cultural Preservation",
          ],
        },
      ],
    },
    {
      id: "health-human-services",
      name: "Health & Human Services",
      sectors: [
        {
          id: "medical-clinical",
          name: "Medical & Clinical",
          industries: [
            "Nursing",
            "Medicine",
            "Dentistry",
            "Pharmacy",
            "Clinical Research",
            "Nutrition & Dietetics",
            "Healthcare Administration",
            "Veterinary Medicine",
          ],
        },
        {
          id: "mental-health-social",
          name: "Mental Health & Social Services",
          industries: [
            "Mental Health Counseling",
            "Social Work",
            "Rehabilitation Services",
            "Public Health",
            "Funeral Services & Bereavement Support",
          ],
        },
        {
          id: "education-training",
          name: "Education & Training",
          industries: [
            "Early Childhood Education",
            "K–12 Teaching",
            "Special Education",
            "Tutoring & Academic Support",
          ],
        },
      ],
    },
    {
      id: "trades-law-public-operations",
      name: "Trades, Law, and Public Operations",
      sectors: [
        {
          id: "skilled-trades",
          name: "Skilled Trades",
          industries: [
            "Construction",
            "Carpentry",
            "Electricians",
            "Plumbing",
            "Automotive & Aviation Repair",
            "Metalwork & Fabrication",
            "Painting & Finishing",
          ],
        },
        {
          id: "legal",
          name: "Law & Legal Services",
          industries: ["Law", "Paralegal Services", "Compliance", "Legal Research"],
        },
        {
          id: "public-safety-government",
          name: "Public Safety & Government",
          industries: [
            "Law Enforcement",
            "Firefighting",
            "Military & Defense",
            "Emergency Management",
          ],
        },
      ],
    },
  ],
};

const categoryRules = [
  {
    ids: new Set([
      "software-engineer",
      "frontend-developer",
      "web-developer",
      "game-developer",
      "computer-programmer",
      "product-manager",
      "quality-assurance-tester",
      "software-tester",
      "database-administrator",
      "network-engineer",
      "computer-network-architect",
    ]),
    category: {
      clusterId: "stem-technical",
      sectorId: "software-it",
      industry: "Software Development",
    },
  },
  {
    ids: new Set(["information-security-analyst", "cryptographer"]),
    category: {
      clusterId: "stem-technical",
      sectorId: "software-it",
      industry: "Cybersecurity",
    },
  },
  {
    ids: new Set(["it-support-specialist", "customer-support-agent"]),
    category: {
      clusterId: "stem-technical",
      sectorId: "software-it",
      industry: "IT Support",
    },
  },
  {
    ids: new Set(["data-scientist", "data-analyst", "data-engineer"]),
    category: {
      clusterId: "stem-technical",
      sectorId: "software-it",
      industry: "Artificial Intelligence",
    },
  },
  {
    ids: new Set(["chemical-engineer"]),
    category: {
      clusterId: "stem-technical",
      sectorId: "engineering",
      industry: "Chemical Engineering",
    },
  },
  {
    ids: new Set([
      "mechanical-engineer",
      "industrial-engineer",
      "maintenance-technician",
      "machinist",
      "industrial-designer",
    ]),
    category: {
      clusterId: "stem-technical",
      sectorId: "engineering",
      industry: "Mechanical Engineering",
    },
  },
  {
    ids: new Set([
      "computer-hardware-engineer",
      "electrician",
      "hvac-technician",
      "cable-technician",
    ]),
    category: {
      clusterId: "stem-technical",
      sectorId: "engineering",
      industry: "Electrical Engineering",
    },
  },
  {
    ids: new Set([
      "civil-engineer",
      "structural-engineer",
      "aerospace-engineer",
      "environmental-engineer",
      "nuclear-engineer",
      "nuclear-technician",
      "architect",
      "architecture-drafter",
      "building-inspector",
      "land-surveyor",
    ]),
    category: {
      clusterId: "stem-technical",
      sectorId: "engineering",
      industry: "Civil Engineering",
    },
  },
  {
    ids: new Set([
      "biochemist",
      "chemist",
      "biomedical-engineer",
      "medical-scientist",
      "food-scientist",
      "microbiologist",
      "genetic-counselor",
      "medical-assistant",
      "clinical-lab-technician",
    ]),
    category: {
      clusterId: "stem-technical",
      sectorId: "science-research",
      industry: "Biotechnology",
    },
  },
  {
    ids: new Set([
      "environmental-engineer",
      "geologist",
      "park-ranger",
      "marine-biologist",
      "zoologist",
    ]),
    category: {
      clusterId: "stem-technical",
      sectorId: "science-research",
      industry: "Environmental Science",
    },
  },
  {
    ids: new Set([
      "physicist",
      "astronomer",
      "meteorologist",
      "nuclear-engineer",
      "nuclear-technician",
      "scientist-research",
    ]),
    category: {
      clusterId: "stem-technical",
      sectorId: "science-research",
      industry: "Physics Research",
    },
  },
  {
    ids: new Set([
      "data-scientist",
      "statistician",
      "mathematician",
      "data-analyst",
      "budget-analyst",
      "economist",
    ]),
    category: {
      clusterId: "stem-technical",
      sectorId: "science-research",
      industry: "Data Science",
    },
  },
  {
    ids: new Set(["mathematician", "actuary"]),
    category: {
      clusterId: "stem-technical",
      sectorId: "math-analytics",
      industry: "Mathematics",
    },
  },
  {
    ids: new Set(["statistician"]),
    category: {
      clusterId: "stem-technical",
      sectorId: "math-analytics",
      industry: "Statistics",
    },
  },
  {
    ids: new Set([
      "financial-analyst",
      "financial-advisor",
      "stockbroker",
      "political-scientist",
    ]),
    category: {
      clusterId: "stem-technical",
      sectorId: "math-analytics",
      industry: "Quantitative Analysis",
    },
  },
  {
    ids: new Set([
      "economist",
      "budget-analyst",
      "management-analyst",
      "logistician",
      "supply-chain-manager",
    ]),
    category: {
      clusterId: "stem-technical",
      sectorId: "math-analytics",
      industry: "Financial Modeling",
    },
  },
  {
    ids: new Set([
      "project-manager",
      "management-analyst",
      "consultant-management",
      "restaurant-manager",
      "hotel-manager",
      "office-manager",
      "construction-manager",
      "principal",
    ]),
    category: {
      clusterId: "business-finance",
      sectorId: "management",
      industry: "Corporate Management",
    },
  },
  {
    ids: new Set(["hr-manager", "administrative-assistant", "office-manager"]),
    category: {
      clusterId: "business-finance",
      sectorId: "management",
      industry: "Human Resources",
    },
  },
  {
    ids: new Set(["logistician", "supply-chain-manager", "truck-driver"]),
    category: {
      clusterId: "business-finance",
      sectorId: "management",
      industry: "Operations Management",
    },
  },
  {
    ids: new Set(["accountant", "tax-preparer", "budget-analyst", "actuary"]),
    category: {
      clusterId: "business-finance",
      sectorId: "finance-investing",
      industry: "Accounting",
    },
  },
  {
    ids: new Set(["financial-analyst", "financial-advisor", "stockbroker", "loan-officer"]),
    category: {
      clusterId: "business-finance",
      sectorId: "finance-investing",
      industry: "Investment Banking",
    },
  },
  {
    ids: new Set(["insurance-agent", "claims-adjuster"]),
    category: {
      clusterId: "business-finance",
      sectorId: "finance-investing",
      industry: "Insurance",
    },
  },
  {
    ids: new Set(["real-estate-agent", "real-estate-broker"]),
    category: {
      clusterId: "business-finance",
      sectorId: "finance-investing",
      industry: "Real Estate",
    },
  },
  {
    ids: new Set([
      "marketing-manager",
      "seo-specialist",
      "social-media-manager",
      "content-creator",
      "event-planner",
      "public-relations-specialist",
    ]),
    category: {
      clusterId: "business-finance",
      sectorId: "marketing-sales",
      industry: "Marketing",
    },
  },
  {
    ids: new Set(["sales-manager", "sales-representative"]),
    category: {
      clusterId: "business-finance",
      sectorId: "marketing-sales",
      industry: "Sales",
    },
  },
  {
    ids: new Set(["public-relations-specialist"]),
    category: {
      clusterId: "business-finance",
      sectorId: "marketing-sales",
      industry: "Public Relations",
    },
  },
  {
    ids: new Set(["logistician", "supply-chain-manager", "courier", "truck-driver"]),
    category: {
      clusterId: "business-finance",
      sectorId: "entrepreneurship-operations",
      industry: "Supply Chain & Logistics",
    },
  },
  {
    ids: new Set(["business-owner-small"]),
    category: {
      clusterId: "business-finance",
      sectorId: "entrepreneurship-operations",
      industry: "Small Business",
    },
  },
  {
    ids: new Set(["business-analyst"]),
    category: {
      clusterId: "business-finance",
      sectorId: "management",
      industry: "Business Analysis",
    },
  },
  {
    ids: new Set(["receptionist", "office-manager", "administrative-assistant"]),
    category: {
      clusterId: "business-finance",
      sectorId: "management",
      industry: "Administrative Support",
    },
  },
  {
    ids: new Set(["bank-teller"]),
    category: {
      clusterId: "business-finance",
      sectorId: "finance-investing",
      industry: "Banking Services",
    },
  },
  {
    ids: new Set(["chef", "baker", "cookie-decorator", "butcher"]),
    category: {
      clusterId: "hospitality-retail-services",
      sectorId: "food-beverage-service",
      industry: "Culinary Arts",
    },
  },
  {
    ids: new Set(["waiter", "bartender", "restaurant-manager"]),
    category: {
      clusterId: "hospitality-retail-services",
      sectorId: "food-beverage-service",
      industry: "Food & Beverage Service",
    },
  },
  {
    ids: new Set(["hotel-manager"]),
    category: {
      clusterId: "hospitality-retail-services",
      sectorId: "hospitality-tourism",
      industry: "Lodging Management",
    },
  },
  {
    ids: new Set(["tour-guide"]),
    category: {
      clusterId: "hospitality-retail-services",
      sectorId: "hospitality-tourism",
      industry: "Travel & Tourism",
    },
  },
  {
    ids: new Set(["flight-attendant", "bus-driver"]),
    category: {
      clusterId: "hospitality-retail-services",
      sectorId: "hospitality-tourism",
      industry: "Passenger Transport",
    },
  },
  {
    ids: new Set(["barber", "hair-stylist", "cosmetologist", "makeup-artist"]),
    category: {
      clusterId: "hospitality-retail-services",
      sectorId: "personal-wellness-services",
      industry: "Hair & Beauty",
    },
  },
  {
    ids: new Set(["massage-therapist"]),
    category: {
      clusterId: "hospitality-retail-services",
      sectorId: "personal-wellness-services",
      industry: "Spa & Wellness",
    },
  },
  {
    ids: new Set(["fitness-trainer", "personal-trainer"]),
    category: {
      clusterId: "hospitality-retail-services",
      sectorId: "personal-wellness-services",
      industry: "Fitness & Coaching",
    },
  },
  {
    ids: new Set(["dog-trainer"]),
    category: {
      clusterId: "hospitality-retail-services",
      sectorId: "personal-wellness-services",
      industry: "Pet Care & Training",
    },
  },
  {
    ids: new Set(["janitor"]),
    category: {
      clusterId: "hospitality-retail-services",
      sectorId: "facilities-outdoor",
      industry: "Custodial & Housekeeping",
    },
  },
  {
    ids: new Set(["groundskeeper", "landscaper"]),
    category: {
      clusterId: "hospitality-retail-services",
      sectorId: "facilities-outdoor",
      industry: "Groundskeeping & Landscaping",
    },
  },
  {
    ids: new Set(["farmer"]),
    category: {
      clusterId: "hospitality-retail-services",
      sectorId: "facilities-outdoor",
      industry: "Agriculture & Farming",
    },
  },
  {
    ids: new Set(["cashier"]),
    category: {
      clusterId: "hospitality-retail-services",
      sectorId: "retail-customer-service",
      industry: "Retail & Customer Service",
    },
  },
  {
    ids: new Set(["florist"]),
    category: {
      clusterId: "hospitality-retail-services",
      sectorId: "retail-customer-service",
      industry: "Specialty Shops & Floral",
    },
  },
  {
    ids: new Set(["tailor"]),
    category: {
      clusterId: "hospitality-retail-services",
      sectorId: "retail-customer-service",
      industry: "Apparel & Tailoring",
    },
  },
  {
    ids: new Set(["analytical-chemist", "chemist"]),
    category: {
      clusterId: "stem-technical",
      sectorId: "science-research",
      industry: "Chemistry Research",
    },
  },
  {
    ids: new Set(["cartographer", "geographer"]),
    category: {
      clusterId: "stem-technical",
      sectorId: "science-research",
      industry: "Geospatial Science",
    },
  },
  {
    ids: new Set(["forensic-scientist"]),
    category: {
      clusterId: "stem-technical",
      sectorId: "science-research",
      industry: "Forensic Science",
    },
  },
  {
    ids: new Set(["auto-mechanic", "aircraft-mechanic"]),
    category: {
      clusterId: "trades-law-public-operations",
      sectorId: "skilled-trades",
      industry: "Automotive & Aviation Repair",
    },
  },
  {
    ids: new Set(["welder"]),
    category: {
      clusterId: "trades-law-public-operations",
      sectorId: "skilled-trades",
      industry: "Metalwork & Fabrication",
    },
  },
  {
    ids: new Set(["painter", "tile-setter"]),
    category: {
      clusterId: "trades-law-public-operations",
      sectorId: "skilled-trades",
      industry: "Painting & Finishing",
    },
  },
  {
    ids: new Set(["childcare-worker"]),
    category: {
      clusterId: "health-human-services",
      sectorId: "education-training",
      industry: "Early Childhood Education",
    },
  },
  {
    ids: new Set(["healthcare-administrator"]),
    category: {
      clusterId: "health-human-services",
      sectorId: "medical-clinical",
      industry: "Healthcare Administration",
    },
  },
  {
    ids: new Set(["nutritionist", "dietitian"]),
    category: {
      clusterId: "health-human-services",
      sectorId: "medical-clinical",
      industry: "Nutrition & Dietetics",
    },
  },
  {
    ids: new Set(["researcher-clinical", "clinical-lab-technician"]),
    category: {
      clusterId: "health-human-services",
      sectorId: "medical-clinical",
      industry: "Clinical Research",
    },
  },
  {
    ids: new Set(["veterinarian", "vet-tech"]),
    category: {
      clusterId: "health-human-services",
      sectorId: "medical-clinical",
      industry: "Veterinary Medicine",
    },
  },
  {
    ids: new Set(["mortician"]),
    category: {
      clusterId: "health-human-services",
      sectorId: "mental-health-social",
      industry: "Funeral Services & Bereavement Support",
    },
  },
  {
    ids: new Set(["model-fashion"]),
    category: {
      clusterId: "arts-media-communication",
      sectorId: "performing-arts",
      industry: "Fashion & Modeling",
    },
  },
  {
    ids: new Set(["archivist", "librarian"]),
    category: {
      clusterId: "arts-media-communication",
      sectorId: "museums-archives-history",
      industry: "Archives & Library Science",
    },
  },
  {
    ids: new Set(["museum-curator"]),
    category: {
      clusterId: "arts-media-communication",
      sectorId: "museums-archives-history",
      industry: "Museums & Curation",
    },
  },
  {
    ids: new Set(["historian", "anthropologist"]),
    category: {
      clusterId: "arts-media-communication",
      sectorId: "museums-archives-history",
      industry: "History & Cultural Preservation",
    },
  },
  {
    ids: new Set([
      "graphic-designer",
      "illustrator",
      "animator",
      "motion-graphics-designer",
      "art-director",
      "artist-fine",
      "industrial-designer",
      "fashion-designer",
      "interior-designer",
      "photographer",
      "videographer",
      "editor-video",
      "architect",
      "architecture-drafter",
      "ui-ux-designer",
    ]),
    category: {
      clusterId: "arts-media-communication",
      sectorId: "visual-arts-design",
      industry: "Graphic Design",
    },
  },
  {
    ids: new Set(["music-producer", "sound-designer", "audio-engineer", "musician"]),
    category: {
      clusterId: "arts-media-communication",
      sectorId: "performing-arts",
      industry: "Music Production",
    },
  },
  {
    ids: new Set(["writer-author", "book-editor", "journalist", "technical-writer", "translator", "interpreter"]),
    category: {
      clusterId: "arts-media-communication",
      sectorId: "writing-journalism",
      industry: "Journalism",
    },
  },
  {
    ids: new Set([
      "doctor-family",
      "doctor-surgeon",
      "dentist",
      "dental-hygienist",
      "dental-assistant",
      "nurse-practitioner",
      "registered-nurse",
      "medical-assistant",
      "lab-technician",
      "clinical-lab-technician",
      "radiologic-technologist",
      "pharmacist",
      "ultrasound-technician",
      "paramedic",
      "emt",
      "midwife",
      "physician-assistant",
      "optometrist",
      "oncologist",
      "ophthalmologist",
      "neurologist",
      "pathologist",
      "dietitian",
      "chiropractor",
      "occupational-therapist",
      "therapist-occupational",
      "therapist-physical",
      "physical-therapist",
      "speech-pathologist",
      "ultrasound-technician",
    ]),
    category: {
      clusterId: "health-human-services",
      sectorId: "medical-clinical",
      industry: "Medicine",
    },
  },
  {
    ids: new Set([
      "psychologist",
      "psychiatrist",
      "therapist-mental-health",
      "school-counselor",
      "social-worker",
    ]),
    category: {
      clusterId: "health-human-services",
      sectorId: "mental-health-social",
      industry: "Mental Health Counseling",
    },
  },
  {
    ids: new Set([
      "home-health-aide",
      "physical-therapist",
      "occupational-therapist",
      "massage-therapist",
      "athletic-trainer",
    ]),
    category: {
      clusterId: "health-human-services",
      sectorId: "mental-health-social",
      industry: "Rehabilitation Services",
    },
  },
  {
    ids: new Set([
      "teacher-highschool",
      "elementary-teacher",
      "tutor",
      "professor",
      "coach-sports",
      "school-counselor",
      "principal",
    ]),
    category: {
      clusterId: "health-human-services",
      sectorId: "education-training",
      industry: "K–12 Teaching",
    },
  },
  {
    ids: new Set([
      "construction-laborer",
      "construction-manager",
      "bricklayer",
      "carpenter",
      "ironworker",
      "roofer",
      "safety-inspector",
      "surveyor",
    ]),
    category: {
      clusterId: "trades-law-public-operations",
      sectorId: "skilled-trades",
      industry: "Construction",
    },
  },
  {
    ids: new Set(["carpenter", "tile-setter"]),
    category: {
      clusterId: "trades-law-public-operations",
      sectorId: "skilled-trades",
      industry: "Carpentry",
    },
  },
  {
    ids: new Set(["electrician", "hvac-technician", "cable-technician"]),
    category: {
      clusterId: "trades-law-public-operations",
      sectorId: "skilled-trades",
      industry: "Electricians",
    },
  },
  {
    ids: new Set(["plumber", "pipefitter"]),
    category: {
      clusterId: "trades-law-public-operations",
      sectorId: "skilled-trades",
      industry: "Plumbing",
    },
  },
  {
    ids: new Set(["lawyer", "judge", "paralegal", "court-reporter", "detective", "homicide-detective"]),
    category: {
      clusterId: "trades-law-public-operations",
      sectorId: "legal",
      industry: "Law",
    },
  },
  {
    ids: new Set(["investigator-private", "political-scientist"]),
    category: {
      clusterId: "trades-law-public-operations",
      sectorId: "legal",
      industry: "Legal Research",
    },
  },
  {
    ids: new Set([
      "police-officer",
      "detective",
      "homicide-detective",
      "security-guard",
    ]),
    category: {
      clusterId: "trades-law-public-operations",
      sectorId: "public-safety-government",
      industry: "Law Enforcement",
    },
  },
  {
    ids: new Set(["firefighter", "safety-inspector"]),
    category: {
      clusterId: "trades-law-public-operations",
      sectorId: "public-safety-government",
      industry: "Firefighting",
    },
  },
  {
    ids: new Set(["military-officer", "pilot-commercial", "air-traffic-controller"]),
    category: {
      clusterId: "trades-law-public-operations",
      sectorId: "public-safety-government",
      industry: "Military & Defense",
    },
  },
  {
    ids: new Set(["emt", "paramedic", "dispatcher", "correctional-officer", "probation-officer"]),
    category: {
      clusterId: "trades-law-public-operations",
      sectorId: "public-safety-government",
      industry: "Emergency Management",
    },
  },
];

const defaultCategory = {
  clusterId: "business-finance",
  sectorId: "entrepreneurship-operations",
  industry: "Small Business",
};

const clusterUniversityMap = {
  "stem-technical": [
    "Massachusetts Institute of Technology",
    "Stanford University",
    "Carnegie Mellon University",
    "Georgia Institute of Technology",
    "University of California, Berkeley",
  ],
  "hospitality-retail-services": [
    "Cornell University",
    "University of Nevada, Las Vegas",
    "Michigan State University",
    "Purdue University",
    "Johnson & Wales University",
  ],
  "health-human-services": [
    "Johns Hopkins University",
    "University of Pennsylvania",
    "Duke University",
    "University of California, San Francisco",
    "Columbia University",
  ],
  "business-finance": [
    "University of Pennsylvania (Wharton)",
    "Harvard University",
    "New York University",
    "University of Chicago",
    "University of Michigan",
  ],
  "arts-media-communication": [
    "Rhode Island School of Design",
    "Savannah College of Art and Design",
    "University of California, Los Angeles",
    "New York University (Tisch)",
    "School of the Art Institute of Chicago",
  ],
  "trades-law-public-operations": [
    "Georgetown University",
    "University of California, Berkeley",
    "University of Virginia",
    "University of Michigan",
    "University of Texas at Austin",
  ],
};

const defaultUniversities = [
  "University of California, Berkeley",
  "University of Michigan",
  "University of Washington",
  "Carnegie Mellon University",
  "University of Texas at Austin",
];

function applyCategories(id) {
  const categories = categoryRules
    .filter((rule) => rule.ids.has(id))
    .map((rule) => rule.category);

  if (categories.length) {
    return categories;
  }

  return [defaultCategory];
}

function deriveStressLevel(medianSalary) {
  if (medianSalary >= 180000) return "Very High";
  if (medianSalary >= 120000) return "High";
  if (medianSalary >= 80000) return "Moderate";
  return "Manageable";
}

function deriveSalaryRange(medianSalary) {
  const spread = Math.max(12000, Math.round(medianSalary * 0.3));
  const halfSpread = Math.round(spread / 2);
  const min = Math.max(25000, medianSalary - halfSpread);
  const max = medianSalary + halfSpread;

  return { min, max };
}

function deriveSalaryDistribution(medianSalary) {
  const factors = {
    10: 0.7,
    25: 0.85,
    50: 1,
    75: 1.18,
    90: 1.32,
  };

  const percentiles = Object.fromEntries(
    Object.entries(factors).map(([percentile, factor]) => [
      percentile,
      Math.round(medianSalary * factor),
    ])
  );

  return { percentiles };
}

function deriveUniversities(clusterIds) {
  const lists = clusterIds
    .map((clusterId) => clusterUniversityMap[clusterId])
    .filter(Boolean);

  if (lists.length) {
    return [...new Set(lists.flat())];
  }

  return defaultUniversities;
}

function buildLinkedInUrl(name) {
  const encodedName = encodeURIComponent(name);
  return `https://www.linkedin.com/jobs/search/?keywords=${encodedName}`;
}

window.careersData = baseCareers.map((career) => {
  const categories = applyCategories(career.id);
  const clusterIds = [...new Set(categories.map((category) => category.clusterId))];
  const sectorIds = [...new Set(categories.map((category) => category.sectorId))];
  const industries = [...new Set(categories.map((category) => category.industry))];
  const salaryRange = career.salaryRange || deriveSalaryRange(career.medianSalary);
  const salaryDistribution = career.salaryDistribution || deriveSalaryDistribution(career.medianSalary);
  const stressLevel = career.stressLevel || deriveStressLevel(career.medianSalary);
  const topUniversities = career.topUniversities || deriveUniversities(clusterIds);
  const linkedinUrl = career.linkedinUrl || buildLinkedInUrl(career.name);

  return {
    ...career,
    categories,
    clusterIds,
    sectorIds,
    industries,
    salaryRange,
    salaryDistribution,
    stressLevel,
    topUniversities,
    linkedinUrl,
  };
});

window.careerTaxonomy = careerTaxonomy;
