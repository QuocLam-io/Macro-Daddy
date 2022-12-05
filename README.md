# Macro-Daddy

## General Info
> An evidence-based tool to calculate a person's biometrics to out put their Total Daily Energy Expenditure (TDEE) in calories, that uses a nutrition database to track caloric intake to compare whether they gained or lost weight on the day.


## Images
<img width="1440" alt="Screen Shot 2022-06-10 at 9 08 23 AM" src="https://user-images.githubusercontent.com/82473096/173071398-82e37bd0-34ac-4a51-96ac-335b4b10ef79.png">



## Technologies
* HTML
* CSS
* React
* Figma
* Axios

## Setup
* Fork Repo
* Copy SSH Link
* Go to any folder where you'd like to let Astro Boy live
* git clone /link/
* https://macro-daddy.netlify.app/

## Code Example

Here is a snippet of my button code that initializes the divs to have the hidden word appear in the center as boxes and the music to start.

//! ------------------------------ TDEE Equation ----------------------------- */
>  useEffect(() => {
    if (userStats.gender === "female") {
      setBmr(
        Math.round(
          (655 +
            4.35 * userStats.weight +
            4.7 * userStats.height -
            4.7 * userStats.age) *
            userStats.physical
        )
      );
    } else {
      setBmr(
        Math.round(
          (66 +
            6.23 * userStats.weight +
            12.7 * userStats.height -
            6.8 * userStats.age) *
            userStats.physical
        )
      );
    }
  }, []);
  
  
## Features
* An equation that calulates your TDEE based on your input biometrics
* A live update of your macro intake as you select foods you ate
* A user page to track history

To-do List:
* Add dates to history
* A backend to add photo
* Pagination for food cards
* Media Queries

## Status
Project is: _largely finished_. New features and UX aesthetics to be implemented.

## Inspiration
My nutrition degree

## Contact
Created by ME! ME ME ME ME ME! Muahahahahahahahaha
