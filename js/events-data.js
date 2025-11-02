// EventVerse 2025 - Events Data
// This file contains all event information for the tech fest

const eventsData = [
    // Technical Events
    {
        id: 1,
        title: "Code Hackathon",
        category: "technical",
        date: "2025-03-15",
        time: "09:00",
        endTime: "18:00",
        venue: "Tech Lab A",
        prize: "₹1,00,000",
        image: "https://via.placeholder.com/400x300/0a0a1a/00f0ff?text=Code+Hackathon",
        description: "24-hour coding marathon where teams build innovative solutions to real-world problems. Showcase your coding prowess and creative problem-solving skills.",
        fullDescription: "Join us for an intense 24-hour coding challenge where innovation meets execution. Teams of 2-4 members will work together to develop solutions for real-world problems across various domains including healthcare, education, sustainability, and more.",
        rules: [
            "Team size: 2-4 members",
            "Duration: 24 hours",
            "Original code only - plagiarism will lead to disqualification",
            "All programming languages and frameworks allowed",
            "Must present working prototype at the end",
            "Code must be pushed to GitHub repository",
            "Judges' decision is final"
        ],
        contact: "Priya Sharma - priya.sharma@eventverse.edu - +91 98765 43212",
        featured: true
    },
    {
        id: 2,
        title: "Robotics Challenge",
        category: "technical",
        date: "2025-03-16",
        time: "10:00",
        endTime: "16:00",
        venue: "Innovation Arena",
        prize: "₹75,000",
        image: "https://via.placeholder.com/400x300/0a0a1a/ff00ff?text=Robotics+Challenge",
        description: "Design and build autonomous robots to complete challenging tasks. Test your mechanical and programming skills.",
        fullDescription: "Build autonomous robots that can navigate obstacle courses, complete precision tasks, and demonstrate innovative engineering solutions. This competition tests both hardware design and software programming capabilities.",
        rules: [
            "Team size: 3-5 members",
            "Robot dimensions: Max 50cm x 50cm x 50cm",
            "Autonomous operation required",
            "No remote control allowed during tasks",
            "Must use approved power sources only",
            "Safety regulations must be followed",
            "Robot must complete tasks within time limit"
        ],
        contact: "Dr. Rajesh Kumar - rajesh.kumar@eventverse.edu - +91 98765 43211",
        featured: true
    },
    {
        id: 3,
        title: "AI/ML Workshop",
        category: "workshops",
        date: "2025-03-15",
        time: "14:00",
        endTime: "17:00",
        venue: "Seminar Hall 1",
        prize: "Certificate",
        image: "https://via.placeholder.com/400x300/0a0a1a/ffff00?text=AI+ML+Workshop",
        description: "Hands-on workshop on Artificial Intelligence and Machine Learning fundamentals. Learn from industry experts.",
        fullDescription: "Comprehensive workshop covering the fundamentals of AI and Machine Learning. Learn about neural networks, deep learning, natural language processing, and computer vision through practical examples and hands-on exercises.",
        rules: [
            "Open to all participants",
            "Bring your own laptop",
            "Basic Python knowledge recommended",
            "Pre-registration required",
            "Limited seats available",
            "Certificate of participation provided",
            "Workshop materials will be provided"
        ],
        contact: "Dr. Anita Desai - anita.desai@eventverse.edu - +91 98765 43214",
        featured: true
    },
    {
        id: 4,
        title: "Web Development Competition",
        category: "technical",
        date: "2025-03-16",
        time: "09:00",
        endTime: "15:00",
        venue: "Computer Lab B",
        prize: "₹50,000",
        image: "https://via.placeholder.com/400x300/0a0a1a/00f0ff?text=Web+Dev+Competition",
        description: "Build responsive and innovative web applications. Showcase your front-end and back-end development skills.",
        fullDescription: "Create stunning, responsive web applications within the time limit. Participants will receive a problem statement and must develop a complete solution including UI/UX design, front-end implementation, and basic back-end functionality.",
        rules: [
            "Individual or team (max 2 members)",
            "Duration: 6 hours",
            "Use of frameworks allowed",
            "Must be responsive and accessible",
            "Judged on design, functionality, and code quality",
            "Internet access will be provided",
            "Final submission via GitHub"
        ],
        contact: "Amit Patel - amit.patel@eventverse.edu - +91 98765 43213",
        featured: false
    },
    {
        id: 5,
        title: "Cyber Security CTF",
        category: "technical",
        date: "2025-03-17",
        time: "10:00",
        endTime: "16:00",
        venue: "Security Lab",
        prize: "₹60,000",
        image: "https://via.placeholder.com/400x300/0a0a1a/ff00ff?text=Cyber+Security+CTF",
        description: "Capture The Flag competition testing your hacking and security skills. Solve challenges across multiple domains.",
        fullDescription: "Test your cybersecurity knowledge in this exciting Capture The Flag competition. Solve challenges in cryptography, web exploitation, reverse engineering, forensics, and more to earn points and climb the leaderboard.",
        rules: [
            "Individual or team (max 3 members)",
            "All challenges must be solved ethically",
            "No attacking other teams or infrastructure",
            "Use provided virtual machines only",
            "Document your solutions",
            "Flag format will be specified",
            "Hints available at point penalty"
        ],
        contact: "Vikram Singh - vikram.singh@eventverse.edu - +91 98765 43215",
        featured: false
    },
    {
        id: 6,
        title: "Mobile App Development",
        category: "technical",
        date: "2025-03-15",
        time: "11:00",
        endTime: "17:00",
        venue: "Tech Lab C",
        prize: "₹45,000",
        image: "https://via.placeholder.com/400x300/0a0a1a/00f0ff?text=Mobile+App+Dev",
        description: "Create innovative mobile applications for Android or iOS. Solve real-world problems through mobile technology.",
        fullDescription: "Develop creative mobile applications that address real-world challenges. Participants can choose either Android or iOS platform and must demonstrate functionality, user experience, and innovation.",
        rules: [
            "Team size: 2-3 members",
            "Android or iOS platform",
            "Duration: 6 hours",
            "Use any framework (Flutter, React Native, Native)",
            "Must have working prototype",
            "APK/IPA submission required",
            "Presentation to judges mandatory"
        ],
        contact: "Sneha Reddy - sneha.reddy@eventverse.edu - +91 98765 43216",
        featured: true
    },
    // Gaming Events
    {
        id: 7,
        title: "BGMI Tournament",
        category: "gaming",
        date: "2025-03-15",
        time: "10:00",
        endTime: "18:00",
        venue: "Gaming Arena",
        prize: "₹80,000",
        image: "https://via.placeholder.com/400x300/0a0a1a/ffff00?text=BGMI+Tournament",
        description: "Battle royale tournament featuring BGMI. Form your squad and fight for victory!",
        fullDescription: "Intense Battle Grounds Mobile India tournament with multiple rounds. Teams will compete in classic mode matches, with points awarded for kills and placement. Top teams advance to finals.",
        rules: [
            "Squad mode (4 members per team)",
            "TPP (Third Person Perspective)",
            "Multiple rounds - points based system",
            "No emulators allowed - mobile only",
            "Latest game version required",
            "Fair play policy strictly enforced",
            "Devices will be checked before matches"
        ],
        contact: "Rohan Kapoor - rohan.kapoor@eventverse.edu - +91 98765 43217",
        featured: true
    },
    {
        id: 8,
        title: "Valorant Championship",
        category: "gaming",
        date: "2025-03-16",
        time: "11:00",
        endTime: "19:00",
        venue: "Gaming Arena",
        prize: "₹70,000",
        image: "https://via.placeholder.com/400x300/0a0a1a/ff00ff?text=Valorant+Championship",
        description: "5v5 tactical FPS tournament. Showcase your strategic gameplay and aim in competitive matches.",
        fullDescription: "Compete in Valorant's tactical 5v5 matches. Teams will battle through group stages and knockout rounds. Strategic team play, communication, and individual skill will determine the champions.",
        rules: [
            "Team size: 5 players + 1 substitute",
            "Best of 3 format (Finals: Best of 5)",
            "Tournament mode settings",
            "All agents allowed",
            "No external software/cheats",
            "Pause rules: Max 2 per match",
            "Admin decisions are final"
        ],
        contact: "Arjun Mehta - arjun.mehta@eventverse.edu - +91 98765 43218",
        featured: false
    },
    {
        id: 9,
        title: "FIFA Tournament",
        category: "gaming",
        date: "2025-03-17",
        time: "10:00",
        endTime: "16:00",
        venue: "Gaming Zone B",
        prize: "₹40,000",
        image: "https://via.placeholder.com/400x300/0a0a1a/00f0ff?text=FIFA+Tournament",
        description: "The beautiful game in digital form. Compete in the ultimate FIFA tournament.",
        fullDescription: "Show off your FIFA skills in this exciting tournament. Players will compete in knockout rounds on the latest FIFA version with standard tournament settings.",
        rules: [
            "Individual competition",
            "Latest FIFA version",
            "6-minute halves",
            "Team selection: 4.5 star rated teams",
            "No custom tactics restrictions",
            "Single elimination knockout",
            "Controllers provided"
        ],
        contact: "Karan Joshi - karan.joshi@eventverse.edu - +91 98765 43219",
        featured: false
    },
    {
        id: 10,
        title: "Chess Championship",
        category: "gaming",
        date: "2025-03-15",
        time: "09:00",
        endTime: "17:00",
        venue: "Indoor Stadium",
        prize: "₹35,000",
        image: "https://via.placeholder.com/400x300/0a0a1a/ffff00?text=Chess+Championship",
        description: "Classic board game competition. Test your strategic thinking and tactical prowess.",
        fullDescription: "Traditional chess tournament following FIDE rules. Multiple rounds of classical chess with time controls. All skill levels welcome.",
        rules: [
            "Individual competition",
            "Classical time control: 30+30",
            "FIDE rules apply",
            "No electronic devices allowed",
            "Touch-move rule in effect",
            "Arbiter decisions final",
            "Rating categories for fair matchmaking"
        ],
        contact: "Deepak Sharma - deepak.sharma@eventverse.edu - +91 98765 43220",
        featured: false
    },
    // Cultural Events
    {
        id: 11,
        title: "Tech Talk Show",
        category: "cultural",
        date: "2025-03-16",
        time: "15:00",
        endTime: "18:00",
        venue: "Main Auditorium",
        prize: "₹30,000",
        image: "https://via.placeholder.com/400x300/0a0a1a/ff00ff?text=Tech+Talk+Show",
        description: "Present innovative tech ideas through engaging talks. Inspire the audience with your vision.",
        fullDescription: "TED-style tech talks where participants present their innovative ideas, research, or visions for the future of technology. Each speaker gets 10-15 minutes to inspire and educate the audience.",
        rules: [
            "Individual presentations",
            "Duration: 10-15 minutes",
            "Topic must be tech-related",
            "PowerPoint/slides allowed",
            "No reading from script",
            "Q&A session after presentation",
            "Judged on content, delivery, and impact"
        ],
        contact: "Neha Gupta - neha.gupta@eventverse.edu - +91 98765 43221",
        featured: true
    },
    {
        id: 12,
        title: "Tech Drama Competition",
        category: "cultural",
        date: "2025-03-17",
        time: "14:00",
        endTime: "18:00",
        venue: "Open Air Theatre",
        prize: "₹40,000",
        image: "https://via.placeholder.com/400x300/0a0a1a/00f0ff?text=Tech+Drama",
        description: "Theatrical performances with technology themes. Blend art and tech in creative storytelling.",
        fullDescription: "Stage plays and theatrical performances centered around technology themes. Explore the impact of technology on society, future scenarios, or historical tech moments through drama.",
        rules: [
            "Team size: 5-15 members",
            "Duration: 15-20 minutes",
            "Tech-themed plot required",
            "Props and costumes allowed",
            "No offensive content",
            "Original scripts preferred",
            "Judged on acting, script, and relevance"
        ],
        contact: "Kavya Iyer - kavya.iyer@eventverse.edu - +91 98765 43222",
        featured: false
    },
    {
        id: 13,
        title: "DJ Night",
        category: "cultural",
        date: "2025-03-17",
        time: "19:00",
        endTime: "23:00",
        venue: "Main Ground",
        prize: "Free Entry",
        image: "https://via.placeholder.com/400x300/0a0a1a/ffff00?text=DJ+Night",
        description: "End the fest with an electrifying DJ night. Dance and celebrate with fellow tech enthusiasts!",
        fullDescription: "Celebrate the conclusion of EventVerse with a spectacular DJ night featuring popular artists. Dance the night away with amazing music, lights, and energy!",
        rules: [
            "Open to all registered participants",
            "Entry with fest ID card only",
            "No outside food/drinks allowed",
            "Follow security guidelines",
            "Respect fellow participants",
            "Event timings strictly followed",
            "Photography allowed"
        ],
        contact: "Ravi Kumar - ravi.kumar@eventverse.edu - +91 98765 43223",
        featured: true
    },
    {
        id: 14,
        title: "Photography Contest",
        category: "cultural",
        date: "2025-03-15",
        time: "08:00",
        endTime: "18:00",
        venue: "Campus-wide",
        prize: "₹25,000",
        image: "https://via.placeholder.com/400x300/0a0a1a/ff00ff?text=Photography+Contest",
        description: "Capture the essence of EventVerse through your lens. Best tech and fest moments.",
        fullDescription: "Roaming photography competition throughout the fest. Capture candid moments, tech events, cultural performances, and the vibrant atmosphere of EventVerse.",
        rules: [
            "Individual competition",
            "Digital cameras or smartphones",
            "Theme: EventVerse 2025",
            "Submit 5 best photos",
            "Minimal editing allowed",
            "Must be clicked during the fest",
            "Photo rights shared with organizers"
        ],
        contact: "Simran Kaur - simran.kaur@eventverse.edu - +91 98765 43224",
        featured: false
    },
    // Workshop Events
    {
        id: 15,
        title: "Blockchain Workshop",
        category: "workshops",
        date: "2025-03-16",
        time: "10:00",
        endTime: "13:00",
        venue: "Seminar Hall 2",
        prize: "Certificate",
        image: "https://via.placeholder.com/400x300/0a0a1a/00f0ff?text=Blockchain+Workshop",
        description: "Learn blockchain fundamentals and smart contract development. Build your first DApp.",
        fullDescription: "Comprehensive workshop on blockchain technology covering fundamentals, cryptocurrency basics, smart contracts, and decentralized application development. Hands-on session to deploy your first smart contract.",
        rules: [
            "Laptop required",
            "Basic programming knowledge needed",
            "Pre-registration mandatory",
            "Limited to 50 participants",
            "Certificate on completion",
            "Workshop kit provided",
            "Installation guide sent before event"
        ],
        contact: "Aditya Verma - aditya.verma@eventverse.edu - +91 98765 43225",
        featured: false
    },
    {
        id: 16,
        title: "UI/UX Design Workshop",
        category: "workshops",
        date: "2025-03-15",
        time: "10:00",
        endTime: "13:00",
        venue: "Design Studio",
        prize: "Certificate",
        image: "https://via.placeholder.com/400x300/0a0a1a/ffff00?text=UIUX+Workshop",
        description: "Master the art of user interface and experience design. Learn design thinking and prototyping.",
        fullDescription: "Learn the principles of great UI/UX design including design thinking, user research, wireframing, prototyping, and usability testing. Create your own app design during the workshop.",
        rules: [
            "Laptop with design software",
            "No prior experience needed",
            "Figma account recommended",
            "Limited seats available",
            "Design resources provided",
            "Certificate of participation",
            "Portfolio feedback session included"
        ],
        contact: "Pooja Malhotra - pooja.malhotra@eventverse.edu - +91 98765 43226",
        featured: false
    },
    {
        id: 17,
        title: "Cloud Computing Workshop",
        category: "workshops",
        date: "2025-03-17",
        time: "09:00",
        endTime: "12:00",
        venue: "Seminar Hall 3",
        prize: "Certificate",
        image: "https://via.placeholder.com/400x300/0a0a1a/ff00ff?text=Cloud+Workshop",
        description: "Hands-on AWS/Azure cloud services workshop. Deploy your first cloud application.",
        fullDescription: "Practical workshop on cloud computing covering AWS and Azure services. Learn about EC2, S3, Lambda, virtual machines, and more. Deploy a real application to the cloud.",
        rules: [
            "Laptop required",
            "AWS/Azure account creation help provided",
            "Basic Linux knowledge helpful",
            "Free tier resources used",
            "Certificate awarded",
            "Workshop materials included",
            "Pre-registration required"
        ],
        contact: "Manish Tiwari - manish.tiwari@eventverse.edu - +91 98765 43227",
        featured: false
    },
    {
        id: 18,
        title: "IoT Workshop",
        category: "workshops",
        date: "2025-03-16",
        time: "14:00",
        endTime: "17:00",
        venue: "Electronics Lab",
        prize: "Certificate",
        image: "https://via.placeholder.com/400x300/0a0a1a/00f0ff?text=IoT+Workshop",
        description: "Internet of Things fundamentals and project building. Work with sensors and microcontrollers.",
        fullDescription: "Introduction to IoT with hands-on projects using Arduino/ESP32. Learn about sensors, actuators, connectivity protocols, and build smart IoT devices.",
        rules: [
            "Laptop with Arduino IDE",
            "IoT kit provided during workshop",
            "Basic electronics knowledge helpful",
            "Limited to 40 participants",
            "Certificate provided",
            "Take-home project included",
            "Installation guide provided beforehand"
        ],
        contact: "Rahul Nair - rahul.nair@eventverse.edu - +91 98765 43228",
        featured: false
    },
    // Additional Technical Events
    {
        id: 19,
        title: "Data Science Challenge",
        category: "technical",
        date: "2025-03-17",
        time: "09:00",
        endTime: "15:00",
        venue: "Data Lab",
        prize: "₹55,000",
        image: "https://via.placeholder.com/400x300/0a0a1a/ffff00?text=Data+Science",
        description: "Analyze datasets and build predictive models. Showcase your data analysis and ML skills.",
        fullDescription: "Comprehensive data science competition where participants analyze complex datasets, perform exploratory data analysis, build machine learning models, and present insights.",
        rules: [
            "Individual or team (max 2)",
            "Python/R allowed",
            "Dataset provided on the day",
            "6-hour time limit",
            "Jupyter notebook submission",
            "Presentation to judges",
            "Evaluation based on accuracy and insights"
        ],
        contact: "Dr. Meera Shah - meera.shah@eventverse.edu - +91 98765 43229",
        featured: false
    },
    {
        id: 20,
        title: "UI/UX Design Challenge",
        category: "technical",
        date: "2025-03-15",
        time: "13:00",
        endTime: "18:00",
        venue: "Design Studio",
        prize: "₹40,000",
        image: "https://via.placeholder.com/400x300/0a0a1a/ff00ff?text=Design+Challenge",
        description: "Design beautiful and functional user interfaces. Focus on user experience and visual design.",
        fullDescription: "Create stunning UI/UX designs for given problem statements. Participants will design complete app/website interfaces focusing on usability, aesthetics, and user experience.",
        rules: [
            "Individual or pair",
            "Any design tool allowed",
            "Duration: 5 hours",
            "Prototype required",
            "Design thinking process",
            "Presentation to judges",
            "Judged on creativity and usability"
        ],
        contact: "Ishaan Deshmukh - ishaan.d@eventverse.edu - +91 98765 43230",
        featured: false
    }
];

