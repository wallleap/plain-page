import{m as s}from"./markdown-CGQCjh6-.js";import{d,r as m,z as l,V as i,i as u,p as f}from"./index-C3Nh0YBK.js";const _=["innerHTML"],k=d({__name:"MarkdownIt",props:{content:{type:String,required:!0},renderToc:{type:Boolean,default:!1}},setup(a){const r=a,n=m("");return l(()=>{n.value=s.render(r.content,{tocCallback(e,p,t){if(t&&r.renderToc){const o=document.createElement("nav");o.id="toc-wrapper";const c=document.querySelector("#toc-wrapper");c&&c.remove(),o.innerHTML=t,document.body.appendChild(o)}}})}),i(()=>{const e=document.querySelector("#toc-wrapper");e&&e.remove()}),(e,p)=>(f(),u("main",{class:"markdown-body",innerHTML:n.value},null,8,_))}});export{k as _};