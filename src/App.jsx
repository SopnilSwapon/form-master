
import './App.css'
// import HookForm from './Components/stateFull/RefForm/HookForm/HookForm'
import ReUsable from './ReUsable/ReUsable'
// import RefFrom from './Components/stateFull/RefForm/RefFrom'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StateFull from './Components/stateFull/StateFull'

function App() {

  const handleSignUpSubmit = data => {
    console.log('Sign up data', data);
}
const handleProfileUpdateSubmit = data => {
  console.log('Profile up date data' , data);
}

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFull></StateFull> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookForm></HookForm> */}
      <ReUsable 
      submitTitle={'Sign Up'} 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign up</h2>
          <p>Please sign up</p>
        </div>
      </ReUsable>
      <ReUsable 
      submitTitle={'Update Profile'} 
      submitBtnText={"update"}
      handleSubmit={handleProfileUpdateSubmit}
      >
        <div>
          <h2>Profile Update</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReUsable>
      
    </>
  )
}

export default App
