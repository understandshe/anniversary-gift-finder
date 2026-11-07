/* Anniversary Gift by Year Finder - embed script by understandshe.com
   Usage: <div class="agf-embed" data-year="1"></div>
          <script src="https://understandshe.github.io/anniversary-gift-finder/embed.js" async></script> */
(function(){
  var BASE='https://understandshe.github.io/anniversary-gift-finder/';
  function mount(el){
    if(el.getAttribute('data-agf-done'))return;el.setAttribute('data-agf-done','1');
    var y=el.getAttribute('data-year'),f=document.createElement('iframe');
    f.src=BASE+'?embed=1'+(y?'&year='+encodeURIComponent(y):'');
    f.title='Anniversary Gift by Year Finder';f.loading='lazy';
    f.style.cssText='width:100%;border:0;min-height:900px;display:block;overflow:hidden';
    f.setAttribute('scrolling','no');
    el.appendChild(f);
    var a=document.createElement('p');a.style.cssText='font-size:12px;text-align:right;margin:4px 0 0';
    a.innerHTML='<a href="https://www.understandshe.com/" target="_blank" rel="noopener">Anniversary gift ideas by Understand She</a>';
    el.appendChild(a);
    window.addEventListener('message',function(e){
      if(e.source===f.contentWindow&&e.data&&e.data.agf&&e.data.h){f.style.height=(e.data.h+10)+'px';f.style.minHeight='0';}
    });
  }
  function run(){var n=document.querySelectorAll('.agf-embed');for(var i=0;i<n.length;i++)mount(n[i]);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
