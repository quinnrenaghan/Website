import { useState, useEffect } from 'react';

const TypingAnimation = () => {
const phrases = [
    "Hello! I'm Quinn Renaghan.",
    "Welcome to my website.",
];

const [text, setText] = useState('');
const [phraseIndex, setPhraseIndex] = useState(0);
const [currentIndex, setCurrentIndex] = useState(0);
const [isTyping, setIsTyping] = useState(true);
const [isDeleting, setIsDeleting] = useState(false);
const [showCursor, setShowCursor] = useState(true);

useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(() => {
    if (isTyping && !isDeleting) {
        // typing
        if (currentIndex < currentPhrase.length) {
            setText(currentPhrase.slice(0, currentIndex + 1));
            setCurrentIndex(prev => prev + 1);
        } else {
            // wait before starting to delete
            setTimeout(() => {
                setIsDeleting(true);
            }, 1500);
        }
    } else if (isDeleting) {
        // deleting
        if (currentIndex > 0) {
            setText(currentPhrase.slice(0, currentIndex - 1));
            setCurrentIndex(prev => prev - 1);
        } else {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
    }
    }, isDeleting ? 40 : 90); // Faster deletion speed

    return () => clearTimeout(timeout);
}, [currentIndex, isTyping, isDeleting, phraseIndex]);

  // handle the blinking cursor
useEffect(() => {
    const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
}, []);

return (
<div className="min-h-screen flex items-center justify-center">
    <div className="text-center px-4 text-rose-800">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl min-h-[4rem]">
            {text}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
                |
            </span>
        </h1>
    </div>
</div>
    );
};

export default TypingAnimation;