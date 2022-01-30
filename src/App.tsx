import {useState} from 'react';
import "./index.css";

function App() {
  let name: string = 'No0bDev3l0per#3031';
  let age: number = 1;

  const [country, setCountry] = useState <string | null> ('UK');

  return (
    <>
      {/* <Helmet>
        <title>{user.name}</title>
        <meta name="description" content={user.name} />
        <meta name="keywords" content={user.name} />
        <meta name="author" content={user.name} />
        <meta name="revisit-after" content="1 days" />
        <meta name="language" content="en" />
      </Helmet> */}
      <div className="flex flex-col justify-center items-center w-full h-screen bg-[#231F20]">
        <div className="content">
          <p className='text-white'>{name} is {age} years old and lives in {country}</p>
          <input type="text" className="p-1 rounded outline-none" placeholder='enter your country' onChange={(e) => setCountry(e.target.value)}/>
        </div>
      </div>
    </>
  );
}

export default App;
