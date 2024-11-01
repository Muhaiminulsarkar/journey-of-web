

import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './SimpleForm'

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log('sign up data :', data);
  // }

  // const handleUpdateProfile = data => {
  //   console.log('profile update data :', data);
  // }

  return (
    <>

      <h1 className='text-4xl font-bold text-green-600'>Form Master</h1>

      <Grandpa></Grandpa>


      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>sign up</h2>
          <p>please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} submitBtnText={'Update'} handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Update Profile</h2>
          <p>Always updated your profile</p>
        </div>
      </ReusableForm> */}

    </>
  )
}

export default App
