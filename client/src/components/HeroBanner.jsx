import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import 'tailwindcss/tailwind.css';

import HeroBannerImage from '../assets/images/banner2.jpg';
import HeroBannerImage1 from '../assets/images/banner3.jpg';
import HeroBannerImage2 from '../assets/images/banner4.jpg';
import HeroBannerImage3 from '../assets/images/banner5.jpg';
export default function HeroBanner() {
  return (
    <>
      <Box position="relative" pt="50px" pr="20px" pl="20px" >
        <Typography
          color="#F2BED1"
          fontWeight={700}
          sx={{ fontSize: { lg: '44px', xs: '40px' } }}
          mb="23px"
          mt="30px"
        >
          <h1 className='text-blue-500'>Mồ hôi, nụ cười và sự cố gắng</h1>
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
          Hãy thử ngay các bài tập luyện sức khỏe của chúng tôi để bạn có một cơ
          thể săn chắc <br />
          và tinh thần tràn đầy năng lượng
        </Typography>
        <Stack>
          <a
            href="#exercises"
            className="mt-4 bg-blue-500 text-white py-3 px-4 text-lg rounded-md w-[200px] flex justify-center"
            style={{ textDecoration: 'none' }}
          >
            Thử tập ngay
          </a>
        </Stack>
      </Box>
      <div className="flex justify-center">
        <img
          src={HeroBannerImage}
          alt="hero-banner"
          className="hero-banner-img"
        />
        <img
          src={HeroBannerImage1}
          alt="hero-banner"
          className="hero-banner-img"
        />
        <img
          src={HeroBannerImage2}
          alt="hero-banner"
          className="hero-banner-img"
        />
        <img
          src={HeroBannerImage3}
          alt="hero-banner"
          className="hero-banner-img"
        />
      </div>
    </>
  );
}
