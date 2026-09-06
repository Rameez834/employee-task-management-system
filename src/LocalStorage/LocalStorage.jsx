const employees = [
  {
    id: 1,
    name: "Ali Ahmed",
    email: "ali@gmail.com",
    password: "12345",

    taskCounts: {
      completed: 12,
      failed: 3,
      active: 5,
      newTask: 6
    },

    tasks: [
      {
        title: "Design Homepage",
        description: "Create a responsive homepage UI using React and Tailwind CSS.",
        category: "Design",
        date: "20 Jun 2026",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve navigation menu issue on mobile devices.",
        category: "Bug Fixing",
        date: "22 Jun 2026",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 2,
    name: "Sara Khan",
    email: "sara@gmail.com",
    password: "12345",

    taskCounts: {
      completed: 18,
      failed: 2,
      active: 7,
      newTask: 4
    },

    tasks: [
      {
        title: "Create Login Page",
        description: "Build login form with validation.",
        category: "Frontend",
        date: "21 Jun 2026",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "API Integration",
        description: "Connect frontend with backend API.",
        category: "Backend",
        date: "25 Jun 2026",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 3,
    name: "Usman Ali",
    email: "usman@gmail.com",
    password: "12345",

    taskCounts: {
      completed: 10,
      failed: 5,
      active: 8,
      newTask: 2
    },

    tasks: [
      {
        title: "Dashboard UI Design",
        description: "Create admin dashboard UI using React.",
        category: "Design",
        date: "23 Jun 2026",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix API Error",
        description: "Resolve backend API response issue.",
        category: "Backend",
        date: "24 Jun 2026",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    name: "Hassan Raza",
    email: "hassan@gmail.com",
    password: "12345",

    taskCounts: {
      completed: 15,
      failed: 1,
      active: 6,
      newTask: 3
    },

    tasks: [
      {
        title: "Landing Page Development",
        description: "Develop responsive landing page using React.",
        category: "Frontend",
        date: "26 Jun 2026",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Database Setup",
        description: "Setup MongoDB database and schemas.",
        category: "Backend",
        date: "27 Jun 2026",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 5,
    name: "Ayesha Malik",
    email: "ayesha1@gmail.com",
    password: "12345",

    taskCounts: {
      completed: 20,
      failed: 4,
      active: 9,
      newTask: 5
    },

    tasks: [
      {
        title: "Profile Page Design",
        description: "Design user profile page with edit functionality.",
        category: "Design",
        date: "28 Jun 2026",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Login Bug",
        description: "Resolve login authentication issue.",
        category: "Bug Fixing",
        date: "29 Jun 2026",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];
const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "admin123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage = () =>{
    const employees =JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    return{employees,admin}
 }
