// import { ChatGPTUnofficialProxyAPI } from "chatgpt";
import { useState } from 'react';
import { Form, Input, Button, Avatar } from 'antd';
import { request } from './';
import { SendOutlined, RedoOutlined, StopOutlined } from '@ant-design/icons';
import { CustomParagraph } from './antd-custom/CustomTypography';
import { CustomMessage } from './antd-custom/CustomMessage';
import { motion } from 'framer-motion';
import { getMessageHistory } from './helper';

export const ChatPage = () => {
  const _id = localStorage.getItem('_id');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState([]);
  const [response, setResponse] = useState([]);
  const [conversation, setConversation] = useState([]);

  useState(function () {
    async function load() {
      const MessagePromise = getMessageHistory(_id);
      MessagePromise.then(function (res) {
        const conversation = res.data;

        const processedConversation = conversation.map((item) => {
          if (item.role === 'user') {
            const contentParts = item.content.split(
              ' hãy tư vấn tâm lý cho tôi và chia sẻ với tôi dưới góc độ là một chuyên gia tư vấn tâm lý'
            );
            const content = contentParts[0].trim();
            return {
              ...item,
              content: content,
            };
          }
          return item;
        });

        setConversation(processedConversation);
      });
    }

    load();
  }, []);
  const clearConservation = () => {
    setMessage(null);
    setResponse(null);
    setError(false);
  };
  const sendMessage = async (data) => {
    setMessage(data.message);
    setConversation([...conversation, data.message]);
    request(
      'post',
      'api/chatgpt/confide',
      {
        message: data.message,
        userID: _id,
        // + ". hãy cho tôi lời khuyên dưới vai trò là nhà tâm lý học."
      }
      //   {
      //     // timeout: 5000, // Override the default timeout for this request
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
    )
      .then((res) => {
        console.log(res);
        try {
          if (res && res.status !== 200) {
            CustomMessage(
              { content: 'Lỗi hệ thống! Vui lòng thử lại sau 1' },
              'error'
            );
            setError(true);
          } else {
            setResponse(res.data);
          }
        } catch (e) {
          CustomMessage(
            { content: 'Lỗi hệ thống! Vui lòng thử lại sau 2' },
            'error'
          );
          setError(true);
        }
      })
      .catch((e) => {
        CustomMessage(
          { content: 'Lỗi hệ thống! Vui lòng thử lại sau 3' },
          'error'
        );
        setError(true);
      });

    //   .catch((error) =>
    //     CustomMessage("Lỗi hệ thống! Vui lòng thử lại sau", "error")
    //   );

    // api/chatgpt/chat
  };
  return (
    <div className="flex flex-wrap h-full w-full items-center pt-10 justify-center gap-2 mt-12">
      <div className="grid auto-rows-auto w-full h-full p-3 mb-16 content-end">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1,
            ease: 'linear',
            duration: 1,
            x: { duration: 1 },
          }}
          className="w-full float-left"
        >
          {!conversation ? (
            <>
              <p className="font-medium text-gray-500 mb-1">Bot Ngu</p>
              <div className="flex flex-wrap">
                <div className="flex w-full gap-3">
                  <Avatar src="https://img.freepik.com/free-vector/cute-dog-robot-cartoon-character-animal-technology-isolated_138676-3143.jpg?w=740&t=st=1684998540~exp=1684999140~hmac=0b223d11d39b69aaaf8905c8858e60a3ed43da8c7c1fba5c4e5811832ae48f98" />
                  <CustomParagraph className="shadow rounded-xl bg-secondary min-h-12 font-medium w-fit p-3 container text-black">
                    Xin chào. Tôi có thể giúp gì cho bạn?
                  </CustomParagraph>
                </div>
              </div>
            </>
          ) : (
            <>
              {conversation?.map((item, index) => {
                if (item.role === 'user') {
                  return (
                    <div key={index} className="w-full float-right">
                      <p className="font-medium text-black mb-1 text-end">
                        You
                      </p>
                      <div className="flex justify-end gap-3">
                        <CustomParagraph className="shadow text-black rounded-xl bg-gray-300 min-h-12 font-medium p-3 container w-fit float-right">
                          {item.content}
                        </CustomParagraph>
                        <Avatar>U</Avatar>
                      </div>
                    </div>
                  );
                } else if (item.role === 'assistant') {
                  return (
                    <div key={index} className="w-full float-left">
                      <p className="font-medium text-gray-500 mb-1">Bot Ngu</p>
                      <div className="flex flex-wrap">
                        <div className="flex w-full gap-3">
                          <Avatar src="https://img.freepik.com/free-vector/cute-dog-robot-cartoon-character-animal-technology-isolated_138676-3143.jpg?w=740&t=st=1684998540~exp=1684999140~hmac=0b223d11d39b69aaaf8905c8858e60a3ed43da8c7c1fba5c4e5811832ae48f98" />
                          <CustomParagraph className="shadow rounded-xl bg-secondary min-h-12 font-medium w-fit p-3 container text-black">
                            {item.content}
                          </CustomParagraph>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null; // Return null for any other role
              })}
            </>
          )}
        </motion.div>
      </div>
      {message && (
        <div className="w-full float-right">
          <p className="font-medium text-black mb-1 text-end">You</p>
          <div className="flex justify-end gap-3">
            <CustomParagraph className="shadow text-black rounded-xl bg-gray-300 min-h-12 font-medium p-3 container w-fit float-right">
              {message}
            </CustomParagraph>
            <Avatar>U</Avatar>
          </div>
        </div>
      )}
      {message && (
        <>
          <div className="w-full float-left">
            <p className="font-medium text-gray-500 mb-1">Bot Ngu</p>
            <div className="flex flex-wrap">
              <div className="flex w-full gap-3">
                <Avatar src="https://img.freepik.com/free-vector/cute-dog-robot-cartoon-character-animal-technology-isolated_138676-3143.jpg?w=740&t=st=1684998540~exp=1684999140~hmac=0b223d11d39b69aaaf8905c8858e60a3ed43da8c7c1fba5c4e5811832ae48f98" />
                {!response && !error ? (
                  <CustomParagraph className="shadow rounded-xl bg-gray-300 min-h-12 font-medium p-3 w-fit animate-pulse text-gray-500">
                    Đang phân tích
                  </CustomParagraph>
                ) : response && !error ? (
                  <CustomParagraph className="shadow rounded-xl bg-secondary min-h-12 font-medium w-fit p-3 container text-black">
                    {response}
                  </CustomParagraph>
                ) : (
                  <CustomParagraph className="shadow rounded-xl bg-error min-h-12 font-medium w-fit p-3 container text-black">
                    Lỗi. Vui lòng thử lại sau
                  </CustomParagraph>
                )}
              </div>
              <div className="flex justify-center w-full">
                <Button
                  type="outline"
                  onClick={clearConservation}
                  size="large"
                  className="bg-white/[0.8] rounded-xl shadow"
                >
                  {response || error ? (
                    <>
                      <RedoOutlined /> Tiếp tục
                    </>
                  ) : (
                    <>
                      <StopOutlined className="text-error" /> Dừng hội thoại
                    </>
                  )}
                </Button>{' '}
              </div>
            </div>
          </div>
        </>
      )}

      <Form
        name="chatbox"
        onFinish={sendMessage}
        autoComplete="off"
        className=" z-10 fixed h-fit bottom-0 flex align-center gap-2 w-full p-3 bg-white/[0.8] shadow"
      >
        <Form.Item name="message" className="w-full mb-1">
          {!message ? (
            <Input
              placeholder="Nhập tâm tư"
              size="large"
              className="relative shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight rounded-xl"
            />
          ) : (
            <Input
              placeholder="Nhập tâm tư"
              size="large"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight rounded-xl"
              // disabled
            />
          )}
        </Form.Item>
        <Form.Item className="w-fit mb-1">
          {!message ? (
            <Button
              type="submit"
              htmlType="submit"
              size="large"
              className="bg-secondary rounded-full shadow text-white"
            >
              <SendOutlined />
            </Button>
          ) : (
            <Button
              type="outline"
              htmlType="submit"
              size="large"
              className="bg-secondary rounded-full shadow text-gray-300"
              // disabled
            >
              <SendOutlined />
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};
