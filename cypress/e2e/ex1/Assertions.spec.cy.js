/// <reference types="cypress" />



it('Igualdade',() =>{

    var a =1;
    //verifica se a váriavel é igual a 1
    expect(a).to.be.equal(1);

    //verifica se a váriavel A é diferente de 3
    expect(a, "Deveria ser 1").not.to.be.equal(3);

    console.log(a); 

})



it("Veracidade",() =>{
    var a = true;
    var b = null;
    let c;
    //verifica se o valor armazenado na váriavel é verdadeiro
    expect(a).to.be.true;

    //verifica se o a váriavel que está sendo inspecionada é verdadeira
    expect(true).to.be.true;

    //verifica se a váriavel b possui valor nulo
    expect(b).to.be.null;

    //verifica se a váriavel a não é um valor nulo
    expect(a).not.to.be.null;

    //verifica se a váriavel c tem valor não definido
    expect(c).to.be.undefined;
})

it("Igualdade de objetos",() => {
    const objeto = {
        a: 1,
        b: 2,
        c: 3
    }
    //quatro formas diferentes de verificar a igualdade de um objeto no caso comparando ele com ele mesmo
    expect(objeto).equal(objeto)
    expect(objeto).equals(objeto)
    expect(objeto).eq(objeto)
    expect(objeto).to.be.equal(objeto)

    //verificar se as propriedades do objeto são iguais. necessário passar o comando deep para verificar as propriedades do objeto 
    expect(objeto).to.be.deep.equal(objeto)
    expect(objeto).eql({a: 1, b: 2, c: 3,})

    //verifica se uma ou mais propriedades estão inclusas no objeto com determinado valor 
    expect(objeto).include({a: 1,})

    //verificar se o objeto tem a propriedade b
    expect(objeto).to.have.property("b")

    //verificar se o objeto tem a propriedade b e se o seu valor é 2
    expect(objeto).to.have.property("b",2)

    //verifica se o objeto não está vazio
    expect(objeto).to.not.be.empty

    //verifica se o objeto está vazio
    expect({}).to.be.empty

})

it("Arrays",() =>{
    const arr = [1,2,3]

    //verifica se o array possui todos os elementos
    expect(arr).to.have.members([1,2,3])

    //verifica se alguns elementos do array estão presentes
    expect(arr).to.include.members([1,3])

    //verifica se o array não está vazio
    expect(arr).to.not.be.empty

    //verifica se o array está vazio
    expect([]).to.be.empty


})


it("Types",() =>{
    const num = 1
    const str = 'text'

    //verifica se a váriavel é do tipo number
    expect(num).to.be.a("number")

    //verifica se a váriavel é do tipo string
    expect(str).to.be.a("String")

    //verifica se é um objeto
    expect({}).to.be.an("object")

    //verifica se é um array
    expect([]).to.be.an("array")
    
})

