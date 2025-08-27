const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons input");

const appendValue = (val) => {
    if (display.value === "0" && !isNaN(val)) {
        display.value = val; // replace initial 0
    } else {
        display.value += val;
    }
};

const clearDisplay = () => {
    display.value = "0";
};

const deleteLast = () => {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
};

const calculate = () => {
    try {
        display.value = eval(display.value) || "0";
    } catch {
        display.value = "Error";
    }
};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (value === "AC") {
            clearDisplay();
        } else if (value === "DEL") {
            deleteLast();
        } else if (value === "=") {
            calculate();
        } else {
            appendValue(value);
        }
    });
});

// ✅ Keyboard support for desktop
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || ["+", "-", "*", "/", "%", "."].includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key.toLowerCase() === "c") {
        clearDisplay();
    }
});
