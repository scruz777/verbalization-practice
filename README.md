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

