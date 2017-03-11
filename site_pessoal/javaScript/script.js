
var pessoa = {
	nome: 'Leydson Tavares',
	cargo: 'Development Software by Stefanini',
	foto: 'style/img/myImagem.jpg'
}



exibirDados = function (){

	log("Cheguei");

	document.getElementById('nomePessoa').innerHTML = pessoa.nome;
    document.getElementById('cargoPessoa').innerHTML = pessoa.cargo;
    document.getElementById('fotoPessoa').src = pessoa.foto;

}
