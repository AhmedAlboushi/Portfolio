import { useState } from "react";
import "../css/Projects.css";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectDetails from "../components/ProjectDetails.jsx";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Finance Tracker API",
      description:
        "Finance tracking system focused on secure authentication, shared wallets, and goal-based savings tracking built with ASP.NET Core.",

      images: [
        "/images/FinanceTrackerProject/Dashboard.png",
        "/images/FinanceTrackerProject/Transactions.png",
        "/images/FinanceTrackerProject/Goals.png",
        "/images/FinanceTrackerProject/Messages.png",
        "/images/FinanceTrackerProject/Settings.png",
      ],
      tech: ["C#", "ASP.NET Core", "PostgreSQL", "Entity Framework", "JWT"],
      features: {
        "Wallet System": [
          "Create and manage wallets",
          "Track balances",
          "Multi-wallet support",
        ],
        "Shared Wallets": ["Invite users", "Roles: Owner / Editor / Viewer"],
        "Savings Goals": ["Create goals and track progress"],
        Transactions: ["Income & expenses tracking", "Categorization"],
        Authentication: [
          "JWT access + refresh tokens",
          "Email verification",
          "BCrypt password hashing",
          "Role-based authorization",
        ],
        "System Features": [
          "Rate limiting",
          "Global exception handling",
          "Activity logging",
          "CORS configured",
          "HTTPS enforced",
        ],
        Media: ["Cloudinary image uploads"],
        Testing: ["xUnit", "Moq", "FluentAssertions"],
        "Tech Stack": [
          "ASP.NET Core 8",
          "PostgreSQL",
          "Entity Framework Core",
          "JWT Authentication",
          "MailKit SMTP",
          "Cloudinary",
          "Swagger",
        ],
      },
      status: "Completed",
    },
    {
      id: 2,
      title: "Driving License Management System",
      description:
        "Desktop application built with C# and WinForms to manage driving license operations, including applications, and user administration.",

      images: [
        "/images/DVLDProject/MainMenu.png",
        "/images/DVLDProject/MenuOptions.png",
        "/images/DVLDProject/ManagePeople.png",
        "/images/DVLDProject/LocalDrivingMenu.png",
      ],

      tech: ["C#", "WinForms", "SQL Server", "ADO.NET"],

      features: {
        "People Management": ["Register and manage individuals in the system"],
        "License Applications": ["Handle local driving license applications"],
        "International Licenses": [
          "Issue and manage international driving licenses",
        ],
        "Testing System": [
          "Schedule and manage vision, written, and driving tests",
        ],
        "License Control": [
          "Detain and release licenses",
          "Renew expired licenses",
          "Replace lost or damaged licenses",
        ],
        "User Management": ["Manage system users and authentication"],
        "Application Types": [
          "Manage license classes and application categories",
        ],
        Architecture: [
          "3-tier architecture (UI, Business Logic, Data Access)",
          "ADO.NET for database interaction",
          "SQL Server database",
        ],
      },
      status: "Completed",
    },
    {
      id: 3,
      title: "Food Ordering Platform API",
      description:
        "In-progress backend system simulating a food ordering platform with merchants, companies, and category-based ordering flow. Focused on scalable API design and real-world architecture patterns.",

      images: ["/images/ShopProject/Structure.png"],

      tech: [
        "C#",
        "ASP.NET Core",
        "PostgreSQL",
        "Entity Framework Core",
        "JWT",
      ],

      features: {},
      status: "Inprogress",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-inner">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">For more info, visit my GitHub</p>
        <div className="grid">
          {projects.map((p) => (
            <div key={p.id} onClick={() => setSelectedProject(p)}>
              <ProjectCard
                title={p.title}
                description={p.description}
                image={p.images?.[0]}
                tech={p.tech}
                status={p.status}
              />
            </div>
          ))}
        </div>

        {/* MODAL */}
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}

export default Projects;
