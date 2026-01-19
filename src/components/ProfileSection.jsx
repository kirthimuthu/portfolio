import profileImage from '../profile/dp.jpeg';
export default function ProfileSection() {
  return (
     <div className="profile-section">
        <img 
          src={profileImage} 
          alt="Kiruthika" 
          className="profile-image"
        />
      </div>
  );
}