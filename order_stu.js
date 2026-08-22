var trackBtns = document.querySelectorAll(".track-btn")

trackBtns.forEach(function (button) {

    button.addEventListener("click", function () {

        var orderId = "001"
        var orderStatus = "Preparing"

        localStorage.setItem("selectedOrderId", orderId)
        localStorage.setItem("selectedOrderStatus", orderStatus)

    })

})