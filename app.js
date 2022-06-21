let index;
let spieler = undefined;

function showUI(){
    let htmlObj = document.getElementById("identification");
    htmlObj.innerHTML =
        `Name: ${spieler.firstname}<br>`+
        `First name: ${spieler.lastname}<br>`+
        `Position: ${spieler.position}`;

    htmlObj = document.getElementById("college");
    htmlObj.innerHTML =
        `College: ${spieler.college.college}<br>`;

    htmlObj = document.getElementById("superbowl");
    htmlObj.innerHTML = "";
    spieler.superbowl.superbowl.forEach(modulid => {
        htmlObj.innerHTML += `${modulid}<br>`;
    });

    htmlObj = document.getElementById("mvpTitle");
    htmlObj.innerHTML = "";
    htmlObj.innerHTML += " " + mvp;

    htmlObj = document.getElementById("mvp");
    htmlObj.innerHTML = "";
    let faecherListe = spieler.superbowl.mvp;
    for (let i=0;i<mvpListe.length; i++){
        htmlObj.innerHTML += `${mvpListe[i]}<br>`;
    };

    htmlObj = document.getElementById("showIndex");
    htmlObj.innerHTML = "";
    htmlObj.innerHTML = index;
}


function showNext() {
    index = localStorage.getItem("index");
    console.log(index);
    if (index == undefined){
        index = 0;
    } else {
        if (spielerListe.length-1 > index){
            index++;
        }
    }
    localStorage.setItem("index", index);
    spieler = spielerListe[index];
    showUI();
}

function showPrevious() {
    index = localStorage.getItem("index");
    console.log(index);
    if (index == undefined){
        index = 0;
    } else {
        if (index > 0){
            index--;
        }
    }
    localStorage.setItem("index", index);
    spieler = spielerListe[index];
    showUI();
}


if (spieler === undefined){
    index = 0;
    localStorage.setItem("index", index);
    showUI();
}

const express = require('express')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')

const app = express()
const port = 5000

app.set('view engine', 'ejs')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('', (req, res)=> {
    res.render('index')
})

app.get('/anmeldung', (req, res)=> {
    res.render('anmeldung')
})

app.post('/anmeldung', urlencodedParser, [
    check('password', 'This password must me 3+ characters long')
        .exists()
        .isLength({ min: 3 }),
    check('email', 'Email is not valid')
        .isEmail()
        .normalizeEmail()
], (req, res)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        const alert = errors.array()
        res.render('register', {
            alert
        })
    }
})

app.listen(port, () => console.info(`App listening on port: ${port}`))

<script>
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

public bool Validate()
{
    string Response = Request["g-recaptcha-response"];//Getting Response String Append to Post Method
    bool Valid = false;
    //Request to Google Server
    HttpWebRequest req = (HttpWebRequest)WebRequest.Create
(" https://www.google.com/recaptcha/api/siteverify?secret=YOUR SECRATE KEY &response=" + Response);
    try
    {
        //Google recaptcha Response
        using (WebResponse wResponse = req.GetResponse())
        {

            using (StreamReader readStream = new StreamReader(wResponse.GetResponseStream()))
            {
                string jsonResponse = readStream.ReadToEnd();

                JavaScriptSerializer js = new JavaScriptSerializer();
                MyObject data = js.Deserialize<MyObject>(jsonResponse);// Deserialize Json

                Valid = Convert.ToBoolean(data.success);
            }
        }

        return Valid;
    }
    catch (WebException ex)
    {
        throw ex;
    }
}
</script>

