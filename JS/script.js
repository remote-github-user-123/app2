let htmlEditor = document.getElementById("inputh");
let cssEditor = document.getElementById("inputc");
let jsEditor = document.getElementById("inputj");

editorParent = document.getElementById("editor");
let timeout;

//Total Markup for global use
let markup;


const scopeStyles = (styles) => {
    styles.replace('{', ' .ouput')
}


const compile = () => {

    console.log("compiling");

    let html = htmlEditor.value;
    let css = cssEditor.value;
    let js = jsEditor.value;
    let startIndex = html.indexOf("<body>")+6;
    let endIndex = html.indexOf("</body>");
    html = html.slice(startIndex,endIndex);
    let outputDiv=document.getElementById("output");
    // markup = html+"<style>"+css+"</style>";
    // markup = `${html}<style>#output *{${css}}</style>`;
    markup = `${html}<style>${css}</style>`;
    localStorage.setItem('markup', markup);
    console.log(markup);
    outputDiv.innerHTML=html+"<style> #output "+css+"</style>";
    let scriptTag = document.createElement("script");
    document.body.append(scriptTag);
    console.log(scriptTag);
    scriptTag.innerHTML = js;
    document.body.removeChild(scriptTag.previousSibling);
}

//On Landing
let editors = [htmlEditor, cssEditor, jsEditor];
let mode = localStorage.getItem("mode") || "bright";
document.querySelectorAll("link")[0].setAttribute("href", `${mode}Styles.css`);
htmlEditor.value = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <h1>Hello there</h1>
  <img src="https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"/>
  
</body>
</html>`;
compile();



// document.getElementById("compile").addEventListener('click', () => {
//     compile();
    
// });

///////////////////////Debounce


editorParent.addEventListener('keydown', () => {
    if(timeout){
        clearTimeout(timeout);
        // return;   
    }
    timeout = setTimeout(compile, 1500);

})


/////////////////////////

document.getElementById("mode").addEventListener("click", () => {
    mode = mode === "bright" ? "dark" : "bright";
    localStorage.setItem("mode", mode);
    document.querySelectorAll("link")[0].setAttribute("href", `${mode}Styles.css`);
})


let btns = document.querySelectorAll('.btn');
let activeBtn = btns[0];

function clearAll(btn, editorIndex){
    for(let i of btns){
        if(i!==btn){
            i.classList.remove('active');
        }
    }

    for(let j=0; j<3; j++){
        if(j !== editorIndex){
            editors[j].style.display = 'none';
        }
    }
}

for(let i of btns){
    i.addEventListener('click', () => {
        i.classList.add('active');
        
        let caseConstant = i.getAttribute('data-editor');
        console.log(caseConstant);


        editors[parseInt(caseConstant)].style.display = "block";
                
        clearAll(i, parseInt(caseConstant));

    })
}


window.addEventListener('beforeunload', () => {
    compile();

    // console.log(markup);
    // localStorage.setItem('markup', markup);
})

// window.addEventListener('')
