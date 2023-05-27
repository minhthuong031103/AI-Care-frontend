import React from 'react';

const Intro = () => {
  return (
    <div className='w-full'>
      <div>
        <div className='flex flex-col items-center justify-center mx-10 mt-[0] gap-8 md:flex-row'>
          <img src={"/images/pic1.png"} alt="orientation" className='w-[300px] h-[300px]' />
          <h2 className='text-2xl font-bold'>
            Hiểu hơn về trầm cảm
            <p className='font-normal text-justify'>
              Trầm cảm không phải lúc nào cũng là một cô gái đang khóc trong phòng tắm hay một cậu bé không bao giờ ra khỏi nhà. Trầm cảm không phải lúc nào cũng là những tờ giấy nguệch ngoạc được để lại hay những viên thuốc trên sàn nhà. Mà đôi khi nó còn ẩn sau những nụ cười gượng, những tấm bằng khen, thậm chí còn là những chàng trai cô gái luôn tốt bụng. Trầm cảm không đáng sợ mà là đáng thương.
            </p>
          </h2>
        </div>
        <div className='flex flex-col items-center justify-center mx-10 mt-[20px] gap-8 md:flex-row-reverse'>
          <img src={"/images/pic2.png"} alt="orientation" className='w-[300px] h-[300px]' />
          <h2 className='text-2xl font-bold'>
            Học cách yêu thương những người xung quanh
            <p className='font-normal text-justify'>
              Trầm cảm là bệnh, không phải lựa chọn. Nó bắt đầu từ lúc ta gặp vấn đề về giấc ngủ, khi mà mọi người có thể ngả lưng trên chiếc giường êm ấm và say giấc thì những người trầm cảm phải trằn trọc đến sáng bởi những suy nghĩ ngổn ngang. Người trầm cảm không phải kẻ yếu đuối, họ luôn cố gắng tìm cho mình một tia sáng, có những người may mắn khi được ai đó chia sẻ và đồng hành, nhưng cũng có người không được ai thấu hiểu, lắng nghe. Trầm cảm không phải lúc nào cũng dễ nhận ra và không phải ai cũng đủ mạnh mẽ để chiến đấu một mình. Vì vậy hãy luôn quan tâm và yêu thương những người xung quanh để góp phần nâng cao sức khỏe tinh thần cộng đồng. 
            </p>
          </h2>
        </div>
        <div className='flex flex-col items-center justify-center mx-10 mt-[20px] gap-8 md:flex-row'>
          <img src={"/images/pic3.png"} alt="orientation" className='w-[300px] h-[300px]' />
          <h2 className='text-2xl font-bold'>
            Hãy luôn mạnh mẽ và không ngừng tin tưởng bản thân.
            <p className='font-normal text-justify'>
              Dù cuộc sống có trở nên khó khăn đến đâu, hãy nhớ rằng trong bạn vẫn luôn tồn tại một sức mạnh vô hạn để vượt qua mọi khó khăn. Hãy tin tưởng vào khả năng của chính mình, hãy nhớ rằng bạn không đơn độc trong cuộc hành trình này và mỗi ngày mới sẽ là một cơ hội để bạn khám phá tiềm năng và tìm thấy ý nghĩa trong cuộc sống từ những điều nhỏ bé đến lớn lao. 
            </p>
          </h2>
        </div>
      </div>
      <div className='flex flex-col gap gap-5 md:flex-row justify-center mt-[20px] mb-[40px] ml-[30px]'>
        <div className='flex flex-col items-center justify-center'>
          <img src={"/images/chatbot.png"} alt="chatbot" className='w-[200px] h-[200px]' />
          <h3 className='text-xl font-bold '>
            Luôn sẵn sàng lắng nghe, chia sẻ
            <p className='w-[300px] font-normal'>EmotiBot sẽ luôn là người bạn đồng hành và sẵn sàng lắng nghe, đưa ra lời khuyên hữu ích.</p>
          </h3>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <img src={"/images/idea.png"} alt="chatbot" className='w-[200px] h-[200px]' />
          <h3 className='text-xl font-bold'>
            Không ngừng cải tiến
            <p className='w-[300px] font-normal'>Luôn cố gắng sáng tạo, phát triển chức năng để hỗ trợ chăm sóc sức khỏe tinh thần tốt nhất.</p>
          </h3>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <img src={"/images/click.png"} alt="chatbot" className='w-[200px] h-[200px]' />
          <h3 className='text-xl font-bold'>
            Giao diện thân thiện, dễ sử dụng
            <p className='w-[300px] font-normal'>Giao diện mang đến cảm giác thoải mái, dễ dùng với bất kỳ lứa tuổi nào</p>
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