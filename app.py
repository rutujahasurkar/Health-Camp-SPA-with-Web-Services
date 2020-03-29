from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

@app.route('/',methods=['GET','POST'])
def patients():
    conn = sqlite3.connect('patients.db',check_same_thread=False)
    print('Connection Established')
    c = conn.cursor()
    if request.method == 'GET':
        conn.row_factory = sqlite3.Row
        c.execute("select * from patients")
        columns = [column[0]for column in c.description]
        result = []
        for row in c.fetchall():
            result.append(dict(zip(columns,row)))
        return render_template('index.html',result=result)

    elif request.method == 'POST':
        try:
            f_name = request.form['f_name']
            l_name = request.form['l_name']
            gender = request.form['gender']
            age = request.form['age']
            med = request.form['med']
            notes = request.form['notes']
            c.execute("INSERT INTO patients (f_name,l_name,gender,age,med,notes) VALUES (?,?,?,?,?,?)",
            (f_name,l_name,gender,age,med,notes))
            conn.commit()
            msg = "Record inserted successfully"
            print(msg)
        except:
            conn.rollback()
            msg = "Error in inserting the record"
            print(msg)
        finally:
            conn.row_factory = sqlite3.Row
            c.execute("select * from patients")
            columns = [column[0]for column in c.description]
            result = []
            for row in c.fetchall():
                result.append(dict(zip(columns,row)))  
            return render_template('index.html',msg=msg,result=result)


if __name__ == "__main__":
    app.run()
