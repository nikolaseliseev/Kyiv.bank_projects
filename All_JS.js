let photosCount = 5;
		let currentPhotoIndex = 1;
        function showNextPhoto() {
			currentPhotoIndex++;

			if (currentPhotoIndex > photosCount) currentPhotoIndex = 1;

			let elem = document.getElementById("currentPhoto");
			let addition = elem.src = "C:/Users/User/Documents/Kolya/Web/nyelisieiev.github.io/Kiev.bank/Kyiv's photo/my" + currentPhotoIndex  + ".jpg";
            let first = document.getElementById('myAnchor').innerHTML="Тарас";
            let second = document.getElementById('myAnchor2').innerHTML="Поважаю стабільність та мобільність із-за цього користаюсь Kiev.bank.";
        }