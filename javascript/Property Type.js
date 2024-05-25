const obj1 = { propertyTypes : [
    {
        image: "./photo/img4.png",
        heading: "Apartment",
        prtes: "123 Properties",
        button: './Apartments.html',

    },

    {
        image: "./photo/img5.png",
        heading: "villa",
        prtes: "123 Properties",
        button: './villa.html',
               

    },
    
    {
        image: "./photo/img6.png",
        heading: "Home",
        prtes: "123 Properties",
        button: './home.html',   

    },
    
    {
        image: "./photo/img7.png",
        heading: "Office",
        prtes: "123 Properties",
        button: './office.html',

        
    },
    
    {
        image: "./photo/img8.png",
        heading: "building",
        prtes: "123 Properties",
        button: './building.html',



    },
    
    {
        image: "./photo/img9.png",
        heading: "Townhouse",
        prtes: "123 Properties",
        button: './township.html',



    },
        
    {
        image: "./photo/img10.png",
        heading: "Shop",
        prtes: "123 Properties",
        button: './shop.html',


        
    },
    
    {
        image: "./photo/img11.png",
        heading: "Garage",
        prtes: "123 Properties",
        button: './garaj.html',
        

    },


]}


function displayData(allProduct){
    let str = ''
    allProduct.map((p) => {

        str +=  `
                    <div class="col-xl-3 col-lg-3 col-sm-6">
                        <a class="nav-link text-center rounded p-3 Properties ms-3 mt-5" href="${p.button}">
                            <div class="rounded p-4">
                                <img src="${p.image}" alt="img" class="mb-3">
                                <h5>${p.heading}</h5>
                                <span>${p.prtes}</span>
                            </div>
                        </a>
                    </div>
                `
        
    })

    document.getElementById('productData').innerHTML = str
}


displayData(obj1.propertyTypes)










        // button: <a href="./Apartments.html"></a>,
        // button: <a href="./villa.html"></a>,
        // button: <a href="./home.html"></a>,
        // button: <a href="./office.html"></a>,
        // button: <a href="./building.html"></a>,
        // button: <a href="./township.html"></a>,
        // button: <a href="./shop.html"></a>,
        // button: <a href="./garaj.html"></a>,
