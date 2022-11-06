# Restaurant Dining Reservation Web Application

As required in your Fundamentals of Software Engineering class (COSC 4351), you are to design a dining reservation web application. Hence, the creation of this repository. This project consists of three individuals. We'll be using Next JS for our front-end and MongoDB (or Firebase) as our query language. 

## Cloning the Repository:

Cloning the repository is how you take the contents of the code here and place it in your Visual Studio Editor. To do so, start visual studios. Then, on the left hand side, click *Clone Git Repository*:

<p align = "center">
  <kbd>
    <picture>
      <img src = "https://user-images.githubusercontent.com/78463059/192163325-6df6fdb6-1207-47f8-9c8b-52ae550ea42c.png" />
    </picture>
  </kbd>
</p>

Then go to the page of the Github repository that you wish to collaborate with (in this case we use this [repository](https://github.com/Sergio-Source-code/ReservationSystem/)). After going to that repository site, click on the following button that says `code`:

<p align = "center">
  <kbd>
    <picture>
      <img src = "https://user-images.githubusercontent.com/78463059/192163494-92f4c850-b1e1-4ea7-a4a5-4b22d1e08e40.png" />
    </picture>
  </kbd>
</p>
  
Then copy the contents under the tab `HTTPS` of the element that pops up:

<p align = "center">
  <kbd>
    <picture>
      <img src = "https://user-images.githubusercontent.com/78463059/192170312-3b833136-2e37-4ca5-a4f9-04272bc91128.png" />
    </picture>
  </kbd>
</p>

## What is the purpose of each file in this Next JS project?:

Here, we have the following file structure:
```
📦 Reservation System
└─── 📁 components
└─── 📁 pages
|    | 📜 _app.js
|    | 📜 index.js
|
└─── 📁 public
└─── 📁 styles
|    | 📜 globals.css
|
| 📜 .eslintrc.json
| 📜 .next.config.js
| 📜 package.json
| 📜 .gitinore
| 📜 package-lock.json
```

We only have to worry about the folders:
- The `📁 components` folder is for reusable components. For example, a footer is to be render in every page. Thus, we create a footer component and store it there.
- The `📁 pages` folder is to store our pages for our website. We note that a `📜 about-us.js` page, because one of the pages of the website is an "about-us" page. Note, there are two files that are slightly different. That is the `📜 _app.js` file and the `📜 index.js` file. The `📜 _app.js` file is where we import our components from the `📁 components` folder and place them there. Any code in there would render to all pages of our Next.js project.

## Pushing Code to the Repository:

For this project, we have opted **not** to use branching. This could create issues, and has a high development risk for unsynchronized projects. However, since we have a small teams, we would emphasize that individuals `pull` before `push`.

Thus, let's say an individual has finished writing a code for some file. How does that indidivudal push to github?

// testing