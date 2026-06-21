import Container from '../layouts/Container'

const FAQSection = () => {
  return (
    <div className='bg-gray-100'>
      <Container>
        <div className='py-30'>
          <div className='primaryTxt font-medium'>
            Creative Freedom
          </div>
          <div className='pt-2 pb-10 flex justify-between items-center'>
            <h2 className='headingTxt text-[48px] font-medium max-w-[600px]'>Frequently Asked <span className='bg-green px-3 py-1'>Questions</span></h2>
            <p className='primaryTxt text-[16px] font-normal max-w-[360px] pt-15'>Your success is our top priority. Our dedicated support team is here to assist you every step of the way</p>
          </div>
          {/* ===== FAQ items ===== */}
          <div className='grid grid-cols-3 gap-8 pb-8'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden p-6'>
              <h3 className='font-inter font-medium text-[16px] pb-4'>Can I upgrade my subscription?</h3>
              <p className='primaryTxt font-normal max-w-[300px]'>Absolutely! Upgrading your subscription plan with Slate is a breeze. Simply log into your account, navigate to the billing section</p>
            </div>
            <div className='bg-white rounded-lg shadow-md overflow-hidden p-6'>
              <h3 className='font-inter font-medium text-[16px] pb-4'>Can I cancel my subscription?</h3>
              <p className='primaryTxt font-normal max-w-[300px]'>Of course! We believe in offering flexibility to our valued customers. If you decide to cancel your subscription with Slate,</p>
            </div>
            <div className='bg-white rounded-lg shadow-md overflow-hidden p-6'>
              <h3 className='font-inter font-medium text-[16px] pb-4'>Does Slate offer a free trial period?</h3>
              <p className='primaryTxt font-normal max-w-[320px]'>Yes, indeed! We understand that getting started with a new SaaS platform can be <br /> overwhelming.</p>
            </div>
          </div>
          {/* ====== FAQ items ===== */}
          <div className='grid grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden p-6'>
              <h3 className='font-inter font-medium text-[16px] pb-4'>Does Slate offer a free trial period?</h3>
              <p className='primaryTxt font-normal max-w-[300px]'>Of course! We believe in offering flexibility to our valued customers. If you decide to cancel your subscription with Slate,</p>
            </div>
            <div className='bg-white rounded-lg shadow-md overflow-hidden p-6'>
              <h3 className='font-inter font-medium text-[16px] pb-4'>Can I upgrade my subscription?</h3>
              <p className='primaryTxt font-normal max-w-[300px]'>Yes, indeed! We understand that getting started with a new SaaS platform can be overwhelming.</p>
            </div>
            <div className='bg-white rounded-lg shadow-md overflow-hidden p-6'>
              <h3 className='font-inter font-medium text-[16px] pb-4'>Add your question title here?</h3>
              <p className='primaryTxt font-normal max-w-[320px]'>Absolutely! Upgrading your subscription plan with Slate is a breeze. Simply log into your account, navigate to the billing section</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FAQSection