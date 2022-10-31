const compiler = require("compilex");
const option = {stats : true};
compiler.init(option);

exports.compilerControllerRead = (req,res)=>{
    res.render("compiler/compiler")
}

exports.compilerControllerPost = (req,res)=>{
    const {code,input,lang} = req.body;

    let output = (data)=>{
        if(data.error){

            res.send(`
            <section style="
            font-size:15px;
            border-radius: 10px;
            background: black;
            height:50vh;
            width:50vw;
            border:5px groove gray;
            margin: 20vh auto;
            display:flex; justify-content:center; align-items:center;"> 
            <h1 style="color:red;">ERROR : ${data.error}</h1>
            </section>`)
        }else{
            res.send(`
            <section style="
            font-size:25px;
            border-radius: 10px;
            background: black;
            height:50vh;
            width:50vw;
            border:5px groove gray;
            margin: 20vh auto;
            display:flex; justify-content:center; align-items:center;"> 
            <h1 style="color:royalblue;">OUTPUT : ${data.output}</h1>
            </section>`)
        }
    }

    let envDataC = { OS : "windows" , cmd : "g++", options:{timeout:10000}};
    let envData = { OS : "windows"};
    
    if((lang === "C") || (lang === "C++"))
    {        
        if(input){    
        	compiler.compileCPPWithInput(envDataC , code ,input , output);
	   }
	   else{	
        	compiler.compileCPP(envDataC , code , output);
	   }
    }
    if( lang === "Java")
    {
        if(input){
            compiler.compileJavaWithInput(envData , code , input ,output);            
        }
        else{
            compiler.compileJava(envData , code , output);
        }
    }
    if( lang === "Python")
    {
        if(input){
            compiler.compilePythonWithInput(envData , code , input , output);            
        }
        else{
            compiler.compilePython(envData , code , output);
        }
    }
}