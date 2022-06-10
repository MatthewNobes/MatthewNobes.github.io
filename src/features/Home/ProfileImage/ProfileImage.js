import profileimage from "../../../Media/Images/profileImage.png";
import css from "./ProfileImage.module.css";

export const ProfileImage = () => (
  <img className={css.profileImage} alt="Profile" src={profileimage}></img>
);
