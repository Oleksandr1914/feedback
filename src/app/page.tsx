"use client"
import Form from "@/components/Form/Form";
import { Header } from "@/components/Header/Header";
import { Rating } from "@/components/Rating/Rating";
import { useState } from "react";
import { FaStar } from "react-icons/fa";


export default function Home() {
  const [ratingService, setRatingService] = useState(0)
  const [ratingPrice, setRatingPrice] = useState(0)
  const [ratingQuality, setRatingQuality] = useState(0)

  let overalRating = (ratingService + ratingPrice + ratingQuality) / 15 * 5

  return (
    <main >
      <Header />
      <div className="relative">
        <div className="px-6 after:content-[''] after:block after:absolute after:left-0 after:bottom-[-20px] after:w-full after:h-px after:bg-[#4f4e4eb9]">
          <h1 className="w-60 text-center mt-7 mx-auto text-xl font-semibold">Your feedback about our cafe</h1>
          <ul className="mt-4 flex flex-col gap-4">
            <li className="flex gap-5 items-center">
              <p className="w-20 mr-16 text-base text-textColor font-medium ">Service</p>
              <Rating rating={ratingService} onRating={(rate: number) => setRatingService(rate)} />
              <p className="text-base text-textColor font-medium">{ratingService}</p>
            </li>
            <li className="flex gap-5 items-center">
              <p className="w-20 mr-16 text-base text-textColor font-medium">Price</p>
              <Rating rating={ratingPrice} onRating={(rate: number) => setRatingPrice(rate)} />
              <p className="text-base text-textColor font-medium">{ratingPrice}</p>
            </li>
            <li className="flex gap-5 items-center">
              <p className="w-20 mr-16 text-base text-textColor font-medium">Quality</p>
              <Rating rating={ratingQuality} onRating={(rate: number) => setRatingQuality(rate)} />
              <p className="text-base text-textColor font-medium">{ratingQuality}</p>
            </li>
          </ul>
          <div className="mt-4 mb-4 flex gap-8 items-center">
            <p>Your overall rating</p>
            <p className="flex gap-1 items-center px-1 text-[#ffffff] bg-[#ff9719] rounded"><FaStar className="cursor-pointer text-[#ffffff]" /><span>{overalRating.toFixed(1)}</span></p>
          </div>
          <Form />
        </div>
      </div>
    </main>
  );
}
