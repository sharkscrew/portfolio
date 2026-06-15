export type Person = {
    id: "1" | "2";
    name: string;
    initials: string;
    photo: string;
    role: string;
    location: string;
    bio: string;
    accent: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    facebook: string;
    about: {
        personal: string;
        education: string;
        goals: string;
        interests: string;
    };
    skillGroups: { category: string; icon: string; skills: string[] }[];
    projects: {
        title: string;
        description: string;
        tech: string[];
        emoji: string;
        status: "Completed" | "In Progress";
    }[];
};

export const persons: Record<"1" | "2", Person> = {
    "1": {
        id: "1",
        name: "Ersyl Jay L. Bingco",
        initials: "EJB",
        photo: "shark.jpg",
        role: "BS Computer Science Student",
        location: "Roxas City, Capiz",
        bio: "Passionate about building web applications and exploring computer science fundamentals. I enjoy working with modern technologies to solve real-world problems.",
        accent: "var(--p1-accent)",
        email: "ersyljay103@gmail.com",
        phone: "09690329799",
        github: "github.com/yourusername",
        linkedin: "linkedin.com/in/yourprofile",
        facebook: "facebook.com/yourprofile",
        about: {
            personal: "I'm a Computer Science student with a strong curiosity for how things work under the hood. Born and raised in the Philippines, I've developed a passion for technology from an early age.",
            education: "Currently pursuing a Bachelor of Science in Computer Science. My coursework covers data structures, algorithms, digital electronics, Boolean algebra, web development, and database management.",
            goals: "I aspire to become a full-stack developer with a deep understanding of both frontend and backend systems. I'm particularly interested in web technologies and mobile development.",
            interests: "Outside of coding, I enjoy exploring CS fundamentals like number systems and logic circuits, UI/UX design, and open-source contribution.",
        },
        skillGroups: [
            { category: "Programming Languages", icon: "💻", skills: ["PHP", "TypeScript", "JavaScript", "Python"] },
            { category: "Frameworks & Libraries", icon: "📦", skills: ["React", "Next.js", "Laravel", "Flutter", "Tailwind CSS"] },
            { category: "Database Technologies", icon: "🗄️", skills: ["MySQL"] },
            { category: "Development Tools", icon: "🛠️", skills: ["Git", "GitHub", "XAMPP", "Cursor", "VS Code"] },
        ],
        projects: [
            {
                title: "Military Inventory System",
                description: "A full-stack web application for managing military equipment inventory with role-based auth, real-time stock tracking, and automated replenishment workflows.",
                tech: ["React", "TypeScript", "Laravel", "MySQL", "Tailwind CSS"],
                emoji: "🪖",
                status: "In Progress",
            },
            {
                title: "n8n Automation Workflows",
                description: "Integrated automation workflows including Stock Receiving, Low-Stock Replenishment, and Order Fulfillment triggered via webhooks from the React frontend.",
                tech: ["n8n", "React", "Webhooks", "REST API"],
                emoji: "⚙️",
                status: "Completed",
            },
            {
                title: "Flutter Mobile App",
                description: "A cross-platform mobile application connected to the Laravel backend, providing inventory access for field personnel on Android and iOS.",
                tech: ["Flutter", "Dart", "Laravel API"],
                emoji: "📱",
                status: "In Progress",
            },
        ],
    },
    "2": {
        id: "2",
        name: "John Vincent Giner",
        initials: "JVG",
        photo: "wolf.jpg",
        role: "BS Computer Science Student",
        location: "Roxas City, Capiz",
        bio: "A dedicated Computer Science student with a focus on backend development and system design. I love building efficient and scalable solutions.",
        accent: "var(--p2-accent)",
        email: "johnvincentginer@gmail.com",
        phone: "09218374236",
        github: "github.com/johnvincentginer",
        linkedin: "linkedin.com/in/johnvincentginer",
        facebook: "facebook.com/johnvincentginer",
        about: {
            personal: "A Computer Science student passionate about software engineering and problem-solving. I thrive in collaborative environments and enjoy taking on challenging technical projects.",
            education: "Pursuing a Bachelor of Science in Computer Science with focus on algorithms, system design, and database management. Actively involved in group projects that mirror real-world development workflows.",
            goals: "My goal is to become a backend engineer specializing in scalable systems and APIs. I aim to work on projects that have a meaningful impact on people's lives through technology.",
            interests: "When not coding, I enjoy learning about system architecture, contributing to open-source projects, and exploring new programming languages and paradigms.",
        },
        skillGroups: [
            { category: "Programming Languages", icon: "💻", skills: ["Python", "Java", "JavaScript", "PHP", "C"] },
            { category: "Frameworks & Libraries", icon: "📦", skills: ["Laravel", "Express.js", "React", "Bootstrap"] },
            { category: "Database Technologies", icon: "🗄️", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
            { category: "Development Tools", icon: "🛠️", skills: ["Git", "GitHub", "VS Code", "Postman", "Docker"] },
        ],
        projects: [
            {
                title: "Military Inventory System – Backend",
                description: "Designed and implemented the Laravel backend for the Military Inventory System, including database migrations, seeders, REST API endpoints, and Sanctum authentication.",
                tech: ["Laravel", "MySQL", "PHP", "Sanctum"],
                emoji: "🗄️",
                status: "In Progress",
            },
            {
                title: "Student Information System",
                description: "A web-based system for managing student records, enrollment, and grades. Built with Laravel and a responsive Blade frontend.",
                tech: ["Laravel", "Blade", "MySQL", "Bootstrap"],
                emoji: "🎓",
                status: "Completed",
            },
            {
                title: "CLI Task Manager",
                description: "A command-line task management tool built in Python with file-based persistence, priority tagging, and due-date tracking.",
                tech: ["Python", "JSON", "CLI"],
                emoji: "📋",
                status: "Completed",
            },
        ],
    },
};