import { links } from "../../constants/links";
import { ILink } from "../../types";

const SocialIcons = () => {

  return (
    <div className="flex gap-10 justify-around">
        {links.socialLinks.map((link: ILink) => {
          return (
            <a
              href={link.link}
              target="_blank"
              rel='noreferrer '
              key={link.title}
              className="text-3xl rounded-full hover:text-orange-default"
            >
              {<link.icon />}
            </a>
          );
        })}
      </div>
  )
}

export default SocialIcons