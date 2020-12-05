var pattern = /^[a-zA-Z]+$/;
var piecanvas = document.getElementById('piecanvas');
piecanvas.width = 300;
piecanvas.height = 300;

var dunatcanvas = document.getElementById('dunatcanvas');
dunatcanvas.width = 300;
dunatcanvas.height = 300;


var drawbtn = document.getElementById('draw');
drawbtn.addEventListener('click', draw);

var drawdugbtn = document.getElementById('drawdug');
drawdugbtn.addEventListener('click', drawdug);

var drawlinebtn = document.getElementById('drawline');
drawlinebtn.addEventListener('click', drawLine);

var drawbartn = document.getElementById('drawbar');
drawbartn.addEventListener('click', barChart);


coursename1 = document.getElementById('coursename1');
coursename2 = document.getElementById('coursename2');
coursename3 = document.getElementById('coursename3');
coursename4 = document.getElementById('coursename4');

coursevalue1 = document.getElementById('coursevalue1');
coursevalue2 = document.getElementById('coursevalue2');
coursevalue3 = document.getElementById('coursevalue3');
coursevalue4 = document.getElementById('coursevalue4');

coursecolor1 = document.getElementById('coursecolor1');
coursecolor2 = document.getElementById('coursecolor2');
coursecolor3 = document.getElementById('coursecolor3');
coursecolor4 = document.getElementById('coursecolor4');



// ////////////////////////





/////////pie chart///////////////////

function pieChart(fpiecanvas) {
    this.piecanvas = fpiecanvas;
    this.ctx = this.piecanvas.getContext("2d")

    // var courseNames = {
    //     course1: coursename1.value,
    //     course2: coursename2.value,
    //     course3: coursename3.value,
    //     course4: coursename4.value
    // }
    var courseValues = {
        value1: coursevalue1.value,
        value2: coursevalue2.value,
        value3: coursevalue3.value,
        value4: coursevalue4.value
    }
    var arrColor = [];
    var courseColors = {
        color1: coursecolor1.value,
        color2: coursecolor2.value,
        color3: coursecolor3.value,
        color4: coursecolor4.value
    }
    for (var kcolor in courseColors) {
        var color = courseColors[kcolor];
        arrColor.push(color);
    }

    if (!pattern.test(coursename1.value) || !pattern.test(coursename2.value) || !pattern.test(coursename3.value) || !pattern.test(coursename4.value) || !coursename1.value || !coursename2.value || !coursename3.value || !coursename4.value || !coursevalue1.value || !coursevalue2.value || !coursevalue3.value || !coursevalue4.value) {

        alert("fill value and enter letters only in column one")
    }
    else {
        this.drawArc = function () {
            var countValue = 0;
            var colorIndex = 0;
            for (var k in courseValues) {
                var value = Number(courseValues[k]);
                countValue += value;
            }
            var startAngle = 0;
            for (var kvalue in courseValues) {
                var angles = courseValues[kvalue];
                var angle = 2 * Math.PI * angles / countValue;
                var angleColor = arrColor[colorIndex];
                colorIndex += 1;

                this.drawAChart(this.ctx, piecanvas.width / 2, piecanvas.height / 2, piecanvas.width / 2, startAngle, startAngle + angle, angleColor);
                startAngle += angle;
            }



        }
        this.drawAChart = function (ctx, centerx, centery, raduis, startAngle, endAngle, angleColor) {
            ctx.fillStyle = angleColor;
            ctx.beginPath();
            ctx.moveTo(centerx, centery);
            ctx.arc(centerx, centery, raduis, startAngle, endAngle)
            ctx.closePath();
            ctx.fill();
        }



    }


}



function draw() {
    var pieChartObject = new pieChart(piecanvas);
    pieChartObject.drawArc();

}






/////////dughart chart///////////////////
function dughartChart(sdunatcanvas) {

    this.dunatcanvas = sdunatcanvas;
    this.ctx2 = this.dunatcanvas.getContext("2d")

    // var courseNames = {
    //     course1: coursename1.value,
    //     course2: coursename2.value,
    //     course3: coursename3.value,
    //     course4: coursename4.value
    // }
    var courseValues = {
        value1: coursevalue1.value,
        value2: coursevalue2.value,
        value3: coursevalue3.value,
        value4: coursevalue4.value
    }
    var arrColor = [];
    var courseColors = {
        color1: coursecolor1.value,
        color2: coursecolor2.value,
        color3: coursecolor3.value,
        color4: coursecolor4.value
    }
    for (var kcolor in courseColors) {
        var color = courseColors[kcolor];
        arrColor.push(color);
    }

    if (!pattern.test(coursename1.value) || !pattern.test(coursename2.value) || !pattern.test(coursename3.value) || !pattern.test(coursename4.value) || !coursename1.value || !coursename2.value || !coursename3.value || !coursename4.value || !coursevalue1.value || !coursevalue2.value || !coursevalue3.value || !coursevalue4.value) {

        alert("fill value and enter letters only in column one")
    }
    else {
        this.drawArcs = function () {
            var countValue = 0;
            var colorIndex = 0;
            for (var k in courseValues) {
                var value = Number(courseValues[k]);
                countValue += value;
            }
            var startAngle = 0;
            for (var kvalue in courseValues) {
                var angles = courseValues[kvalue];
                var angle = 2 * Math.PI * angles / countValue;
                var angleColor = arrColor[colorIndex];
                colorIndex += 1;

                this.drawACharts(this.ctx2, dunatcanvas.width / 2, dunatcanvas.height / 2, dunatcanvas.width / 2, startAngle, startAngle + angle, angleColor);
                startAngle += angle;
            }

        }
        this.drawACharts = function (ctx2, centerx, centery, raduis, startAngle, endAngle, angleColor) {
            ctx2.fillStyle = angleColor;
            ctx2.beginPath();
            ctx2.moveTo(centerx, centery);
            ctx2.arc(centerx, centery, raduis, startAngle, endAngle);
            ctx2.closePath();
            ctx2.fill();

            ctx2.fillStyle = "white";
            ctx2.beginPath();
            ctx2.moveTo(centerx, centery);
            ctx2.arc(centerx, centery, raduis / 3, 0, 360);
            ctx2.closePath();
            ctx2.fill();
        }

    }
}

