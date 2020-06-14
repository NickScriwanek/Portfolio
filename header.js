    var previousSectionID = document.getElementById("homeNav");
    
    function toggle(f_sectionID){
        previousSectionID.classList.remove('active');
        var sectionID = document.getElementById(f_sectionID);
        sectionID.classList.add('active');
        previousSectionID = sectionID;
    }
    function toggle(){
        var header = document.getElementById("header")
        header.classList.toggle('active')
     }
