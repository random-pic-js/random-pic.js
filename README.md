<center><h1 style="text-align:center">Welcome To <a href="https://www.npmjs.com/package/random-pic.js">random-pic.js</a> Repository </h1></center>

<h5 style="text-align:center;color:magenta;">You Can Get Random Gif/Pictures URSL With This Module</h5><h6 style="text-align:center;">last update 2021-09-12 (added random function)</h6>


<h1 style="text-align:center;padding-top:50px;"> Available Funcitons</h1>

| animal  | anime |couple |landscape|random|
|:-------------: |:-------------:|:-------------:|:-------------:|:-------------:|
| boy| eboy     |girl |egirl|

<h6> If You Have An Idea For Adding Some Thing Feel Free By Telling Us In <a href="https://discord.gg/6vhPVYkNU9">Discord 1</a> &  <a href="https://discord.gg/nJUAbk5eeu">Discord 2</a></h67>

<h1 style="text-align:center;padding-top:50px;"> Examples </h1>


<h3> Code :</h3>


```javascript   
const pic = require('random-pic.js') // npm install random-pic.js



// do every thing with response


pic.animal().then((response) => { console.log(response) })
// pic.anime().then((response) => { response })
// pic.boy().then((response) => { response })
// pic.girl().then((response) => { response })
// pic.couple().then((response) => { response })
// pic.eboy().then((response) => { response })
// pic.egirl().then((response) => { response })
// pic.landscape().then((response) => { response })
// pic.random().then((response) => { response })
```

<h3> using for Discord Bot ?! </h3>

```javascript


pic.random().then((response) => { 

message.channel.send(response)

 })

```

Under `MIT License`.
