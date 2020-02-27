

## What does your app do, what is the goal?

![6ede119067a5309569f97222e15a8c3d](https://user-images.githubusercontent.com/43183768/74226067-28c84e80-4cbc-11ea-8fca-dd4eae058378.jpg)

With Discover music api you can search music songs. Basis of keywords it will search any song and generates a list with that keyword. 

* A range of songs to discover
* Get information about the song

## Actor diagram

An Actor diagram is focused on (code)objects that can be seen as the actors of your code. WHO handles functionality in your app.

<img width="" alt="Actor-diagram" src="https://user-images.githubusercontent.com/43183768/75482820-d5d1e500-59a5-11ea-99c9-da71d16c594a.png">

## Interaction diagram
The Interaction diagram focuses on WHAT happens in your code. It visualizes functions and shows how action flows through your application.

<img width="" alt="interactiondiagram" src="https://user-images.githubusercontent.com/43183768/75482917-ff8b0c00-59a5-11ea-8110-9bf0d4402328.png">

## Which API is used and what are the limitations? 

APIseeds/music :  https://orion.apiseeds.com/api/music/search/ 

### Limits:
* it displays only max 20 songs per search
* You can also search Artists/Album names
* Rate limit: unknown
* It can not load all songs. It only works with keywords

## Collection Records

<img width="" alt="f346871f9479694c23592af0ba95ad9d" src="https://user-images.githubusercontent.com/43183768/74240204-bf573880-4cd9-11ea-9163-ec72fe4c0e58.png">

## Design patterns
* Single tab
* No var
* Search functionality

## Micro libraries 
* Routie for routes


### Wishlist
* add lyrics to the detail session (with another API)
* Pre load a selection of songs

### Backlog
* Make routie in a router module (is now in the render module)


