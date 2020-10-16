//Escrito por Fabio Mendes

//Função para validar o formulário, executada ao clicar em Enviar na página faleConosco.html
function validarFormulario(){
    
    //Ao final da função, 'sinaliza' com true ou false para enviar ou não o formulário
    var flag = true;

    //atribuindo a variáveis os elementos de entrada de dados do formulário
    var input_nome = document.getElementById("inputNome");
    var input_email = document.getElementById("inputEmail");
    var input_mensagem = document.getElementById("textareaMensagem");
    
    //atribuindo a variáveis os valores lidos nos campos do formulario
    var conteudo_nome = document.forms["meu_form"].campo_nome.value;
    var conteudo_email = document.forms["meu_form"].campo_email.value;
    var conteudo_mensagem = document.forms["meu_form"].campo_mensagem.value;

    //Os erros encontrados serão concatenados aqui e ao final exibidos em uma alert
    var erros = "";

    //Verificando se o campo nome está em branco
    if(conteudo_nome == "")
    {
        erros = "-Preencha o campo Nome corretamente\n";//concatena a mensagem de erro
        flag = false;//impede o envio
        input_nome.style.backgroundColor = "hsl(12, 100%, 90%)";//destaca o campo incorreto
    }

    //Valida o campo email verificando se contém @
    if(conteudo_email.indexOf("@") == -1)
    {
        erros = erros + "-Preencha o campo E-mail corretamente\n";//concatena a mensagem de erro
        flag = false;//impede o envio
        input_email.style.backgroundColor = "hsl(12, 100%, 90%)";//destaca o campo incorreto
    }

    //Verifica se o campo Mensagem está em branco
    if(conteudo_mensagem == "")
    {
        erros = erros + "-Preencha o campo Mensagem";//concatena a mensagem de erro
        flag = false;//impede o envio
        input_mensagem.style.backgroundColor = "hsl(12, 100%, 90%)";//destaca o campo incorreto
    }

    //Verifica se o envio deve ser realizado
    if(flag == true)
    {
        alert("Tudo certo!\nPressione OK para enviar.\nAgradecemos o contato.");//Alerta de envio OK
        document.forms["meu_form"].submit();//Envio

        //Modificando os campos para o estilo padrão
        input_nome.style.backgroundColor = "white";
        input_email.style.backgroundColor = "white";
        input_mensagem.style.backgroundColor = "white";
    } else {
        //Informado ao usuário o(s) erro(s)
        alert(erros);
    }
}