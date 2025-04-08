

function verResLib() {

    
    fetch( "http://localhost:3000/lib/getLibros",
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
     )
     .then( (rta) => { return( rta.json() )} )
     .then( (res) => {

        console.log( "===>", res ) ;

        if( res.rta == "OK" ) {
            res = res.info ;
            
            document.getElementById("rta").innerHTML  = res[0].Isbn ;
            document.getElementById("id").value       = res[0]._id ;
            document.getElementById("isbn").value     = res[0].Isbn ;
            document.getElementById("titulo").value   = res[0].Titulo ;

            var tabla = document.getElementById("libResumen") ;
            var tbody = tabla.querySelector("tbody") ;

            tbody.innerHTML = res.map( libro => 
                `
                    <tr>
                        <td>${libro._id}</td>
                        <td>${libro.Isbn}</td>
                        <td>${libro.Titulo}</td>
                    </tr>
                `
            ).join('') ;
        } else {
            document.getElementById("rta").innerHTML = res.info ;
        }

     } )
     .catch( (err) => {
        console.log( "ERR:" + err ) ;
     } ) ;
}

function addLibro() {
    
    var data = {
        isbn:     document.getElementById("isbn").value,
        titulo:   document.getElementById("titulo").value,
        autor:    document.getElementById("autor").value,
        sinopsis: document.getElementById("sinopsis").value
    } ;

    fetch( "http://localhost:3000/lib/addLibro",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( data )
        }
     )
     .then( (rta) => { return( rta.json() )} )
     .then( (res) => {

        console.log( "===>", res ) ;

        if( res.rta == "OK" ) {
            document.getElementById("rta").innerHTML  = "Actualizados=" + res.info.modifiedCount ;
        } else {
            document.getElementById("rta").innerHTML = res.info ;
        }

     } )
     .catch( (err) => {
        console.log( "ERR:" + err ) ;
     } ) ;
}

function delLibro() {
    
    var data = {
        id: document.getElementById("id").value
    } ;

    fetch( "http://localhost:3000/lib/delLibro",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( data )
        }
     )
     .then( (rta) => { return( rta.json() )} )
     .then( (res) => {

        console.log( "===>", res ) ;

        if( res.rta == "OK" ) {
            document.getElementById("rta").innerHTML  = "Eliminados=" + res.info.deletedCount ;
        } else {
            document.getElementById("rta").innerHTML = res.info ;
        }

     } )
     .catch( (err) => {
        console.log( "ERR:" + err ) ;
     } ) ;
}

function updLibro() {
    
    var data = {
        id:     document.getElementById("id").value,
        titulo: document.getElementById("titulo").value
    } ;

    fetch( "http://localhost:3000/lib/updLibro",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( data )
        }
     )
     .then( (rta) => { return( rta.json() )} )
     .then( (res) => {

        console.log( "===>", res ) ;

        if( res.rta == "OK" ) {
            document.getElementById("rta").innerHTML  = "Actualizados=" + res.info.modifiedCount ;
        } else {
            document.getElementById("rta").innerHTML = res.info ;
        }

     } )
     .catch( (err) => {
        console.log( "ERR:" + err ) ;
     } ) ;
}

function getLibroXAutor() {
    
    var autNom = { autor: document.getElementById("autor").value } ;
    fetch( "http://localhost:3000/lib/getLibroXAutor",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( autNom )
        }
     )
     .then( (rta) => { return( rta.json() )} )
     .then( (res) => {

        console.log( "===>", res ) ;

        if( res.rta == "OK" ) {
            res = res.info ;
            var libro = document.getElementById("libro").value ;

            //document.getElementById("rta").innerHTML = JSON.stringify(res) ;
            document.getElementById("rta").innerHTML  = res[0].Isbn ;
            document.getElementById("id").value       = res[0]._id ;
            document.getElementById("isbn").value     = res[0].Isbn ;
            document.getElementById("titulo").value   = res[0].Titulo ;
            document.getElementById("sinopsis").value = res[0].Sinopsis ;
            document.getElementById("autor").value    = res[0].Autor.Nombre + " " + res[0].Autor.Apellidos ;

            var tabla = document.getElementById("misLibros") ;
            var tbody = tabla.querySelector("tbody") ;

            tbody.innerHTML = res.map( libro => 
                `
                    <tr>
                        <td>${libro.Isbn}</td>
                        <td>${libro.Titulo}</td>
                        <td>${libro.Autor.Nombre} ${libro.Autor.Apellidos}</td>
                        <td>${libro.Sinopsis}</td>
                        <td>${libro.numPaginas}</td>
                        <td>${libro.tipoLiteratura}</td>
                    </tr>
                `
            ).join('') ;
        } else {
            document.getElementById("rta").innerHTML = res.info ;
        }

     } )
     .catch( (err) => {
        console.log( "ERR:" + err ) ;
     } ) ;
}

function llamarAPI() {
    
    fetch( "http://localhost:3000/lib/getLibros",
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
     )
     .then( (rta) => { return( rta.json() )} )
     .then( (res) => {

        console.log( "===>", res ) ;

        if( res.rta == "OK" ) {
            res = res.info ;
            var libro = document.getElementById("libro").value ;

            //document.getElementById("rta").innerHTML = JSON.stringify(res) ;
            document.getElementById("rta").innerHTML  = res[libro].Isbn ;
            document.getElementById("id").value       = res[libro]._id ;
            document.getElementById("isbn").value     = res[libro].Isbn ;
            document.getElementById("titulo").value   = res[libro].Titulo ;
            document.getElementById("sinopsis").value = res[libro].Sinopsis ;
            document.getElementById("autor").value    = res[libro].Autor.Nombre + " " + res[libro].Autor.Apellidos ;

            var tabla = document.getElementById("misLibros") ;
            var tbody = tabla.querySelector("tbody") ;

            tbody.innerHTML = res.map( libro => 
                `
                    <tr>
                        <td>${libro.Isbn}</td>
                        <td>${libro.Titulo}</td>
                        <td>${libro.Autor.Nombre} ${libro.Autor.Apellidos}</td>
                        <td>${libro.Sinopsis}</td>
                        <td>${libro.numPaginas}</td>
                        <td>${libro.tipoLiteratura}</td>
                    </tr>
                `
            ).join('') ;
        } else {
            document.getElementById("rta").innerHTML = res.info ;
        }

     } )
     .catch( (err) => {
        console.log( "ERR:" + err ) ;
     } ) ;
}

function getLibros() {
    llamarAPI() ;
    console.log( "TAREA FINALIZADA" ) ;
}