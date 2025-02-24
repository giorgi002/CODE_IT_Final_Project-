let products;
let singleproduct;
let sortedProducts;
let originalProducts;


const main=document.getElementById("main");
const modal= document.getElementById("modal-container");
const modalcontent=document.getElementById("modal-content");
const header=document.getElementById("header");


fetch("https://fakestoreapi.com/products")
    .then((resp) => resp.json())
    .then((res)=>{
        products=res;
        originalProducts = [...res];
        renderProducts(products)
        
    })
    const closeModal=()=>{
        modal.style.display="none";
        header.style.display="flex";
     }


    const modalImage=document.createElement("img");
    const box=document.createElement("section");
    const modalTitle=document.createElement("h2");
    const modalPrice=document.createElement("p");
    const modalDescription=document.createElement("p");
    const modalCategory=document.createElement("h3");
    const modalRating=document.createElement("p");


    const fetchSingleProduct=(id)=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((resp)=> resp.json())
            .then((res)=>{
                singleproduct=res;
                console.log(singleproduct);


                modalImage.src=singleproduct.image;
                modalTitle.innerHTML=singleproduct.title;
                modalDescription.innerHTML=singleproduct.description;
                modalCategory.innerHTML=singleproduct.category;
                modalPrice.innerHTML=`$${singleproduct.price.toFixed(2)}`;
                modalCategory.innerHTML = `⭐ ${singleproduct.rating.rate} (${singleproduct.rating.count} reviews)`;


                box.append(modalTitle,modalCategory,modalDescription,modalPrice,modalRating);
                modalcontent.append(modalImage,box);

        })
   }
   const sortProducts = () => {
    const sortOrder = document.getElementById("sort").value;

    if (sortOrder === "asc") {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        renderProducts(sortedProducts);
    } else if (sortOrder === "desc") {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        renderProducts(sortedProducts);
    } else {
        renderProducts(originalProducts); 
    }
};


const renderProducts=(products)=>{
    let main=document.getElementById("main");
    if(main){
        main.remove();
    }
    main=document.createElement("main");
    main.id="main"
    products.map((prod)=>{
        const container= document.createElement("div");
        const title= document.createElement("h2");
        const description= document.createElement("p");
        const image=document.createElement("img");
        const button=document.createElement("button");
        const price=document.createElement("p");

    
        title.innerHTML=prod.title;
        description.innerHTML=prod.description;
        image.src=prod.image;
        button.innerHTML="See more";
        price.innerHTML=`$${prod.price.toFixed(2)}`;



        title.className="item-title";
        description.className="item-description";
        container.className="item-container";
        image.className="item-image";
        button.className="item-button";
        button.id=prod.id;


        container.appendChild(image);
        container.appendChild(title);
        container.appendChild(description);
        container.appendChild(price);
        container.appendChild(button);
        main.appendChild(container);
        



        button.addEventListener("click",(event)=>{
            modal.style.display="flex";
            header.style.display="none";
            fetchSingleProduct(event.target.id)
        })

})
document.body.appendChild(main);
    
}


