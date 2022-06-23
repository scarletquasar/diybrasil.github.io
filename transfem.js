const html = document.querySelector('html');
let width = window.screen.availWidth;
let height = window.screen.availHeight;
console.log("The height is" + height);
console.log(width);

if((width >= 750 && height < 750 || width < 750 && height >= 750) || (width < 750 && height < 750)){
if(width < 750){
    const kuromi = document.querySelector('#kuromi');
    const kuromicontainer = document.querySelector("#kuromicontainer");
    kuromicontainer.removeChild(kuromi);
    const nav = document.querySelector('nav');
    nav.removeChild(kuromicontainer);
    const transflag = document.querySelector('#transflag');
    nav.removeChild(transflag);
    const navul = document.querySelectorAll('.navul');
    for(const i of navul){
        nav.removeChild(i);
    };
    const navul2 = document.createElement('ul');
    navul2.classList.add("navul");
    const sobre = document.createElement('li');
    sobre.classList.add("navli");
    sobre.classList.add("sobre");
    const sobrea = document.createElement('a');
    sobrea.href="index.html";
    sobre.appendChild(sobrea);
    const recursos = document.createElement('li');
    recursos.classList.add("navli");
    const recursosa = document.createElement('a');
    recursosa.href="recursos.html";
    recursos.appendChild(recursosa)
    const contato = document.createElement('li');
    contato.classList.add("navli");
    const contatoa = document.createElement('a');
    contatoa.href="contato.html";
    contato.appendChild(contatoa);
    const aplicacao = document.createElement('li');
    aplicacao.classList.add("navli");
    const aplicacaoa = document.createElement('a');
    aplicacaoa.href="autoaplicaçao.html";
    aplicacao.appendChild(aplicacaoa);
    recursosa.textContent = "Recursos";
    sobrea.textContent = "Sobre";
    contatoa.textContent = "Contato";
    aplicacaoa.textContent = "Aplicação";
    sobrea.style.color = "white";
    recursosa.style.color = "white";
    contatoa.style.color = "white";
    aplicacaoa.style.color = "white";
    nav.appendChild(navul2);
    navul2.appendChild(sobre);
    navul2.appendChild(recursos);
    navul2.appendChild(contato);
    navul2.appendChild(aplicacao);
};

screen.orientation.onchange = change;

function change(e){
    let width = window.screen.availWidth;
let height = window.screen.availHeight;
    console.log("The width is" + width);
    console.log(height);
    if(width < 750){
        /* Apply the transformation from landscape to portrait */
        const kuromi = document.querySelector('#kuromi');
    const kuromicontainer = document.querySelector("#kuromicontainer");
    kuromicontainer.removeChild(kuromi);
    const nav = document.querySelector('nav');
    nav.removeChild(kuromicontainer);
    const transflag = document.querySelector('#transflag');
    nav.removeChild(transflag);
    const navul = document.querySelectorAll('.navul');
    for(const i of navul){
        nav.removeChild(i);
    };
    const navul2 = document.createElement('ul');
    navul2.classList.add("navul");
    const sobre = document.createElement('li');
    sobre.classList.add("navli");
    sobre.classList.add("sobre");
    const sobrea = document.createElement('a');
    sobrea.href="index.html";
    sobre.appendChild(sobrea);
    const recursos = document.createElement('li');
    recursos.classList.add("navli");
    const recursosa = document.createElement('a');
    recursosa.href="recursos.html";
    recursos.appendChild(recursosa)
    const contato = document.createElement('li');
    contato.classList.add("navli");
    const contatoa = document.createElement('a');
    contatoa.href="contato.html";
    contato.appendChild(contatoa);
    const aplicacao = document.createElement('li');
    aplicacao.classList.add("navli");
    const aplicacaoa = document.createElement('a');
    aplicacaoa.href="autoaplicaçao.html";
    aplicacao.appendChild(aplicacaoa);
    recursosa.textContent = "Recursos";
    sobrea.textContent = "Sobre";
    contatoa.textContent = "Contato";
    aplicacaoa.textContent = "Aplicação";
    sobrea.style.color = "white";
    recursosa.style.color = "white";
    contatoa.style.color = "white";
    aplicacaoa.style.color = "white";
    nav.appendChild(navul2);
    navul2.appendChild(sobre);
    navul2.appendChild(recursos);
    navul2.appendChild(contato);
    navul2.appendChild(aplicacao);
    }
    else{
        /* Apply the transformation from portrait to landscape */
        const kuromi = document.createElement('img');
        kuromi.src = "kuromi.png";
        kuromi.setAttribute('id', "kuromi");
        const nav = document.querySelector('nav');
        const kuromicontainer = document.createElement('div');
        const diybrasil = document.querySelector('#diybrasil');
        kuromicontainer.setAttribute('id', "kuromicontainer");
        nav.insertBefore(kuromicontainer, diybrasil);
        kuromicontainer.appendChild(kuromi);
        const transflagimg = document.createElement('img');
        transflagimg.src = "trans.png";
        transflagimg.style.cssText = "width: 100%; height: 60%;";
        const transflag = document.createElement('div');
        transflag.setAttribute('id', "transflag");
        nav.appendChild(transflag);
        transflag.appendChild(transflagimg);
        const navul2 = document.querySelector('.navul');
        nav.removeChild(navul2);
        const navul0 = document.createElement('ul');
        const sobre = document.createElement('li');
        sobre.classList.add("navli");
        sobre.classList.add("sobre");
        const sobrea = document.createElement('a');
        sobrea.href = "index.html";
        sobre.appendChild(sobrea);
        const recursos = document.createElement('li');
        recursos.classList.add("navli");
        const recursosa = document.createElement('a');
        recursosa.href = "recursos.html";
        recursos.appendChild(recursosa);
        navul0.appendChild(sobre);
        navul0.appendChild(recursos);
        const navul1 = document.createElement('ul');
        const contato = document.createElement('li');
        contato.classList.add("navli");
        contato.classList.add("sobre");
        const contatoa = document.createElement('a');
        contatoa.href = "contato.html"
        contato.appendChild(contatoa);
        const aplicacao = document.createElement('li');
        aplicacao.classList.add("navli");
        const aplicacaoa = document.createElement('a');
        aplicacaoa.href = "autoaplicaçao.html";
        aplicacao.appendChild(aplicacaoa);
        navul1.appendChild(contato);
        navul1.appendChild(aplicacao);
        nav.insertBefore(navul0, transflag);
        nav.insertBefore(navul1, transflag);
        recursosa.textContent = "Recursos";
        sobrea.textContent = "Sobre";
        contatoa.textContent = "Contato";
        aplicacaoa.textContent = "Aplicação";
        navul0.classList.add("navul");
        navul1.classList.add("navul");

    };
}
}