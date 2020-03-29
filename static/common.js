
//To dispplay the selected image
function showImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img')
                .attr('src', e.target.result)
                .width(200)
                .height(250)
                .css("display","block");
            $('td').removeClass("imageBox");
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// to display the Demographics tab by default on page load
function load()
{
    document.getElementById('Demographics').style.display = "block";
}

// to display the tabs according
function getForm(evt,ID)
{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("container");
    for (i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) 
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(ID).style.display = "block";
}

/*
// creates the DB and the table
function createDB()
{
    db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
    //create table
    db.transaction(function (tx) {   
        var query = 'CREATE TABLE IF NOT EXISTS PATIENTDETAILS (f_name,l_name,gender,age,medications,notes,image)';
        tx.executeSql(query);
        row_index = 0;
     });
    
}

// to insert the data to the database
function insert()
{
    db.transaction(function(tx)
    {
        var f_name = document.getElementById("f_name").value || null;
        var l_name = document.getElementById("l_name").value || null;
        var gender = document.getElementById("gender").value || null;
        var age = document.getElementById("age").value || null;
        var medications = document.getElementById("medications").value || null;
        var notes = document.getElementById("notes").value || null;
        var img_path = document.getElementById("img").src || null;
        if (f_name == null)
        {
            alert("Enter First Name");
        }
        else if(l_name == null)
        {
            alert("Enter Last Name");
        }
        else if(gender == "select")
        {
            alert("Select Gender");
        }
        else if(age == null)
        {
            alert("Enter Age");
        }
        else if(medications == null)
        {
            alert("Enter Medications");
        }
        else if(notes == null)
        {
            alert("Enter Notes");
        }
        else if(img_path == null)
        {
            alert("Provide Image");
        }
        else
        {
            var query = 'INSERT INTO PATIENTDETAILS (f_name,l_name,gender,age,medications,notes,image) VALUES ("' + f_name + '","'+ l_name + '","'+ gender + '","'+ age + '","'+ medications+ '","'+ notes + '","' + img_path +'")';
            tx.executeSql(query);
            alert("Data Inserted!!!");
        }
    });
}

// to read the data from the SQL database
function read()
{
    db.transaction(function(tx)
    {
        var query = 'SELECT * FROM PATIENTDETAILS';
        tx.executeSql(query,[],function(tx,results)
            {
                var len = results.rows.length;
                if(len == 0)
                {
                    alert("Please enter details for atleast one patient!!");
                    getForm(event,'Demographics');
                }
                    for (i=row_index;i<len;i++)
                    {
                        var details = null;
                        if (i%2==0)
                            details = '<tr style="background-color: dimgrey;">'
                        else
                            details = '<tr style="background-color: darkgray;">'
                        details += "<td>" + results.rows.item(i).f_name + " " + results.rows.item(i).l_name + "</td>";
                        details += "<td>" + results.rows.item(i).age + "</td>";
                        details += "<td>" + results.rows.item(i).gender + "</td>";
                        var photo = results.rows.item(i).image;
                        details += '<td><img width="80" height="100" src= "'+photo+ '"</td>';
                        details += "<td>" + results.rows.item(i).medications + "</td>";
                        details += "<td>" + results.rows.item(i).notes + "</td></tr>";
                        document.querySelector('#Patient_Details').innerHTML += details;
                    }
                    row_index = i; // to store the index of the last displayed row
                
            })
    });
}
*/