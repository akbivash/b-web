import { AiOutlineProject } from 'react-icons/ai'
import { MdRoundaboutLeft, MdOutlineDesignServices } from 'react-icons/md'
import { ImBlog } from 'react-icons/im'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'



export const links = {
  navLinks: [
    {
      title: 'Services',
      link: '/services',
      icon: MdOutlineDesignServices
    },
    {
      title: 'Blogs',
      link: '/blogs',
      icon: ImBlog
    },
    {
      title: 'Portfolio',
      link: '/portfolio',
      icon: AiOutlineProject
    },
    {
      title: 'About Us',
      link: '/about',
      icon: MdRoundaboutLeft
    }
  ],
  socialLinks: [
    {
      title: 'Github',
      icon: FaGithub,
      link: 'https://github.com/akbivash'
    },
    {
      title: 'Linkedin',
      icon: BsLinkedin,
      link: 'https://www.linkedin.com/in/dip-adhikari-a61b451a4/'
    },
    {
      title: 'Facebook',
      icon: FaFacebook,
      link: 'https://www.facebook.com/akbivash'
    }
  ]
}