const Nombre = document.getElementById('nombre');
const Apellido = document.getElementById('apellido');
const Genero = document.getElementById('genero');
const Color = document.getElementById('color');
const Especie = document.getElementById('especie');
const Ocupacion = document.getElementById('ocupacion');
const Descripcion = document.getElementById('descripcion');

const ApiUrl = 'https://localhost:5001/';


    let getbobesponjaData = async ()=> {
        const response = await fetch(`${ApiUrl}bobesponja/character/0`);
        const bobesponja = await response.json();
        console.log(bobesponja);
        const {nombre, apellido, genero, color, especie, ocupacion, descripcion} = bobesponja;
       
        Nombre.innerText = `Nombre : ${nombre}`;
        Apellido.innerText = `Apellido: ${apellido}`;
        Genero.innerText = `Genero: ${genero}`;
        Color.innerText = `Color: ${color}`;
        Especie.innerText = `Especie: ${especie}`;
        Ocupacion.innerText = `Ocupacion: ${ocupacion}`;
        Descripcion.innerText = `Descripcion: ${descripcion}`;
    
    };
    
    getbobesponjaData();

    //

const Nombre2 = document.getElementById('nombre2');
const Apellido2 = document.getElementById('apellido2');
const Genero2 = document.getElementById('genero2');
const Color2 = document.getElementById('color2');
const Especie2 = document.getElementById('especie2');
const Ocupacion2 = document.getElementById('ocupacion2');
const Descripcion2 = document.getElementById('descripcion2');

    let getbobesponjaData2 = async ()=> {
        const response2 = await fetch(`${ApiUrl}bobesponja/character/1`);
        const bobesponja2 = await response2.json();
        console.log(bobesponja2);
        const {nombre, apellido, genero, color, especie, ocupacion, descripcion} = bobesponja2;
       
        Nombre2.innerText = `Nombre : ${nombre}`;
        Apellido2.innerText = `Apellido: ${apellido}`;
        Genero2.innerText = `Genero: ${genero}`;
        Color2.innerText = `Color: ${color}`;
        Especie2.innerText = `Especie: ${especie}`;
        Ocupacion2.innerText = `Ocupacion: ${ocupacion}`;
        Descripcion2.innerText = `Descripcion: ${descripcion}`;
    
    };
    
    getbobesponjaData2();

    //

    const Nombre3 = document.getElementById('nombre3');
const Apellido3 = document.getElementById('apellido3');
const Genero3 = document.getElementById('genero3');
const Color3 = document.getElementById('color3');
const Especie3 = document.getElementById('especie3');
const Ocupacion3 = document.getElementById('ocupacion3');
const Descripcion3 = document.getElementById('descripcion3');

const ApiUrl = 'https://localhost:5001/';


    let getbobesponjaData3 = async ()=> {
        const response3 = await fetch(`${ApiUrl}bobesponja/character/2`);
        const bobesponja3 = await response3.json();
        console.log(bobesponja3);
        const {nombre, apellido, genero, color, especie, ocupacion, descripcion} = bobesponja3;
       
        Nombre3.innerText = `Nombre : ${nombre}`;
        Apellido3.innerText = `Apellido: ${apellido}`;
        Genero3.innerText = `Genero: ${genero}`;
        Color3.innerText = `Color: ${color}`;
        Especie3.innerText = `Especie: ${especie}`;
        Ocupacion3.innerText = `Ocupacion: ${ocupacion}`;
        Descripcion3.innerText = `Descripcion: ${descripcion}`;
    
    };
    
    getbobesponjaData3();

    //

    const Nombre4 = document.getElementById('nombre4');
const Apellido4 = document.getElementById('apellido4');
const Genero4 = document.getElementById('genero4');
const Color4 = document.getElementById('color4');
const Especie4 = document.getElementById('especie4');
const Ocupacion4 = document.getElementById('ocupacion4');
const Descripcion4 = document.getElementById('descripcion4');

const ApiUrl = 'https://localhost:5001/';


    let getbobesponjaData4 = async ()=> {
        const response4 = await fetch(`${ApiUrl}bobesponja/character/3`);
        const bobesponja4 = await response4.json();
        console.log(bobesponja4);
        const {nombre, apellido, genero, color, especie, ocupacion, descripcion} = bobesponja4;
       
        Nombre4.innerText = `Nombre : ${nombre}`;
        Apellido4.innerText = `Apellido: ${apellido}`;
        Genero4.innerText = `Genero: ${genero}`;
        Color4.innerText = `Color: ${color}`;
        Especie4.innerText = `Especie: ${especie}`;
        Ocupacion4.innerText = `Ocupacion: ${ocupacion}`;
        Descripcion4.innerText = `Descripcion: ${descripcion}`;
    
    };
    
    getbobesponjaData4();

    //

    const Nombre5 = document.getElementById('nombre5');
const Apellido5 = document.getElementById('apellido5');
const Genero5 = document.getElementById('genero5');
const Color5 = document.getElementById('color5');
const Especie5 = document.getElementById('especie5');
const Ocupacion5 = document.getElementById('ocupacion5');
const Descripcion5 = document.getElementById('descripcion5');

const ApiUrl = 'https://localhost:5001/';


    let getbobesponjaData5 = async ()=> {
        const response5 = await fetch(`${ApiUrl}bobesponja/character/4`);
        const bobesponja5 = await response5.json();
        console.log(bobesponja5);
        const {nombre, apellido, genero, color, especie, ocupacion, descripcion} = bobesponja5;
       
        Nombre5.innerText = `Nombre : ${nombre}`;
        Apellido5.innerText = `Apellido: ${apellido}`;
        Genero5.innerText = `Genero: ${genero}`;
        Color5.innerText = `Color: ${color}`;
        Especie5.innerText = `Especie: ${especie}`;
        Ocupacion5.innerText = `Ocupacion: ${ocupacion}`;
        Descripcion5.innerText = `Descripcion: ${descripcion}`;
    
    };
    
    getbobesponjaData5();

    //
