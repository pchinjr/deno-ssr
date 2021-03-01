import Main from './main.js'

export default function (state = {}) {
  let { title } = state
  return `
<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
</head>
 <body>
  ${Main()}
  <script>

    console.log('praise cage')
    let timeSpan = document.querySelector('#time')

    function myTimer() {
      let date = new Date()
      let time = date.toLocaleTimeString()
      timeSpan.textContent = time
    }

    let updateTime = setInterval(myTimer, 1000)


  </script>
 </body>
</html>
  `
}