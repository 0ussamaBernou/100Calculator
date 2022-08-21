const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
  // const { target } = event;
  const { value } = event.target;
  if (value) {
    console.log(value);
  }
  return;
});

// for (const button of buttons.children) {
//   button.addEventListener("click", (event) => {
//     const { target } = event;
//     const { value } = target;
//     console.log(value);
//   });
// }

const calculator = {
  displayText: "0",
  prevTotal: null,

  parseInput(value) {
    switch (value) {
      case "=":
        // calculate method
        break;
      case "AC":
        // Clear All method
        break;
      case ".":
        if (this.displayText == 0) {
          // pass 0. to the display
        } else {
          // add . to the display text
        }
        break;

      default:
        // concat number to display text
        break;
    }
  },
};

