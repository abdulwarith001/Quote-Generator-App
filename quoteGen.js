const allQuotes = [{
  quote: 'Keep smiling, because life is a beautiful thing and theres so much to smile about',
  author: 'Marilyn Monroe'
},

{
  quote: 'Life is a long lesson in humility.',
  author: 'James M. Barrie'
},

{
  quote: "In three words, I can sum up everything I've learned about life: It goes on",
  author: 'Robert Frost'
},

{
  quote: 'Love the life you live, Live the life you love.',
  author: 'Bob Marley'
},

{
  quote: 'The purpose of our life is to be happy.',
  author: 'Dalai Lama'
},

{
  quote: 'You will face many defeat in life but never let yourself be defeated.',
  author: 'Maya Angelou'
},

{
  quote: 'In the end, it is not the years in your life that counts, its the life in your years.',
  author: 'Abraham Lincoln'
},

{
  quote: 'The greatest glory in living lies not in ever falling, but in rising every time we fall.',
  author: 'Nelson Mandela'
},

{
  quote: 'The future belongs to those who believes in the beauty of their dreams.',
  author: 'Eleanor Roosevelt'
},

{
  quote: 'Spread love eveywhere you go. Let no one ever come to you without leaving happier.',
  author: 'Mother Theresa'
},

{
  quote: 'Life is what happen when you are busy making other plans.',
  author: 'John Lennon'
},

{
  quote: 'Only a life lived for others is a life worthwhile.',
  author: 'Albert Eintein'
},

{
  quote: 'The purpose of our lives is to be happy.',
  author: 'Dalai Lama'
},

{
  quote: 'The only impossible journey is the one you never begin.',
  author: 'Tony Robbins'
},

{
  quote: 'Life is not fair, and perhaps it is a good thing for most of us that it is not.',
  author: 'Oscar Wilde'
},

{
  quote: 'In this life we cannot do great things, we can only do small things with great love.',
  author: 'Mother Theresa'
},

{
  quote: 'Life is a sucession of lessons which must be lived to be understood',
  author: 'Ralph Waldo Emerson'
},

{
  quote: 'If life were predictable it would cease to be life and be without flavor.',
  author: 'Eleanor Roosevelt'
},

{
  quote: 'Life is a daring adventure or nothing at all.',
  author: 'Helen Keller'
},

{
  quote: 'Never let the fear of striking out keep you from playing the game.',
  author: 'Babe Ruth'
}
];

const NavigationBtns = document.querySelectorAll('#NavigationBtn');
const quoteAuthor = document.querySelector('.quoteAuthor');
const quoteMessage = document.querySelector('.quoteMessage');
let currentQuote = 0;

//Loads quote as soon as our page loads
window.addEventListener('load', () => {
  quoteMessage.textContent = allQuotes[currentQuote].quote
  NavigationBtns[0].classList.toggle('hide', true)
  quoteAuthor.textContent = `By ${allQuotes[currentQuote].author}`
})

//get previous Quotes
NavigationBtns[0].addEventListener('click', () => {
  try {
    (currentQuote === 0)
      ?
      currentQuote = 0
      :
      currentQuote--
    quoteMessage.textContent = allQuotes[currentQuote].quote
    quoteAuthor.textContent = `By ${allQuotes[currentQuote].author}`
    quoteMessage.classList.toggle('nextAnimation', true)
    setTimeout(() => {
      quoteMessage.classList.toggle('nextAnimation', false)
    }, 1000)
  } catch (error) {
    console.log(error)
  }

  if (currentQuote > 0) {
    NavigationBtns[1].classList.toggle('hide', false)
  } else if (currentQuote === 0) {
    NavigationBtns[0].classList.toggle('hide', true)
  }

})

//Get next Quote
NavigationBtns[1].addEventListener('click', () => {
  try {
    //Using Conditional Statement to check if quotes should be displayd or not
    (currentQuote === (allQuotes.length - 1))
      ?
      currentQuote = allQuotes.length - 1
      :
      //increaments current quote 
      currentQuote++
    //Appends quotes and the author to the page
    quoteMessage.textContent = allQuotes[currentQuote].quote
    quoteAuthor.textContent = `By ${allQuotes[currentQuote].author}`
    NavigationBtns[0].classList.toggle('hide', false)
    quoteMessage.classList.toggle('nextAnimation', true)
    setTimeout(() => {
      quoteMessage.classList.toggle('nextAnimation', false)
    }, 1000)
  } catch (error) {
    console.log(error)
  }

  if (currentQuote === (allQuotes.length - 1)) {
    NavigationBtns[1].classList.toggle('hide', true)
  }


});