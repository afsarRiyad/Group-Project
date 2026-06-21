import Container from '../layouts/Container'
import SlateOne from '../../assets/images/slateone.webp'
import SlateTwo from '../../assets/images/slatetwo.webp'
import SlateThree from '../../assets/images/slatethree.webp'
import SlateFour from '../../assets/images/slatefour.webp'
import SlateFive from '../../assets/images/slatefive.webp'
import SlateSix from '../../assets/images/slatesix.webp'
import ArticleMan from '../../assets/images/rifat-img12.webp'

const SlateArticles = () => {
  return (
    <div>
      <div className='text-center -mt-45'>
        <p className='primaryTxt font-medium text-[16px] pb-6.5'>Regular Articles</p>
        <h2 className='headingTxt font-medium text-[56px] max-w-[600px] mx-auto'>Take a look at the latest <span className='bg-green px-3 py-1'>Slate articles</span></h2>
      </div>
      <Container>
        <div className='pt-14 pb-28'>
          {/* ===== 1st row ===== */}
          <div className='grid grid-cols-2 gap-10 pb-10'>
            <div className='grid grid-cols-2 gap-6 rounded-lg shadow-md overflow-auto p-1'>
              <img src={SlateOne} alt="Slate One" className='w-full rounded-lg' />
              <div>
                <h3 className='font-inter font-medium text-[18px] pb-4 pt-8 max-w-[200px]'>Why Framer is the best website development platform!</h3>
                <p className='primaryTxt font-normal text-[16px]'>World class development and built for performance, Slate will deliver to the highest standard.</p>
                <div className='pt-8 pb-10 flex items-center gap-4'>
                  <img src={ArticleMan} alt="Article Man" className='w-10 h-10 rounded-full' />
                  <div>
                    <p className='primaryTxt font-normal text-[16px]'>Dylan Meringu</p>
                    <p className='primaryTxt font-medium'>May 4, 2023 <span className=' primaryTxt px-2 py-1'>8 min read</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-6 rounded-lg shadow-md overflow-auto p-1 max-h-72'>
              <img src={SlateTwo} alt="Slate Two" className='w-full rounded-lg' />
              <div>
                <h3 className='font-inter font-medium text-[18px] pb-4 pt-8'>Best fonts for Designers 2023</h3>
                <p className='primaryTxt font-normal text-[16px]'>World class development and built for performance, Slate will deliver to the highest standard.</p>
                <div className='pt-8 pb-10 flex items-center gap-4'>
                  <img src={ArticleMan} alt="Article Man" className='w-10 h-10 rounded-full' />
                  <div>
                    <p className='primaryTxt font-normal text-[16px]'>Dylan Meringu</p>
                    <p className='primaryTxt font-medium'>May 4, 2023 <span className=' primaryTxt px-2 py-1'>8 min read</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ===== 2nd row ===== */}
          <div className='grid grid-cols-2 gap-10 pb-10'>
            <div className='grid grid-cols-2 gap-6 rounded-lg shadow-md overflow-auto p-1'>
            <img src={SlateThree} alt="Slate Three" className='w-full rounded-lg' />
            <div>
              <h3 className='font-inter font-medium text-[18px] pb-4 pt-8 max-w-[220px]'>Ultimate guide to SEO for beginners</h3>
              <p className='primaryTxt font-normal text-[16px]'>World class development and built for performance, Slate will deliver to the highest standard.</p>
              <div className='pt-8 pb-10 flex items-center gap-4'>
                <img src={ArticleMan} alt="Article Man" className='w-10 h-10 rounded-full' />
                <div>
                  <p className='primaryTxt font-normal text-[16px]'>Dylan Meringu</p>
                  <p className='primaryTxt font-medium'>May 4, 2023 <span className=' primaryTxt px-2 py-1'>8 min read</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-6 rounded-lg shadow-md overflow-auto p-1'>
            <img src={SlateFour} alt="Slate Four" className='w-full rounded-lg' />
            <div>
              <h3 className='font-inter font-medium text-[18px] pb-4 pt-8 max-w-[250px]'>The best no-code platforms for 2023</h3>
              <p className='primaryTxt font-normal text-[16px]'>World class development and built for performance, Slate will deliver to the highest standard.</p>
              <div className='pt-8 pb-10 flex items-center gap-4'>
                <img src={ArticleMan} alt="Article Man" className='w-10 h-10 rounded-full' />
                <div>
                  <p className='primaryTxt font-normal text-[16px]'>Dylan Meringu</p>
                  <p className='primaryTxt font-medium'>May 4, 2023 <span className=' primaryTxt px-2 py-1'>8 min read</span></p>
                </div>
              </div>
            </div>
          </div>
          </div>
          {/* ===== 3rd row ===== */}
          <div className='grid grid-cols-2 gap-10 pb-10'>
            <div className='grid grid-cols-2 gap-6 rounded-lg shadow-md overflow-auto p-1'>
            <img src={SlateFive} alt="Slate Five" className='w-full rounded-lg' />
            <div>
              <h3 className='font-inter font-medium text-[18px] pb-4 pt-8 max-w-[200px]'>The do's and don'ts of effective design</h3>
              <p className='primaryTxt font-normal text-[16px]'>World class development and built for performance, Slate will deliver to the highest standard.</p>
              <div className='pt-8 pb-10 flex items-center gap-4'>
                <img src={ArticleMan} alt="Article Man" className='w-10 h-10 rounded-full' />
                <div>
                  <p className='primaryTxt font-normal text-[16px]'>Dylan Meringu</p>
                  <p className='primaryTxt font-medium'>May 4, 2023 <span className=' primaryTxt px-2 py-1'>8 min read</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-6 rounded-lg shadow-md overflow-auto p-1'>
            <img src={SlateSix} alt="Slate Six" className='w-full rounded-lg' />
            <div>
              <h3 className='font-inter font-medium text-[18px] pb-4 pt-8 max-w-[200px]'>How to increase client testimonials</h3>
              <p className='primaryTxt font-normal text-[16px]'>World class development and built for performance, Slate will deliver to the highest standard.</p>
              <div className='pt-8 pb-10 flex items-center gap-4'>
                <img src={ArticleMan} alt="Article Man" className='w-10 h-10 rounded-full' />
                <div>
                  <p className='primaryTxt font-normal text-[16px]'>Dylan Meringu</p>
                  <p className='primaryTxt font-medium'>May 4, 2023 <span className=' primaryTxt px-2 py-1'>8 min read</span></p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SlateArticles