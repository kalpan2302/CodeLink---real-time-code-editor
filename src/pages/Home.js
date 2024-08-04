import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };
    return (
        <div className="homePageWrapper flex items-center justify-center text-white h-lvh">
            <div className="formWrapper bg-[#282a36] p-5 rounded-xl w-[400px] max-w-[90%]">
                <img
                    className="homePageLogo h-16 mb-6"
                    src="/code-sync.png"
                    alt="code-sync-logo"
                />
                <h4 className="mainLabel mb-5">Paste invitation ROOM ID</h4>
                <div className="inputGroup flex flex-col">
                    <input
                        type="text"
                        className="inputBox p-2 rounded-md text-black bg-slate-100 font-bold text-xs mb-3  outline-none border-none"
                        placeholder="ROOM ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        type="text"
                        className="inputBox p-2 rounded-md text-black bg-slate-100 font-bold text-xs mb-3 outline-none border-none"
                        placeholder="USERNAME"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />
                    <button onClick={joinRoom} className=" bg-[#4aed88] hover:bg-[#2b824c] w-24 text-black text-sm ml-auto border-none p-2 rounded-md cursor-pointer transition-all" >
                        Join
                    </button>
                    <span className="createInfo m-auto mt-4">
                        If you don't have an invite then create &nbsp;
                        <a href="/"
                            onClick={createNewRoom}
                            className="createNewBtn underline text-[#4aed88] pb-1">
                            new room
                        </a>
                    </span>
                </div>
            </div>
            <footer className='fixed bottom-0  '>
                <h4 className='my-2'>
                    Built with 💛 &nbsp; by &nbsp;
                    <a className='text-[#4aee88]' href="https://github.com/codersgyan">Kalpan Bariya</a>
                </h4>
            </footer>
        </div>
    );
};

export default Home;
