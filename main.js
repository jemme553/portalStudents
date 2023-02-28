const secDiv = document.getElementById('secDiv');


let user;

// create login variables
let loginDiv;
let loginForm;
let email;
let password;
let wrongP;
// create profile variables
let profileDiv;


// create courses variables
let coursesDiv;
let table;
let thead;
let tbody;

// create calendar variables
let calendarDiv;

//create loginDiv
function createLoginDiv() {
    loginDiv = document.createElement('div');
    loginDiv.id = 'loginDiv';
    loginDiv.className = 'loginDiv'
    loginDiv.style = 'text-align:center;';
    loginDiv.style = 'margin-top:100px;';
    secDiv.append(loginDiv);

    let div1 = document.createElement('div');
    div1.className = 'picture_div';
    loginDiv.append(div1);

    let userpic = document.createElement('img');
    userpic.src = 'img/profile(1).png';
    userpic.className = 'userPic';
    userpic.style = 'margin-top:100px;';
    div1.append(userpic);

    let div2 = document.createElement('div');
    div2.className = 'formDiv';
    loginDiv.append(div2);

    loginForm = document.createElement('form');
    loginForm.id = 'loginForm';
    div2.append(loginForm);

    let h1 = document.createElement('h1');
    h1.innerText = 'Login';
    loginForm.append(h1);

    email = document.createElement('input');
    email.type = 'email';
    email.placeholder = "Email"
    email.value = 'jemme.ib@hotmail.com';
    email.setAttribute('required', true);
    loginForm.append(email);

    let passDiv = document.createElement('div');
    passDiv.className = 'inputPassDiv';
    loginForm.append(passDiv);

    password = document.createElement('input');
    password.type = 'password';
    password.value = '206161572';
    password.placeholder = 'Password';
    password.className = 'formPass';
    password.setAttribute('required', true);
    passDiv.append(password);

    let span = document.createElement('span');
    span.className = 'spanIcon';
    span.id = 'spanIcon';
    passDiv.append(span);

    let iconImg = document.createElement('img');
    iconImg.src = 'img/icons8-eye-80.png';
    span.append(iconImg);

    // show/hide Password at login form
    iconImg.addEventListener('click', () => {
        if (password.getAttribute('type') == 'password') {
            password.setAttribute('type', 'text');
        } else {
            password.setAttribute('type', 'password');
        }
    });

    wrongP = document.createElement('p');
    wrongP.innerText = 'your username or password is wrong';
    wrongP.style = 'color:red;';
    loginForm.append(wrongP);
    wrongP.hidden = true;

    let br4 = document.createElement('br');
    loginForm.append(br4);

    let logBtn = document.createElement('button');
    logBtn.type = 'submit';
    logBtn.innerText = 'Login';
    loginForm.append(logBtn);

    loginForm.onsubmit = (event) => {
        login(event);
    }
}


//create profile div
function createProfileDiv() {
    profileDiv = document.createElement('div');
    profileDiv.id = 'profileDiv';
    profileDiv.style = 'text-align:center;height:fit-content;';
    profileDiv.classList.add('organic');
    profileDiv.classList.add('boxShadowStrong');
    secDiv.append(profileDiv);

    let h1 = document.createElement('h1');
    h1.innerText = 'Profile';
    h1.classList.add('titletext');
    profileDiv.append(h1);

    //building grid
    const gridContainer = document.createElement('div');
    gridContainer.id = 'userInfoGridContainer';
    profileDiv.append(gridContainer);

    let keys = ['studentID', 'firstName', 'familyName', 'email', 'mobileNumber', 'address', 'registeryDate'];
    let titles = ['Student ID', 'First name', 'Last name', 'Email', 'Mobile number', 'Address', 'Registry date'];


    for (i = 0; i < keys.length; i++) {
        const gridArea = document.createElement('div');
        gridArea.id = 'userInfoGridArea' + (i + 1);
        gridArea.classList.add('gridArea');
        gridArea.classList.add('text');
        gridArea.innerText = titles[i];
        gridArea.for = keys[i];
        //for formatting purposes
        if (keys[i] == 'registeryDate') {
            gridArea.isDate = true;
        }
        gridArea.addEventListener('click', bridgeGap);
        gridArea.addEventListener('click', showInArena);
        gridContainer.append(gridArea);
    }

    const gridAreaArena = document.createElement('div');
    gridAreaArena.id = 'userInfoGridAreaArena';
    gridAreaArena.classList.add('gridArea');
    gridAreaArena.classList.add('gridAreaArena');
    gridAreaArena.classList.add('text');
    gridContainer.append(gridAreaArena);
}

