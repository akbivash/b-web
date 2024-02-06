import { BiLogoTypescript } from "react-icons/bi";
import { FaNode, FaReact } from "react-icons/fa";
import { SiPostgresql } from 'react-icons/si'

export const projects = [
    {
        title: 'B-Tube',
        description: 'YouTube clone created with YouTube Data API',
        image: require('../assets/btube.png'),
        url: 'https://youtube-96.netlify.app/',
        github: 'https://github.com/akbivash/youtube-clone',
        stacks: [
            { title: 'React', icon: FaReact },
            { title: 'Node', icon: FaNode },
            { title: 'TypeScript', icon: BiLogoTypescript }
        ]
    },
    {
        title: 'JobHouse',
        description: 'A job portal, with separate admin dashboard, resume builder and many more features. ',
        image: require('../assets/jobhouse.png'),
        url: 'https://jobhouse.netlify.app/',
        github: 'https://github.com/akbivash/jobhouse_job-portal',
        stacks: [
            { title: 'React', icon: FaReact },
            { title: 'Node', icon: FaNode },
            { title: 'TypeScript', icon: BiLogoTypescript },
            { title: 'Postgresql', icon: SiPostgresql }
        ]
    },
    {
        title: 'Bivcryp',
        description: 'Simple Landing page demo',
        image: require('../assets/bcr1.jpg'),
        url: 'https://bivcryp.netlify.app/',
        github: 'https://github.com/akbivash/bivcryp',
        stacks: [
            { title: 'React', icon: FaReact },
        ]
    }
]