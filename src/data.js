import FoodOrderImage from "./assets/images/food_order.jpg";

const skillsList = [
    { title: "Java", value: 75 },
    { title: "React", value: 80 },
    { title: "Node JS ", value: 60 },
    { title: "RESTful Webservices and Microservices ", value: 70 },
    { title: "MySQL and Oracle DB", value: 70 },
];
const projectList = [
    {
        id: 1,
        title: "Food Ordering Website",
        technologies: ["React JS, Serverless API"],
        backgroundImage:
            "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
        frontImage:FoodOrderImage,
    },
    {
        id: 2,
        title: "Code Hub",
        technologies: ["React JS"],
        backgroundImage:
            "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
        frontImage: "https://i.ibb.co/zNMJFTW/Webp-net-resizeimage.png",
    },
    {
        id: 3,
        title: "Burpees.io",
        technologies: ["React JS", "Node JS", "MongoDB"],
        backgroundImage:
            "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
        frontImage: "https://themes-backend.material-ui.com/wp-content/uploads/2021/05/01_preview.jpg",
    },
];

const experienceList = [
    {
        id: 0,
        company: "Paymentus",
        links: {
            website: "https://www.paymentus.com/",
            linkedIn: "https://www.linkedin.com/company/paymentus/",
        },
    },
    {
        id: 1,
        company: "Identos",
        links: {
            website: "https://www.identos.ca/",
            linkedIn: "https://www.linkedin.com/company/identos-inc/",
        },
    },
    {
        id: 2,
        company: "Capgemini",
        links: {
            website: "https://www.capgemini.com/",
            linkedIn: "https://www.linkedin.com/company/capgemini/",
        },
    },
];

export { skillsList, projectList, experienceList };
