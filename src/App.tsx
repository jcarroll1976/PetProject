import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import catAdvice from './catAdvice.jpg'
import feralCat from './feralCat.jpg'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <h2 className='text-3xl'>Get Help</h2>
      <div>
        <div>
          <h3 className='text-2xl'>Get Local Assistance With Cats</h3>
          <p>Find hands-on assistance with Trap-Neuter-Return,veterinary services like spaying and
            neutering,or other help, through our network.
          </p>
        </div>
        <button>FIND</button>
      </div>
      <div>
        <img className='h-36' src={catAdvice} alt='' />
        <h2 className='text-xl'>Need Advice About Cats?</h2>
      </div>
      <div>
        <img className='h-36' src={feralCat} alt='' />
        <h2 className='text-xl'>What To Do If You Find A Cat Outdoors</h2>
      </div>
      <div>
        <h2 className='text-xl'>Frequently Asked Questions</h2>
      </div>
      <div>
        <h2 className='text-xl'>
          Cat Care Guide
        </h2>
      </div>
      <div>
        <h2 className='text-xl'>
          Financial Resources For Cats
        </h2>
      </div>
    </div>
  );
}

export default App;
