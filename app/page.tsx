import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/user")
	return response.data;
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div>
      hi there 
      <br />
      {userData.name}
      <br />
      {userData.email}
      
    </div>
  );
}
