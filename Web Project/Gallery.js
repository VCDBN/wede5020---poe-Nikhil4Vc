let btn =document.getElementById('btnQoute');
let output =document.getElementById('outputQoute');

let quote = [
    '"It is dangerously destabilizing to have half the world on the cutting edge of technology while the other half struggles on the bare edge of survival. — William J. Clinton"',
    '"Many people see technology as the problem behind the so-called digital divide. Others see it as the solution. Technology is neither. It must operate in conjunction with business, economic, political and social system. — Carly Fiorina"',
    '"We must also promote global access to the Internet. We need to bridge the digital divide not just within our country. But among countries. Only by giving people around the world access to this technology can they tap into the potential. Of the information age. —  Al Gore"',
    '"Society always needs a level playing field. In order to do that, you have to have opportunity, and providing that opportunity begins with how do we bridge that gap, that so-called Digital Divide? How can we get internet into every home possible? — Jackie Joyner-Kersee"',
    '"When people talk to me about the digital divide, I think of it not so much about who has access to what technology as about who knows how to create and express themselves in the new language of the screen. If students arent taught the language of sound and images, shouldnt they be considered as illiterate as if they left college without being able to read and write? — George Lukas"',
    '"I would not minimize the digital divide, which separates the computerized world from the rest, nor would I underestimate the importance of traditional books. — Robert Darnton"',
    '"Forget what you may have heard about a digital divide or worries that the world is splintering into info haves and info have-nots. The fact is, technology fosters equality, and its often the relatively cheap and mundane devices that do the most good.— William J. Clinton"',
    '"We all know of the dangers and inequities of the traditional digital divide: People who have good access tocomputer networks have a distinct advantage - in terms of both life opportunities and quality of life, I wouldargue - over the vast majority of the worlds population that does not yet have good access to computernetworks. The "other" digital divide points to an increasingly unstable situation that has developed inlibrarianship as digital libraries have evolved and matured. — Tom Peters"',
    '"I am delighted to be involved in the digital divide campaign to ensure that every school is made aware of what steps it can take to address the digital divide as it affects local children, and provide a range of opportunities for ICT suppliers, government agencies, charities and other organisations to make a contribution. — Estelle Morris"',
    '"Unless the digital divide is narrowed soon, the United States may be headed to the class warfare of a century ago, the last time the economy changed so fundamentally. It wont be pleasant. — Jonathan Alter"'
];

btn.addEventListener('click', function(){

    var randomquote = quote[Math.floor(Math.random() *quote.length)]
    output.innerHTML = randomquote;

})