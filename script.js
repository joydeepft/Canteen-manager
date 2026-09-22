  function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
      page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    if (pageId !== "home") {
      history.pushState({ page: pageId }, "", "#" + pageId);
    }
  }

  function goBack() {
    showHome();
    history.pushState({ page: "home" }, "", "#home");
  }

  function showHome() {
    document.querySelectorAll(".page").forEach(page => {
      page.classList.remove("active");
    });

    document.getElementById("home").classList.add("active");
  }

  window.onpopstate = function () {
    showHome();
  };

  function openPopup() {
    document.getElementById("popup").style.display = "flex";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }

  function confirmOrder() {
    const name = document.getElementById("customerName").value;
    const table = document.getElementById("tableNumber").value;

    if (name === "" || table === "") {
      alert("Please enter Name and Table Number");
      return;
    }

    closePopup();
    sendOrder(name, table);
  }

  function sendOrder(name, table) {
    const shopkeeperNumber = "916033385150";

    const items = [
      { name: "Veg Thali", price: 80, id: "vegThali" },
      { name: "Paneer Curry", price: 100, id: "paneer" },
      { name: "Veg Biryani", price: 90, id: "vegBiryani" },
      { name: "Curd Rice", price: 50, id: "curdRice" },
      { name: "Tomato Rice", price: 55, id: "tomatoRice" },
      { name: "Lemon Rice", price: 50, id: "lemonRice" },
      { name: "Veg Fried Rice", price: 75, id: "vegFriedRice" },

      { name: "Chicken Biryani", price: 120, id: "chickenBiryani" },
      { name: "Egg Curry", price: 70, id: "eggCurry" },
      { name: "Chicken Fry", price: 110, id: "chickenFry" },
      { name: "Egg Rice", price: 80, id: "eggRice" },
      { name: "Chicken Noodles", price: 100, id: "chickenNoodles" },
      { name: "Egg Biryani", price: 90, id: "eggBiryani" },

      { name: "Samosa", price: 15, id: "samosa" },
      { name: "Puffs", price: 20, id: "puffs" },
      { name: "French Fries", price: 50, id: "fries" },
      { name: "Sandwich", price: 40, id: "sandwich" },
      { name: "Veg Roll", price: 45, id: "vegRoll" },
      { name: "Maggi", price: 35, id: "maggi" },
      { name: "Cutlet", price: 25, id: "cutlet" },

      { name: "Tea", price: 10, id: "tea" },
      { name: "Coffee", price: 15, id: "coffee" },
      { name: "Cold Drink", price: 30, id: "coldDrink" },
      { name: "Lime Juice", price: 25, id: "limeJuice" },
      { name: "Water Bottle", price: 20, id: "water" },
      { name: "Badam Milk", price: 35, id: "badamMilk" },
      { name: "Milkshake", price: 60, id: "milkshake" }
    ];

    let message = `TCEA Canteen Order%0A%0AName: ${name}%0ATable Number: ${table}%0A%0AItems:%0A`;
    let total = 0;
    let hasOrder = false;

    items.forEach(item => {
      const qty = Number(document.getElementById(item.id).value);

      if (qty > 0) {
        hasOrder = true;
        const amount = qty * item.price;
        total += amount;
        message += `${item.name} x ${qty} = ₹${amount}%0A`;
      }
    });

    if (!hasOrder) {
      alert("Please select at least one item.");
      return;
    }

    message += `%0ATotal: ₹${total}`;

    window.open(`https://wa.me/${shopkeeperNumber}?text=${message}`, "_blank");
  }
