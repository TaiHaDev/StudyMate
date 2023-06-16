import React from 'react'

const Quote = ({onRemoveHandler}) => {
    const motivationalQuotes = [
        {
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            quote: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },
        {
            quote: "The harder you work for something, the greater you'll feel when you achieve it.",
            author: ""
        },
        {
            quote: "Don't watch the clock; do what it does. Keep going.",
            author: "Sam Levenson"
        },
        {
            quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
            author: "Christian D. Larson"
        },
        {
            quote: "Opportunities don't happen, you create them.",
            author: "Chris Grosser"
        },
        {
            quote: "Don't be afraid to give up the good to go for the great.",
            author: "John D. Rockefeller"
        },
        {
            quote: "Success usually comes to those who are too busy to be looking for it.",
            author: "Henry David Thoreau"
        },
        {
            quote: "I find that the harder I work, the more luck I seem to have.",
            author: "Thomas Jefferson"
        },
        {
            quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
            author: "Albert Schweitzer"
        }
    ];
    const randomQuoteNumber = Math.floor(Math.random() * motivationalQuotes.length);
  return (
    <div className='w-[24.25rem]'>
        <div className='flex justify-between items-center my-2'>
            <div className='flex space-x-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
            </svg>
            <p className='text-white font-medium'>Motivational Quote</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white hover:bg-slate-800 rounded-full" onClick={() => onRemoveHandler()}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
</svg>


        </div>
        <p className='text-white text-lg font-medium'>"{motivationalQuotes[randomQuoteNumber].quote}"</p>
        <p className='text-white text-end'>{motivationalQuotes[randomQuoteNumber].author}</p>

    </div>
  )
}

export default Quote