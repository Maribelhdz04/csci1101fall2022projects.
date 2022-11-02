window.addEventListener("load", function ()
{
    //Get click elements.
    let clickButtonElement = document.getElementById("click_button");
    let clickCounterElement = document.getElementById("click_counter");

    // Counter value.
    let counter = 0;

    // Button click function.
    let clickButtonFunction = function ()
    {
        // Increments counter by 1.
        counter++;

        // update click counter text.
        clickCounterElement.innerHTML = counter;
    };
    // attach click function to button.
    clickButtonElement.addEventListener("click", clickButtonFunction);
});