import { useParams } from "react-router-dom";
const ProfilePage = () => {
  const { profileId } = useParams();
  return <div>ProfilePage {profileId}</div>;
};

export default ProfilePage;