// Helper function to get events by date
function getEventsByDate(date) {
    if (date === 'all') {
        return eventsData;
    }
    return eventsData.filter(event => event.date === date);
}

// Helper function to get featured events
function getFeaturedEvents() {
    return eventsData.filter(event => event.featured === true);
}

// Helper function to get event by ID
function getEventById(id) {
    return eventsData.find(event => event.id === parseInt(id));
}

// Helper function to search events
function searchEvents(query) {
    const lowerQuery = query.toLowerCase();
    return eventsData.filter(event => 
        event.title.toLowerCase().includes(lowerQuery) ||
        event.description.toLowerCase().includes(lowerQuery) ||
        event.category.toLowerCase().includes(lowerQuery)
    );
}

// Helper function to sort events
function sortEvents(events, sortBy) {
    const sorted = [...events];
    
    switch(sortBy) {
        case 'name':
            return sorted.sort((a, b) => a.title.localeCompare(b.title));
        case 'date':
            return sorted.sort((a, b) => {
                const dateA = new Date(a.date + ' ' + a.time);
                const dateB = new Date(b.date + ' ' + b.time);
                return dateA - dateB;
            });
        case 'prize':
            return sorted.sort((a, b) => {
                const prizeA = parseInt(a.prize.replace(/[^0-9]/g, '')) || 0;
                const prizeB = parseInt(b.prize.replace(/[^0-9]/g, '')) || 0;
                return prizeB - prizeA;
            });
        default:
            return sorted;
    }
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Format time for display
function formatTime(time) {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
}
