# verbalization-practice

### Week 1
Create a function called `createWeirdTitle` that takes in one parameter - `array` - which represents an array of movie objects.
This function should iterate through the array of movie objects... if the movie was released in an odd year, the function should
access the first word in the title and add it to an output string; if the movie was released in an even year, the function should
access the second word in thet title and add it to the output string (assume all titles will only have 2 words). The function
should return the output string at the end.

```
var output = createWeirdTitle(movies);
console.log(output); // => "WindowCapeFrightVelvet"
```

### Week 2
Create a function called `findCastMembersByLetter` that takes in two parameters - `array` & `letter`; `array` represents an
array of movie objects; `letter` is a string representing a letter. This function should interate through each movie in the
input array and determine if any actor in the cast has a first name that begins with the input letter.

```
var output = findCastMembersByLetter(movies, 'J');
console.log(output); // => ['Jimmy Stewart', 'Jessica Lange']
```

### Week 3
Create a function called `filterByRelatedMovieYear` that takes in two parameters - `array` & `decade`; `array` represents an
array of movie objects; `decade` represents a string of the decade the movie came out (example: '90s', '80s'). This function 
should use the `_.filter()` method you created in underpants.js to return a new array of only the movies that a related movie 
from the input decade.

```
var output = filterbyRelatedMovieYear(movies, '80s');
console.log(output); // [{Rear Window}, {Fright Night}, {Blue Velvet}]
```

### Week 4
1. Create a function called `getRelatedTitles` that takes in one parameter - `array` - which represents an array of movie objects. 
This function should use the native reduce method to return a new array of only the titles of the related movies in each movie
object's relatedMovies property.

```
var output = getRelatedMovies(movies);
console.log(output); // => ['Psycho', 'Body Double', 'Night of the Hunter', 'Misery', 'Lost Boys', 'Near Dark', 'Parents'];
```

2. Create a function called `filterByCastName` that takes in two paramters - `array`, `letter`; `array` represents an array of movie
objects and `letter` represents a string of an individual letter. This function should use the native filter method to return a new
array of only the movies that have a cast member whose first name begins with the input `letter`. Make sure your function is case
insensitive.

```
var output = filterByCastName(movies, 'j');
console.log(output); // [{Rear Window}, {Cape Fear}]
```

3. Create a function called `mapRelatedMovies` that takes in one parameter - `array` - which represents an array of movie objects. This
Function should use the native map method to return a new array of sub arrays. Each subarray should contain the titles of the related movies.

```
var output = mapRelatedMovies(movies);
console.log(output);
/*
// =>
[
  [ 'Psycho', 'Body Double' ],
  [ 'Night of the Hunter', 'Misery' ],
  [ 'Lost Boys', 'Near Dark' ],
  [ 'Parents' ]
]
*/

```