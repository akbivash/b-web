import { IconType } from "react-icons/lib"

export interface ILink {
    icon:IconType 
    title:string 
    link:string
}
export interface IServiceCard {
    icon: any;
    title: string;
    description: string;
    bullets: string[];
  }

  export interface IHeroSlider {
    title: string,
    header: string,
    img: string,
    description: string
  }

 export interface IStep {
    title: string;
    description: string;
    icon: React.ElementType;
    link: string;
    index:number
  }