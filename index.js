const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  const main=document.querySelector(".allmenu");
 
  const allBtn=document.querySelector(".btn");
  window.addEventListener("DOMContentLoaded",function(){
    menuItem(menu);
    displaymenubtns();
    })
    
  

    function menuItem(menuitem)
    {
      let displayMenu =  menuitem.map(function(item)
      {
        //console.log(item);
       return `
             <div class="menu">
              <div class="img">
              <img   src="${item.img}" class="image" alt="${item.title} image">
              </div> 
              <div class="menu-des">
              <header class="header">
              <h3>${item.title}</h3>
               <div class="price">
               <h3>$${item.price}</h3>
               </div>
              </header>
              <div class="description">
               <p>  ${item.desc}
               </p>
               </div>
               </div>
               </div>`;
      })
      displayMenu=displayMenu.join('');
      //console.log(displayMenu);
      main.innerHTML=displayMenu;
    }


    function displaymenubtns()
    {

      const categories =menu.reduce(function(values,itm){
        if( !values.includes(itm.category))
         { values.push(itm.category);
         }
         return values;
        },['all'] )
        //console.log(categories);
         const displaybtn=categories.map(function(p){
           return `<button class="Bttn ${p} " data-id="${p}">${p}</button>`;
         }).join("");
        allBtn.innerHTML=displaybtn;
        const Bttn=document.querySelectorAll(".Bttn");
        Bttn.forEach(function(btn){
        btn.addEventListener("click",function(e) {
         const curentItem=e.currentTarget.dataset.id;
         const displayCategory =menu.filter(function(items){
          if(items.category === curentItem)
          { return items;
          }
        })
        if(curentItem ==='all')
        {
          menuItem(menu);
        }   
        else
        {
          menuItem(displayCategory);
        }
        })
        })


    }
 