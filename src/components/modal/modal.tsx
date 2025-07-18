import React, { useEffect, useState } from "react";
import axios from "axios";
interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setKey: React.Dispatch<React.SetStateAction<string>>;
  Balance: String;
  chain: String;
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  setKey,
  Balance,
  chain,
}) => {
  const [privateKey, setPrivateKey] = useState("");
  const modal_fun = () => {
    setKey(privateKey);
    setIsOpen(false);
  };
  useEffect(() => {
    AiFun();
  }, [Balance]);
  const AiFun = async () => {
    try {
      const resp = await axios.post(
        "https://api.deepseek.com/v1/chat/completions",
        {
          model: "deepseek-chat",
          messages: [
            {
              role: "user",
              // content: `hi`,
              content: `this is my data give me a good trade option ${chain} and my balance is${Balance} give me a 1 line response`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer sk-04df5bb7258c4502bb68535d170bd969`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("xxx", resp.data.choices[0].message.content);
      alert(resp.data.choices[0].message.content)
    } catch (error) {
      console.log("error is ", error);
    }

    console.log("this is here");
  };
  return (
    <>
      {isOpen && (
        <div
          id="default-modal"
          className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-screen bg-black/30 backdrop-blur-sm bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Your private key is safe — it is never transmitted or exposed
                  to anyone.
                </h3>
              </div>

              {/* Modal Body */}
              <div className="p-4 md:p-5 space-y-4">
                <div>
                  <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">
                    Enter Your Private Key
                  </h4>
                  <input
                    type="password"
                    placeholder="Private Key"
                    value={privateKey}
                    onChange={(e) => setPrivateKey(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  />
                </div>

                {/* Conditionally Render Confirm Button */}
                {privateKey.trim() !== "" && (
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-200"
                    onClick={modal_fun}
                  >
                    Confirm
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
