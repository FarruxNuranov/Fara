
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  
const users = useSelector(state => state.user.user)

const navigate = useNavigate()

const user = users ? children : navigate('/login')



return user


}

export default PrivateRoute