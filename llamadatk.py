import os
import tkinter as tk
from tkinter import messagebox

def obtener_producto():
    # Obtener el ID ingresado por el usuario
    id = entry_id.get()
    
    if not id.isdigit():
        messagebox.showerror("Error", "Por favor, ingrese un ID válido (número).")
        return

    # Comando para consultar la base de datos MySQL usando la línea de comandos
    query = f"SELECT * FROM articulos WHERE id = {id};"
    
    # El comando para ejecutar en MySQL
    command = f"mysql -u root -D producto -e \"{query}\""

    try:
        # Ejecutar el comando MySQL
        response = os.popen(command).read()
        
        # Si la respuesta está vacía, significa que el producto no existe
        if "Empty set" in response:
            label_status.config(text="Status: Producto no existe")
            label_name.config(text="Nombre: Desconocido")
            label_price.config(text="Precio: Desconocido")
        else:
            # Procesar la respuesta, que generalmente viene en formato tabular
            # Aquí, por simplicidad, asumimos que el formato es el esperado
            lines = response.splitlines()
            if len(lines) > 1:  # Si hay más de una línea, el producto existe
                columns = lines[1].split("\t")  # Separar por tabuladores
                name = columns[1]  # Asumimos que el nombre está en la segunda columna
                price = columns[2]  # Asumimos que el precio está en la tercera columna
                
                # Mostrar los datos en las etiquetas
                label_status.config(text="Status: Disponible")
                label_name.config(text=f"Nombre: {name}")
                label_price.config(text=f"Precio: {price}")
            else:
                label_status.config(text="Status: Producto no existe")
                label_name.config(text="Nombre: Desconocido")
                label_price.config(text="Precio: Desconocido")
    
    except Exception as e:
        messagebox.showerror("Error", f"Ocurrió un error: {e}")

# Crear la ventana principal
root = tk.Tk()
root.title("Consulta de Producto")

# Crear y colocar los widgets
tk.Label(root, text="Ingrese el ID del producto:", font=("Arial", 16)).pack(pady=15)

entry_id = tk.Entry(root, font=("Arial", 16))
entry_id.pack(pady=5)

tk.Button(root, text="Buscar Producto", font=("Arial", 16), command=obtener_producto).pack(pady=15)

# Labels con texto más grande
label_status = tk.Label(root, text="Status: ", font=("Arial", 18))
label_status.pack(pady=2)

label_name = tk.Label(root, text="Nombre: ", font=("Arial", 18))
label_name.pack(pady=2)

label_price = tk.Label(root, text="Precio: ", font=("Arial", 18))
label_price.pack(pady=2)

# Ejecutar el bucle principa
root.mainloop()