import React from 'react';
import { BsInstagram,BsFacebook,BsYoutube} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://instagram.com/100feetstudio?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" ><h2><BsInstagram /></h2></a>
      <a href="https://m.facebook.com/100feetdancestudio/" target="_blank" rel="noreferrer" ><h2><BsFacebook /></h2></a>
      <a href="https://www.youtube.com/c/100FEETSTUDIO" target="_blank" rel="noreferrer" ><h2><BsYoutube /></h2></a>
    </div>
  )
}

export default HeaderSocials