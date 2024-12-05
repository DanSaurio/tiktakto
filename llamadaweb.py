from flask import Flask, render_template, request
import mysql.connector

app = Flask(__name__)

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="producto"
)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        codigo = request.form['codigo']
        mycursor = mydb.cursor()
        mycursor.execute("SELECT * FROM articulos WHERE id = %s", (codigo,))
        resultado = mycursor.fetchall()
        mycursor.close()  # Cierra el cursor después de usarlo
        if not resultado:
            return render_template('no_existe.html')

        return render_template('resultados.html', resultado=resultado)
    return render_template('index.html')

@app.route('/perfil')
def perfil():
    return render_template('perfil.html')

@app.route('/resultados')
def resultados():
    return render_template('resultados.html')

if __name__ == "__main__":
    app.run(debug=True)
