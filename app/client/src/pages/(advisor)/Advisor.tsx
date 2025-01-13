import { useState } from 'react'
import { Info, Send } from 'lucide-react';
// import { FloatingDock } from '../../components/ui/floating-dock';
function Advisor() {

  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
    { id: 2, text: "Hi! I have a question.", sender: "user" },
    { id: 3, text: "Sure.", sender: "bot" },

  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const handleSendMessage = (e: any) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: newMessage, sender: "user" }
      ]);
      setNewMessage("");
    }
  };

  const [started, setStarted] = useState<Boolean>(false)

  return (
    <div className='h-[100vh] w-[95vw] flex  flex-col items-center justify-center overflow-hidden  mx-auto  '>

      {
        !started && <div className='h-[80%] w-[80%]  rounded-2xl border-[2px] overflow-hidden relative flex flex-col items-center justify-center text-[#999999]'>
          <img src="/icons/Morph.svg" alt="" className='h-[500px] w-[500px] absolute -top-44 left-1/2 -translate-x-1/2' />
          <p className='mt-[250px] text-[18px]'>Hello there! ^_^ </p>
          <p className=' w-[70%] text-[16px] text-center'>I'm Vivi, your friendly health advisory assistant. I'm here to help you with health-related queries, provide useful tips, and guide you toward better wellness.</p>

          <button
            onClick={() => setStarted(true)}
            className='h-[60px] w-[200px] bg-black mt-14 rounded-xl font-[--bricolage] text-white text-[24px]'>
            Get started
          </button>

        </div>
      }

      {started && (
        <>
          <div className="flex flex-col items-center">



            <div className="flex justify-center items-center gap-3 mt-5 mb-4  ">
              <img src="/Advisor/Chatbg.svg" alt="" className="w-[40px]" />
              <h1 className="text-[26px] font-thin flex items-center gap-4">
                Vivi: Your AI health Assistant, ask me anything
                <span
                  className="hover relative"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Info />
                 
                </span>
              </h1>
              {isHovered && (
                    <div className="absolute top-[52px] right-[120px] bg-white text-gray-800 border border-gray-300 transition-all delay-100 shadow-md shadow-gray-500 p-2 w-64  rounded-t-xl rounded-r-xl">
                    <h1 className='text-sm'>
                    Get personalized health insights based on your real-time data.
                    </h1>
                    </div>
                  )}
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="w-full justify-center items-end flex overflow-hidden z-50">
                {/* Background image */}

                <div className="w-full h-full absolute top-0 flex justify-center items-end bg-opacity-20 translate-y-[7%] z-10 pointer-events-none">
                  <img src="/Advisor/Chatbg.svg" className="h-[520px] z- translate-y-[-10%]" />
                </div>

                <div
                  className="custom-scrollbar border border-gray-500 border-opacity-30 flex flex-col h-[520px]
 w-[1000px] bg-[#D4D4D4] backdrop-blur-md bg-white/40 rounded-xl mb-1 z-20 overflow-hidden"
                >
                  {/* Messages Container */}
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto relative custom-scrollbar">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex items-start space-x-2 ${message.sender === "user" ? "justify-end" : "justify-start"
                          }`}
                      >
                        {message.sender === "bot" && (
                          <span className="text-sm w-10">
                            <img src="/Advisor/BotIcon.svg" alt="" />
                          </span>
                        )}
                        <div
                          className={`max-w-sm p-4 shadow-sm min-h-[80px] w-[500px] border border-gray-900 border-opacity-15                            
                            
                            ${message.sender === "user"
                            ? "bg-blue-500 text-white  rounded-t-[25px] rounded-l-[25px]"
                            : "bg-[--bot-chat] text-gray-800   rounded-t-[25px] rounded-r-[25px]"
                            }`}
                        >
                          {message.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input Form */}
                  <form
                    onSubmit={handleSendMessage}
                    className="absolute rounded-full bottom-7 left-[100px] w-[800px] border border-blue-500 border-opacity-30 mx-auto z-50"
                  >
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="What can I help you with today?"
                      className="w-full p-4 pr-12 font-normal bg-white rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <Send size={20} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}


    </div>
  )
}

export default Advisor