const card1 = document.getElementById("card1");

card1.addEventListener("mouseover", function(){

card1.style.backgroundColor = "rgb(0, 79, 197)";

document.getElementById("card-baslik1").style.backgroundColor = "#201E1E";

document.getElementById("card-baslik1").style.transition = "1s";
card1.style.transition="1s";

});

card1.addEventListener("mouseout", function(){

    card1.style.backgroundColor = "#201E1E";
    
    document.getElementById("card-baslik1").style.backgroundColor = "rgb(0, 79, 197)";
    
    document.getElementById("card-baslik1").style.transition = "1s";
    card1.style.transition="1s";
    
    });

    const card2 = document.getElementById("card2");

card2.addEventListener("mouseover", function(){

card2.style.backgroundColor = "rgb(0, 79, 197)";

document.getElementById("card-baslik2").style.backgroundColor = "#201E1E";

document.getElementById("card-baslik2").style.transition = "1s";
card2.style.transition="1s";

});

card2.addEventListener("mouseout", function(){

    card2.style.backgroundColor = "#201E1E";
    
    document.getElementById("card-baslik2").style.backgroundColor = "rgb(0, 79, 197)";
    
    document.getElementById("card-baslik2").style.transition = "1s";
    card2.style.transition="1s";
    
    });


    const card3 = document.getElementById("card3");

    card3.addEventListener("mouseover", function(){
    
    card3.style.backgroundColor = "rgb(0, 79, 197)";
    
    document.getElementById("card-baslik3").style.backgroundColor = "#201E1E";
    
    document.getElementById("card-baslik3").style.transition = "1s";
    card3.style.transition="1s";
    
    });
    
    card3.addEventListener("mouseout", function(){
    
        card3.style.backgroundColor = "#201E1E";
        
        document.getElementById("card-baslik3").style.backgroundColor = "rgb(0, 79, 197)";
        
        document.getElementById("card-baslik3").style.transition = "1s";
        card3.style.transition="1s";
        
        });


        const card4 = document.getElementById("card4");

        card4.addEventListener("mouseover", function(){
        
        card4.style.backgroundColor = "rgb(0, 79, 197)";
        
        document.getElementById("card-baslik4").style.backgroundColor = "#201E1E";
        
        document.getElementById("card-baslik4").style.transition = "1s";
        card4.style.transition="1s";
        
        });
        
        card4.addEventListener("mouseout", function(){
        
            card4.style.backgroundColor = "#201E1E";
            
            document.getElementById("card-baslik4").style.backgroundColor = "rgb(0, 79, 197)";
            
            document.getElementById("card-baslik4").style.transition = "1s";
            card4.style.transition="1s";
            
            });


            var userLanguage = navigator.language.toLowerCase();

// Eğer dil Türkçe ise, sayfa dilini Türkçe olarak ayarla; değilse İngilizce yap
if (userLanguage === 'tr' || userLanguage.startsWith('tr-')) {
    document.documentElement.lang = 'tr'; // Sayfa dilini Türkçe olarak ayarla
} else {
    document.documentElement.lang = 'en'; // Sayfa dilini İngilizce olarak ayarla
}
