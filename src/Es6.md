Sintaxis 
    - js es case senritive.
    - se recomienda sintaxis camel case.
    - Punto y como (semicolon - ASI) terminar toda sentencia para q el intérprete no lo genere automáticamente y pueda generar error.
    - los bloques no necesitan; (todo lo q está dentro de llaves {})
    - Espacios en blanco son ignorados por el intérprete. (Se recomienda tabular el código)
    - Guía de estilo https://github.com/airbnb/javascript
    - lenguaje dinámicamente tipado (no hay q especificarle al interprete el tipo de dato)
    - js está basado en prototipos (le otorga métodos y propiedades a los datos q están en su scout)
    - todo dato creado está basado en un prototipo dándole sus propiedades y métodos



Scout 
    Ámbito donde viven las variables

comentario 
    Line // ...;
    multi linea /* .... */;

Imprimir en consola
    console.log();
    console.dir();

Variables y Costantes
    variable: espacio en memoria donde se guarda informacion.
        - Tienden a cambiar atrves del codigo;
        - No puede comenzar el nombre con numeros,
        - Por sintaxis no comienzan en mayuscula (atributo solo para clases)
        - Var: palabra recervada (var). Estructura (var nombreVariable = 'valor de la variable';)(hoisting) no importa si esta abajo o arriba se eleva. no tiene scoup o ambito de bloque.
        - Let: palabra recervada (Let). por fuera del bloke o scoup no existe.
        EJP
            var edad = '20';
            let edadDos = '25';  
            let edad_1 = 30,
                edad_2 = 31,
                edad_3 = 32;

        Costantes: datos que no van a variar.
            - las costantes no se pueden sobre escrivir.
            - Const: palabra recervada (const). Estructura (const NOMBRE = 'HolaMundo'; ).


Datos 
    - js es dinamicamente tipado.
    - js esta basado en prototipos
    - primitivos o compuestas

    Primitivos
        para saver el tipo de dato podemos usa typeof $ console.log(typeof nombreVariable);

        string (texto);
            - se declaran entre comillas dobles o simples.
            - como imprimir comillas dentro de string (backslash AltGr + ?)
                $ let holaMundo = '"hola mundo"';
                $ let holaMundo = "\"hola mundo\"";
            - Template string
                - como imprimir variables entre string (es6 template string) dentro de backick (Alt + 96)
                la variable debe estar dentro de un identificador ${variable}
                    $ let amigo = 'Tito';
                    $ let telefono = 123456;
                    $ let saludo = `hola amigo ${amigo} con telefono ${telefono}`

        number (numeros);
            - los numeros no llevan comillas.
                $ let numeroPrimo = 3;
            - si se suma un string '2' mas un numero 2 el los sumo = 4 por q es un lenguage dinamicamente tipado.
            - aplican las operaciones aritmeticas
                Vaja prioridad.
                    + => Suma
                    - => Resta
                Alta prioridad
                    * => Multiplicacion.
                    / => Divicion.
                    % => Modulo.

        boolean (true false);
            - solo pueden tener dos valores true o false  sin comillas.
        
        undefined;
            - no tiene un valor asignado la variable.

        null
            - no existe un valor o variable.
    

    Compuestos u Objetos
        arrays
        Objetos
        maps
        sets
        funciones


Operador 
    operaciones aritmeticas binarios
                Vaja prioridad.
                    + => Suma
                    - => Resta
                Alta prioridad
                    * => Multiplicacion.
                    / => Divicion.
                    % => Modulo.

    Operadores de comparacion binarios 
        Operador    Descripcion
        ==          Igual a
        ===         Igualdad extricta.
        !=          Diferente
        <           Menos q
        <=          Menos o igual q
        >           Mayor q
        >=           Mayor o igual q
        &&          operador and (Y)
        ||          operador or (o)
        !           operador not (no)

        console.log(5 == 5); true;
        console.log(5 < 5); false;

        Incremento Decremento
            ++ --
        
        += -= *= /=
            $ let numero = 25;
            $ let numeroEs_30 = numero + 5; 

            $ let numeroEs_30 = numero; 
            $ let numeroEs_30 = console.log( numero += 5;) 


Propiedades y metodos
    Propiedad: es una caracteristica (Alto ancho color)
    
    Metodo: es una funcion (algo que puede hacer). 
        -los metodos simbre cuentan con parentecis para los parametros de la funcion. 



string
    let saludo = '  hola mundo  ';
    
    Propiedades:
        - Longitus o numero de caracteres del string.
            console.log(saludo.length);
    
    Merodos:
        los metodos son funciones por lo tanto deven terminar en () asi no necesite parametros.

        Metodos sin parametros.
            - Quitar espacios al inicio y final.
                    console.log(saludo.trim());

            - poner en mayuscula menos espacios.
                    console.log(saludo.trim().toUpperCase());

            - poner en minuscula menos espacios.
                    console.log(saludo.trim().toLowerCase());

        Metodos con parametros.
            
            - optener indice dentro de un string parametro 1 caracter a buscar 2 desde q caracter.
                console.log(saludo.indexOf('hol',2));
            
            - optener indice dentro de un string desde atras parametro 1 caracter a buscar 2 desde q caracter.
                console.log(saludo.lastIndexOf('hol',2));

            - remplasa porciones de string recibe dos parametros antiguo strin y nuevo string
                console.log(saludo.replace('hola', 'Aja') );
            
            -combertir string en array .split();

            -extraer porcion del strin usando dos valores 
                .substring(a,b); - .substr(a,b); - .slice(a,b)
    


Condicionales
    if () {

    } else if {

    } else {

    }

    truthy y falsy values 
        son valores no boolean q se comportan como boolean 0 = false 1 = true

        truthy
            string no vacios, [], {} Numeros diferentes a cero
        falsy
         string vacios, cero, undefined, null, NaN



operador ternario
    es una forma mas compacta de if
    condicion ? valorTrue : valorFalse
    let nombre = prompt('Tu nombre es:');
     nombre.length > 5 console.log('nombre largo') : console.log('nombre corto') 

switch
    Compara un valor con diferentes valores posibles.

    switch (key){
        case value:

        break;
        case value:
        
        break;
        break;
        
        default:
    }

loops o siclos
    son siclos para repetir muchas vesec una tarea 

    For
        for (let i = 0; i <= 0; i+=2){
            console.log(i);
        }

        break : salir del siclo;
        continue: saltarse una iteracion;

        Ejp: 
        * buscar en array nombres q comiencen con a
            let nombre =['tomas', 'nico', 'Albaro', 'alverto'];

            for(let i = 0; i < nombres; i++){
                if(nombres[i].toUpperCase().indexOf('A') == 0){
                    console.log(nombres[i]);
                }
            }
        * sacar nombres q comiensan po a 
            for(let i = 0; i < nombres; i++){
                    if(nombres[i].toUpperCase().indexOf('A') == 0){
                        continue;
                    }
                        console.log(nombres[i]);
                }
            * salir de siclo cuando encuentre primer nombre por a
                for(let i = 0; i < nombres; i++){
                        if(nombres[i].toUpperCase().indexOf('A') == 0){
                            break;
                        }
                            console.log(nombres[i]);
                    }

        
    while

    Do while

        let clave = 'holaMundo';
        let pideClave;
        do{
            pideClave = prompt('poner clave');
        }while(pas != clave)

    for Of (es6)
    * recorre el Objeto array, strin,
    let nombres =['tomas', 'nico', 'Albaro', 'alverto'];
        for(let nombre of nombres){
            console.log(nombre);
        }


MODULO 3
