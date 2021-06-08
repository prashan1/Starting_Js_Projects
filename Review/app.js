// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "person-1.jpeg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "Slowdive - Sugar for the Pill - VLC media player 26-12-2020 16_26_40 (2).png",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "vlcsnap-2021-05-08-10h25m06s996.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "WIN_20210409_17_52_13_Pro (2).jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  let i = 0;
  const image = document.getElementById('person-img');
  const author = document.getElementById('author');;
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  window.addEventListener('DOMContentLoaded',function(){
      showPerson(i);
  });

  function showPerson(personID){
      const item = reviews[personID]
      image.src = item.img
      author.textContent = item.author
      job.textContent = item.job
      info.textContent = item.text
  }

nextBtn.addEventListener('click',function(){

  i = (++i)%(reviews.length)
  showPerson(i)
});
prevBtn.addEventListener('click',function(){
  i = i != 0 ? i-1 : reviews.length-1
  showPerson(i)
});

randomBtn.addEventListener('click',function(){
  rand = Math.floor(Math.random()*(reviews.length))
  showPerson(rand)
});