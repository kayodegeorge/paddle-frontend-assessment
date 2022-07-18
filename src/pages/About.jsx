import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (
    <>
      <Navbar />
      <div className="p-12 space-y-20 text-white">
        <section className="flex flex-col space-y-12">
          <span className="text-sm">ABOUT US</span>
          <h1 className="text-5xl ml-96 p-20">
            Built for SaaS <br /> and E-Commerce
          </h1>
          <div className="flex justify-end">
            <p className="text-sm w-96">
              Our tools are easy to set up and use with a user friendly
              dashboard that enables you set up, launch, automate and manage
              multi-affiliate campaigns in 5 minutes.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="px-[19rem] py-24 text-4xl text-left">
            Metricks was developed because just like you, we needed a product
            that could give us <strong>good value</strong>.
          </h2>
        </section>

        <section className="flex py-24">
          <div>
            <span>WHY US?</span>
            <p className="pr-24">
              We pride ourselves in oiur ability to innovate and create
              world-class tools that provide reliable and efficient touchpoints
              between advertisers and affiliates.
            </p>
          </div>

          <div className="space-y-6">
            <span>GROWING WITH YOU</span>
            <div className="space-y-8 pr-64">
              <p>
                Leveraging the best technology, we have developed an all-in-one
                affiliate marketing tracking software, a genius tool to help you
                track, automate and optimize your influencer campaigns, all from
                one dashboard.
              </p>
              <p>
                Our team of experts are constantly brainstorming, testing and
                developing new solutions with only one thing in mind - your
                business growth. Your success is our success and by giving you
                the tools you need to scale, we grow as well.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl">Got a Question?</h2>
          <p className="text-sm">
            See how Metricks can help your business grow with best affiliate
            marketing tracking software.
          </p>
          <h4 className="text-sm text-fuchsia-600" href="/">
            Contact Us
          </h4>
        </section>
      </div>
    </>
  )
}

export default About