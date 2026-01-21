import Image from "next/image";
import social1 from "../../public/social1@2x.webp";
import social2 from "../../public/social2@2x.webp";
import social3 from "../../public/social3@2x.webp";

const SocialIcon = () => {
    return (
      <div className="flex flex-row justify-center">
        <div className="flex flex-row w-20 gap-3">
          <a href="https://www.facebook.com/nivaancare" target="_blank">
            <Image src={social3} alt="facebook icon" unoptimized/>
          </a>
          <a href="https://www.youtube.com/@nivaancare" target="_blank">
            <Image src={social1} alt="youtube icon" unoptimized/>
          </a>
          <a href="https://www.instagram.com/nivaancare/" target="_blank">
            <Image src={social2} alt="instagram icon" unoptimized/>
          </a>
        </div>
      </div>
    )
  }

export default SocialIcon;