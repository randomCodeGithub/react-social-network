import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    
    <div>
      {/* <div>
        <img src="https://www.businessinsider.in/photo/81769906/How-to-reverse-image-search-on-Google-to-find-information-related-to-a-specific-photo.jpg?imgsize=297676" />
      </div> */}
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        {props.profile.fullName}
      </div>
    </div>
  );
};

export default ProfileInfo;
