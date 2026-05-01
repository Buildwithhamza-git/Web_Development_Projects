const products = [
    {
        id: 1,
        name: "iPhone 14 Pro",
        detail: "Apple smartphone with A16 Bionic chip, 6.1-inch display, and advanced camera system.",
        price: "999"
    },
    {
        id: 2,
        name: "Samsung Galaxy S23",
        detail: "Flagship Android phone with Snapdragon processor, AMOLED display, and powerful battery.",
        price: "899"
    },
    {
        id: 3,
        name: "OnePlus 11",
        detail: "High-performance smartphone with fast charging and smooth OxygenOS experience.",
        price: "749"
    },
    {
        id: 4,
        name: "Xiaomi Redmi Note 12",
        detail: "Budget-friendly phone with large display and long battery life.",
        price: "299"
    },
    {
        id: 5,
        name: "AirPods Pro",
        detail: "Wireless earbuds with active noise cancellation and immersive sound quality.",
        price: "249"
    },
    {
        id: 6,
        name: "Samsung Galaxy Buds 2",
        detail: "Compact wireless earbuds with clear audio and comfortable fit.",
        price: "149"
    },
    {
        id: 7,
        name: "Sony WH-1000XM5",
        detail: "Premium noise-cancelling headphones with long battery life and superior sound.",
        price: "399"
    },
    {
        id: 8,
        name: "Realme Buds Air 3",
        detail: "Affordable wireless earbuds with ANC and good bass performance.",
        price: "79"
    },
    {
        id: 8,
        name: "Realme Buds Air 3",
        detail: "Affordable wireless earbuds with ANC and good bass performance.",
        price: "79"
    }, {
        id: 8,
        name: "Realme Buds Air 3",
        detail: "Affordable wireless earbuds with ANC and good bass performance.",
        price: "79"
    }, {
        id: 8,
        name: "Realme Buds Air 3",
        detail: "Affordable wireless earbuds with ANC and good bass performance.",
        price: "79"
    }, {
        id: 8,
        name: "Realme Buds Air 3",
        detail: "Affordable wireless earbuds with ANC and good bass performance.",
        price: "79"
    },
    {
        id: 9,
        name: "Google Pixel 7",
        detail: "Smartphone with pure Android experience and excellent camera performance.",
        price: "699"
    },
    {
        id: 10,
        name: "Infinix Zero 5G",
        detail: "Affordable 5G smartphone with decent performance and stylish design.",
        price: "250"
    }
];

let editindex = null;
function render() {
    const container = document.getElementById("container")
    container.innerHTML = ""
    products.forEach((item, index) => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
        <div class="menu-btn">⋮</div>
        <div class= "dropdown">
        <div onclick= "editProduct(${index})">Edit Details</div>
        <div onclick= "confirmdelete(${index})">Delete</div>
        </div>
        <h3>${item.name}</h3>
        <p>${item.detail}</p>
        <strong>$${item.price}</strong>`

        const menu = card.querySelector(".menu-btn")
        const dropdown = card.querySelector(".dropdown")

        menu.addEventListener("click", (e) => {
            e.stopPropagation();
            document.querySelectorAll(".dropdown").forEach((d) => {
                if (d !== dropdown) d.style.display = "none";
            })
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";

        })

        container.appendChild(card)
        document.getElementById("count").innerHTML = `Tracking ${products.length} Items`
    })

}
window.onclick = () => {
    document.querySelectorAll(".dropdown").forEach(a => {
        a.style.display = "none"
    })
}

function confirmdelete(index) {
    if (confirm("are you sure you want to delete the item?")) {
        products.splice(index, 1)
        render()
    }
}

function showPopup() { document.getElementById("popup").style.display = "flex"; }
function cancel() { document.getElementById('popup').style.display = "none" }

function Add() {
    document.getElementById("popupTitle").innerText = "Add Products"
    document.getElementById("create").innerText = "Add Product";
    clearForm();
    showPopup();
}

function editProduct(index) {
    editindex = index
    const p = products[index]
    document.getElementById("popupTitle").innerText = "Edit Products"
    document.getElementById("name").value = p.name;
    document.getElementById("descr").value = p.detail;
    document.getElementById("price").value = p.price;
    document.getElementById("create").innerText = "Save Changes";
    document.getElementById("del").innerText = "Cancel"
    showPopup()
}

document.getElementById("create").onclick = function () {
    const name = document.getElementById("name").value;
    const des = document.getElementById("descr").value;
    const price = document.getElementById("price").value;

    if (!name || !des || !price) {
        alert("All Fields are required")
        return
    }

    if (editindex === null) {
        products.unshift({ id: Date.now(), name, des, price })
    } else {
        products[editindex] = { ...products[editindex], name, des, price };
    }
    cancel()
    render()
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("descr").value = "";
    document.getElementById("price").value = "";
}
render()