export const navGroups = [
  {
    label: "About TIS",
    href: "#about",
    links: [
      ["Our History", "#history"],
      ["Why Choose Us?", "#rankings"],
      ["Vision & Mission", "#mission"],
      ["Awards & Achievements", "#awards"],
      ["Headmaster's Profile", "#leadership"],
      ["Our Management", "#leadership"],
      ["Virtual Tour", "#campus"],
    ],
  },
  {
    label: "Academics",
    href: "#academics",
    links: [
      ["Pedagogy", "#pedagogy"],
      ["Curriculum", "#curriculum"],
      ["Streams Offered", "#streams"],
      ["International Tie-Ups", "#collaborations"],
      ["Publications", "#blog"],
      ["Digital Workstations", "#facilities"],
      ["Awadh Tinkering Lab", "#curriculum"],
    ],
  },
  {
    label: "Boarding Life",
    href: "#campus",
    links: [
      ["Pastoral Care", "#campus"],
      ["Food & Nutrition", "#campus"],
      ["Facilities", "#facilities"],
      ["Infirmary & Medical Facilities", "#contact"],
      ["Our House System", "#campus"],
      ["Teachers Profile", "#leadership"],
    ],
  },
  {
    label: "Beyond Academics",
    href: "#sports",
    links: [
      ["Sports", "#sports"],
      ["Beyond the Curriculum", "#sports"],
      ["Clubs & Societies", "#sports"],
      ["Celebrations", "#visitors"],
      ["Mentor & Mentee System", "#mission"],
      ["Career Counselling", "#contact"],
      ["Raasta Students Counselling", "#contact"],
    ],
  },
  {
    label: "Events",
    href: "#visitors",
    links: [
      ["Sports Day", "#sports"],
      ["38th National Games", "#sports"],
      ["Founders Day", "#visitors"],
      ["Confluence", "#visitors"],
      ["Prominent Personalities", "#visitors"],
      ["Sports Achievements", "#awards"],
    ],
  },
  {
    label: "Admission",
    href: "#contact",
    links: [
      ["Admission Procedure", "#contact"],
      ["Pay Fee Online", "#contact"],
      ["Fee Structure", "#contact"],
      ["Scholarship Programs", "#contact"],
      ["Withdrawal Policy", "#contact"],
    ],
  },
  {
    label: "Mandatory Disclosure",
    href: "#footer",
    links: [["Mandatory Disclosure", "#footer"]],
  },
  {
    label: "Alumni Network",
    href: "#voices",
    links: [["Alumni Network", "#voices"]],
  },
  {
    label: "Quick Links",
    href: "#footer",
    links: [
      ["Blogs", "#blog"],
      ["Contact Us", "#contact"],
      ["Newsletter", "#voices"],
      ["Careers", "#contact"],
      ["Transfer Certificate", "#contact"],
      ["Parent Testimonial", "#voices"],
    ],
  },
];

export const navLinks = [
  ["About Tulas", "#about"],
  ["Academics", "#academics"],
  ["Campus life", "#campus"],
  ["Sports", "#sports"],
  ["Blog", "#blog"],
  ["Parent voices", "#voices"],
  ["Contact", "#contact"],
];

export const sports = [
  "Archery", "Cycling", "Hockey", "Swimming", "Taekwondo", "Football",
  "Shooting Range", "Horse Riding", "Billiards", "Squash", "Volleyball",
  "Basketball", "Cricket", "Lawn Tennis", "Badminton", "Table Tennis",
];

export const highlights = [
  { value: "22", label: "Acre pollution-free campus" },
  { value: "16+", label: "Olympic sports" },
  { value: "24/7", label: "Medical assistance" },
  { value: "6:1", label: "Student-teacher ratio" },
];

export const rankings = [
  { number: "#1", place: "In Dehradun", detail: "Co-educational boarding school in Dehradun by Education Today", source: "EDUCATION TODAY" },
  { number: "#2", place: "In Uttarakhand", detail: "Co-educational boarding school in North India by Education Today", source: "EDUCATION TODAY" },
  { number: "#1", place: "In North India", detail: "Co-educational boarding school in North India by Outlook", source: "OUTLOOK" },
  { number: "#4", place: "In India", detail: "Co-educational boarding school in India by Education Today", source: "EDUCATION TODAY" },
];

export const visitors = [
  ["Sakshi Malik", "Olympic bronze medallist in wrestling; Padma Shri awardee"],
  ["Vishesh Bhriguvanshi", "Captain of the Indian Basketball Team"],
  ["Abhishek Verma", "Arjuna Awardee and Asian Games gold medallist in archery"],
  ["Aditi Gopichand Swami", "World champion in archery"],
  ["Jeevan Jyot Singh Teja", "Dronacharya Awardee in archery"],
  ["Ojus Devtale", "Arjuna Awardee and world champion in archery"],
  ["Rajat Chauhan", "Arjuna Awardee in archery"],
  ["Prakashi & Chandro Tomar", "National championship-winning shooters"],
];

export const reviews = [
  { quote: "Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.", name: "Namita Agarwal", relation: "M/O Krishna Agarwal" },
  { quote: "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.", name: "Sandeep Kumar", relation: "F/O Aryan" },
  { quote: "The boarding and infrastructure facility are excellent. We have seen significant improvement in our daughter.", name: "Ashu Arora", relation: "M/O Manisha Changrani" },
];

export const image = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;