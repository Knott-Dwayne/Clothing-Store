class Clothe{
    constructor(cname, price, description, colors, prdimg){
        this.cname = cname
        this.price = price
        this.description = description
        this.colors = colors
        this.prdimg = prdimg
    }
    
    
    gridView(){
        
        
        var html_display=
                '<div class="col">'
                    +'<div class="card h-100">'
                    +'<img src="'+this.prdimg+'" class="card-img-top" alt="'+this.cname+'">'
                    +
                    +
                    +
                    +
                +
        return html_display

    }
    
    detailedView(){

    }
    

}

function displayClothes(){

    var clothe1 = new Clothe(1, "Dior Bag", Printed nylon shoulder,multi,"img/BM2059AQ785_HH3KD_0.jpg)
    var clothe2 = new Clothe()
    var clothe3 = new Clothe()
    var clothe4 = new Clothe()
    var clothe5 = new Clothe()
    var clothe6 = new Clothe()
    var clothes =[]
    clothes.push(clothe1)
    clothes.push(clothe2)
    clothes.push(clothe3)
    clothes.push(clothe4)
    clothes.push(clothe5)
    clothes.push(clothe6)
    gvElement = document.getElementById('clotheGrid')
    var gvClothes = ""
    clothes.forEach(m => {
        gvClothes+= m.gridView()
    });

    if(gvElement)
        gvElement.innerHTML = gvClothes
}

function (){

}

function(){

}
