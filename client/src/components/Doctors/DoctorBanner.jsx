import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

export default function DoctorBanner() {
  return (
    <>
      <Box position="relative" mt="100px" p="20px">
        <Typography
          color="#3b82f6"
          fontWeight={700}
          sx={{ fontSize: { lg: '44px', xs: '40px' } }}
          mb="23px"
          mt="30px"
        >
          Đồng hành cùng bạn giải quyết các vấn đề về sức khỏe tâm lý
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
          Với đội ngũ bác sĩ tâm lý đến từ khắp cả nước đầy kinh nghiệm. Ai-Care
          sẽ giúp bạn dễ dàng tìm và đặt lịch hẹn với các chuyên gia tâm lý hàng
          đầu đem lại sự tiện ích và sự chăm sóc tâm lý cần thiết để cải thiện
          chất lượng cuộc sống của bạn.
        </Typography>
      </Box>
      {/* <div className="flex justify-center">
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
      </div> */}
    </>
  );
}
