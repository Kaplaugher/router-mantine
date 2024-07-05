import { Link } from "react-router-dom";

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>Profiles</h1>
      {profiles.map((profile) => (
        <div key={profile} className="flex flex-col gap-4">
          <Link to={`/profiles/${profile}`} className="text-red-500">
            Profile {profile}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProfilesPage;
