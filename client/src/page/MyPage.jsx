import React, {useState} from 'react'
import Profile from '../component/Profile';

function MyPage({user}) {
  const [editMode, seteditMode] = useState(false);
  return (
    <div>
      <Profile/>
    </div>
  )
}

export default MyPage