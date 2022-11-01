function displayCorrectText()
{
    // finding the checkbox
    var checkbox =
    document.getElementById("correct_checkbox1");

    // finding the text to display if checked
    var text =
    document.getElementsByClass("correct_text");

    // if the checkbox is checked, the text display style is changed to block
    // if the checkbox is not checked, the text display style is the same
    if(checkbox.ariaChecked == true)
    {
        correct_text.style.display = "block";
    }

    else 
    {
        correct_text.style.display = "none";
    }
}

function displayIncorrectText()
{
    // finding the checkbox
    var checkbox = 
    document.getElementsByClass("incorrect_checkbox");

    // finding the text to display if checked
    var text =
    document.getElementsByClass("incorrect_text");

    // if the checkbox is checked, the text display style is changed to block
    // if the checkbox is not checked, the text display style is the same
    if(checkbox.ariaChecked == true)
    {
        incorrect_text.style.display = "block";
    }

    else 
    {
        incorrect_text.style.display = "none";
    }
}