function ProfileCard(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Subject: {props.subject}</p>
    </div>
  );
}

export default ProfileCard;