# Built by Jacki
<img align='right' src='https://media.giphy.com/media/bcKmIWkUMCjVm/giphy.gif' width='200"'>

I love coding, spreading positivity and hearing feedback! Let's connect.

<!-- LinkedIn  -->
<a href="https://www.linkedin.com/in/jacki-yanamura/" target="_blank">
  <img src="https://img.shields.io/badge/-Jacki%20Yanamura-blue?style=for-the-badge&logo=Linkedin&logoColor=white"/>
</a>
<!--   Email -->
<a href="mailto:jacki.yanamura@gmail.com">
  <img src="https://img.shields.io/badge/EMAIL-jacki.yanamura%40gmail.com-1152ba?style=for-the-badge"/>
</a>

# MVP
Open source motivational app providing on-demand media via popular  APIs.
* Designed intuitive and user friendly front-end utilizing Materialize CSS
* Integrated 4 popular APIs for dynamic media from Spotify, Youtube, Twitter, and FavQ’s.
* Implemented “favorites” content feature storing records in mySQL database to increase user activity, social sharing and returned visits

Note: Motivation HUB currently in development. Here is a sneak peek to what is to come:

![](./img/mHUB_1.png)
![](./img/mHUB_2.png)

Wouldn't a sweet song like "We Will Rock You" pump you up?
![](./img/mHUB_song.png)

## Documentation
1. [Project Summary](#MVP)
1. [Getting Started](#Getting-Started)
1. [API's](#APIs)
1. [Usage](#Using-Motivation-HUB)
1. [Design](#Whiteboarding-Database)
1. [Technologies](#Technologies)
1. [Related Projects](#Related-Projects)

## Getting Started
Clone the Github repository:
* `$ git clone https://github.com/day-glow/MVP.git`

Navigate inside of the directory `./MVP` and run the following commands:
1. `$ npm install`
2. `$ npm run build`
3. `$ npm start`

Open a new browser tab to see the app:
* `http://localhost:3000`

Note: Current videos are samples. Must add new API keys/tokens for all media sources to populate with new data. Please review "Add API's" section of this ReadMe.

## APIs
* FavQ's.com
* Spotify
* Youtube
* Twitter

## Add API's
The current repo has 4 API's it is pulling from in the server. You must add your registered API keys/tokens in order to utilize these features. Navigate to this repo's `./config` folder to find the templates for each API (i.e. `youtube_example_api.js`). Register for your personal API keys at the following sites, and replace the templates with your new API keys.

- [ ] FavQ's.com API: ( https://favqs.com/api_keys )
- [ ] Spotify API: ( https://developer.spotify.com/documentation/web-api/ )
- [ ] Youtube API: ( https://developers.google.com/youtube/v3 )
- [ ] Twitter API v2: ( https://developer.twitter.com/en/docs/twitter-api )

Once completed refresh the page. If there is no change, `Ctrl + C` in terminal windows and rerun the following commands:
1. `$ npm run build`
2. `$ npm start`

## Using Motivation HUB
Each section is dedicated to quotes, songs, videos or social feeds. Users can like a content piece and save them to their likes to revisit at a later time.

Click the right arrow button to see next piece of content.

Click on the content to link to the original content source.

## Whiteboarding Database
![](./img/mHUB_whiteboarding.jpg)

## Technologies
* React
* Node.js
* Express
* mySQL
* Sequelize
* Wepack
* Materialize CSS

## Related Projects
* Checkout projects by [Day-Glow](https://github.com/day-glow):
  - [Souperhost:3000 travel booking site calendar](https://github.com/souperhost-3000/service-day-glow)
  - [Retail eCommerce backend migration](https://github.com/The-10-000-RPS-Club/service-jacki)
  - [nnext: random number mobile app](https://github.com/day-glow/nnext)
  - [LeetCode Solutions by Day-Glow](https://github.com/day-glow/Leet-Code)