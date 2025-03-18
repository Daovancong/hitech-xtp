'use client';
import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from "next/link";
// import { motion } from "framer-motion";

export default function page() {
  const imageSlider = [
    "/slider-1.png",
    "/slider-1.png",
    "/slider-1.png"
  ];
  const reacuitments = [
    {
      id: 1,
      location: ' Intern Front End',
      wage: 'Thỏa thuận',
      address: 'Hà Nội',
      time: ' Hạn hồ sơ 30/03/2025',
    },
    {
      id: 2,
      location: 'Intern Back End',
      wage: 'Thỏa thuận',
      address: 'Hà Nội',
      time: ' Hạn hồ sơ 30/03/2025',
    },
    {
      id: 3,
      location: 'Intern Ai (Python)',
      wage: 'Thỏa thuận',
      address: 'Hà Nội',
      time: ' Hạn hồ sơ 30/03/2025',
    }
  ];
  const [bgColor, setBgColor] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        const opacity = Math.min(scrollY / 600, 1);
        setBgColor(`rgba(17, 40, 70, ${opacity})`);
      } else {
        setBgColor('none');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className='container-flux'>
      {/* Header */}
      <div id='home' className='app-header-container'>
        <div className='wrapper'>
          <div className='bg-[#000000] relative '>
            <div className='opacity-[0.71] bg-[url(/baneer-header-hitech.jpg)] max-h-[100vh] min-h-[500px] bg-cover bg-top text-base w-full flex flex-col justify-center items-center md:!h-[65vh]'></div>
            <div className='md:!justify-between w-full h-20 fixed top-0 text-[#fff] z-[16] justify-between flex-row flex' style={{ background: bgColor, transition: '0.2s' }}>
              <div className='pl-4 self-center text-[#fff]'>
                <Image className='max-w-40 h-10 cursor-pointer' style={{ background: '0 0' }} width={300} height={300} alt='logo' src={'/Logo-hitech-2.png'} />
              </div>
              <div className='pr-4 md:!hidden self-center'><span className='inline-block w-6 h-6 cursor-pointer'></span></div>
              <div className='pr-4 flex'>
                <div className='relative pr-10 self-center flex-col'>
                  <div
                    className='cursor-pointer'
                    onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  >Trang Chủ</div>
                </div>
                <div className='relative pr-10 self-center flex-col'>
                  <div
                    className='cursor-pointer'
                    onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Về Chúng Tôi
                  </div>
                </div>
                <div className='relative pr-10 self-center flex-col'>
                  <div className='cursor-pointer'>Cơ Hội Nghề Nghiệp</div>
                </div>
              </div>
            </div>
            <div className='absolute left-0 right-0 top-0 bottom-0 text-[#fff] items-center justify-center flex-col flex'>
              <div className='absolute left-0 right-0 top-0 bottom-0 text-[#fff] items-center justify-center flex-col flex'>
                <h2 className='text-[42px] text-yellow-100 font-bold text-center'>NƠI ChUYỂN GIAO TRI THỨC CÔNG NGHỆ, <br /> PHÁT TRIỂN NHÂN TÀI TƯƠNG LAI</h2>
                <h2 className='text-[32px] text-white leading-[36px] mb-[43px] mt-0 px-4 text-center'></h2>
                {/* <div className='w-[38%] rounded-s-lg py-4 px-8 box-border bg-white mb-9 items-center flex'>
                  <div></div>
                  <input type="text" />
                </div> */}
                <button className='btn-ytb bg-red-600 cursor-pointer outline-0 border-none min-h-[62px] py-2 px-10 rounded-[30px] my-4 text-white text-xl'>
                  <Link href={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='sidenav'></div>
      </div>
      {/* Main + footer */}
      <div className='min-h-[100vh] block relative'>
        <div id="about-section" className='app-about'>
          <div className='h-1 w-full mb-20'></div>
          <div>
            <div className='items-center justify-center flex flex-col '>
              <span className='text-black text-[32px] font-bold text-center uppercase '>Về chúng tôi</span>
              <span className='bg-red-600 w-[88px] h-1 mt-2 mb-6'></span>
            </div>
            <div className='items-center justify-center flex flex-col '>
              <div className='text-black w-[90%] max-w-[900px] text-base text-justify pb-4 leading-6'>
                <p>
                  <span className='text-black font-[Sarabun, sans-serif] text-base leading-6 text-justify'>
                    <b>Hitech</b> không chỉ là một tổ chức công nghệ mà còn là cầu nối tri thức, nơi chuyển giao công nghệ tiên tiến và nuôi dưỡng thế hệ nhân tài tương lai. Chúng tôi cam kết mang đến những giải pháp đổi mới,
                    giúp cá nhân và doanh nghiệp nắm bắt cơ hội trong kỷ nguyên số, tối ưu hiệu suất làm việc và phát triển bền vững. Với sứ mệnh thúc đẩy sáng tạo và kết nối công nghệ với thực tiễn,
                    Hitech luôn đồng hành cùng doanh nghiệp, tổ chức và cá nhân trên hành trình ứng dụng công nghệ vào cuộc sống và công việc, tạo ra những giá trị thiết thực và bền vững.
                  </span>
                </p>
              </div>
            </div>
            <div className='sm'></div>
            <div className='justify-center flex'>
              <div className='h-[40vw] w-[80vw]'>
                <div className='h-full w-full items-center justify-center flex flex-col'>
                  <div className='w-[calc(100%-120px)] ml-[120px] h-1/2 items-end flex-row flex'>
                    <div className='h-full w-1/2 pr-4 text-[80%] font-[400]'>
                      <Image className='h-auto w-full rounded-[3px] bg-clip-padding' width={500} height={500} src={'/Image-01.png'} alt='image' />
                    </div>
                    <div className='h-full w-1/2 flex items-end text-[80%] font-[400] '>
                      <Image className='h-auto w-[60%] rounded-[3px] bg-clip-padding' width={500} height={500} src={'/Image-02.png'} alt='image' />
                    </div>
                  </div>
                  <div className='w-[calc(100%-140px)] mt-4 mr-[140px] h-1/2 flex-row flex'>
                    <div className='h-full w-1/2 justify-end flex text-[80%] font-[400]'>
                      <Image className='h-1/2 w-1/2 rounded-[3px] bg-clip-padding' width={500} height={500} src={'/Image-03.png'} alt='' />
                    </div>
                    <div className='h-full w-1/2 pl-4 '>
                      <Image className='h-auto w-full rounded-[3px] bg-clip-padding' width={500} height={500} src={'/Image-04.png'} alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='app-bef bg-[#f9f9f9] pt-[30px] mt-[30px] flex items-center justify-center flex-col'>
        <div>
          <div className='container-media py-[30px] px-[15px] mx-auto container'>
            <div className='flex items-center justify-center flex-col '>
              <div className='flex-row flex '>
                <span className='text-[#212121] text-3xl font-bold text-center uppercase'>SỨ MỆNH CỦA CHÚNG TÔI</span>
              </div>
              <span className='bg-[#2680eb] w-[88px] h-1 mt-2 mb-6'></span>
            </div>
            <div>
              <div className='w-full px-[15px] mx-auto'>
                <div className='flex flex-row justify-center items-start flex-wrap'>
                  <div className='item-ben px-10 relative w-full'>
                    <div className='justify-center flex'>
                      <div className='bg-[url(/chuyen_giao_cong_nghe-removebg-preview.png)] w-14 h-14 bg-cover bg-no-repeat bg-clip-padding rounded-[3px]'></div>
                    </div>
                    <div className='text-[22px] text-[#212121] text-center mb-2 self-center' style={{ letterSpacing: '-.48px' }}>
                      Chuyển giao công nghệ
                    </div>
                    <div className='text-center text-base text-[#666] self-center '>
                      <div className='text-[#212121] leading-6 '>
                        <p className='mb-1 mt-0'>Đưa những giải pháp hiện đại vào thực tiễn, &nbsp;giúp doanh nghiệp và cá nhân ứng dụng hiệu quả.&nbsp; Công nghệ vào cuộc sống.</p>
                      </div>
                    </div>
                  </div>
                  <div className='px-10 lg:basis-1/3 lg:max-w-1/3 relative w-full'>
                    <div className='justify-center flex '>
                      <div className='bg-[url(/phat-trien-nhan-tai-removebg-preview.png)] w-14 h-14 bg-cover bg-no-repeat bg-clip-padding rounded-[3px]'></div>
                    </div>
                    <div className='text-[22px] text-[#212121] text-center mb-2 self-center' style={{ letterSpacing: '-.48px' }}>
                      Phát triển nhân tài
                    </div>
                    <div className='text-center text-base text-[#666] self-center '>
                      <div className='text-[#212121] leading-6 '>
                        <p className='mb-1 mt-0'>Đào tạo và bồi dưỡng nguồn nhân lực chất lượng cao,&nbsp; trang bị kiến thức và kỹ năng cần thiết để dẫn đầu trong thời đại số.</p>
                      </div>
                    </div>
                  </div>
                  <div className='px-10 lg:basis-1/3 lg:max-w-1/3 relative w-full'>
                    <div className='justify-center flex'>
                      <div className='bg-[url(/thuc-day-doi-moi-sang-tao-removebg-preview.png)] w-14 h-14 bg-cover bg-no-repeat bg-clip-padding rounded-[3px]'></div>
                    </div>
                    <div className='text-[22px] text-[#212121] text-center mb-2 self-center' style={{ letterSpacing: '-.48px' }}>
                      Thúc đẩy đổi mới sáng tạo
                    </div>
                    <div className='text-center text-base text-[#666] self-center '>
                      <div className='text-[#212121] leading-6 '>
                        <p className='mb-1 mt-0'>Xây dựng môi trường khuyến khích tư duy sáng tạo,&nbsp; đổi mới trong lĩnh vực công nghệ.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className=''></div> */}
            </div>
          </div>
        </div>
      </div>

      <div className='app-face mt-7 pt-7 '>
        <div className='h-1 w-full mb-8'></div>
        <div>
          <div className='container w-full max-w-[unset] py-7 px-3.5 mr-auto ml-auto'>
            <div className='flex items-center justify-center flex-col'>
              <div className='flex flex-row'>
                <span className='text-[#212121] text-[32px] font-bold text-center uppercase'>
                  Hình ảnh công ty
                </span>
              </div>
              <span className='bg-[#db0d0d] w-[88px] h-1 mt-2 mb-6'></span>
            </div>
            <div className='text-[#212121] text-center'></div>
            <div className='relative'>
              <div className='visible relative outline-none '>
                <div className=''>
                  <button className='btn-left cursor-pointer left-4 absolute z-10 top-1/2 w-8 h-8 rounded-[50%] flex items-center border-none p-0 opacity-[.7] bg-[#ccc]' style={{ transform: 'translateY(-50%)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-[90%] h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button className='btn-left cursor-pointer right-4 absolute z-10 top-1/2 w-8 h-8 rounded-[50%] flex items-center border-none p-0 opacity-[.7] bg-[#ccc]' style={{ transform: 'translateY(-50%)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
                <div className='relative z-0 overflow-hidden'>
                  <ul className='slider-img' style={{ transform: '2208px' }}>
                    <div className='image w-[442px]'>
                      <Image className='align-bottom w-full block ' width={300} height={300} src={'/slider-1.png'} alt='slider-1' />
                    </div>
                    <div className='image w-[442px]'>
                      <Image className='align-bottom w-full block ' width={300} height={300} src={'/slider-1.png'} alt='slider-1' />
                    </div>
                    <div className='image w-[442px]'>
                      <Image className='align-bottom w-full block ' width={300} height={300} src={'/slider-1.png'} alt='slider-1' />
                    </div>
                    <div className='image w-[442px]'>
                      <Image className='align-bottom w-full block ' width={300} height={300} src={'/slider-1.png'} alt='slider-1' />
                    </div>
                  </ul>
                </div>
                <ul className='absolute z-1 bottom-[-32px] left-1/2 p-0 inline-flex items-center w-[95%] flex-wrap justify-center content-center m-0' style={{ transform: 'translateX(-50%)' }}>
                  <li className='list-none inline-block leading-1 m-0'>
                    <button className='btn-pahination cursor-pointer'></button>
                  </li>
                  <li className='list-none inline-block leading-1 m-0'>
                    <button className='btn-pahination cursor-pointer'></button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='app-oppo'>
        <div className='h-1 w-full mb-8'></div>
        <div>
          <div className='w-full pr-3.5 pl-3.5 mx-auto'>
            <div className='items-center justify-center flex flex-col'>
              <span className='text-[#212121] text-[32px] font-bold text-center uppercase'>CƠ HỘI NGHỀ NGHIỆP</span>
              <span className='bg-[#2680eb] w-[88px] h-1 mt-2 mb-6'></span>
            </div>
            <div className='container-media w-full mr-auto ml-auto py-[30px] px-[15px]'>
              <div className='justify-center flex flex-wrap'>
                {reacuitments.map(recruitment => (
                  <div key={recruitment.id} className='p-6 mb-4 cursor-default w-full mx-auto' style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <div className='flex flex-wrap'>
                      <div className='pl-0 flex-col flex flex-grow relative pr-4 w-1/2'>
                        <div>
                          <Link href={'#'} className='font-[700] no-underline '>
                            {recruitment.location}
                          </Link>
                        </div>
                        <div className='flex flex-col pt-2'>
                          <div className='pr-2 pt-3 flex flex-col '>
                            <div className='flex flex-row'>
                              <span className='inline-block w-6 h-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                </svg>
                              </span>
                              <span className='text-red-500 ml-2 mr-12 text-base whitespace-nowrap flex flex-col justify-center'>
                                {recruitment.wage}
                              </span>
                            </div>
                          </div>
                          <div className='pr-2 pt-3 flex flex-col '>
                            <div className='flex flex-row'>
                              <span className='inline-block w-6 h-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                              </span>
                              <span className='text-black ml-2 mr-12 text-base whitespace-nowrap flex flex-col justify-center'>
                                {recruitment.address}
                              </span>
                            </div>
                          </div>
                          <div className='pr-2 pt-3 flex flex-col '>
                            <div className='flex flex-row'>
                              <span className='inline-block w-6 h-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                              </span>
                              <span className='text-black ml-2 mr-12 text-base whitespace-nowrap flex flex-col justify-center'>
                                {recruitment.time}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='justify-center flex-col flex '>
                        <button
                          className='w-full block no-underline p-3 my-auto text-white text-center whitespace-nowrap' style={{ background: '#2690eb', maxWidth: '200px', minWidth: '100px', borderRadius: '24px' }}
                        >
                          Ứng tuyển
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='app-footer text-white'>
        <footer>
          <div className='bg-[#212121] text-white text-base overflow-hidden flex flex-col '>
            <div className='min-h-44 mt-12 self-center w-full pr-[15px] pl-[15px]'>
              <div className='jus-left flex flex-row '>
                <div className='w-[40%] px-4'>
                  <div className='max-w-[380px]'>
                    <div>
                      <div className='w-[100px] h-10' style={{ backgroundPosition: 'center center' }}>
                        <Image width={300} height={300} src={'/Logo-hitech-2.png'} alt='' />
                      </div>
                      <div className='text-[17px] font-[500] mt-2 self-center'>
                        Công ty công nghệ Hitech
                      </div>
                    </div>
                    <div className='mt-6 optional-[0.5]'>
                      Số 263, Dịch Vọng, Cầu Giấy , Hà Nội
                    </div>
                  </div>
                </div>
                <div className='w-[30%] max-w-[300px] px-4'>
                  <div className='min-w-[130px] flex-col flex'>
                    <div className='text-[17px] font-[500] leading-10 m-[46px_0px_4px]' >
                      LIÊN KẾT
                    </div>
                  </div>
                </div>
                <div className='px-4 flex-[1_1_0%]'></div>
              </div>
              <div className='flex flex-row items-center justify-center'>

              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
