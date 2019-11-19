// Attraverso una chiamata ajax all’Api di boolean avremo
// a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.


   $(document).ready(function(){
     $.ajax({
       url : "https://flynn.boolean.careers/exercises/api/array/music",
       method : "GET",
       success : function (data) {
         var store = data.response;
         for (var i = 0; i < store.length; i++) {

          console.log(store[i].poster);
          console.log(store[i].title);
          console.log(store[i].author);

          var source   = document.getElementById("entry-template").innerHTML;
          var template = Handlebars.compile(source);


          var context = {indirizzoimg: store[i].poster,
                          titolo: store[i].title,
                          nomeautore:store[i].author
                        };
          var html = template(context);

          $(".cds-container.container").append(html);
         }

        },

       error : function (errore) {
            alert("E' avvenuto un errore. "+errore);
          }
        });

   });
