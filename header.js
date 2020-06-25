    //landingNav is previousSectionID
    var previousSectionID = document.getElementById("landingNav");

    //Als je op een ander kopje klikt, wordt het vorige kopje niet meer active.
    //Het kopje dat is aangeklikt, wordt active gemaakt
    function toggle(f_sectionID) {
        previousSectionID.classList.remove('active');
        var sectionID = document.getElementById(f_sectionID);
        sectionID.classList.add('active');
        previousSectionID = sectionID;
    }