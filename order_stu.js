var trackBtns = document.querySelectorAll(".track-btn")

trackBtns.forEach(function (link) {

    link.addEventListener("click", function () {

        var orderId = link.dataset.orderId
        var orderStatus = link.dataset.orderStatus

        localStorage.setItem("selectedOrderId", orderId)
        localStorage.setItem("selectedOrderStatus", orderStatus)

    })

})