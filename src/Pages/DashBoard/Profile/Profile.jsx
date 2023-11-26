const Profile = () => {
  const profileContainerStyle = {
    display: "flex",
    padding: "4rem 2rem",
    marginBottom: "2rem",
    marginLeft: "2rem",
  };

  const avatarContainerStyle = {
    textAlign: "center",
  };

  const avatarStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  const editButtonStyle = {
    fontWeight: "bold",
  };

  const infoContainerStyle = {
    padding: "3px 0",
    marginLeft: "2rem",
  };

  const labelStyle = {
    fontWeight: "bold",
  };

  const infoItemStyle = {
    marginBottom: "0.5rem",
  };

  return (
    <div style={profileContainerStyle}>
      <div style={avatarContainerStyle}>
        <img
          src="/static/media/profileImage.934e5b10.png"
          alt="avatar"
          style={avatarStyle}
          className="img-fluid profile-photo"
        />
        <div style={{ marginTop: "1.5rem" }}>
          <button style={editButtonStyle} className="btn edit-photo-button">
            Edit Profile
          </button>
        </div>
      </div>
      <div style={infoContainerStyle}>
        <div style={infoItemStyle}>
          <label style={labelStyle} htmlFor="FullName">
            Student ID:
          </label>
          <p>WEB8-1270</p>
        </div>
        <div style={infoItemStyle}>
          <label style={labelStyle} htmlFor="FullName">
            Full name
          </label>
          <p>abedin wahid</p>
        </div>
        <div style={infoItemStyle}>
          <label style={labelStyle} htmlFor="email">
            Email Address
          </label>
          <p>abedinwahid9@gmail.com</p>
        </div>
        <div style={infoItemStyle}>
          <label style={labelStyle} htmlFor="phone">
            Phone
          </label>
          <p>01716893200</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
