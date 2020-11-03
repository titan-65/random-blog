---
title: 'Learning Computed Props'
date: '2020-11-2'
---

# Learning how to use computed properties - Vue.js

In the Vue.js Framework a feature that sometimes overlooked is  computed properties are data in Vue components that depend on some calculation. At first this concept was difficult for me to understand and to apply when I would possible use this feature but the more examples I saw the more it came clear. Coding is most times about the separation of logic and this is what computed properties offers a way to separate logic that you may place in components that can be extracted and placed in the necessary section that Vue provides.

## Titan: Ready
> Ensure you are familiar with the v-model directive and the @event notation before you look at this example

## Titan: Set!

```
<div id="app">
<div >
<input type="text" v-model="recipe"/> 
  <input type="text" id="recipe" value='French Toast'/> 
  <button @click="saveRecipe">Save Surname</button> 
  <output>{{computedRecipe}}</output> 
</div> 
  
</div> 
 
new Vue({ 
  el: '#app', 
  data: { 
    recipe: '' 
  }, 
  computed: { 
    computedRecipe () { 
      return this.recipe.split('').reverse().join('')
    } 
  }, 
})

```
## Titan: GO!
Check out my Github page for tutorial examples coming soon.
[TITAN-65](https://wwww.github.com/titan-65)