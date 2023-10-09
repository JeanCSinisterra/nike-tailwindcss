import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20
      flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo"
            width={150}
            height={46}
            />
          </a>
          <p className="mt-5 text-base leading-7 font-montserrat
           text-white-400 sm:max-w-sm">
          Get shoes ready for the new term at your nearest NIke Store.
          Find your perfect Size In Store.Get Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              // eslint-disable-next-line react/jsx-key
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt}
                width={24}
                height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between gap-10 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white-400 font-montserrat 
              text-2xl leading-normal font-medium mb-6">
                {section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 text-white-400 font-montserrat text-base leading-normal cursor-pointer hover:text-slate-gray"
                  key={link.name}>
                    <a>{link.name}</a>
                    </li>
                ))}  
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center font-montserrat gap-2">
          <img src={copyrightSign} alt="copy right sign"
          width={20}
          height={20}
          className="rounded-full mb-0"
          />
          <p> Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>

    </footer>
  )
}

export default Footer