import React from 'react';

const Intro = () => {
  return (
    <div className='w-full'>
      <div>
        <div className='flex flex-col items-center justify-center mx-10 mt-[0] gap-8 md:flex-row'>
          <img src={"/images/orientation.png"} alt="orientation" className='w-[300px] h-[300px]' />
          <h2 className='text-2xl font-bold'>
            Định hướng nghề nghiệp
            <p className='font-normal text-justify'>
              Hiện nay có rất nhiều sinh viên hoang mang tương lai sẽ làm công việc gì mới phù hợp với bản thân, cần rèn luyện bản thân như thế nào để đáp ứng yêu cầu của nhà tuyển dụng. <span className='text-[#003398] font-bold'>UIT.ai</span> ứng dụng ChatGPT giúp học sinh  có thể tiếp cận những thông tin mới nhất về xu hướng và thị trường lao động, từ đó sinh viên có định hướng về nghề nghiệp phù hợp và đưa ra lộ trình học tập để có thể tự tin và kiên định trong lựa chọn con đường sự nghiệp.
            </p>
          </h2>
        </div>
        <div className='flex flex-col items-center justify-center mx-10 mt-[20px] gap-8 md:flex-row-reverse'>
          <img src={"/images/worry.png"} alt="orientation" className='w-[300px] h-[300px]' />
          <h2 className='text-2xl font-bold'>
            Tư vấn tâm lý
            <p className='font-normal text-justify'>
              Có những điều khó nói nhưng vẫn cần được lắng nghe! Chức năng tư vấn tâm lý của <span className='text-[#003398] font-bold'>UIT.ai</span> thông qua chatbot ứng dụng ChatGPT sẽ giúp các bạn sinh viên có thể chia sẻ những suy nghĩ, cảm xúc một cách tự nhiên và thoải mái nhất. Thông qua câu trả lời từ Chatbot, các bạn có thể hiểu rõ hơn về vấn đề của mình và đưa ra quyết định đúng đắn, tránh những hành động nóng vội. Hơn nữa, chức năng tư vấn tâm lý cho sinh viên còn giúp các bạn có được sự hỗ trợ tâm lý liên tục mọi lúc mọi nơi, không bị giới hạn thời gian hay địa điểm. Điều này giúp các bạn sinh viên luôn có được tâm lý và sức khỏe tốt nhất để hoàn thành tốt các nhiệm vụ học tập và đạt được thành tích tốt nhất.
            </p>
          </h2>
        </div>
        <div className='flex flex-col items-center justify-center mx-10 mt-[20px] gap-8 md:flex-row'>
          <img src={"/images/homework.png"} alt="orientation" className='w-[300px] h-[300px]' />
          <h2 className='text-2xl font-bold'>
            Hỗ trợ học tập
            <p className='font-normal text-justify'>
              Đôi khi việc tìm tài liệu và hướng đi để giải quyết các bài toán, vấn đề trong học tập thì quá tốn thời gian, <span className='text-[#003398] font-bold'>UIT.ai</span> với cơ chế ứng dụng ChatGPT sẽ giúp các sinh viên tiết kiệm thời gian, hiểu hơn về các vấn đề học tập một cách linh hoạt và đa dạng. Các tài liệu sẽ giúp các sinh viên có những kiến thức mới, cơ hội học tập tốt hơn, thành tích cao hơn.
            </p>
          </h2>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center mt-[20px] mb-[40px] ml-[30px]'>
        <div className='flex flex-col items-center justify-center'>
          <img src={"/images/chatbot.png"} alt="chatbot" className='w-[200px] h-[200px]' />
          <h3 className='text-xl font-bold'>
            Nhận trợ giúp khi bạn cần
            <p className='w-[300px] font-normal'>Trí tuệ nhân tạo tiên tiến của chúng tôi đang hoạt động 24 giờ một ngày.</p>
          </h3>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <img src={"/images/idea.png"} alt="chatbot" className='w-[200px] h-[200px]' />
          <h3 className='text-xl font-bold'>
            Không ngừng cải tiến, tái tạo
            <p className='w-[300px] font-normal'>Việc tái tạo mỗi ngày giúp các câu trả lời chính xác nhưng không rập khuôn.</p>
          </h3>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <img src={"/images/click.png"} alt="chatbot" className='w-[200px] h-[200px]' />
          <h3 className='text-xl font-bold'>
            Click
            <p className='w-[300px] font-normal'>Chỉ thông qua vài cú click, bất cứ đâu cũng có thể hỗ trợ.</p>
                  </h3>
              </div>
          </div>
          <div className='bg-black h-[100px] flex justify-center items-center'>
                <h1 className='text-white text-4xl font-bold'><span className='text-[#003398] font-bold'>AICARE</span> luôn đồng hành cùng bạn!</h1>
            </div>
    </div>
  )
}

export default Intro