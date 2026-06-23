const UserCard = ({ name, role ,color}) => {
  return (
    <>
        <div style={{backgroundColor:color,width:"150px"}}>    
      <h2>Name: {name}</h2>
      <h3>Role: {role}</h3>
    </div>
    </>
    
  );
};

export default UserCard;