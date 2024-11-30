import { Link } from "react-router-dom"
import FOOTER_LINKS from '../assets/footer_links'
import FOOTER_CONTACT_INFO from "../assets/footer_contact"
import { FaFacebook, FaInstagram, FaTwitter ,FaDribbble } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className=" relative flexCenter pb-24 pt-20 bg-black text-white tracking-widest">
      <img className=" absolute w-full top-0" src="https://preview.designtone.xyz/html/foodily/images/background/pattern-6.png" alt="" />
      <img className=" absolute bottom-0 left-0" src="https://preview.designtone.xyz/html/foodily/images/resource/footer-pattern-1.png" alt="" />
      <img className=" absolute bottom-0 right-0" src="https://preview.designtone.xyz/html/foodily/images/resource/footer-pattern-2.png" alt="" />
      <div className="max_padd_container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
            {
              FOOTER_LINKS.map((col) => (
                <FooterColumn title={col.title} key={col.title}>
                  <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                    {
                      col.links.map((link) => (
                        <li key={link}>
                          <Link to="/" key={link}>{link}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </FooterColumn>
              ))
            }
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                    <p>{link.label}:</p>
                    <p className="medium-14">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex">
              <FooterColumn>
                <ul className="flex gap-4">
                  <FaFacebook />
                  <FaInstagram />
                  <FaTwitter />
                  <FaDribbble />
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <p className="text-center regular-14 text-gay-30">2024 Shoppee | All rights reserved.</p>
      </div>
    </footer>
  )
}

const FooterColumn = ({title, children}) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}


export default Footer