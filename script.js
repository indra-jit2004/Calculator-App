const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons input");

const appendValue = (val) => {
    display.value += val;
};

const clearDisplay = () => {
    display.value = "";
};

const deleteLast = () => {
    display.value = display.value.slice(0, -1);
};

const calculate = () => {
    try {
        display.value = eval(display.value) || "";
    } catch {
        display.value = "Error";
    }
};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (value === "AC") {
            clearDisplay();
        } else if (value === "DE") {
            deleteLast();
        } else if (value === "=") {
            calculate();
        } else {
            appendValue(value);
        }
    });
});
