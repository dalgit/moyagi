<a name="readme-top"></a>

<br />
<div align="center">
    <img src="./public/assets/logo.png" alt="Logo" width="250" height="80">

   <h3 align="center">project_Moyagi</h3>

   <p align="center">
         nextjs-social-platform
         <br />
         <a href="https://moyagi.vercel.app/">Moyagi</a>
    </p>
</div>

<details>
  <summary>Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#run">Run</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#structure">Structure</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>
<br />

## About The Project

This is a social platform based on Next.js. It utilizes API routes and MongoDB for data management. Recoil is used to efficiently manage global state and domain data. Additionally, data caching is implemented using react-query, and page loading is optimized through Suspense and Dynamic Import to enhance user experience. Moreover, it employs appropriate SSR and CSR techniques to provide SEO and excellent performance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" />
- <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white" />
- <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
- <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
- <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=react&logoColor=white" />
- <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=react&logoColor=white" />
- <img src="https://img.shields.io/badge/Amazon s3-A3C841?style=for-the-badge&logo=Amazon s3&logoColor=white" />
- <img src="https://img.shields.io/badge/Recoil-4D7AEB?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgNjAwIDYwMCI+PGxpbmsgeG1sbnM9IiIgdHlwZT0idGV4dC9jc3MiIGlkPSJkYXJrLW1vZGUiIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iIi8+PGcgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xNDIuNTM2IDE5OC44NThjMCAyNi4zNi0yMS4zNjggNDcuNzItNDcuNzIgNDcuNzItMjYuMzYgMC00Ny43MjItMjEuMzYtNDcuNzIyLTQ3LjcyczIxLjM2LTQ3LjcyIDQ3LjcyLTQ3LjcyYzI2LjM1NSAwIDQ3LjcyMiAyMS4zNiA0Ny43MjIgNDcuNzIiLz48cGF0aCBkPSJNNTA1LjE4IDQxNC4yMjVIMjM4LjEyNGMtMzUuMjUgMC02My45MjYtMjguNjc0LTYzLjkyNi02My45MjNzMjguNjc4LTYzLjkyNiA2My45MjYtNjMuOTI2aDEyMC43OGMyMC44MTYgMCAzNy43NTMtMTYuOTM4IDM3Ljc1My0zNy43NTZzLTE2LjkzOC0zNy43NTYtMzcuNzUzLTM3Ljc1Nkg5NC44MWMtNy4yMjcgMC0xMy4wODYtNS44Ni0xMy4wODYtMTMuMDg1IDAtNy4yMjcgNS44Ni0xMy4wODYgMTMuMDg1LTEzLjA4NmgyNjQuMDkzYzM1LjI1IDAgNjMuOTIzIDI4LjY3OCA2My45MjMgNjMuOTI2cy0yOC42NzQgNjMuOTIzLTYzLjkyMyA2My45MjNoLTEyMC43OGMtMjAuODIgMC0zNy43NTYgMTYuOTM4LTM3Ljc1NiAzNy43NiAwIDIwLjgxNiAxNi45MzggMzcuNzUzIDM3Ljc1NiAzNy43NTNINTA1LjE4YzcuMjI3IDAgMTMuMDg2IDUuODYgMTMuMDg2IDEzLjA4NSAwIDcuMjI2LTUuODU4IDEzLjA4NS0xMy4wODUgMTMuMDg1eiIvPjxwYXRoIGQ9Ik00NTcuNDY0IDQwMS4xNDJjMC0yNi4zNiAyMS4zNi00Ny43MiA0Ny43Mi00Ny43MnM0Ny43MiAyMS4zNiA0Ny43MiA0Ny43Mi0yMS4zNiA0Ny43Mi00Ny43MiA0Ny43Mi00Ny43Mi0yMS4zNi00Ny43Mi00Ny43MiIvPjwvZz48c3R5bGUgeG1sbnM9IiIgaWQ9ImRhcmstbW9kZS1jdXN0b20tY29sb3IiPgoJCTpyb290ewoJCQktLWJnLWNvbG9yOnJnYmEoMjYsMjYsMjYsMSk7CgkJCS0tdGV4dC1jb2xvcjpyZ2JhKDExMCwxMTAsMTEwLDEpOwoJCQktLWEtY29sb3I6cmdiYSg5MCwxMjAsMTIwLDEpOwoJCQktLWEtdmlzaXRlZC1jb2xvcjpyZ2JhKDEyMCwxMjAsOTAsMSk7CgkJCS0tYS1ob3Zlci1jb2xvcjpyZ2JhKDIxMSwyMTEsMjExLDEpOwoJCQktLWlucHV0LWJvcmRlci1jb2xvcjpyZ2JhKDIxMSwyMTEsMjExLDAuMik7CgkJCS0taW5wdXQtcGxhY2Vob2xkZXItY29sb3I6cmdiYSgxNzMsMjE2LDIzMCwxKTsKCQkJLS1kaWFsb2ctYmctY29sb3I6cmdiYSgzNiwzNiwzNiwwLjk1KTsKCQkJLS1iZy1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgyNiwyNiwyNiwxKSxyZ2JhKDI2LDI2LDI2LDEpKTsKCQl9Cgk8L3N0eWxlPjwvc3ZnPg==&logoColor=white" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/dalgit/moyagi
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API in `.env`
   ```js

   # Mongodb
   MONGODB_URI= 
   // your mongodb uri
   
   # jwt
   SECRET_KEY = 
   // your secret key for jwt

   # base url
   NEXT_PUBLIC_BASE_URL= 
   // local : http://localhost:3000/api

   # s3
   NEXT_PUBLIC_REGION=
   NEXT_PUBLIC_ACESS_KEY=
   NEXT_PUBLIC_SECRET_ACESS_KEY=
   NEXT_PUBLIC_BUCKET=
   AWS_S3_DOMAIN=
   // your s3 keys

   ```

### Run
- #### Development
   
    ```
    npm run dev
    ```
    
    This will start a development server on http://localhost:3000.

<br/>

- #### Build
  
  ```
  npm run build
  ```
  This will build the a production version of the website in the .next folder.

<br/>

- #### Production
  First, you need to build your project running npm run build, then:
  
  ```
  npm start
  ```
  This will launch a production server on http://localhost:3000.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

- channel
  - [x] Search
  - [x] Recommended channels
  - [x] Channel protection with public or private settings
  - [x] For private channels, only approved users can join as members
- post
  - [x] Posting with image upload
  - [x] Commenting
- profile
  - [x] User profile customization
- registration
  - [x] Channel registration
  - [x] Approval or rejection by administrator
- auth
  - [x] Access token and refresh token
  - [x] Handling through auth middleware
  - [x] Automatic token refresh when the access token expires
- common
  - [x] Various reusable components and custom hooks
  - [x] React hook handling through axios provider
- etc
  - [x] responsive design
  - [ ] ...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Structure

```
📦Motagi
 ┣ 📂Components
 ┃ ┣ 📂common
 ┃ ┣ 📂Layout
 ┃ ┗ 📂Template
 ┣ 📂features           # domain-specific components
 ┣ 📂hooks
 ┣ 📂pages
 ┃ ┣ 📂api              # api-routes
 ┃ ┗ ...
 ┣ 📂public
 ┣ 📂recoil
 ┣ 📂server             # backend for handling api-routes
 ┣ 📂styles
 ┣ 📂types
 ┣ 📂utils
 ┗ ...
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Mali : dalgit77@gmail.com

Blog Link: [dalgit.space](https://www.dalgit.space/)

Project Link: [moyagi.vercel.app](https://moyagi.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
