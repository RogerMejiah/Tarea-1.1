// Ejercicio 1
// Genere una lista que contenga solo los autores de dicha lista en una variable
// llamada: autores

const libros = [{titulo: 'Cien años de soledad', autor: 'Gabriel Garcia Marquez',anio: 1967},
    {titulo: "Don Quijote de la Mancha", autor: 'Miguel de Cervantes',anio: 1605},
    {titulo: "1984", autor: 'George Orwell',anio: 1949},]

    const autores = libros.map(libro => libro.autor)

    console.log('Ejercicio 1')
    console.log(autores)

// Ejercicio 2
// Modifique el valor del salario, siempre y cuando la antigüedad sea mayor a 5 años, el
// aumento será del 10%. Imprima los nuevos valores.

const empleado = {nombre: 'Roger',salario: 15600, antiguedad: 9}
     if(empleado.antiguedad > 5){
        empleado.salario *= 1.10
     }

     console.log ('Ejercicio 2')
     console.log(`Nombre: ${empleado.nombre}`)
     console.log(`Salario: L ${empleado.salario}`)
     console.log(`Antiguedad: ${empleado.antiguedad} anios`) 

// Ejercicio 3
// Imprima el número mayor de la lista (sin ordenarla)

const numeros = [5 , 8 , 12 , 3 , 7 , 19 , 1, 10, 2]

     function numMayorLista(lista){
        let mayor = lista[0]
        for(let i = 1; i < lista.length; i++){
            if(mayor < lista[i]){
                mayor = lista[i]
            }
        }
        return mayor
     }

     const numMayor = numMayorLista(numeros)

     console.log('Ejercicio 3')
     console.log(`El numero mayor de la lista es: ${numMayor}`)

// Ejercicio 4
// Con el listado anterior, calcule el promedio de todos los números impares

function promedioImpares(numeros){
    let suma = 0
    let contador = 0
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 !== 0){
            suma += numeros[i]
            contador++
        }
    }
    return suma / contador
}

const promedio = promedioImpares(numeros)

console.log('Ejercicio 4')
console.log(`El promedio de impares es: ${promedio}`)

// Ejercicio 5
// Desestructure el objeto para extraer los valores en 3 variables diferentes y mostrarlas
// en consola.

const persona = {nombre: 'Ana',edad: 25, ciudad: 'SPS'}

const {nombre,edad,ciudad} = persona

console.log('Ejercicio 5')  
console.log(`Nombre: ${nombre}`)
console.log(`Edad: ${edad}`)
console.log(`Ciudad: ${ciudad}`)