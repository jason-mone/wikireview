var index=lunr(function(){this.field('title')
this.field('content',{boost:10})
this.field('category')
this.field('tags')
this.ref('id')});
index.add({title:"Oree Wooden Keyboard",category:null,content:"\n",tags:["keyboard","wood","orée","wireless","maple"],id:0});
index.add({title:"Zombie Survival Kit",category:null,content:"\n",tags:["survival","box","zombie"],id:1});
index.add({title:"Checking Out Microsoft Office 365",category:null,content:"\n",tags:["microsoft","office","365"],id:2});
index.add({title:"3 Cool Tech Deals 13",category:null,content:"\n",tags:["dbrand","ps4","cooler","blu","vivo","air","usb","tech","deals"],id:3});
index.add({title:"Switching To Blackberry Priv",category:null,content:"\n",tags:["blackberry","phone","priv","private","privelege"],id:4});
index.add({title:"Visiontek Fast Pocket Usb Ssd",category:null,content:"\n",tags:["visiontek","ssd","usb","hub","pocket"],id:5});
index.add({title:"Carved Wood Cases",category:null,content:"\n",tags:["carved"],id:6});
index.add({title:"Make Coca Cola At Home With Keurig Kold",category:null,content:"\n",tags:["keurig","kold","coca-cola","drinkmaker","fresh","beverages","drink"],id:7});
index.add({title:"Levitating Wireless Speaker",category:null,content:"\n",tags:["speaker","levitating","wireless"],id:8});
console.log(jQuery.type(index));var store=[{"title":"Oree Wooden Keyboard","link":"/oree-wooden-keyboard","image":null,"date":"February 24, 2016","category":null,"excerpt":"\n"},{"title":"Zombie Survival Kit","link":"/zombie-survival-kit","image":null,"date":"February 21, 2016","category":null,"excerpt":"\n"},{"title":"Checking Out Microsoft Office 365","link":"/checking-out-microsoft-office-365","image":null,"date":"February 20, 2016","category":null,"excerpt":"\n"},{"title":"3 Cool Tech Deals 13","link":"/3-cool-tech-deals-13","image":null,"date":"February 20, 2016","category":null,"excerpt":"\n"},{"title":"Switching To Blackberry Priv","link":"/switching-to-blackberry-priv","image":null,"date":"February 18, 2016","category":null,"excerpt":"\n"},{"title":"Visiontek Fast Pocket Usb Ssd","link":"/visiontek-fast-pocket-usb-ssd","image":null,"date":"February 8, 2016","category":null,"excerpt":"\n"},{"title":"Carved Wood Cases","link":"/carved-wood-cases","image":null,"date":"January 16, 2016","category":null,"excerpt":"\n"},{"title":"Make Coca Cola At Home With Keurig Kold","link":"/make-coca-cola-at-home-with-keurig-kold","image":null,"date":"December 24, 2015","category":null,"excerpt":"\n"},{"title":"Levitating Wireless Speaker","link":"/levitating-wireless-speaker","image":null,"date":"October 25, 2015","category":null,"excerpt":"\n"}]
$(document).ready(function(){$('input#search').on('keyup',function(){var resultdiv=$('#results');var query=$(this).val();var result=index.search(query);resultdiv.empty();resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');for(var item in result){var ref=result[item].ref;var searchitem='<div class="result"><div class="result-body"><a href="'+store[ref].link+'" class="post-title">'+store[ref].title+'<div class="post-date small">'+store[ref].category+' &times;'+store[ref].date+'</div><p>'+store[ref].excerpt+'</p></a></div></div>';resultdiv.append(searchitem);}});});

var index=lunr(function(){this.field('title')
this.field('content',{boost:10})
this.field('category')
this.field('tags')
this.ref('id')});
index.add({title:"Oree Wooden Keyboard",category:null,content:"\n",tags:["keyboard","wood","orée","wireless","maple"],id:0});
index.add({title:"Zombie Survival Kit",category:null,content:"\n",tags:["survival","box","zombie"],id:1});
index.add({title:"Checking Out Microsoft Office 365",category:null,content:"\n",tags:["microsoft","office","365"],id:2});
index.add({title:"3 Cool Tech Deals 13",category:null,content:"\n",tags:["dbrand","ps4","cooler","blu","vivo","air","usb","tech","deals"],id:3});
index.add({title:"Switching To Blackberry Priv",category:null,content:"\n",tags:["blackberry","phone","priv","private","privelege"],id:4});
index.add({title:"Visiontek Fast Pocket Usb Ssd",category:null,content:"\n",tags:["visiontek","ssd","usb","hub","pocket"],id:5});
index.add({title:"Carved Wood Cases",category:null,content:"\n",tags:["carved"],id:6});
index.add({title:"Make Coca Cola At Home With Keurig Kold",category:null,content:"\n",tags:["keurig","kold","coca-cola","drinkmaker","fresh","beverages","drink"],id:7});
index.add({title:"Levitating Wireless Speaker",category:null,content:"\n",tags:["speaker","levitating","wireless"],id:8});
console.log(jQuery.type(index));var store=[{"title":"Oree Wooden Keyboard","tags":["keyboard","wood","orée","wireless","maple"],"link":"/oree-wooden-keyboard","date":"February 24, 2016","category":null,"excerpt":"\n"},{"title":"Zombie Survival Kit","tags":["survival","box","zombie"],"link":"/zombie-survival-kit","date":"February 21, 2016","category":null,"excerpt":"\n"},{"title":"Checking Out Microsoft Office 365","tags":["microsoft","office","365"],"link":"/checking-out-microsoft-office-365","date":"February 20, 2016","category":null,"excerpt":"\n"},{"title":"3 Cool Tech Deals 13","tags":["dbrand","ps4","cooler","blu","vivo","air","usb","tech","deals"],"link":"/3-cool-tech-deals-13","date":"February 20, 2016","category":null,"excerpt":"\n"},{"title":"Switching To Blackberry Priv","tags":["blackberry","phone","priv","private","privelege"],"link":"/switching-to-blackberry-priv","date":"February 18, 2016","category":null,"excerpt":"\n"},{"title":"Visiontek Fast Pocket Usb Ssd","tags":["visiontek","ssd","usb","hub","pocket"],"link":"/visiontek-fast-pocket-usb-ssd","date":"February 8, 2016","category":null,"excerpt":"\n"},{"title":"Carved Wood Cases","tags":["carved"],"link":"/carved-wood-cases","date":"January 16, 2016","category":null,"excerpt":"\n"},{"title":"Make Coca Cola At Home With Keurig Kold","tags":["keurig","kold","coca-cola","drinkmaker","fresh","beverages","drink"],"link":"/make-coca-cola-at-home-with-keurig-kold","date":"December 24, 2015","category":null,"excerpt":"\n"},{"title":"Levitating Wireless Speaker","tags":["speaker","levitating","wireless"],"link":"/levitating-wireless-speaker","date":"October 25, 2015","category":null,"excerpt":"\n"}]
$(document).ready(function(){$('input#search').on('keyup',function(){var resultdiv=$('#results');var query=$(this).val();var result=index.search(query);resultdiv.empty();resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');for(var item in result){var ref=result[item].ref;var searchitem='<div class=result><div class=result-body><a href="'+store[ref].link+'" class=post-title>'+store[ref].title+'<div class="post-date small">'+store[ref].tags+'</div></a></div></div>';resultdiv.append(searchitem);}});});

