/* eslint-disable no-global-assign */
/* eslint-disable no-unused-vars */

const logger = document.getElementById("log")

const addChromeConsoleToScreen = () => {
  console.old = console.log
  console.count = function () {
    var output = "",
      arg,
      i

    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i]
      output += '<span class="log-' + typeof arg + '">'

      if (
        typeof arg === "object" &&
        typeof JSON === "object" &&
        typeof JSON.stringify === "function"
      ) {
        output += JSON.stringify(arg)
      } else {
        output += arg
      }

      output += "</span>&nbsp;"
    }

    logger.innerHTML += output + "<br>"
    console.old.apply(undefined, arguments)
  }
}

function updateScroll() {
  var element = document.getElementById("log")

  element.scrollTop = element.scrollHeight
}

//once a second
setInterval(updateScroll, 100)

export default addChromeConsoleToScreen
