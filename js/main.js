fetch("../data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	displayData(data)
})

// // fetch("../data/data.json").then(response=>{
// // 	return response.json()
// }).then(data=>{})
function displayData(info){
	var bodyElement=document.querySelector("body");
	var row=document.createElement("selector")
	row.classList.add("row",
		"justify-content-center");
	bodyElement.append(row)
	info.mobiles.map(value=>{
		var column=document.createElement("article")
		column.classList.add("col-sm-10","col-md-6","col-lg-3")
		row.append(column)

		//card

		var card = document.createElement("div");
		card.classList.add("card","mt-3")

		//card body

		var cardBody=document.createElement("div");
		cardBody.classList.add("card-body")


		//Image
		var imageElement=document.createElement("img");
		imageElement.src=value.image;
		imageElement.classList.add("img-responsive");
		imageElement.alt=value.name;
		cardBody.append(imageElement)

		//name

		var name=document.createElement("h2")
		name.textContent=value.name;
		name.classList.add("text-center",
			"text-dark")

		//price

		var price=document.createElement("p");
		price.classList.add("text-danger","text-center")
		price.textContent="₹" +value.price+" /-";

		//original_price

		var original_price=document.createElement("p");
		original_price.classList.add("text-secondary","text-center")
		original_price.innerHTML="original_price:  <s>₹" +value.original_price+" /-</s>";

		//button

		var buttonParent=document.createElement("div");
		buttonParent.classList.add("d-grid","gap-2");

		var button=document.createElement("button");
		button.classList.add("btn","btn-block","btn-primary");
		button.textContent="Add to cart"
		buttonParent.append(button)

		cardBody.append(imageElement)
		cardBody.append(name)
		cardBody.append(original_price)
		cardBody.append(price)
		cardBody.append(button)

		card.append(cardBody);
		column.append(card);

	})
}
