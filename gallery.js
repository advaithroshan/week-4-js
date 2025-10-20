/*Name this external file gallery.js*/
// This function updates the #image div when user hovers/focuses on an image
function upDate(previewPic) {
    console.log("Event triggered: upDate()");
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

// This function resets the #image div when user moves mouse away or loses focus
function unDo() {
    console.log("Event triggered: unDo()");
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "none";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

// This function adds tabindex and event listeners to all images
function addTabFocus() {
    console.log("Event triggered: addTabFocus()");
    let previews = document.querySelectorAll(".preview");

    for (let i = 0; i < previews.length; i++) {
        // Add keyboard accessibility
        previews[i].setAttribute("tabindex", "0");

        // Add event listeners for keyboard focus & blur
        previews[i].addEventListener("focus", function() {
            console.log("Focus event fired on image " + (i + 1));
            upDate(this);
        });

        previews[i].addEventListener("blur", function() {
            console.log("Blur event fired on image " + (i + 1));
            unDo();
        });

        // Add listeners for mouse hover & leave (as before)
        previews[i].addEventListener("mouseover", function() {
            console.log("Mouseover event fired on image " + (i + 1));
            upDate(this);
        });

        previews[i].addEventListener("mouseleave", function() {
            console.log("Mouseleave event fired on image " + (i + 1));
            unDo();
        });
    }
}

// Add the onload listener to start everything
window.onload = addTabFocus;
