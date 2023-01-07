import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import catAdvice from './catAdvice.jpg'
import feralCat from './feralCat.jpg'
import frequentlyAsked from './faq.jpg'
import catCare from './catCare.jpg'
import financialResources from './financialcatresources.jpg'
import shelterImage from './thomas-park-On6bRQRn5lY-unsplash.jpg'
import catImage from './hang-niu-Tn8DLxwuDMA-unsplash.jpg'
import releasedCat from './uriel-soberanes-xadzcCQZ_Xc-unsplash.jpg'
import fixedCats from './sara-ferreira-Rf0FKVKOswk-unsplash.jpg'

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
        <img className='h-36' src={frequentlyAsked} alt='' />
        <h2 className='text-xl'>Frequently Asked Questions</h2>
      </div>
      <div>
        <img className='h-36' src={catCare} alt='' />
        <h2 className='text-xl'>
          Cat Care Guide
        </h2>
      </div>
      <div>
        <h2 className='text-xl'>
          <img className='h-36' src={financialResources} alt='' />
          Financial Resources For Cats
        </h2>
      </div>
      <div>
        <img className='h-36' src={shelterImage} alt="" />
        <h2 className='text-xl'>Local Animal Shelters</h2>
      </div>
      <div>
        <img className='h-36' src={catImage} alt='' />
        <h2 className='text-xl'>Change Someone's Life. Adopt A Cat.</h2>
      </div>
      <div>
        <img className='h-36' src={releasedCat} alt='' />
        <h2 className='text-xl'>Trap-Neuter-Return(TNR)</h2>
      </div>
      <div>
        <img className='h-36' src={fixedCats} alt='' />
        <h2 className='text-xl'>Spay And Neuter</h2>
      </div>
    </div>
  );
}

export default App;
