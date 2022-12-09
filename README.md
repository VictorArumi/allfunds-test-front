# News app

## Technical skills assessment for Allfunds.

News app is a simple SPA in which there are 2 views: news and archived.

- News view displays a list of all the news stored in DB (mongoDB) that are not archived (archived:false). News are sorted by date of creation (storageDate), with new news first. In this view it is possible to add a new new by clicking to 'add new', filling in the form and submitting it. Each new can be archived with its button 'archive'. View is updated when one of these actions is triggered.

- Archived news view displays all the news that have been archived (archived:true). Archived news are sorted by archive date. Each archived new has a button that allows the user to eliminate it. This will delete the new from the database and will also be reflected in the archived news that are currently displayed (it will disappear).

<br/>
All the data is queried from a mongoDB database, through allfunds-test-api REST API, also created for this assesment.
<br/>
The app is styled with styled-components (it is responsive to display size) and tested with Jest. State management is handled with Redux.
</br>
</br>

---

<div align="center">
<br/>

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/summary/new_code?id=VictorArumi_allfunds-test-front)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=VictorArumi_allfunds-test-front&metric=coverage)](https://sonarcloud.io/summary/new_code?id=VictorArumi_allfunds-test-front)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=VictorArumi_allfunds-test-front&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=VictorArumi_allfunds-test-front)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=VictorArumi_allfunds-test-front&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=VictorArumi_allfunds-test-front)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=VictorArumi_allfunds-test-front&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=VictorArumi_allfunds-test-front)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=VictorArumi_allfunds-test-front&metric=bugs)](https://sonarcloud.io/summary/new_code?id=VictorArumi_allfunds-test-front)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=VictorArumi_allfunds-test-front&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=VictorArumi_allfunds-test-front)

---

<br/>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%2320232a.svg?style=for-the-badge&logo=redux&logoColor=%2361DAFB)
![Styled-Components](https://img.shields.io/badge/styled_components-%2338B2AC.svg?style=for-the-badge&logo=styled-components&logoColor=black)
![Vercel](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=white)
![Render](https://img.shields.io/badge/render-%2320232a.svg?style=for-the-badge&logo=render&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

</div>

<div align="center">

---

## Screenshots

</div>
<div align="center">

<img style="height:300px" src="https://media.giphy.com/media/FJCDDcTO1vpoXiRQ5Z/giphy.gif" />

</div>

---

<br/>

<div align="center">
<br/>

## [Live website](https://news-app-front.netlify.app) 🔗

(wait a moment... until the API wakes up!)
<br/>

</div>

## Project info📚

**Technologies used:**

```
- Javascript
- React
- Redux
- Styled-components
- Jest
```

**Components**

```
.
└── components(/)
    └── Header
    └── Navigation
    └── New
    └── NewForm
    └── NewsList

.
└── pages(/)
    └── NewsPage
    └── ArchivedNewsPage


```

<br/>
<br/>

---

<br/>
<br/>

## Commands

```shell
    # Installation command
    npm i or npm/yarn i

    # Running command
    npm start

    # Build command
    npm run build

    # Testing command
    npm run test
```

<br/>

---

<br/>

## License

[MIT](https://opensource.org/licenses/MIT)
