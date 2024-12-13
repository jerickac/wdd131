const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T",
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 25,
            days: "TTh",
            instructor: "Sis A",
        },
    ],
    changeStudent:
        function (sectionNum, action) {
            const index = this.sections.findIndex(
                function (section) {
                    return section.sectionNum === sectionNum; // finds the index of the section
                }
            );

            if (index !== -1) { // Verify if it found the section
                if (action === 'enroll') {
                    this.sections[index].enrolled++;
                }

                else if (action === 'drop'){
                    this.sections[index].enrolled--;

                } 
            }
            else {
                console.log("Request not found");
            }

        }
    };

function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

    const enrollButton = document.querySelector('#enrollStudent');
    const dropButton = document.querySelector('#dropStudent');
    const sectionNumber = document.querySelector('#sectionNumber');

    enrollButton.addEventListener("click", () => {
        const typedSecNumber = parseInt(sectionNumber.value, 10);

        aCourse.changeStudent(typedSecNumber, 'enroll');
        renderSections(aCourse.sections);

        console.log("Enroll-student button was clicked")

        sectionNumber.value = "";
    });
    
    dropButton.addEventListener("click", () => {
        const typedSecNumber = parseInt(sectionNumber.value, 10);
        
        aCourse.changeStudent(typedSecNumber, 'drop');
        renderSections(aCourse.sections);
        
        console.log("Drop-student button was clicked")

        sectionNumber.value = "";
    });


aCourse.changeStudent(1, 'enroll');
aCourse.changeStudent(2, 'drop');
console.log(aCourse.sections);

renderSections(aCourse.sections);