// create courses div
function createCoursesDiv() {
    coursesDiv = document.createElement('div');
    coursesDiv.id = 'coursesDiv';
    coursesDiv.className = 'table-responsive';
    coursesDiv.style = 'text-align:center;max-height:85vh;width:70%;';
    secDiv.append(coursesDiv);

    let h1 = document.createElement('h1');
    h1.innerText = 'Courses List';
    coursesDiv.append(h1);

    table = document.createElement('table');
    table.className = 'table table-striped table-hover pt-5 mb-3 w-100';
    coursesDiv.append(table);

    thead = document.createElement('thead');
    thead.className = 'bg-primary text-light';
    table.append(thead);
    tbody = document.createElement('tbody');
    table.append(tbody);
}

// create calendar div
function createCalendarDiv() {
    calendarDiv = document.createElement('div');
    calendarDiv.id = 'calendarDiv';
    calendarDiv.style = 'width:80%;';
    secDiv.append(calendarDiv);
}

// login
function showLogin() {
    loginDiv.hidden = false;
    profileDiv.hidden = true;
    coursesDiv.hidden = true;
    calendarDiv.hidden = true;
}

//profile
function showProfile() {
    loginDiv.hidden = true;
    profileDiv.hidden = false;
    coursesDiv.hidden = true;
    calendarDiv.hidden = true;
    document.getElementById('profileBtn').classList.add('active');
    document.getElementById('coursesBtn').classList.remove('active');
    document.getElementById('calendarBtn').classList.remove('active');

}

// course list
function showCourses() {
    loginDiv.hidden = true;
    profileDiv.hidden = true;
    coursesDiv.hidden = false;
    calendarDiv.hidden = true;
    document.getElementById('coursesBtn').classList.add('active');
    document.getElementById('calendarBtn').classList.remove('active');
    document.getElementById('profileBtn').classList.remove('active');

}

// calendar
function showCalendar() {
    loginDiv.hidden = true;
    profileDiv.hidden = true;
    coursesDiv.hidden = true;
    calendarDiv.hidden = false;
    document.getElementById('calendarBtn').classList.add('active');
    document.getElementById('profileBtn').classList.remove('active');
    document.getElementById('coursesBtn').classList.remove('active');
}

// logout
function logout() {
    loginDiv.hidden = false;
    profileDiv.hidden = true;
    coursesDiv.hidden = true;
    calendarDiv.hidden = true;
    hideBtns();
    document.getElementById('loginBtn').hidden = false;
    password.value = email.value = '';
}

// hide buttons
function hideBtns() {
    document.getElementById('logoutBtn').hidden = true;
    document.getElementById('profileBtn').hidden = true;
    document.getElementById('coursesBtn').hidden = true;
    document.getElementById('calendarBtn').hidden = true;
}

// show buttons
function showBtns() {
    document.getElementById('logoutBtn').hidden = false;
    document.getElementById('profileBtn').hidden = false;
    document.getElementById('coursesBtn').hidden = false;
    document.getElementById('calendarBtn').hidden = false;
}

// hide divs
function hideDivs() {
    profileDiv.hidden = true;
    coursesDiv.hidden = true;
    calendarDiv.hidden = true;
}

// login fetch and redirect to profile
login = (event) => {
    event.preventDefault();
    let data = {
        username: email.value,
        password: password.value
    }
    let xml = new XMLHttpRequest();

    xml.open('POST', 'https://rt-dev.xyz:3045/login', true);
    xml.setRequestHeader('Content-Type', 'application/json');
    xml.send(JSON.stringify(data));
    xml.onload = function () {

        if (xml.status === 200) {
            const response = JSON.parse(xml.responseText);
            let loggedUser = response.user;
            user = loggedUser;
            console.log(loggedUser);
            wrongP.hidden = true;
            showProfile();
            showBtns();
            document.getElementById('loginBtn').hidden = true;
            fillCourses();
            //simulate first option was clicked
            document.getElementById('userInfoGridArea1').click();

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Looks like your password or Email is wrong',
            })
            // wrongP.hidden = false;
        }
    }
}

