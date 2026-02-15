
// import { useState, useEffect } from "react"
// // import Link from "next/link"
// import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Link, NavLink } from 'react-router-dom'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
// import img_url  from './assets/carousel/CONNECTION.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CalendarDays, Instagram, Mail, MapPin, MessageCircle, Phone, Users, } from "lucide-react"
import { nonTechCarousel_URLS, techCarousel_URLS } from "./config/imgURL"
import RVSBanner from "./components/RVS"
import MapEmbed from "./map"
import AlertComponent from "./AlertDialoge"
// import useNagivate from 'react-router-dom'
const techRegURL:string= "#";
const nonTechRegURL:string= "#";

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-x-hidden min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <AlertComponent />
      <main className="flex-1">
        <section className="w-full  bg-teal-800 dark:bg-teal-900">
          <div className="p-0">
            <RVSBanner />
          </div>
        </section>
        <section className="bg-teal-700 m-10 mt-10 rounded-lg">
        <div className=" py-8 container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to InnoFest 2026
                </h1>
                <p className="mx-auto max-w-[700px] text-teal-100 md:text-xl">
                  Join us for the most innovative tech event of the year. Discover, learn, and connect with others.
                </p>
              </div>
              <Link to={'events'}>
              <Button className="bg-white text-lg font-bold text-teal-900 hover:bg-teal-700 transform transition duration-300  hover:-translate-y-0.5  hover:text-white/100" size="lg">
                Explore Events
              </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-20 bg-gray-100 dark:bg-gray-800 ">
          
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-gray-900 dark:text-gray-100">Technical Event Highlights</h2>
            <Carousel 
             plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
             className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <CarouselContent >
                {techCarousel_URLS.map((image : string, index) => (
                  
                  <CarouselItem key={index} >
                    <Card>
                      <CardContent className="flex aspect-auto items-center justify-center p-0">
                        <NavLink to={'/events'}>
                        <img
                          src={image}
                          alt={`Slide ${index + 1}`}
                          width={400}
                          height={400}
                          className="rounded-lg object-cover"
                        />
                        </NavLink>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            <a className="mt-4 w-8/12" href={techRegURL}>
            <Button className="mt-4 w-full" onClick={() => window.location.href = "events"} >Explore Now</Button>
            </a>
            </Carousel>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-10 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-gray-900 dark:text-gray-100">Non-Technical Event Highlights</h2>
            <Carousel 
             plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
             className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <CarouselContent >
                {nonTechCarousel_URLS.map((image : string, index) => (
                  
                  <CarouselItem key={index} >
                    <Card>
                      <CardContent className="flex aspect-auto items-center justify-center p-0">
                        <NavLink to={'/events'}>
                        <img
                          src={image}
                          alt={`Slide ${index + 1}`}
                          width={400}
                          height={400}
                          className="rounded-lg object-cover"
                        />
                        </NavLink>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            <a className="mt-4 w-8/12" href={nonTechRegURL}>
            <Button className="mt-4 w-full" >Explore Now</Button>
            </a>
            </Carousel>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">Event Details</h2>
                <p className="max-w-[900px] text-gray-500 pt-2 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get ready for an immersive experience in the world of Technology and Innovation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <CalendarDays className="h-12 w-12 text-teal-500 dark:text-teal-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Date & Time</h3>
                <p className="text-gray-500 dark:text-gray-400">12 & 13 March 2026<br />9:00 AM - 6:00 PM</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-12 w-12 text-teal-500 dark:text-teal-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Attendees</h3>
                <p className="text-gray-500 dark:text-gray-400">500+ tech enthusiasts<br />10+ speakers</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <MapPin className="h-12 w-12 text-teal-500 dark:text-teal-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Location</h3>
                <p className="text-gray-500 dark:text-gray-400">RVS TECHNICAL CAMPUS - COIMBATORE<br />Kumaran Kottam Campus, Kannampalayam, Coimbatore - 641402</p>
              </div>
            </div>
              <div className="px-5 h-52 md:px-32">
                <MapEmbed />
              </div>
            <div className="flex justify-center mt-8">
              {/* <Button size="lg" className="bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600">
                Explore Events
              </Button> */}
            </div>
          </div>
        </section>
      </main>
      <CardFooter/>
      <footer className="flex flex-col gap-2 sm:flex-col py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:flex-row md:items-start mb-4 md:mb-0">
              <p className="flex md:px-3  font-semibold items-center"><Phone className="mr-2" />
                <a href="tel:7092351820">+91 7092351820</a>| <a href="tel:9342423914">+91 9342423914</a>
              </p>
              <a href="mailto:innofest24@gmail.com">
                <p className="flex md:px-10  font-semibold items-center"><Mail className="mr-2" /> innofest26@gmail.com</p>
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/innofest24/" target="_blank" rel="noopener noreferrer" className="text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://chat.whatsapp.com/CgG05iPw0pB5cRn7RZBI16" target="_blank" rel="noopener noreferrer" className="text-primary">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
          <br></br>
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2026 InnoFest. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100" to='#' >
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100" to='#'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}