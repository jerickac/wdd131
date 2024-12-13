// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections:
        [
            { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
            { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
        ],
    enrollStudent: 
        function(sectionNum) {
            const index = this.sections.findIndex(
                function(section) {
                    return section.sectionNum === sectionNum; // finds the index of the section
            });

            if (index !== -1) { // Verify if it found the section
                this.sections[index].enrolled++;
            } else {
                console.log("Request not found");
            }
        }
};



function showCourseCodeAndName(name, number) {

    courseName = document.querySelector('#courseName');
    courseName.textContent = name;

    courseCode = document.querySelector('#courseCode');
    courseCode.textContent = number;
}

function showCourseSections(sections) {

    const tBody = document.querySelector('#sections'); // Access the tbody

    sections.forEach(

        function createRow(section) {
            const row = document.createElement('tr'); // Creates a row for the table

            Object.values(section).forEach(

                function createCell(value) {
                    const cell = document.createElement('td'); // Create cell
                    cell.textContent = value; // Add content into the cell
                    row.appendChild(cell); // Add the cell to the row
                }
            );

            tBody.appendChild(row); // Adds the row to the table body
        }
    );

}

showCourseCodeAndName(aCourse.name, aCourse.code);
showCourseSections(aCourse.sections);

aCourse.enrollStudent(1);
console.log(aCourse.sections);