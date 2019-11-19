import { useRouter } from 'next/router'

const Profile = () => {
  const router = useRouter()
  const { query: { id, name } } = router
  return <div>{name}: {id}</div>
}

Profile.getInitialProps = function (req) {
  console.log(req)
  return {}
}

export default Profile
