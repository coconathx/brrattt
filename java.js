const colorThemes=document.querySelectorAll
('[name="theme"]'),storeTheme=function(e)
{localStorage.setItem("theme",e)},setTheme=function()
{let e=localStorage.getItem("theme");colorThemes.forEach(t=>{t.id===e&&(t.checked=!0)}),document.documentElement.className=e};
colorThemes.forEach(e=>{e.addEventListener("click",()=>{storeTheme(e.id)
    ,document.documentElement.className=e.id})}),document.onload=setTheme();class TextScramble{
        constructor(e){this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#_",this.update=this.update.bind(this)}
        setText(e){let t=this.el.innerText,n=Math.max(t.length,e.length)
            ,s=new Promise(e=>this.resolve=e);this.queue=[];for(let r=0;r<n;r++)
                {let h=t[r]||"",o=e[r]||"",i=Math.floor(40*Math.random())
            ,l=i+Math.floor(40*Math.random());this.queue.push({from:h,to:o,start:i,end:l})}
            return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),s}
            update(){let e="",t=0;for(let n=0,s=this.queue.length;n<s;n++){let
                {from:r,to:h,start:o,end:i,char:l}=this.queue[n];this.frame>=i?
                (t++,e+=h):this.frame>=o?((!l||.28>Math.random())&&(l=this.randomChar(),this.queue[n].char=l)
                ,e+=`<span>${l}</span>`):e+=r}this.el.innerHTML=e,t===this.queue.length?this.resolve()
                :(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar()
                {return this.chars[Math.floor(Math.random()*this.chars.length)]}}const phrases=[" Nath"," Nath"," Nath"," Nath"," Nath","Nath","Nath"],
                el=document.querySelector(".text"),fx=new TextScramble(el);
                let counter=0;const next=()=>{fx.setText(phrases[counter]).then(()=>{setTimeout(next,800)})
                ,counter=(counter+1)%phrases.length};next();var fadeElements=document.querySelectorAll(".fade");
                function isElementInViewport(e)
                {var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)
                    &&t.right<=(window.innerWidth||document.documentElement.clientWidth)}
                    function handleScroll(){fadeElements.forEach(function(e){isElementInViewport(e)&&
                        (e.style.opacity=1)})}window.addEventListener("scroll",handleScroll);