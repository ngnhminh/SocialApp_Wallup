import React from 'react'
import ProfileHeader from '../components/Proflie/ProfileHeader'
import ProflieNav from '../components/Proflie/ProflieNav'
import ProfileBody from '../components/Proflie/ProfileBody'

const ProfilePage = () => {
  return (
    <div className='flex flex-col min-h-[686.4px] bg-base-200 '>
      <ProfileHeader />
      <div className='block sticky top-[56px] z-2 bg-base-200 '>
        <ProflieNav />
      </div>
      <div className='flex flex-col items-center max-w-full'>
        <ProfileBody />
      </div>
    </div>
  )
}

export default ProfilePage