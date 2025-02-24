const main1=document.getElementById("profile-div");

   fetch("https://dummyjson.com/users/1")
       .then((resp) => resp.json())
       .then((info) => {

        const container=document.createElement("div");
        const name=document.createElement("h1");
        const job=document.createElement("h2");
        const image=document.createElement("img");
        const address=document.createElement("h3");
        const infoabout=document.createElement("p");
        const email=document.createElement("h3");
        

        name.innerHTML=`${info.firstName} ${info.lastName}`
        job.innerHTML = info.company.title;
        image.src="https://img.freepik.com/premium-photo/business-casual-woman-smiling-office_893012-57.jpg";
        address.innerHTML = `📍 Based in ${info.address.city}, ${info.address.state}`;
        infoabout.innerHTML="I am always excited to find out new frameworks and improve user experience with clean and efficient code.";
        email.innerHTML=`📞 Contact: ${info.phone}`;
       

        image.className="profile-image";
        name.className="profile-name";
        container.className="profile-card";
        infoabout.className="profile-info";


        container.appendChild(image);
        container.appendChild(name);
        container.appendChild(job);
        container.appendChild(infoabout);
        container.appendChild(address);
        container.appendChild(email);
        main1.appendChild(container);

       })


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
    }, 3000);
});


