<template>
  <div>
    <NuxtPage />
    <!-- <LangSwitcher style="padding-top: 90px" /> -->
  </div>
</template>

<style>
body {
background-color: aliceblue;
display: grid;
place-content: center;
height: 100vh;
text-align: center;
font-family: cursive;
transition: background-color 0.5s ease;
}

a,
a:visited {
color: #fff;
text-decoration: none;
padding: 16px 32px;
background-color: blue;
border-radius: 5px;
font-size: 29px;
display: block;
margin-bottom: 50px;
transition: background-color 0.5s ease, transform 0.3s ease;
transform-origin: center;
}
a:hover {
background-color: rgb(23, 61, 62);
transform: scale(1.1);
}
</style>