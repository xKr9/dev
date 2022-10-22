import AMAImage from '../images/ama-img.png'
import PLNImage from '../images/pln-img.png'
import HatlessSiteImg from '../images/hatless-img.png'

export default {
    "data": [
        {
            "id": 1,
            "title": "Hatless Website",
            "description": "The goal of this project was to modernise the website, currently I'm collaborating with the design team to implement the designs whilst ensuring we can maintain good SEO to reach more clients.\n\n The site will switch from Django to Strapi v4, which will enable the marketing team to make changes to the site really quickly. I've worked with Strapi before for a short time however that was mostly migrating the infrastructure from v3 to v4. For projects like these I think it makes a lot of sense to use it since it provides a nice and easy way for non developers to make changes as long as components are designed well.\n\n I also decided to use Nuxt3 in this project, which was a bit of a risky move. Although Nuxt3 is technically production ready, quite a lot of modules just don't really work on it which at times I had to reinvent the wheel. However other than that it has been pretty nice to work with, I've worked with NextJS before so I was right at home on this project. The great thing about Nuxt however is that it also has module which directly interacts with Strapi which made filtering data a breeze.",
            "subtext": "Website modernisation in order to gain a wider reach of applicants and clients looking for some work to be done!", 
            "link": "hatless-website",
            "image": HatlessSiteImg,
            "tech": [
                "Nuxt",
                "Vue",
                "Tailwind",
                "Strapi",
                "GSAP"
            ]
        },
        {
            "id": 2,
            "title": "Primary Language Networks",
            "subtext": "Platform designed for children to play a variety of language games to make learning more engaging.",
            "description": "In the process of developing a platform for children to help them with learning different languages! An interesting project due to the fact that the audience are mostly kids and a few teachers per class. This means that the UI has to be clear as to what functionality it serves whilst keeping it fun and vibrant.\n\n After being away from Vue for a year it was quite interesting to jump back in with React knowledge to see how it compares, although there are quite a few things I like about Vue especially the v-model on inputs, the React ecosystem just works really well. Especially since Vue seems to be moving in the direction of React anyway with how Vue3 is formatted with setup and adding composables which are just React hooks.\n\nIt was also the first time in a while I've had the chance of looking at Django again, I did keep making comparisons to Laravel quite often and I'm fully on the Laravel side for my backends going to future projects. I think its the ease of Laravel I enjoy when building RESTful apps, with Django I just had an impression there was a lot of gotchas.",
            "image": PLNImage,
            "link": "primary-language-networks",
            "tech": [
                "Vue",
                "CSS",
                "Django"
            ]
        },
        {
            "id": 3,
            "title": "AMA Selections",
            "subtext": "Web application allowing users to book high end holidays from a wide range of destinations.",
            "description": "",
            "image": AMAImage,
            "link": "ama-selections",
            "tech": [
                "React",
                "NextJS",
                "Tailwind",
                "Laravel",
            ]
        },
        {
            "id": 4,
            "title": "Service marketplace platform",
            "subtext": "Platform for service providers to offer their services to customers looking for specialised work to be done.",
            "description": "Led a project to develop a web application where service providers would be allowed to register a trade for customers to request. I implemented the KYC validation provided by the MangoPay ecosystem in combination with Laravel to allow cutomers register for virtual wallets to create secure transactions.\n\n I implemented queries which showed customers recommended services they would be interested in based off their site activity and similar users. Similarily, I was able to implement an analytics dashboard in a similar way to allow service providers to gain insight into how well their service is performing given a certain time frame.\n\n I was also able to create a custom forms which gave service providers the flexibility to create their own forms for customers to fill in to gain better insight into what they are looking for.",
            "image": "https://cdn.mindbowser.com/wp-content/uploads/2021/04/07103411/Marketplace-Development-Services.svg",
            "link": "service-marketplace-platform",
            "tech": [
                "Laravel",
                "JavaScript",
                "MangoPay"
            ]
        },
        {
            "id": 5,
            "title": "Decentralised Fitness Ecosystem",
            "subtext": "Final year project exploring the decentralised platform called SOLID, exploring ways of how applications would be able to utalise users data pods.",
            "image": "https://solidproject.org/assets/img/interoperability-tour.svg",
            "link": "decentralised-fitness-ecosystem",
            "description": "",
            "tech": [
                "Solid",
                "React"
            ]
        }
    ]
}