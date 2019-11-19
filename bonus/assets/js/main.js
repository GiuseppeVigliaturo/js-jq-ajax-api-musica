// Attraverso una chiamata ajax all’Api di boolean avremo
// a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.

// Creare una select con i seguenti generi: pop, rock, metal e jazz.
//  In base a cosa scegliamo nella select vedremo i corrispondenti cd.





   $(document).ready(function(){



     $("select").click(function(){

       $(".cds-container.container").html("");

       var valore = $('#menu').val();
       console.log(valore);


       $.ajax({
         url : "https://flynn.boolean.careers/exercises/api/array/music",
         method : "GET",
         success : function (data) {
           var store = data.response;

           for (var i = 0; i < store.length; i++) {

             if (store[i].genre === valore) {
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
               // $("select").val("");

             }


           }


          },

         error : function (errore) {
              alert("E' avvenuto un errore. "+errore);
            }
          });

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
