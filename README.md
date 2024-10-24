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