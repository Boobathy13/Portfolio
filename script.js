document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling with Offset for Navbar
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector("header").offsetHeight,
                behavior: "smooth"
            });
        });
    });

    // Populate About Section
    document.getElementById("about-text").innerText = 
        "I am a Computer Science and Engineering student with a strong focus on responsibility and problem-solving. I thrive on learning quickly and thinking critically to tackle challenges. Excited to step into my first professional role and make a meaningful impact.";

    // Populate Education Section
    const educationData = [
        { degree: "Bachelor of Engineering in Computer Science and Engineering", school: "Kathir College of Engineering, Coimbatore", details: "CGPA: 83.1% (Pursuing) | Duration: 2021 – 2025" },
        { degree: "High School Certificate (HSC)", school: "Sri Gopal Naidu Higher Secondary School, Coimbatore", details: "Percentage: 71.7% | Year of Completion: 2020" },
        { degree: "Secondary School Leaving Certificate (SSLC)", school: "Sri Gopal Naidu Higher Secondary School, Coimbatore", details: "Percentage: 93.2% | Year of Completion: 2018" }
    ];

    const educationList = document.getElementById("education-list");
    educationData.forEach(ed => {
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `<h4>${ed.degree}</h4><p><strong>${ed.school}</strong></p><p>${ed.details}</p>`;
        educationList.appendChild(li);
    });

    // Populate Skills Section
    const skillsData = {
        "Programming Skills": ["Java", "Python", "OOP", "DSA"],
        "Web Development & Frameworks": ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Flask", "Django"],
        "Databases": ["MySQL", "MongoDB"],
        "Other Tools & Technologies": ["Git", "GitHub", "VS Code", "IntelliJ", "PyCharm"]
    };

    const skillsList = document.getElementById("skills-list");
    Object.keys(skillsData).forEach(category => {
        let categoryItem = document.createElement("li");
        categoryItem.innerHTML = `<strong>${category}:</strong>`;
        let subList = document.createElement("ul");
        skillsData[category].forEach(skill => {
            let subItem = document.createElement("li");
            subItem.innerText = skill;
            subList.appendChild(subItem);
        });
        categoryItem.appendChild(subList);
        skillsList.appendChild(categoryItem);
    });

    // Populate Experience Section
    document.getElementById("experience-content").innerHTML = `
        <h4>Backend Developer Intern</h4>
        <p><strong>Cruzze Solutions LLP</strong> | Sep 2024 - Oct 2024 | Coimbatore, India</p>
        <ul>
            <li>Worked on OfficeBOT, improving interview scheduling efficiency by 20%.</li>
            <li>Designed optimized database models using SQLAlchemy.</li>
            <li>Developed scalable APIs for user role management, CRUD operations, and interview templates.</li>
            <li>Implemented error handling and audit logging, ensuring 100% process transparency.</li>
            <li>Contributed to a 25% improvement in system reliability through backend optimization.</li>
        </ul>`;

    // Populate Projects Section
    document.getElementById("projects-content").innerHTML = `
        <ul>
            <li><h4>Inked Impressions – Web Application (Book Review Hub)</h4>
                <p>Developed a web-based platform enabling book enthusiasts to share and explore reviews, fostering a community-driven space for literary discussions.</p>
            </li>
            <li><h4>Hotel Booking System - Web Application</h4>
                <p>Developed a web-based hotel booking system that allows users to search, book, and manage hotel reservations seamlessly.</p>
            </li>
            <li><h4>Portfolio - Web Resume</h4>
                <p>Designed and built a personal portfolio website to showcase skills, certifications, projects, and professional achievements.</p>
            </li>
        </ul>`;

    // Populate Certifications Section
    document.getElementById("certifications-content").innerHTML = `
        <ul>
            <li>Programming in Java (NPTEL) – 75% (Elite Silver)</li>
            <li>Full Stack Python - Web Development (Sparta Coding Club)</li>
            <li>Python Programming (Infosys Springboard)</li>
            <li>Python Basics (Infosys Springboard)</li>
            <li>Programming in C (Infosys Springboard)</li>
            <li>Microsoft MS Office Course</li>
            <li>AI & ML Foundation Course</li>
        </ul>`;

    // Populate Workshops Section
    document.getElementById("workshops-content").innerHTML = `
        <ul>
            <li><h4>Full Stack Python - Web Development</h4>
                <p>Organized by Xplore IT Corp, focused on building web applications using Python.</p>
            </li>
            <li><h4>UI and UX Design</h4>
                <p>Conducted by GUVI, covering principles of user interface and user experience design.</p>
            </li>
        </ul>`;

    // Populate Languages Section
    document.getElementById("languages-content").innerHTML = `
        <ul>
            <li>English: Professional Proficiency</li>
            <li>Kannada: Native Proficiency</li>
            <li>Tamil: Native/Bilingual Proficiency</li>
        </ul>`;

    // Populate Contact Section
    document.getElementById("contact-info").innerHTML = `
        <p><strong>Email:</strong> <a href="mailto:boobathyr2002@gmail.com">boobathyr2002@gmail.com</a></p>
        <p><strong>Phone:</strong> 7200578763</p>
        <p><strong>Location:</strong> Coimbatore, India</p>
        <p><strong>LinkedIn:</strong> <a href="http://www.linkedin.com/in/boobathyr2002" target="_blank">LinkedIn Profile</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Boobathy13?tab=repositories" target="_blank">GitHub Repositories</a></p>`;
});
