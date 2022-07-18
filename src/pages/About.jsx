import React from 'react'
import Navbar from '../components/Navbar'
import { BsArrowRight } from "react-icons/bs";
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Navbar />
      <div className="space-y-20 text-white">
        <section className="flex flex-col space-y-12">
          <div className="flex flex-col items-center my-32">
            <span className="text-sm md:mr-96 mb-6">ABOUT US</span>
            <h1 className="text-4xl px-12 md:px-0 md:text-6xl md:ml-32">
              Built for SaaS <br /> and E-Commerce
            </h1>
          </div>

          <div className="flex justify-center px-12 md:px-0 md:justify-end md:mr-32">
            <p className="text-sm w-96">
              Our tools are easy to set up and use with a user friendly
              dashboard that enables you set up, launch, automate and manage
              multi-affiliate campaigns in 5 minutes.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="mx-12 md:mx-32 md:pr-44 py-24 text-xl md:text-5xl text-left">
            Metricks was developed because just like you, we needed a product
            that could give us <strong>good value</strong>.
          </h2>
        </section>

        <section className="flex justify-center mx-12 md:mx-32 my-24">
          <div className="space-y-3">
            <span>WHY US?</span>
            <p className="md:pr-24">
              We pride ourselves in oiur ability to innovate and create
              world-class tools that provide reliable and efficient touchpoints
              between advertisers and affiliates.
            </p>
          </div>

          <div className="space-y-6">
            <span>GROWING WITH YOU</span>
            <div className="space-y-8">
              <div className="w-2/3 space-y-6">
                <p>
                  Leveraging the best technology, we have developed an
                  all-in-one affiliate marketing tracking software, a genius
                  tool to help you track, automate and optimize your influencer
                  campaigns, all from one dashboard.
                </p>
                <p>
                  Our team of experts are constantly brainstorming, testing and
                  developing new solutions with only one thing in mind - your
                  business growth. Your success is our success and by giving you
                  the tools you need to scale, we grow as well.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-12 md:px-32 py-12 space-y-6">
          <h2 className="text-3xl">Got a Question?</h2>
          <p className="text-sm">
            See how Metricks can help your business grow with best affiliate
            marketing tracking software.
          </p>
          <div className="flex items-center space-x-2 text-fuchsia-600">
            <h4 className="text-sm" href="/">
              Contact Us
            </h4>
            <BsArrowRight />
          </div>
        </section>
        
      </div>
      <Footer/>
    </>
  )
}

export default About