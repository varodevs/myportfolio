import React from 'react';
import Typed from 'typed.js';

function Terminal() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Hi!',' My name is Alvaro Barba and I am a full-stack developer!','\n npm run dev'],
      typeSpeed: 50,
      loop:true,
      showCursor: true, // Show the cursor
      cursorChar: '|',
      
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="items-center hidden mx-2 w-1/2 xl:w-4/5 p-6 text-base sm:text-sm md:text-base lg:block rounded-md bg-gray-800 max-h-80 animate-[pulse_0.5s_ease-out]">
                        <div className="relative">
                            <div className="absolute -top-5 -right-5">
        
                                <button title="Close" className="text-gray-600 w-8 h-8 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className ="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                            </div>
                        </div>
                        <pre ref={el} className="inline-block text-gray-300 whitespace-pre" id="terminal-output"></pre>
                    </div>
  );
}

export default Terminal