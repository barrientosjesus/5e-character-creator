<div id="header" align="center">

  <img src="https://i.imgur.com/lD7zpF8.png" width="200" alt="battleship game logo"  style="max-height: 200px; object-fit: cover;">

</div>

<div align="center" id="header">

# 5e Character Creator

**Created by [Jesus Barrientos](https://www.linkedin.com/in/barrientosjesus/)**

#### [CLICK TO VIEW](https://dnd5e-character-creator-83a7088f4a41.herokuapp.com/)

</div>

<div align="center" id="socialbuttons">

  ![Stars](https://img.shields.io/github/stars/barrientosjesus/dnd5e-character-generator?style=social)
  ![](https://visitor-badge.laobi.icu/badge?page_id=barrientosjesus.dnd5e-character-generator)
  ![Forks](https://img.shields.io/github/forks/barrientosjesus/dnd5e-character-generator?style=social)
  <br>
  ![Version](https://img.shields.io/badge/version-1.0-black)
  <br>
  ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fdnd5e-character-creator-83a7088f4a41.herokuapp.com%2Fapi%2Fcharacter_count&query=%24.characterCount&style=flat-square&label=Characters%20Created)

</div>

## 📝 Description

This is a web app that allows you quickly create D&D Characters. Only has information available through SRD which follows CC BY 4.0

# Screenshot

| Description | Screenshot |
|------------ | ------------|
| <h3 align="center">Landing Page</h3> | <img src="https://i.imgur.com/fOhVnYN.jpg">
| <h3 align="center">New Character</h3> | <img src="https://i.imgur.com/wxvTiAO.jpg">
| <h3 align="center">Characters Index</h3> | <img src="https://i.imgur.com/I0yRQIt.jpg">

# Technologies Used

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
![Static Badge](https://img.shields.io/badge/MidJourney-blue?style=flat-square&label=MJ&color=%238c2bbd&link=https%3A%2F%2Fwww.midjourney.com%2Fapp%2F)
![Static Badge](https://img.shields.io/badge/Imgur%20-%20%23333?style=flat-square&logo=imgur&label=Imgur)
![MDN Web Docs](https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white)
![TEST](https://badgen.net/http:/localhost:3000/api/character_count)

# Deploy Locally

1. [Fork the repository](https://github.com/barrientosjesus/dnd5e-character-generator/fork)
2. Clone your fork: `git clone https://github.com/your-username/dnd5e-character-generator.git`
3. run `npm i`
4. Create a `.env` file
5. Add the following to the `.env` file
⚠️ **Note: MAKE SURE THIS FILE IS GITIGNORED** ⚠️

```env
DATABASE_URL="YOUR MONGODB URL"
GOOGLE_CLIENT_ID="YOUR GOOGLE CLIENT ID"
GOOGLE_SECRET="YOUR GOOGLE SECRET"
GOOGLE_CALLBACK="YOUR CALLBACK"
SECRET="YOUR SECRET"
```

# Next Steps - [Trello](https://trello.com/b/xVkuw9Eh/project-2)

- [ ] Image Upload for Character Portrait
- [ ] Additional Character stats to Model
- [ ] Additional filters and sort options
- [ ] Export to PDF
- [ ] Export to Roll20 & FoundryVTT

# LICENSE

This work includes material taken from the System Reference Document 5.1 (“SRD 5.1”) by Wizards of
the Coast LLC and available at [https://dnd.wizards.com/resources/systems-reference-document](https://dnd.wizards.com/resources/systems-reference-document). The
SRD 5.1 is licensed under the Creative Commons Attribution 4.0 International License available at
[https://creativecommons.org/licenses/by/4.0/legalcode](https://creativecommons.org/licenses/by/4.0/legalcode).

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png