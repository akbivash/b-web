import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { FaNode, FaReact } from "react-icons/fa";

export const projects = [
    {
        title:'TravelMate',
        description:'A hotel booking app',
        image:'https://w0.peakpx.com/wallpaper/683/262/HD-wallpaper-hotel-booking-online-reservation-mobile-application-for-renting-3050891-vector-art-at-vecteezy.jpg',
        url:'https://travelmate-96.netlify.app/',
        github:'https://github.com/akbivash/travel_mate-booking-app',
        stacks:[
            {title:'React', icon:FaReact},
            {title:'Node', icon:FaNode},
            {title:'MongoDB', icon:BiLogoMongodb},
            {title:'TypeScript', icon:BiLogoTypescript}
        ]
    },
    {
        title:'FashioNepa',
        description:'An e-commerce app',
        image:'https://img.freepik.com/free-photo/dark-haired-woman-with-red-lipstick-smiles-leans-stand-with-clothes-holds-package-pink-background_197531-17609.jpg?w=740&t=st=1674103608~exp=1674104208~hmac=893cb53e9ca643c3ac1faf3d4f48427174214f9729e4e90daff66f5315bd747e',
        url:'https://fashionepa.netlify.app/',
        github:'https://github.com/akbivash/fashio_nepa-frontend',
        stacks:[
            {title:'React', icon:FaReact},
            {title:'Node', icon:FaNode},
            {title:'MongoDB', icon:BiLogoMongodb}
        ]
    },
    {
        title:'B-Tube',
        description:'YouTube clone',
        image:'https://www.91-cdn.com/hub/wp-content/uploads/2020/03/YouTube.jpg',
        url:'https://youtube-96.netlify.app/',
        github:'https://github.com/akbivash/youtube-clone',
        stacks:[
            {title:'React', icon:FaReact},
            {title:'Node', icon:FaNode},
            {title:'TypeScript', icon:BiLogoTypescript}
        ]
    }
]