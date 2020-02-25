

## What does your app do, what is the goal?

![6ede119067a5309569f97222e15a8c3d](https://user-images.githubusercontent.com/43183768/74226067-28c84e80-4cbc-11ea-8fca-dd4eae058378.jpg)

With Discover music api you can search music songs. Basis of keywords it will search any song and generates a list with that keyword. 

* A range of songs to discover
* Get information about the song

## Which actors are there in your application? 

An Actor diagram is focused on (code)objects that can be seen as the actors of your code. WHO handles functionality in your app.

<img width="" alt="61fcdb347ce0a6f513d2aad138e8efb02" src="https://user-images.githubusercontent.com/43183768/75253209-61991500-57de-11ea-9bd7-9ea6dedd5d8f.png">


## Which API is used and what are the limitations? 

APIseeds/music :  https://orion.apiseeds.com/api/music/search/ 

### Limits:
* it displays only max 20 songs per search
* You can also search artists 
* Rate limit: unknown
* It can not load all songs. It only works with keywords

## Collection Records

<img width="" alt="f346871f9479694c23592af0ba95ad9d" src="https://user-images.githubusercontent.com/43183768/74240204-bf573880-4cd9-11ea-9163-ec72fe4c0e58.png">

## How does flowed interaction through the application? (interaction diagram)
The Interaction diagram focuses on WHAT happens in your code. It visualizes functions and shows how action flows through your application.

<img width="" alt="ID2" src="https://user-images.githubusercontent.com/43183768/75253269-79709900-57de-11ea-9039-9cdf82064e9b.png">


## Design patterns
* Single tab
* No var
* Search functionality

## Micro libraries 
* Routie for routes


### Wishlist
* add lyrics to the detail session (with another API)
* Using a templating engine

### Backlog
* Make routie in a module (is now in the render module)


