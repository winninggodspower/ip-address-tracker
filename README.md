# Frontend Mentor - IP address tracker solution

This is my solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](design\desktop-design.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://winninggospower.github.com/ip_address_tracker)

## My process
1. On page load, I use browser geolocation api to get user location and leaflet to plot the map
2. It uses ipify api to get the user info of ipaddress, location, timezone and network provider

3. When user put in the ipaddress in the search bar. we query the ipify api it gets the ipaddress info such as no 2.
4. It then query the ipapi api to the ip location of the ipaddress location and query the leaflet api with the ip location to plot the map.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [Bootstrap](https://getbootstrap.com/) - For styles
- 3 apis 


## Author

- Website - [Winning Godspower](https://winningtech.tk)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/winninggpower)
