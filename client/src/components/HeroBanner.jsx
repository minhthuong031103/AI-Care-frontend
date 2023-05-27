import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner2.jpg';
import HeroBannerImage1 from '../assets/images/banner3.jpg';
import HeroBannerImage2 from '../assets/images/banner4.jpg';
import HeroBannerImage3 from '../assets/images/banner5.jpg';
export default function HeroBanner() {
  return (
    <>
      <Box position="relative" p="20px" mt="100px">
        <Typography
          color="#F2BED1"
          fontWeight={700}
          sx={{ fontSize: { lg: '44px', xs: '40px' } }}
          mb="23px"
          mt="30px"
        >
          Mồ hôi, nụ cười và sự cố gắng
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
          Hãy thử ngay các bài tập luyện sức khỏe của chúng tôi để bạn có một cơ
          thể săn chắc <br />
          và tinh thần tràn đầy năng lượng
        </Typography>
        <Stack>
          <a
            href="#exercises"
            style={{
              marginTop: '45px',
              textDecoration: 'none',
              width: '200px',
              textAlign: 'center',
              background: '#FF2625',
              padding: '14px',
              fontSize: '22px',
              textTransform: 'none',
              color: 'white',
              borderRadius: '4px',
            }}
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
