import Container from '../layouts/Container'
import ArticleOne from '../../assets/images/articleone.webp'
import ArticleTwo from '../../assets/images/articletwo.webp'
import ArticleMan from '../../assets/images/rifat-img12.webp'

const LatestArticles = () => {
  return (
    <div className='bg-gray-100'>
      <Container>
        <div className='pt-28 pb-100'>
          <div className='primaryTxt font-medium'>
            Our Blog Page
          </div>
          <div className='pt-2 pb-10 flex justify-between items-center'>
            <h2 className='headingTxt text-[72px] font-medium'>Our latest <span className='bg-green px-3 py-1'>articles</span></h2>
            <p className='primaryTxt text-[18px] font-normal max-w-[380px] pt-6'>Make informed decisions with confidence. Slate provides you with insights.</p>
          </div>
          <div className='grid grid-cols-2 gap-8'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden p-1'>
              <img src={ArticleOne} alt="Article 1" className='w-full h-68 object-cover' />
              <div className='pt-8 pl-8'>
                <h2 className='font-inter font-medium text-[20px] text-primary'>How to increase client testimonials</h2>
                <p className='pt-3 primaryTxt font-normal'>World class development and built for performance, Slate will deliver to the highest standard.</p>
                <div className='pt-4 pb-10 flex items-center gap-4'>
                  <img src={ArticleMan} alt="Article Man" className='w-10 h-10 rounded-full' />
                  <div>
                    <p className='primaryTxt font-normal text-[16px]'>Dylan Meringu</p>
                    <p className='primaryTxt font-medium'>May 4, 2023 <span className=' primaryTxt px-2 py-1'>8 min read</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-lg shadow-md overflow-hidden p-1'>
              <img src={ArticleTwo} alt="Article 2" className='w-full h-68 object-cover' />
              <div className='pt-8 pl-8'>
                <h2 className='font-inter font-medium text-[20px] text-primary'>The do's and don'ts of effective design</h2>
                <p className='pt-3 primaryTxt font-normal'>World class development and built for performance, Slate will deliver to the highest standard.</p>
                <div className='pt-4 pb-10 flex items-center gap-4'>
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

export default LatestArticles