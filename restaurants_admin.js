
var logoutbtn = document.getElementById("logoutbtn")

logoutbtn.addEventListener("click", function () {
    window.location.href = "index.html"
})


var restaurantform = document.getElementById("restaurant-form")
var restaurantbody = document.getElementById("restaurant-body")

var restaurants = []

var count = 1


restaurantform.addEventListener("submit", function (event) {

    event.preventDefault()

    var name = document.getElementById("restaurant-name").value
    var location = document.getElementById("restaurant-location").value
    var status = document.getElementById("restaurant-status").value

    var category = document.querySelector(
        'input[name="category"]:checked'
    ).value


    // Create restaurant object
    var restaurant = {
        id: "RES00" + count,
        name: name,
        category: category,
        location: location,
        status: status
    }


    // Add object into array
    restaurants.push(restaurant)


    // Display restaurants
    displayRestaurants()


    count = count + 1

    restaurantform.reset()
})



function displayRestaurants() {

    // Clear old table rows
    restaurantbody.innerHTML = ""


    // Loop through restaurant array
    restaurants.forEach(function (restaurant, index) {

        var row = document.createElement("tr")


        // Reusable function for creating td
        function addData(value) {

            var data = document.createElement("td")

            data.textContent = value

            data.className =
                "p-3 border-b border-gray-300"

            row.append(data)
        }


        addData(restaurant.id)

        addData(restaurant.name)

        addData(restaurant.category)

        addData(restaurant.location)

        addData(restaurant.status)


        // Action cell
        var actiondata = document.createElement("td")

        actiondata.className =
            "p-3 border-b border-gray-300"


        // Delete button
        var delbutton = document.createElement("button")

        delbutton.textContent = "Delete"

        delbutton.className =
            "ml-2 border border-[#FF5A4F] text-[#FF5A4F] px-3 py-1 rounded-lg hover:bg-[#FF5A4F] hover:text-white"


        // Edit button
        var editbutton = document.createElement("button")

        editbutton.textContent = "Edit"

        editbutton.className =
            "border border-[#39C6A5] text-[#16866D] px-3 py-1 rounded-lg hover:bg-[#39C6A5] hover:text-white"


        // Edit event
        editbutton.addEventListener("click", function () {

            var newName = prompt("Enter restaurant name", restaurant.name)

            if (newName === null || newName.trim() === "") {
                return
            }

            var newCategory = prompt(
                "Enter category: Veg or Non-Veg",
                restaurant.category
            )

            if (newCategory === null || newCategory.trim() === "") {
                return
            }

            var newLocation = prompt(
                "Enter restaurant location",
                restaurant.location
            )

            if (newLocation === null || newLocation.trim() === "") {
                return
            }

            var newStatus = prompt(
                "Enter status: Active or Inactive",
                restaurant.status
            )

            if (newStatus === null || newStatus.trim() === "") {
                return
            }

            restaurant.name = newName.trim()
            restaurant.category = newCategory.trim()
            restaurant.location = newLocation.trim()
            restaurant.status = newStatus.trim()

            displayRestaurants()
        })

        // Delete event
        delbutton.addEventListener("click", function () {

            deleteRestaurant(index)

        })

        // Add Edit and Delete buttons to action cell
        actiondata.append(editbutton, delbutton)

        row.append(actiondata)

        restaurantbody.append(row)


     })

}



function deleteRestaurant(index) {

    restaurants.splice(index, 1)

    displayRestaurants()

}