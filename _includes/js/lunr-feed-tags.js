var index=lunr(function(){this.field('title')
this.field('content',{boost:10})
this.field('category')
this.field('tags')
this.ref('id')});{%assign count=0%}{%for post in site.posts%}
index.add({title:{{post.title|jsonify}},category:{{post.category|jsonify}},content:{{post.content|strip_html|jsonify}},tags:{{post.tags|jsonify}},id:{{count}}});{%assign count=count|plus:1%}{%endfor%}
console.log(jQuery.type(index));var store=[{%for post in site.posts%}{"title":{{post.title|jsonify}},"tags":{{post.tags|jsonify}},"link":{{post.url|jsonify}},"date":{{post.date|date:'%B %-d, %Y'|jsonify}},"category":{{post.category|jsonify}},"excerpt":{{post.content|strip_html|truncatewords:20|jsonify}}}{%unless forloop.last%},{%endunless%}{%endfor%}]
$(document).ready(function(){$('input#search').on('keyup',function(){var resultdiv=$('#results');var query=$(this).val();var result=index.search(query);resultdiv.empty();resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');for(var item in result){var ref=result[item].ref;var searchitem='<div class=result><div class=result-body><a href="'+store[ref].link+'" class=post-title>'+store[ref].title+'<div class="post-date small">'+store[ref].tags+'</div></a></div></div>';resultdiv.append(searchitem);}});});
