<h1 align="center">
  Wrapify
 </h1>

<h3 align="center">
  Lets wrap it together! 
  <br> nwHacks 2021
</h3>
<h3 align="center">
  <a href="https://devpost.com/software/wrapify">Check out the devpost here</a>
</h3>

## Contents 
- [Inspiration](#inspiration)
- [What it does](#what-it-does)
- [How we built it](#how-we-built-it)
- [Challenges we ran into](#challenges-we-ran-into)
- [Accomplishments that we're proud of](#accomplishments-that-we-are-proud-of) 
- [What we learned](#what-we-learned)
- [What's next for Wrapify](#what's-next-for-wrapify)

## Inspiration

There is one thing we all definitely miss during this time of social distancing, which is not being able to hang out with our friends and/or family, at least not in a huge group. Those birthday surprises, dinner parties, graduation celebrations, and such occasions commemorating various special days of our lives. One of the important things about these events is the gifts/surprises for our loved ones. 
No matter how small the number of people involved is, there will always be one long discussion -- what should we gift him/her/them? Unless its a wedding and there is a registry, the most common and simple way to go about this is to meet and talk about it or nowadays, make a group chat; and needless to say, we all know what that talk turns into as everyone tries to stick to their choice of the gift. This is where our app comes in. 

## What it does

**Wrapify** is an app that is focused on the fact that gift-giving is not as easy as it sounds, especially if it’s from multiple people. This app has a feature where the user can explore through ecommerce platforms such as Amazon or input a link to any other website to look for their perfect gift. It lets everyone in your group have a voice by letting them add and vote for their favourite gift(s). This is how it works:
- You create a room and add your friends/family members
- Each member can add a number of gifts to the list
- Each one of you can vote for the gifts you find the best
- The gift with the highest number of votes is ultimately the one that most of you loved!
- Seeing as how easy it became to choose a gift out of all the options, one of you creates a new room for a new event


## How we built it

We built a Hybrid App (iOS as well as an Android app) with the help of Ionic Framework which wraps our front end code to native iOS and Native applications! For the front-end, we used **React.js** with help of small npm libraries and used SCSS as it helps with better and maintainable code. We used **Firebase** as our backend system as it provides us with Firestore and its Authentication system to store users which is safe and secure. 

We also built a custom API as directly querying into Firebase is not very secure. The API is built in NodeJS using Express library. We designed the App in **Figma** before developing it to get a clear understanding of our app.

## Challenges we ran into 

The first issue we ran into was trying to find an Amazon or an online store API which can provide us data if we query using user input. Amazon doesn't allow us to do that ideally, and we need lots of permissions to get into their API, so we had to use other free APIs available online for such a store. 

This was our first time integrating Firebase in React and we had problems with understanding how would we structure our API and database. It took us a while to get through understanding the backend. 

Lastly, developing a good UI/UX was another challenge we faced. But by designing some user flows and sketching out low fidelity mockups we were able to come up with good high fidelity mockups. 

## Accomplishments that we are proud of 

We were really happy with the whole app, as we built a really interactive UI/UX long with a working API and database. We believe that users can navigate the UI very easily and the data shown is relevant to the users. One of the crucial aspects is that our platform is a Hybrid Platform and will attract lots of users. 

## What we learned 

We learned that APIs are not as simple to use but given the right effort we can overcome that challenge. We also learned about creating Hybrid Applications (iOS and Android) and running them locally. This shows that how we can develop a cross platform app for a lot of users and not restrict ourselves in one specific platform. 

## What's next for Wrapify

We initially planned for the app to have Amazon store in the App where we can search products without having to navigate to Amazon app or other apps. Next steps would be integrating online stores and giving the user more options to shop from. 
