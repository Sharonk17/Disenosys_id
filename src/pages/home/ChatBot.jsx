"use client";
import React, { useState } from "react";
import { Shield, UserCheck, FileText, HelpCircle, Send } from "lucide-react";

const ChatBot = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        setMessages((prev) => [...prev, { text: inputValue, sender: "user" }]);
        setInputValue("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto p-6 bg-white shadow-xl rounded-3xl font-dm-sans">

            {/*header */}
            <div className="flex gap-3 items-center p-4">
                <div className="w-16 h-16 rounded-full flex items-center object-cover justify-center border border-[#182073]"></div>
                <div className="mt-2">
                    <h1 className="text-xl text-[#182073] font-semibold">D–Bot</h1>
                    <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-green-400 text-regular">Online</span>
                    </div>
                </div>
            </div>

            {!isStarted && (
                <div className="mt-6 max-w-xl mx-auto">
                    <div className=" w-16 h-16 rounded-full rounded-tr-lg flex mx-auto items-center object-cover justify-center border border-[#182073]"></div>
                    <h2 className="text-2xl mt-4 font-semibold text-[#182073]">
                        Hi! I'm <span className="text-[#00B5E2]">D–Bot</span>, your Diseñosys Support Assistant.
                    </h2>

                    <p className="mt-2 text-gray-600">How can I help you today?</p>
                    <p className="text-gray-600">You can ask me about:</p>

                    <div className="flex flex-col mt-4 w-fit space-y-2 text-gray-700 text-left">
                        <div className="flex items-center gap-2 text-gray-600"><Shield size={18} className="text-[#182073]" /> Privacy Policy</div>
                        <div className="flex items-center gap-2 text-gray-600"><UserCheck size={18} className="text-[#182073]" /> Refund Policy</div>
                        <div className="flex items-center gap-2 text-gray-600"><FileText size={18} className="text-[#182073]" /> Terms & Conditions</div>
                        <div className="flex items-center gap-2 text-gray-600"><HelpCircle size={18} className="text-[#182073]" /> General Support Queries</div>
                    </div>

                    <p className="mt-6 text-gray-600 text-sm">Please select an option to continue:</p>

                    <div className="flex gap-2 justify-center mt-4 flex-wrap">
                        <button className="px-4 py-1.5 border border-[#182073] rounded-md text-sm">Privacy Policy</button>
                        <button className="px-4 py-1.5 bg-gray-100 rounded-md text-sm">Refund Policy</button>
                        <button className="px-4 py-1.5 bg-gray-100 rounded-md text-sm">Terms & Conditions</button>
                        <button className="px-4 py-1.5 bg-gray-100 rounded-md text-sm">Contact Support</button>
                    </div>

                    {/* input */}
                    <div className="mt-30 p-6 bg-white shadow-2xl shadow-black/10 rounded-2xl">
                        <div className="flex gap-2 ml-15 mt-4 flex-wrap mb-3 text-gray-500">
                            <button className="px-3 py-1.5 bg-gray-100 rounded-md text-xs">Refund Policy</button>
                            <button className="px-3 py-1.5 bg-gray-100 rounded-md text-xs">Terms & Conditions</button>
                            <button className="px-3 py-1.5 bg-gray-100 rounded-md text-xs">Contact Support</button>
                        </div>
                        <div className="flex items-center justify-between rounded-full px-6 py-3 shadow-lg  w-full max-w-3xl mx-auto">
                            <input
                                placeholder="Type your message here..."
                                className="w-full "
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyPress}
                            />
                            <Send size={18} className="text-[#182073] cursor-pointer" onClick={() => {
                                setIsStarted(true);
                                handleSend();
                            }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {isStarted && (
                <div className="mt-10 min-h-[300px] p-6">



                    {/*user*/}
                    {messages.map((msg, index) => (
                        <div key={index} className="flex justify-end mt-6">
                            <div className="px-6 py-3 bg-[#ffffff] border rounded-full rounded-bl-none shadow text-[#182073]">
                                {msg.text}
                            </div>
                        </div>
                    ))}

                    {/* input */}
                    <div className="mt-30 p-6 bg-white shadow-2xl shadow-black/10 rounded-2xl">
                        <div className="flex gap-2 ml-15 mt-4 flex-wrap mb-3 text-gray-500">
                            <button className="px-3 py-1.5 bg-gray-100 rounded-md text-xs">Refund Policy</button>
                            <button className="px-3 py-1.5 bg-gray-100 rounded-md text-xs">Terms & Conditions</button>
                            <button className="px-3 py-1.5 bg-gray-100 rounded-md text-xs">Contact Support</button>
                        </div>
                        <div className="flex items-center justify-between rounded-full px-6 py-3 shadow-lg  w-full max-w-3xl mx-auto">
                            <input
                                placeholder="Type your message here..."
                                className="w-full "
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyPress}
                            />
                            <Send size={18} className="text-[#182073] cursor-pointer" onClick={handleSend} />
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default ChatBot;
