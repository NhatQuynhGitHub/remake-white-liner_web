import { BiShoppingBag } from "react-icons/bi";
import SocialIcon from "./SocialIcon";
import SocialIconStyle from "@/styles/social-icon.module.css";
import SocialIconListStyle from "@/styles/social-icon.module.css";
import SocialIconItemStyle from "@/styles/social-icon.module.css";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import logoStyle from "@/styles/logo.module.css";
import NavbarHeader from "./NavbarHeader";
import SearchOpenField from "./searchComponent/SearchOpenField";
import HeaderStyle from "@/styles/header-style.module.css";
import { FaRegUser } from "react-icons/fa";
import SliderAnnouncement from "./SliderAnnouncement";

export default function Header() {
  return (
    <header>
      <SliderAnnouncement />
      <div className={HeaderStyle["header"]}>
        <MenuToggle />
        <div className="header">
          <SearchOpenField />
          <Logo className={logoStyle["logo-header"]} width={350} height={150} />
          <div className="header_icons">
            <SocialIcon
              socialIcon={SocialIconStyle["header__social__icon"]}
              socialIconList={SocialIconListStyle["header__social__icon-list"]}
              socialIconItem={SocialIconItemStyle["header__social__icon-item"]}
            />
            <BiShoppingBag className={HeaderStyle['shopping--cart']} />
            <FaRegUser className={HeaderStyle['user']}/>
          </div>
        </div>
      </div>

      <nav>
        <div>
          <NavbarHeader />
        </div>
      </nav>
    </header>
  );
}
