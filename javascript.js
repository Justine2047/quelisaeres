let select = document.getElementById("select");
select.addEventListener('change', () => {
    let selectedOption = select.value;
    
    switch (selectedOption) {
        case 'value1':
            document.querySelector(".image").setAttribute("src", "img/lisa1.jpeg");
            break;

         case 'value2':
            document.querySelector(".image").setAttribute("src", "img/lisa2.jpeg");
            break;  
            
        case 'value3':
            document.querySelector(".image").setAttribute("src", "img/lisa3.jpeg");
            break;

        case 'value4':
            document.querySelector(".image").setAttribute("src", "img/lisa4.jpeg");
            break;

        case 'value5':
            document.querySelector(".image").setAttribute("src", "img/lisa5.jpeg");
            break;

        case 'value6':
            document.querySelector(".image").setAttribute("src", "img/lisa6.jpeg");
            break;

        case 'value7':
            document.querySelector(".image").setAttribute("src", "img/lisa7.jpeg");
             break;


        case 'value8':
             document.querySelector(".image").setAttribute("src", "img/lisa8.jpeg");
            break;

        case 'value9':
            document.querySelector(".image").setAttribute("src", "img/lisa9.jpeg");
             break;

        case 'value10':
             document.querySelector(".image").setAttribute("src", "img/lisa10.jpeg");
             break;

        case 'value11':
             document.querySelector(".image").setAttribute("src", "img/lisa11.jpeg");
             break;

             case 'value12':
             document.querySelector(".image").setAttribute("src", "img/lisa12.jpeg");
             break;
        }
    });