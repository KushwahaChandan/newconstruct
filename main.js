collapse=document.querySelector('.collapse').querySelectorAll('a');
console.log(collapse);
collapse.forEach(element => {
    element.addEventListener("click",function(){
        collapse.forEach(nav=>nav.classList.remove('active'))

        this.classList.add('active');
    })
});
$('.slice').slick({
    dots: true,
    infinite: false,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
     
    ]
  });


  // for count number
  const counters = document.querySelectorAll('.increment');
  const speed =500;
  counters.forEach(increment=>{
    const updateCount = () => {
      const target = +increment.getAttribute('data-target');
      const count = +increment.innerText;
      const inc= target / speed;

      if( count < target){
        increment.innerText = count + inc;
        setTimeout(updateCount,1);
      }
      else{
        count.innerText = target;
      }
    }
    updateCount();
  });




  // for team
  $('.our_team').slick({
    dots: true,
    infinite: false,
    speed: 300,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
     
    ]
  });