import React from 'react'
import Container from '../layouts/Container'


const Testimonials = () => {
  return (
    <>
    <Container>
        <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <p className="text-sm text-gray-500 mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
              <span className="bg-[#C8F169] px-2 rounded-md">
                Save hours
              </span>{" "}
              and
              <br />
              build better websites.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="border border-gray-200 rounded-2xl p-8">
              <h4 className="font-semibold text-lg">voice2go</h4>

              <div className="border-t border-gray-100 my-6"></div>

              <div className="w-12 h-12 rounded-full bg-[#DDF4B2]"></div>

              <div className="h-28"></div>

              <div className="border-t border-gray-100"></div>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8">
              <h4 className="font-semibold text-lg">voice2go</h4>

              <div className="border-t border-gray-100 my-6"></div>

              <div className="w-12 h-12 rounded-full bg-[#DDF4B2]"></div>

              <div className="h-28"></div>

              <div className="border-t border-gray-100"></div>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-lg">voice2go</h4>
                <h4 className="font-semibold text-lg">Invoice2go</h4>
              </div>

              <div className="border-t border-gray-100 my-6"></div>

              <div className="flex justify-end">
                <div className="w-12 h-12 rounded-full bg-[#DDF4B2]"></div>
              </div>

              <div className="h-28"></div>

              <div className="border-t border-gray-100"></div>
            </div>
          </div>
        </div>
        </div>
    </Container>
    </>
  )
}

export default Testimonials