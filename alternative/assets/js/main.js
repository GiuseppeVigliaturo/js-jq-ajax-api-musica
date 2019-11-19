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

         store.forEach(function (item) {
           console.log("ibiubiubib",item) //store[i];

          var source   = document.getElementById("entry-template").innerHTML;
          var template = Handlebars.compile(source);


          var context = {indirizzoimg: item.poster,
                          titolo: item.title,
                          nomeautore:item.author
                        };
          var html = template(context);

          $(".cds-container.container").append(html);

      });
        },

       error : function (errore) {
            alert("E' avvenuto un errore. "+errore);
          }
        });

   });




   // var fruits = ["apple", "orange", "cherry"];
   // fruits.forEach(myFunction);
   //
   // function myFunction(item, index) {
   //   document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
   // }

   /*
    store.forEach(function (item) {
      console.log(item) //store[i];
    });

    store.forEach(miafunzione);


    function miafunzione(item) {
      console.log(item) //store[i]
    }


   */
