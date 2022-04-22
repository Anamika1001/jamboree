import Head from 'next/head'
import Image from 'next/image'
import Cart from './components/Cart'
import Category from './components/Category'
import Orders from './components/Orders'

export default function Home() {
  return (
    <div className='App'>

      <div className='content'>
        <Cart />
        {/*
      <Category/>
    <Orders/>*/}

      </div>
    </div>
  )
}
