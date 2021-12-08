import type { FC } from 'react'
import Image from 'next/image'

export const LandingBanner: FC = () => {
  return (
    <div className="m-4 p-8 md:p-24 rounded-sm relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          layout="fill"
          objectFit="cover"
          alt="banner background"
        />
      </div>
      <span className="bg-black bg-opacity-60 absolute inset-0" />
      <div className="relative text-white text-center">
        <h1 className="font-bold text-xl md:text-4xl">
          Welcome to The Act Booker
        </h1>
        <h2 className="font-light mt-4 text-lg text-gray-200">
          A directory to the UK&apos;s top performers and entertainers
        </h2>
      </div>
    </div>
  )
}
