const express = require("express");
const fs = require("fs");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.listen(3000);

var MySql = require("mysql");
var syncSql = require("sync-sql");

app.use(express.static("public"));

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/img", express.static(__dirname + "/public/img"));
app.use("/shtml", express.static(__dirname + "/public/shtml"));


app.get("/", function(req, res) {

    res.sendFile(__dirname + "/views/index.html");

})

app.get("/menu", function(req, res) {

    res.sendFile(__dirname + "/views/menu.html");
    console.log(req.body);

})

app.get("/location", function(req, res) {

    res.sendFile(__dirname + "/views/location.html");

})

app.get("/team", function(req, res) {

    res.sendFile(__dirname + "/views/team.html");

})

app.get("/apply", function(req, res) {

    res.sendFile(__dirname + "/views/apply.html");

})

app.get("/review", function(req, res) {

    var user_reviews = {
        "first_name": [],
        "last_name": [],
        "comment": [],
    };
    
    var sql = "SELECT * FROM user_reviews";

    var sqlData = syncSql.mysql(config, sql).data.rows;

    for (var i = 0;i < sqlData.length;i++) {
        user_reviews["first_name"].push(sqlData[i]["first_name"]);
        user_reviews["last_name"].push(sqlData[i]["last_name"]);
        user_reviews["comment"].push(sqlData[i]["comment"]);
    }
    
    var header_content = "";
    var footer_content = "";
    var user_review_content = [];

    for (var i = 0;i < sqlData.length;i++) {

        user_review_content.push(`
        
            <div id = "review-name">
                <h1>${sqlData[i]["first_name"]} ${sqlData[i]["last_name"]}</h1>
            </div>

            <div id = "review-rating">

                <span class="fa fa-star checked" id = "rating-one${i}"></span>
                <span class="fa fa-star checked" id = "rating-two${i}"></span>
                <span class="fa fa-star checked" id = "rating-three${i}"></span>
                <span class="fa fa-star checked" id = "rating-four${i}"></span>
                <span class="fa fa-star checked" id = "rating-five${i}"></span>

            </div>

            <script>
            
                if (${sqlData[i]["rating"]} == 0) {

                    $("#rating-one${i}").css("color", "black");
                    $("#rating-two${i}").css("color", "black");
                    $("#rating-three${i}").css("color", "black");
                    $("#rating-four${i}").css("color", "black");
                    $("#rating-five${i}").css("color", "black");

                }

                if (${sqlData[i]["rating"]} == 1) {

                    $("#rating-one${i}").css("color", "orange");
                    $("#rating-two${i}").css("color", "black");
                    $("#rating-three${i}").css("color", "black");
                    $("#rating-four${i}").css("color", "black");
                    $("#rating-five${i}").css("color", "black");

                }

                if (${sqlData[i]["rating"]} == 2) {

                    $("#rating-one${i}").css("color", "orange");
                    $("#rating-two${i}").css("color", "orange");
                    $("#rating-three${i}").css("color", "black");
                    $("#rating-four${i}").css("color", "black");
                    $("#rating-five${i}").css("color", "black");

                }

                if (${sqlData[i]["rating"]} == 3) {

                    $("#rating-one${i}").css("color", "orange");
                    $("#rating-two${i}").css("color", "orange");
                    $("#rating-three${i}").css("color", "orange");
                    $("#rating-four${i}").css("color", "black");
                    $("#rating-five${i}").css("color", "black");

                }

                if (${sqlData[i]["rating"]} == 4) {

                    $("#rating-one${i}").css("color", "orange");
                    $("#rating-two${i}").css("color", "orange");
                    $("#rating-three${i}").css("color", "orange");
                    $("#rating-four${i}").css("color", "orange");
                    $("#rating-five${i}").css("color", "black");

                }

                if (${sqlData[i]["rating"]} == 5) {

                    $("#rating-one${i}").css("color", "orange");
                    $("#rating-two${i}").css("color", "orange");
                    $("#rating-three${i}").css("color", "orange");
                    $("#rating-four${i}").css("color", "orange");
                    $("#rating-five${i}").css("color", "orange");

                }

            </script>

            <div id = "review-comment">
                <p>${sqlData[i]["comment"]}</p>
            </div>
            
        `);

    }

    var user_content = user_review_content.join('');
    var review_content = `
    
        <div id = "reviews">
            
            ${user_content}

        </div>
    
    `;

    try {

        var data = fs.readFileSync("public/shtml/header.shtml", "utf-8");
        header_content = data;

    }

    catch(err) {

        console.log(err);

    }
    
    try {

        var data = fs.readFileSync("public/shtml/footer.shtml", "utf-8");
        footer_content = data;

    }

    catch(err) {

        console.log(err);

    }

    var pageCount = Math.round(sqlData.length / 5) + 1;
    console.log(pageCount);

    var content = `
    
        <!DOCTYPE html>
        <html lang = "en-us">
            <head>
                <title>Little Jamaica Restaurant and Lounge</title>
                <link rel = "icon" href = "img/logo.png">
                <link rel = "stylesheet" type = "text/css" href = "css/style.css">
                <link rel = "stylesheet" type = "text/css" href = "css/review.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            </head>
            <body>

            <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

            <div class = "container">

                <div id = "header">
                    ${header_content}
                </div>
                <div id = "main-content">
                    <div id = "banner">
                        <h1 id = "banner-heading">Little Jamaica Restaurant and Lounge</h1>
                        <img src = "img/Jerk Chicken Plate.webp">
                    </div>

                    <div class = "heading">
                        <h1>Reviews</h1>
                    </div>

                    <div id = "review">

                        ${review_content}

                    </div>

                    <div id = "review-button">
                        <a href = "/leave-a-review"><button>Leave a review</button></a>
                    </div>

                    <div id = "page-count">

                        <span id = "page"></span>

                    </div>

                </div>

                <div id = "footer">
                    ${footer_content}
                </div>

            </div>
            </body>
        </html>
    
    `;

    try {

        fs.writeFileSync("views/review.html", content);

    }

    catch(err) {

        console.log(err);

    }

    var review_css_list = [];

    for (var i = 0;i < sqlData.length;i++) {

        review_css_list.push(`
        
            #reviews${i} {
            
                grid-area: review${i};
            
                display: grid;
                grid-template-columns: 50% 50%;
                grid-template-rows: 30% 1fr;
                grid-template-areas: "name rating"
                                    "comment comment";
                margin: 5px;
            
            }
        
        `);

    }

    var review_css_joined_list = review_css_list.join('');

    var review_template_area_list = [];

    for (var i = 0;i < sqlData.length;i++) {

        review_template_area_list.push(`
        
            "review${i}"
        
        `)

    }

    var review_template_area_joined = review_template_area_list.join('');

    var review_css = `

        #review {

            grid-area: body;
        
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
        
            grid-template-areas:
            ${review_template_area_joined};
            width: 60%;
        
        
        }
        
        ${review_css_joined_list}

        #review-name {
        
            grid-area: name;
        
            text-align: center;
        }
        
        
        #review-rating {
        
            grid-area: rating;
        
            text-align: center;
        
            align-self: center;
        
        
        }
        
        #review-comment {
        
            border-top: 1px solid black;
            grid-area: comment;
        
        
        }

        #review-button button {
        
            background-color: lightcoral;
            padding: 12px;
            margin: 12px;
            justify-self: center;
            align-self: center;
        
        }
        
        .checked {
        
            color: orange;
        
        }

    `;

    try {

        var data = fs.writeFileSync("public/css/review.css", review_css);

    }

    catch(err) {

        console.log(err);

    }

    res.sendFile(__dirname + "/views/review.html");

})

