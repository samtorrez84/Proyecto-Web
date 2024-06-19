import { useAuth } from "../context/AuthContext"

function ProfilePage() {
  const {user} = useAuth()
  console.log(user)
  
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage