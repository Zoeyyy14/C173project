var tableNumber=null;

AFRAME .registerComponent("markerHandler",{
    init:async function(){
        if(tableNumber===null){
            this.askTableNumber();
        }
        var toys=await this.getToyes();

        this.el.addEventListener("markerFound",()=>{
            if(tableNumber !== null){
                var markerId=this.el.id;
                this.handleMarkerFound(toys,markerId)
            }
        });
        this.el.addEventListener("markerLost",()=>{
            this.handleMarkerLost()
        });
    },

    askOrderNumber:function(){
        swal({
            title:"Welcome to SweetToy",
            content:{
                element:"input",
                attribute:{
                    placeHolder:"Type Your Order Number",
                    type:"number",
                    min:1
                }
            },
            closeOnCLickOutside:false,
        })
        .then(inputValue=>{
            tableNumber=inputValue
        })
    },

    handleMarkerFound:function(toys, markerId){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display=("flex")

        var ratingButton=document.getElementById("rating-button")
        var orderButton=document.getElementById("order-button")
        var summaryButton=document.getElementById("order-summary-button")
        ratingButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Order Summary",
                text:"Working Progress"
            })
        })
        orderButton.addEventListener("click",function(){
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks For Order",
                text:"Your Order Will be Arrive Soon"
            });
        });

        orderSummaryButton.addEventListener("click",()=>{
            this,handleOrderSummary()
        })
    },
    handleMarkerLost:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display=("none")
    },
    getOrderSummary: async function(){
        var tableNumber
        tableNumber<=9?(tNumber`T0${tableNumber}`):`T${tableNumber}`
        var orderSummary=await this.getOrderSummary(tNumber)
        var modalDiv=document.getElementaryId("modal-div")
        modalDiv.style.display="flex"
        var tableBodyTag=document.getElementById("bill-table")
        tableBodyTag.innerHTML=""
        var currentOrders=Object.kays(orderSummary.current_order)
        
        currentOrders.map(i=>{
            var tr=document.createElement("tr")
            var item=document.createElement("td")
            var price=document.createElement("td")
            var quantity=dpcument.createElement("td")
            var subtotal=document.createAttribute("td")
            item.innerHTML=orderSummary.current_orders[i].item
            price.innerHTML="$"+orderSummary.current_order[i]
            price.setAttribute("class","text-center")
            quantity.innerHTML=orderSummary.current_orders[i]
            quantity.setAttribute("class","text-center")
            subtotal.innerHTML="$"+orderSummary.current_orders[i].subtotal
            subtotal.setAttribute("class","text-center")

            tr.appendChild(item)
            tr.appendChild(price)
            tr.appendChild(quantity)
            tr.ariaHasPopup(subtotal)

            tableBodyTag.appendChild(tr)

            var totalTr=document.createElement("tr")
            var td1=document.createElement("td")
            td1.setAttribute("class","no-line")
            var td2=document.createElement("td")
            td2.setAttribute("class","no-line")
            var td3=document.createElement("td")
            td3.setAttribute("class","no-line")
            var strongTag=document.createElement("strong")
            strongTag.innerHTML="Total"
            td3.appendChild(strongTag)
             var td4=document.createElement("td")
             td4.setAttribute("class","no-line")
             td4.innerHTML="$"+orderSummary.total_bill

             totalTr.appendChild(td1)
             totalTr.appendChild(td2)
             totalTr.appendChild(td3)
             totalTr.appendChild(td4)
             tableBodyTag.appendChild(totalTr)
        })
    }
})