app.get("/leave-a-review", function(req, res) {

    res.sendFile(__dirname + "/views/leave-a-review.html");

})

app.post("/leave-a-review", function(req, res) {

    res.send(req.body);

    console.log("?????");

    var sql = "INSERT INTO user_reviews (first_name, last_name, email, rating, comment) VALUES ?";
    var values = [[req.body["fname"], req.body["lname"], req.body["email"], req.body["rating"], req.body["comment"]]];
    conn.query(sql, [values], function(err, res, fields) {

        if (err) {
            console.log(err);
        }

    });

})


app.get("/contact", function(req, res) {

    res.sendFile(__dirname + "/views/contact.html");

})

app.get("/applicant", function(req, res) {

    console.log(req.body);
    res.send(req.body);

})

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "surgevisuals13@gmail.com",
        pass: "smon zzbg djno kaci"
    }
});


app.post("/applicant", function(req, res) {

    res.send(req.body);
    
    var mailOptions = {
        from: "surgevisuals13@gmail.com",
        to: "littlejamaicakilleen@gmail.com",
        subject: req.body["fname"] + " " + req.body["lname"] + " [RESUME]",
        text: "Age: " + req.body["age"] + "\nEmail: " + req.body["email"] + "\nAddress: " + req.body["address"] + "\nLocation: " + req.body["cityStateZip"]
        + "\nPosition: " + req.body["position"] + "\nWhere did you hear about us?: " + req.body["where"] + "\nWhy choose us?: " + req.body["why"] 
        + "\nWhat makes you stand out?: " + req.body["whatStandout"] + "\nHow well do you work with your coworkers?: " + req.body["workTeammates"] + "\nHow well do you work with customers?: " + req.body["workCustomers"]
        + "\nHow do you handle discourse in the work environment?: " + req.body["workEnvironment"] + "\nWhat is your availability like?: " + req.body["availability"] + "\nWhat is your desired wage?: " + req.body["desiredWage"]
        + "\nWhen can you start?: " + req.body["whenStart"]
    };

    transporter.sendMail(mailOptions, function(err, info) {

        if (err)
            console.log(err);
        else 
            console.log("Email sent: " + info.response);

    });

})

