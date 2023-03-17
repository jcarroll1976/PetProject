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
import sleepingCat from "./modcatshop-pdALzg0yN-8-unsplash.jpg"
import Footer from './components/Footer';
import CTA from './components/CTA';
import CatCare from './components/CatCare';
import Banner from './components/Banner';
import Map from './components/Map';

function App() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Header />
      <Navbar />
      <Banner />
      <Map />
      <h2 className='text-3xl text-orange-400'>GET HELP</h2>
      <div className='flex justify-between my-8'>
        <div className="max-w-lg">
          <h3 className='text-2xl font-bold'>Get Local Assistance With Cats</h3>
          <p>Find hands-on assistance with Trap-Neuter-Return,veterinary services like spaying and
            neutering,or other help, through our network.
          </p>
        </div>
        <button className='bg-orange-400 text-white w-12'>FIND</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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
    <div className='flex'>
      <div>
        <img className='h-24' src={sleepingCat} alt=""/>
      </div>
      <div className='flex flex-col'>
      <h1 className='text-xl'>About Friends of Feral Felines</h1>
      <p>We're all about protecting and improving cats' lives. Our mission is about the
        humane treatment of all pet, stray, and feral cats & kittens.Join us and help cats today.
      </p>
      </div>
    </div>
    <h1 className='text-2xl'>Join Our Cause</h1>
    <div>
      <h2 className='text-xl'>Get the latest cat news,information, and ways to take action to save cats' lives!</h2>
      <form>
        <input type="email" placeholder="Enter your email"></input>
        <input type="text" placeholder="First Name"></input>
        <button>Sign me Up!</button>
      </form>
    </div>
    <div className='flex justify-between'>
        <div className='space-x-2'>
            <h4>Our Work</h4>
            <ul>
                <li>Animal Shelters</li>
                <li>Anti-Cruelty</li>
                <li>Cats and the Law</li>
                <li>Spay and Neuter</li>
                <li>Trap-Neuter-Return(TNR)</li>
            </ul>
        </div>
        <div className='space-x-2'>
            <h4>Resources</h4>
            <ul>
                <li>Cat Care Center</li>
                <li>Our Network</li>
                <li>TNR Resources</li>
                <li>Veterinary Resource Center</li>
            </ul>
        </div>
        <div className='space-x-2'>
            <h4>Take Action</h4>
            <ul>
                <li>Action Center-Local and Regional</li>
                <li>Become a Cat Activist</li>
                <li>Global Cat Day</li>
                <li>Share Your Cat Expertise</li>
            </ul>
        </div>
    </div>
    <CatCare />
    <Footer />
    </div>
    
  );
}

export default App;
