export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a JS Animation library",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "A Fintech Bank Application",
        des: "Built with Next.js, Horizon is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether. ",
        img: "/horizon.jpeg",
        youtubeLink: "https://www.youtube.com/embed/wabTwy2CW6I?si=5ALKDGm5hhmZoxwe",
        iconLists: [
            {
                id: 1,
                name: "Next.js",
                image: "/next.svg",
            },
            {
                id: 2,
                name: "Tailwindcss",
                image:
                    "/tail.svg",
            },
            {
                id: 3,
                name: "TypeScript",
                image:
                    "/ts.svg",
            },
            {
                id: 4,
                name: "ChartJs",
                image:
                    "/chartjs.svg",
            },
        ],
        link: "https://banking-sandy-seven.vercel.app/",
        imgLists: [
            {
                id: 1,
                imgUrl: "/horizon/login.jpeg",
                title: "Login Page",
            },
            {
                id: 2,
                imgUrl: "/horizon/signup.jpeg",
                title: "SignUp Page",
            },
            {
                id: 3,
                imgUrl: "/horizon.jpeg",
                title: "Home",
            },
            {
                id: 4,
                imgUrl: "/horizon/mybanks.jpeg",
                title: "My Banks",
            },
            {
                id: 5,
                imgUrl: "/horizon/transaction-history.jpeg",
                title: "Transactions History",
            },
            {
                id: 6,
                imgUrl: "/horizon/transfer-funds.jpeg",
                title: "Transfer Funds",
            },
            {
                id: 7,
                imgUrl: "/horizon/connect-banks.jpeg",
                title: "Connect Bank",
            },
        ]
    },
    {
        id: 2,
        title: "AI Image SaaS - Canva Application",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/imaginity.png",
        youtubeLink: "https://www.youtube.com/embed/OkwItty7bfM?si=So6yzN3PK6LArRy8",
        iconLists: [
            {
                id: 1,
                name: "Next.js",
                image:
                    "/next.svg",
            },
            {
                id: 2,
                name: "Tailwindcss",
                image:
                    "/tail.svg",
            },
            {
                id: 3,
                name: "TypeScript",
                image:
                    "/ts.svg",
            },
            {
                id: 4,
                name: "Clerk",
                image:
                    "/c.svg",
            },
            {
                id: 5,
                name: "Stripe",
                image: "/stripe.svg",
            },
        ],
        link: "https://imaginify-lake-chi.vercel.app/",
        imgLists: [
            {
                id: 1,
                imgUrl: "/imaginify/login.jpeg",
                title: "Login Page",
            },
            {
                id: 2,
                imgUrl: "/imaginify/signup.jpeg",
                title: "SignUp Page",
            },
            {
                id: 3,
                imgUrl: "/imaginify/home.jpeg",
                title: "Home",
            },
            {
                id: 4,
                imgUrl: "/imaginify/restore.jpeg",
                title: "Image Restore",
            },
            {
                id: 5,
                imgUrl: "/imaginify/fill.jpeg",
                title: "Generative Fill",
            },
            {
                id: 6,
                imgUrl: "/imaginify/remove.jpeg",
                title: "Object Remove",
            },
            {
                id: 7,
                imgUrl: "/imaginify/recolor.jpeg",
                title: "Object Recolor",
            },
            {
                id: 8,
                imgUrl: "/imaginify/bgRemove.jpeg",
                title: "Background Remove",
            },
            {
                id: 9,
                imgUrl: "/imaginify/profile.jpeg",
                title: "Profile",
            },
            {
                id: 10,
                imgUrl: "/imaginify/credits.jpeg",
                title: "Buy Credits",
            },
        ]
    },
    {
        id: 3,
        title: "Discover Your Next Cinematic Adventure",
        des: "Implemented a unique feature utilizing the OpenAI API and TMDB API, allowing users to discover movies when undecided about their preferences.",
        img: "/movie.jpeg",
        youtubeLink: "",
        iconLists: [
            {
                id: 1,
                name: "React.js",
                image:
                    "/re.svg",
            },
            {
                id: 2,
                name: "Tailwindcss",
                image:
                    "/tail.svg",
            },
            {
                id: 3,
                name: "OpenAI",
                image:
                    "/chatgpt.svg",
            },
            {
                id: 4,
                name: "Firebase",
                image:
                    "/firebase.svg",
            },
        ],
        link: "https://moviegpt-4.web.app",
        imgLists: [
            {
                id: 1,
                imgUrl: "/movie/login.jpeg",
                title: "Login Page",
            },
            {
                id: 2,
                imgUrl: "/movie/signup.jpeg",
                title: "SignUp Page",
            },
            {
                id: 3,
                imgUrl: "/movie/home.jpeg",
                title: "Home",
            },
            {
                id: 4,
                imgUrl: "/movie/loading.jpeg",
                title: "Loading...",
            },
            {
                id: 5,
                imgUrl: "/movie/section.jpeg",
                title: "All Sections",
            },
            {
                id: 6,
                imgUrl: "/movie/movieDetails.jpeg",
                title: "Movie Details",
            },
        ]
    },
    {
        id: 4,
        title: "Recipe Database",
        des: "The Cooking Database Website is a dynamic web application designed to provide users with a comprehensive platform for exploring, discovering, and sharing recipes. Leveraging a range of technologies including JavaScript, Node.js, Express.js, Mongoose, and more, this project offers a user-friendly interface with various features tailored to enhance the cooking experience.ß",
        img: "/recipe/home.jpeg",
        youtubeLink: "",
        iconLists: [
            {
                id: 1,
                name: "Javascript",
                image:
                    "/javascript.svg",
            },
            {
                id: 2,
                name: "Node.js",
                image:
                    "/nodejs.svg",
            },
            {
                id: 3,
                name: "Express",
                image:
                    "/express.svg",
            },
            {
                id: 4,
                name: "MongoDb",
                image:
                    "/mongodb.svg",
            },
            {
                id: 5,
                name: "EJS",
                image:
                    "/ejs.svg",
            },
        ],
        link: "",
        imgLists: [
            {
                id: 1,
                imgUrl: "/recipe/home.jpeg",
                title: "Home Page",
            },
            {
                id: 2,
                imgUrl: "/recipe/section.jpeg",
                title: "Recipe Category",
            },
            {
                id: 3,
                imgUrl: "/recipe/section1.jpeg",
                title: "Recipe Category",
            },
            {
                id: 4,
                imgUrl: "/recipe/footer.jpeg",
                title: "Footer",
            },
            {
                id: 5,
                imgUrl: "/recipe/recipe.jpeg",
                title: "All Recipes",
            },
            {
                id: 6,
                imgUrl: "/recipe/latest.jpeg",
                title: "Latest Recipe",
            },
            {
                id: 7,
                imgUrl: "/recipe/random.jpeg",
                title: "Random Recipe",
            },
            {
                id: 8,
                imgUrl: "/recipe/categories.jpeg",
                title: "Recipe Categories",
            },
            {
                id: 9,
                imgUrl: "/recipe/search.jpeg",
                title: "Search Results",
            },
            {
                id: 10,
                imgUrl: "/recipe/submit.jpeg",
                title: "Submit new Recipe",
            },
        ]
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with Amit was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Amit's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Amit is the ideal partner.",
        name: "Manish Kumar",
        title: "Frontend Web Developer",
        img: "/manish.jpeg"
    },
    {
        quote:
            "“Having Amit Kumar on board was a game-changer for our project. Their keen eye for detail and commitment to quality ensured our website was not only visually stunning but also highly functional. Amit Kumar consistently went above and beyond, providing insights and suggestions that greatly enhanced the final product. I highly recommend Amit Kumar for anyone looking to improve their digital presence.”",
        name: "Manish Kumar",
        title: "Frontend Web Developer",
        img: "/manish.jpeg"
    },
    {
        quote:
            "Working with Amit Kumar exceeded all our expectations. They brought innovative solutions to the table, solving complex problems with ease. Their ability to seamlessly integrate frontend and backend elements made our project run smoothly and efficiently. Amit Kumar dedication and passion for development were evident in every interaction. If you need a reliable and talented developer, look no further than Amit Kumar",
        name: "Manish Kumar",
        title: "Frontend Web Developer",
        img: "/manish.jpeg"
    },
    {
        quote:
            "Partnering with Amit Kumar was a fantastic experience. Their technical expertise and proactive approach made a significant impact on our project. Amit Kumar was always available to address any issues and provided valuable feedback that improved our overall design and functionality. Their commitment to excellence is truly impressive. I would highly recommend Amit Kumar to anyone in need of a skilled and dependable developer.",
        name: "Manish Kumar",
        title: "Frontend Web Developer",
        img: "/manish.jpeg"
    },
    {
        quote:
            "I had the pleasure of working with Amit Kumar on a recent project, and their contributions were invaluable. They demonstrated a deep understanding of both frontend and backend development, ensuring our website was not only beautiful but also robust and user-friendly. Amit Kumar ability to communicate complex ideas clearly and their willingness to go the extra mile made them an essential part of our team. I highly endorse Amit Kumar for any development needs.",
        name: "Manish Kumar",
        title: "Frontend Web Developer",
        img: "/profile.svg"
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    // {
    //     id: 2,
    //     title: "Mobile App Dev",
    //     desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    //     className: "md:col-span-2",
    //     thumbnail: "/exp2.svg",
    // },
    // {
    //     id: 3,
    //     title: "Freelance App Dev Project",
    //     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    //     className: "md:col-span-2",
    //     thumbnail: "/exp3.svg",
    // },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/AmitKrVr",
    },
    {
        id: 2,
        img: "/twit.svg",
        link: "https://twitter.com/AmitKrVr",
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/amitkrvr/",
    },
];