// fill course list
function fillCourses() {
    async function getData() {
        const res = await fetch(`https://rt-dev.xyz:3045/student/courses?id=${user.studentID}`)
        return res.json();
    }
    getData()
        .then((data) => {
            console.log(data);
            let tr = document.createElement('tr');
            thead.append(tr);
            let th = document.createElement('th');
            th.innerText = 'ID';
            tr.append(th);
            for (let key of data) {
                for (let properety of Object.keys(key)) {
                    let th = document.createElement('th');
                    if (properety == 'url') continue;
                    if (properety == 'cycle') continue;
                    if (properety == 'course') continue;
                    if (properety == 'update_date') continue;
                    th.innerText = properety;
                    tr.append(th);
                }
                break;
            }
            let i = 0;
            for (let key of data) {
                let tr = document.createElement('tr');
                tbody.append(tr);
                let td = document.createElement('td');
                td.innerText = ++i;
                tr.append(td);
                for (let thirdKey of Object.keys(key)) {
                    if (thirdKey == 'url') continue;
                    if (thirdKey == 'cycle') continue;
                    if (thirdKey == 'course') continue;
                    if (thirdKey == 'update_date') continue;
                    if (thirdKey == 'startdate') {
                        if (key[thirdKey] == null) {
                            let td = document.createElement('td');
                            td.innerText = '';
                            tr.append(td);
                        } else {
                            let date = new Date(key[thirdKey]);
                            let curdate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
                            let td = document.createElement('td');
                            td.innerText = curdate;
                            tr.append(td);
                        }
                    } else if (thirdKey == 'endate') {
                        if (key[thirdKey] == null) {
                            let td = document.createElement('td');
                            td.innerText = '';
                            tr.append(td);
                        } else {
                            let date = new Date(key[thirdKey]);
                            let curdate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
                            let td = document.createElement('td');
                            td.innerText = curdate;
                            tr.append(td);
                        }
                    }
                    else {
                        let td = document.createElement('td');
                        td.innerText = key[thirdKey];
                        tr.append(td);
                    }

                }
            }
        })

}

// fill calendar div
function fillCalendar(myEvents) {
    console.log(myEvents);
    let cal = document.createElement('div');
    calendarDiv.append(cal);
    var calendar = new FullCalendar.Calendar(cal, {
        initialView: 'dayGridMonth',
        initialDate: '2022-12-01',
        editable: false,
        selectable: true,
        selectMirror: true,
        events: myEvents,
        eventClick: function (info) {
            var eventObj = info.event._def;
            Swal.fire({
                title: eventObj.title,
                html:
                    `<span>Teacher  <b>${eventObj.extendedProps.teacher} </b></span> <br> ` +
                    `<span>Type   <b>${eventObj.extendedProps.type}</b> </span> <br> ` +
                    `<span>Start date <b> ${info.event.startStr}</b> </span> <br> `,
                icon: 'info',
                confirmButtonText: 'Cool',
                showConfirmButton: false
            })
        },
    });
    calendar.render();
}


// fetch calendar api
function fetchCalendar() {
    async function getData() {
        const res = await fetch(`https://rt-dev.xyz:3045/student/calendar?id=206161572`);
        return res.json();
    }
    getData().then((res) => {
        console.log(res);
        let calendarEvents = [];
        let color;
        for (i = 0; i < res.length; i++) {
            if (res[i].sessionDate) {
                res[i].sessionDate = res[i].sessionDate.split("T")[0];
            }
            if (res[i].sessionEndDate) {
                res[i].sessionEndDate = res[i].sessionEndDate.split("T")[0];
            }
            if (res[i].type == 'Test' || res[i].type == 'Project') {
                color = 'purple'
            } else if (res[i].type == 'Training') {
                color = 'green'
            } else {
                color = '#3788d8';
            }
            let event = {
                title: res[i].courseName,
                start: res[i].sessionDate,
                end: res[i].sessionEndDate,
                teacher: res[i].teacher,
                type: res[i].type,
                session_num: res[i].session_num,
                color: color,
            }
            calendarEvents.push(event);
        }
        console.log(calendarEvents);
        fillCalendar(calendarEvents);

    })
}

function bridgeGap(event) {
    const previous = document.getElementsByClassName('gridAreaIndented');
    if (previous[0]) {
        previous[0].classList.remove('gridAreaIndented');
    }
    const gridArea = event.currentTarget;
    gridArea.classList.add('gridAreaIndented');
}

function showInArena(event) {
    const gridArea = event.currentTarget;
    const gridAreaArena = document.getElementById('userInfoGridAreaArena');
    //get value for this key from logged-in user
    let value = user[gridArea.for];
    //check if it's a date and needs formatting
    if (gridArea.isDate) {
        gridAreaArena.innerText = formatDate(value);
    } else {
        gridAreaArena.innerText = value;
    }
}

function formatDate(str) {
    return str.substring(8, 10) + '/' + str.substring(5, 7) + '/' + str.substring(2, 4);
}

// main function
function main() {
    createLoginDiv();
    createProfileDiv();
    createCoursesDiv();
    createCalendarDiv();
    hideBtns();
    hideDivs();
    fetchCalendar();
}

window.main();