app.get("/applicant/success", function(req, res) {

    res.sendFile(__dirname + "/views/apply-success.html");

})

app.post("/contact-us", function(req, res) {

    res.send(req.body);

    var mailOptions = {
        from: "surgevisuals13@gmail.com",
        to: "littlejamaicakilleen@gmail.com",
        subject: req.body["fname"] + " " + req.body["lname"] + " [CONTACT]",
        text: "Email: " + req.body["email"] + "\nComment: " + req.body["comment"]
    };

    transporter.sendMail(mailOptions, function(err, info) {

        if (err)
            console.log(err);
        else 
            console.log("Email sent: " + info.response);

    })

})

app.get("/contact-us/success", function(req, res) {

    res.sendFile(__dirname + "/views/contact-success.html");

})

app.post("/newsletter", function(req, res) {

    res.send(req.body);

    var sql = "CREATE TABLE IF NOT EXISTS user_newsletter(email varchar(255));";
    conn.query(sql, function(err, res, fields) {

        if (err)
            console.log(err);
        

    })

    sql = "INSERT INTO user_newsletter (email) VALUES ?";
    values = [[req.body["email"]]];

    conn.query(sql, [values], function(err, res, fields) {

        if (err) 
            console.log(err);

    })

    var mailOptions = {
        from: "surgevisuals13@gmail.com",
        to: "littlejamaicakilleen@gmail.com",
        subject: req.body["email"] + " [NEWSLETTER]",
        text: req.body["email"] + " joined the newsletter!"
    };

    transporter.sendMail(mailOptions, function(err, info) {

        if (err)
            console.log(err);
        else 
            console.log("Email sent: " + info.response);

    })

})

console.log("Server running");

var config = {
    host: "localhost",
    port: 3060,
    user: "littlejamaicakilleen",
    password: "Blewis98$$",
    database: "littlejamaica_website",
};

var conn = MySql.createConnection({

    host: "localhost",
    user: "littlejamaicakilleen",
    password: "Blewis98$$",
    database: "littlejamaica_website"

})

conn.connect(function(err) {

    if (err) throw err;
    console.log("Connected to database");

    var sql = "CREATE TABLE IF NOT EXISTS user_reviews (ID int PRIMARY KEY AUTO_INCREMENT, first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(255), rating int, comment text)";

    conn.query(sql, function(err, res, fields) {

        if (err)
            console.log(err);

    })

})