function drawdug() {
    var dughartObject = new dughartChart(dunatcanvas);
    dughartObject.drawArcs();

}


// /////////bar////////////

function barChart() {

    var courseNameBar = document.getElementById('courseNameBar');
    var courseNameOne = "<text x='80' y='450'>" + coursename1.value + "</text>";
    var courseNameTwo = "<text x='140' y='450'>" + coursename2.value + "</text>";
    var courseNameThree = "<text x='200' y='450'>" + coursename3.value + "</text>";
    var courseNameFour = "<text x='260' y='450'>" + coursename4.value + "</text>";

    courseNameBar.innerHTML = courseNameOne + courseNameTwo + courseNameThree + courseNameFour;

    var total = Number(coursevalue1.value) + Number(coursevalue2.value) + Number(coursevalue3.value) + Number(coursevalue4.value)
    var arr = [(coursevalue1.value / total) * 100, (coursevalue2.value / total) * 100, (coursevalue3.value / total) * 100, (coursevalue4.value / total) * 100];
    if (!pattern.test(coursename1.value) || !pattern.test(coursename2.value) || !pattern.test(coursename3.value) || !pattern.test(coursename4.value) || !coursename1.value || !coursename2.value || !coursename3.value || !coursename4.value || !coursevalue1.value || !coursevalue2.value || !coursevalue3.value || !coursevalue4.value) {

        alert("fill value and enter letters only in column one")
    }
    else {

        document.getElementById('course1').setAttribute("height", arr[0] * 4);
        document.getElementById('course1').setAttribute("y", 400 - arr[0] * 4);
        document.getElementById('course1').setAttribute("fill", coursecolor1.value);

        document.getElementById('course2').setAttribute("height", arr[1] * 4);
        document.getElementById('course2').setAttribute("y", 400 - arr[1] * 4);
        document.getElementById('course2').setAttribute("fill", coursecolor2.value);

        document.getElementById('course3').setAttribute("height", arr[2] * 4);
        document.getElementById('course3').setAttribute("y", 400 - arr[2] * 4);
        document.getElementById('course3').setAttribute("fill", coursecolor3.value);

        document.getElementById('course4').setAttribute("height", arr[3] * 4);
        document.getElementById('course4').setAttribute("y", 400 - arr[3] * 4);
        document.getElementById('course4').setAttribute("fill", coursecolor4.value);
    }
}



function drawLine() {
    var courseNameLine = document.getElementById('courseNameLine');
    var courseNameOne = "<text x='80' y='450'>" + coursename1.value + "</text>";
    var courseNameTwo = "<text x='140' y='450'>" + coursename2.value + "</text>";
    var courseNameThree = "<text x='200' y='450'>" + coursename3.value + "</text>";
    var courseNameFour = "<text x='260' y='450'>" + coursename4.value + "</text>";

    courseNameLine.innerHTML = courseNameOne + courseNameTwo + courseNameThree + courseNameFour;

    var total = Number(coursevalue1.value) + Number(coursevalue2.value) + Number(coursevalue3.value) + Number(coursevalue4.value)
    var arr = [(coursevalue1.value / total) * 100, (coursevalue2.value / total) * 100, (coursevalue3.value / total) * 100, (coursevalue4.value / total) * 100];
    if (!pattern.test(coursename1.value) || !pattern.test(coursename2.value) || !pattern.test(coursename3.value) || !pattern.test(coursename4.value) || !coursename1.value || !coursename2.value || !coursename3.value || !coursename4.value || !coursevalue1.value || !coursevalue2.value || !coursevalue3.value || !coursevalue4.value) {

        alert("fill value and enter letters only in column one")
    }
    else {
        document.getElementById('courses').setAttribute('points',
            '80,' + (400 - arr[0] * 4) +
            ' 140,' + (400 - arr[1] * 4) +
            ' 200,' + (400 - arr[2] * 4) +
            ' 260,' + (400 - arr[3] * 4)
        );
    }
}